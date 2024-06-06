import React from "react";
import BackButton from "../components/BackButton";
import { useLocation } from "react-router-dom";

const Post = () => {
  const location = useLocation();
  const news = location.state?.news;

  return (
    <>
      {news && (
        <div className="bg-gray-100 dark:bg-gray-800 min-h-screen">
          <main className="pt-8 pb-16 lg:pt-12 lg:pb-24 mx-auto max-w-3xl">
            <article className="bg-white dark:bg-gray-900 rounded-lg shadow-lg px-6 py-8 sm:px-8 sm:py-12">
              <header className="mb-6 not-format">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {news.title}
                  </h1>
                  <div className="flex items-center gap-x-2 text-xs">
                    <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                      {news.emotion}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>{news.date}</span>
                  <span>•</span>
                  <span>By {news.author}</span>
                </div>
              </header>

              <figure className="mb-6">
                <img
                  src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
                  alt=""
                  className="rounded-lg"
                />
                <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {"Digital art by Anonymous"}
                </figcaption>
              </figure>

              <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
                <p>{news.description}</p>
              </div>

              <div className="mt-6 text-center">
                <BackButton name="Back" />
              </div>
            </article>
          </main>
        </div>
      )}
    </>
  );
};

export default Post;
