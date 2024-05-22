import React from "react";

const Category = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="mx-auto max-w-xl  text-center my-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose your mood!
          </h2>
        </div>

        <button
          type="button"
          class="focus:outline-none text-white bg-blue-500 px-8 py-3.5 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium text-sm me-2  rounded-full mr-5 mb-6  "
        >
          Happy
        </button>
        <button
          type="button"
          class="focus:outline-none text-white bg-orange-500 px-8 py-3.5 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium text-sm me-2  rounded-full mr-5 mb-6  "
        >
          Neutral
        </button>
        <button
          type="button"
          class="focus:outline-none text-white bg-red-500 px-8 py-3.5 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium text-sm me-2 rounded-full mr-5 mb-6  "
        >
          Sad
        </button>
      </div>
    </div>
  );
};

export default Category;