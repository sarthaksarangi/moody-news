import React, { useEffect, useState } from "react";
import SumNews from "./SumNews";
import axios from "axios";

const News = () => {
  const emotions = {
    1: "Happy",
    0: "Neutral",
    "-1": "Sad",
  };
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const cachedNews = localStorage.getItem("cachedNews");
        if (cachedNews) {
          setNews(JSON.parse(cachedNews));
          return;
        }

        const response = await axios.get("http://127.0.0.1:5000/get_news?");
        const updatedNewsData = response.data.map((item) => ({
          ...item,
          Emotion: emotions[item.Emotion],
        }));

        localStorage.setItem("cachedNews", JSON.stringify(updatedNewsData));

        setNews(updatedNewsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return <div>{news ? <SumNews news={news} /> : <>Loading...</>}</div>;
};

export default News;
