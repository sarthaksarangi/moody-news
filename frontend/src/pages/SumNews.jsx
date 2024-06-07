import React from "react";
import Card from "../components/Card";

const SumNews = ({ news }) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-xl text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-4xl lg:text-5xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 dark:from-blue-500 dark:to-purple-500">
            Emotion-Powered Headlines
          </h2>
          <p className="font-semibold text-gray-600 sm:text-xl dark:text-gray-300 mb-4">
            Delivering News That Matches Your Emotions
          </p>
          <p className="font-normal text-gray-500 sm:text-md dark:text-gray-400 text-center max-w-3xl mx-auto">
            Stay informed with news articles summarized to reflect different
            moods. Whether you're looking for happy, sad, or neutral stories,
            our summaries provide concise updates tailored to how you feel.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 grid-cols-1 sm:grid-cols-2">
          {news
            .filter((item) => item.Author != null)
            .map((item) => (
              <Card key={item.title} news={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SumNews;
