import React, { useState } from "react";
import Logo from "../assets/dummy.jpg";
import { emotionColors, pallete } from "../utils/News";

const NewsCard = ({ news }) => {
  const [isReadmore, setIsReadmore] = useState(false);

  const toggleReadmore = () => {
    console.log("isReadmore updated:", !isReadmore);
    setIsReadmore(!isReadmore);
  };

  const emotionColor = pallete[news.emotion.toLowerCase()] || {
    bg: "bg-gray-50",
    text: "text-gray-600",
  };

  return (
    <article
      className="flex max-w-4xl flex-col items-start justify-between bg-white rounded-xl  p-4 mb-4 "
      style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
    >
      <img src={Logo} className="rounded-2xl mb-2" alt="logo" />
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={news.date} className="text-gray-500">
          {news.date}
        </time>

        <p
          className={`relative z-10 rounded-full px-3 py-1.5 font-medium hover:bg-gray-400 ${emotionColor.bg} ${emotionColor.text}`}
        >
          {news.emotion}
        </p>
      </div>
      <div className="group relative text-justify">
        <h3 className="mt-3 text-lg font-semibold  leading-6 text-gray-900 group-hover:text-gray-600">
          {news.title}
        </h3>
        <div className="mt-3 text-sm leading-6 text-gray-600 ">
          {isReadmore ? news.content : `${news.content.slice(0, 100)}...`}
        </div>
        <button
          onClick={toggleReadmore}
          className="mt-3 text-green-500 cursor-pointer text-sm"
        >
          {isReadmore ? "show less" : "read more"}
        </button>
      </div>
      <div className="relative mt-4 flex items-center gap-x-4">
        <img
          src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="author"
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">{news.author}</p>
          <p className="text-gray-600">Co-Founder / CTO</p>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
