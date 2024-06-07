import Category from "./components/Category";
import GenNews from "./components/GenNews";
import Header from "./components/Header";
import { updatedNews } from "./utils/News";
import { useState, useEffect } from "react";

function App() {
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
  return (
    <>
      <div className=" mx-auto  min-w-fit">
        <Header />
        {news ? (
          <div>
            <GenNews updatedNews={news} />
            <Category news={news} />
          </div>
        ) : (
          <>Loading...</>
        )}
      </div>
    </>
  );
}

export default App;
