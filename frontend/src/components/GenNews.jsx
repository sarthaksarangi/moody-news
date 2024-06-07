import React from "react";
import NewsCard from "./NewsCard";

const GenNews = ({ updatedNews }) => {
  return (
    <div className=" dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Daily News
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {updatedNews
            .filter((item) => item.Author != null)
            .slice(0, 6)
            .map((news, index) => (
              <NewsCard key={index} news={news} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default GenNews;
