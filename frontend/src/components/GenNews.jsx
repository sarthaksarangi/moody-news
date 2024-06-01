import React from "react";
import NewsCard from "./NewsCard";
import { updatedNews } from "../utils/News";

const GenNews = () => {
  return (
    <div className="bg-white mb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Daily News
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-7xl lg:grid-cols-3">
          <NewsCard news={updatedNews[0]} />
          <NewsCard news={updatedNews[1]} />
          <NewsCard news={updatedNews[2]} />
          <NewsCard news={updatedNews[3]} />
          <NewsCard news={updatedNews[4]} />
          <NewsCard news={updatedNews[5]} />
        </div>
      </div>
    </div>
  );
};

export default GenNews;
