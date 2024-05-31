import React, { useState } from "react";
import { emotions, updatedNews } from "../utils/News";

import FilteredNews from "./FilteredNews";

const Category = () => {
  const [selectedEmotion, setSelectedEmotion] = useState("");

  const handleButtonClick = (emotion) => {
    setSelectedEmotion(emotion);
  };
  const filteredNews = updatedNews.filter(
    (item) => item.emotion === selectedEmotion
  );
  console.log(filteredNews);
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <div className="mx-auto max-w-xl  text-center my-6">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose your mood!
            </h2>
          </div>

          <button
            onClick={() => handleButtonClick("Happy")}
            type="button"
            className="focus:outline-none text-white bg-blue-500 px-8 py-3.5 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium text-sm me-2  rounded-full mr-5 mb-6  "
          >
            Happy
          </button>
          <button
            onClick={() => handleButtonClick("Neutral")}
            type="button"
            className="focus:outline-none text-white bg-orange-500 px-8 py-3.5 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium text-sm me-2  rounded-full mr-5 mb-6  "
          >
            Neutral
          </button>
          <button
            onClick={() => handleButtonClick("Sad")}
            type="button"
            className="focus:outline-none text-white bg-red-500 px-8 py-3.5 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium text-sm me-2 rounded-full mr-5 mb-6  "
          >
            Sad
          </button>
        </div>
      </div>
      <FilteredNews
        filteredNews={filteredNews}
        selectedEmotion={selectedEmotion}
      />
    </>
  );
};

export default Category;
