import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
import nltk

# Manually download stopwords
nltk.download('stopwords')
from nltk.corpus import stopwords
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, precision_score, recall_score, f1_score, classification_report
import joblib
import pickle

# Update the path to your dataset
df_test1 = './Twitter_Data.csv'  # Adjust this path to your dataset
df = pd.read_csv(df_test1)

# Limit to 10000 records
df = df[:10000]

# Display sample records and dataset shape
print("Sample records:\n", df.sample(5))
print("Dataset shape:", df.shape)

# Display category value counts
print("Category value counts:\n", df['category'].value_counts())

# Check for and handle missing values
print("Missing values before dropna:\n", df.isnull().sum())
df = df.dropna()
print("Missing values after dropna:\n", df.isnull().sum())

# Check for and handle duplicate records
print("Duplicate records before drop_duplicates:", df.duplicated().sum())
df = df.drop_duplicates()
print("Duplicate records after drop_duplicates:", df.duplicated().sum())

# Remove stopwords
sw_list = stopwords.words('english')
df['news'] = df['news'].apply(lambda x: [item for item in x.split() if item not in sw_list]).apply(lambda x: " ".join(x))

# Split the data into training and testing sets
X = df.iloc[:, 0:1]
Y = df['category']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=35)

# Display the shapes of the training and testing sets
print("Training set shape:", X_train.shape)
print("Training set sample:\n", X_train.head())
print("Testing set shape:", X_test.shape)

# Bag of Words model
cv = CountVectorizer()

# Transform the training data
X_train_bow = cv.fit_transform(X_train['news'].values.astype('U')).toarray()
joblib.dump(cv, "vectorizer.pkl")

# Transform the testing data
X_test_bow = cv.transform(X_test['news']).toarray()
print("Bag of Words training data shape:", X_train_bow.shape)

# Train a RandomForest model
model = RandomForestClassifier()
model.fit(X_train_bow, Y_train)

# Predict on the test data and calculate accuracy
Y_pred = model.predict(X_test_bow)
accuracy = accuracy_score(Y_test, Y_pred) * 100
print(f'Accuracy: {accuracy}%')

# # Confusion matrix and classification report
# conf_matrix = confusion_matrix(Y_test, Y_pred)
# report = classification_report(Y_test, Y_pred)
# precision = precision_score(Y_test, Y_pred, average='weighted')
# recall = recall_score(Y_test, Y_pred, average='weighted')
# f1 = f1_score(Y_test, Y_pred, average='weighted')
# print("Confusion Matrix:\n", conf_matrix)
# print("Classification Report:\n", report)
# print(f'Precision: {precision}')
# print(f'Recall: {recall}')
# print(f'F1 Score: {f1}')

# # Plot confusion matrix heatmap
# plt.figure(figsize=(8, 6))
# sns.heatmap(conf_matrix, annot=True, fmt='d', cmap='Blues', xticklabels=np.unique(Y), yticklabels=np.unique(Y))
# plt.xlabel('Predicted Labels')
# plt.ylabel('True Labels')
# plt.title('Confusion Matrix Heatmap')
# plt.show()

# Save the trained model
with open('model.pkl', 'wb') as file:
    pickle.dump(model, file)
