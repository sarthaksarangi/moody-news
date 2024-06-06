import React from "react";
import { pallete } from "../utils/News";
import { useNavigate } from "react-router-dom";

const Card = ({ news }) => {
  const emotionColor = pallete[news.emotion.toLowerCase()] || {
    bg: "bg-gray-200",
    text: "text-gray-600",
  };
  const navigate = useNavigate();

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg  overflow-hidden"
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span
            className={`${emotionColor.bg} ${emotionColor.text} text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}
          >
            {news.emotion}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {news.date}
          </span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {news.title}
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">{news.content}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              alt="Bonnie Green avatar"
            />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {news.author}
            </span>
          </div>
          <button
            onClick={() => navigate(`/post`, { state: { news } })}
            className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-500"
          >
            Read more
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
