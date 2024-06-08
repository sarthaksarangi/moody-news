import os
import pickle
import pandas as pd
import nltk
from flask import Flask, jsonify, request
from newsapi import NewsApiClient
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import CountVectorizer
import re
import string
import joblib
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# Download NLTK stopwords
nltk.download('stopwords')

# Initialize the News API client
api = NewsApiClient(api_key="")

# Define text preprocessing functions
def tolowercase(df):
    df['Content'] = df['Content'].str.lower()
    return df

def remove_urls(text):
    pattern = re.compile(r'https?://\S+|www\.\S+')
    return pattern.sub(r'', text)

def remove_punctuation(text):
    exclude = string.punctuation
    return text.translate(str.maketrans('', '', exclude))

def preprocess_text(df):
    df = tolowercase(df)
    df['Content'] = df['Content'].apply(remove_urls)
    df['Content'] = df['Content'].apply(remove_punctuation)
    sw_list = stopwords.words('english')
    df['Content'] = df['Content'].apply(lambda x: [item for item in x.split() if item not in sw_list]).apply(lambda x: " ".join(x))
    return df


@app.route('/get_news', methods=['GET'])
def get_news():
    topic = request.args.get('topic', 'general')
    output = api.get_everything(q="top-headlines")

    news_list = []
    for article in output['articles']:
        temp_list = [
            article.get('title', ''),
            article.get('description', ''),
            article.get('author', ''),
            article.get('content', ''),
            article.get('url', ''),
            article.get('publishedAt', '')
        ]
        news_list.append(temp_list)

    df = pd.DataFrame(news_list, columns=['Title', 'Description', 'Author', 'Content', 'URL', 'PublishedAt'])

    preprocessed_df = preprocess_text(df.copy())

    cv = joblib.load("vectorizer.pkl")
    transformed_test_df = cv.transform(preprocessed_df['Content']).toarray()

    model_file_path = 'model.pkl'
    model = pickle.load(open(model_file_path, 'rb'))
    prediction = model.predict(transformed_test_df)

    df['Emotion'] = prediction

    news_json = df.to_dict(orient='records')

    return jsonify(news_json)

if __name__ == '__main__':
    app.run(debug=True)
