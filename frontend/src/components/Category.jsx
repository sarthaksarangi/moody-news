import React, { useState } from "react";

import FilteredNews from "./FilteredNews";

const Category = ({ news }) => {
  const [selectedEmotion, setSelectedEmotion] = useState("");

  const handleButtonClick = (emotion) => {
    setSelectedEmotion(emotion);
  };
  const filteredNews = news
    .filter((item) => item.Author != null)
    .filter((item) => item.Emotion === selectedEmotion);
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
            className="focus:outline-none text-white bg-happy-400 px-8 py-3.5 hover:bg-happy-600 focus:ring-4 focus:ring-happy-300 font-medium text-sm me-2  rounded-full mr-5 mb-6  "
          >
            Happy
          </button>
          <button
            onClick={() => handleButtonClick("Neutral")}
            type="button"
            className="focus:outline-none text-white bg-primary-400 px-8 py-3.5 hover:bg-primary-600 focus:ring-4 focus:ring-primary-300 font-medium text-sm me-2  rounded-full mr-5 mb-6  "
          >
            Neutral
          </button>
          <button
            onClick={() => handleButtonClick("Sad")}
            type="button"
            className="focus:outline-none text-white bg-sad-500 px-8 py-3.5 hover:bg-red-600 focus:ring-4 focus:ring-sad-300 font-medium text-sm me-2 rounded-full mr-5 mb-6  "
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
