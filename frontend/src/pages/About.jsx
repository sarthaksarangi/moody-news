import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <section className="about  text-black px-60 py-2 flex flex-col items-center justify-center mt-16 gap-4 ">
      <div className="flex flex-col gap-4 md:flex-row md:gap-8 items-center justify-between mb-20">
        <div className="w-full md:w-1/2">
          <h1 class=" mt-8 mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-lg lg:text-5xl">
            Moody News: News according to your
            <span class="text-button1 dark:text-blue-500"> mood!</span>{" "}
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Drowning in negativity? Us too. That's why we created Mood News.
          </p>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Our innovative platform uses Machine Learning to curate personalized
            news snippets based on your mood. Whether you're feeling happy,
            anxious, or anywhere in between, Mood News delivers relevant,
            bite-sized updates tailored to your emotional state.
          </p>
        </div>
        <img
          className="w-full md:w-2/5 object-cover "
          src="src/assets/News-cuate.svg"
          alt="Moody News Illustration"
        />
      </div>
      {/* <div className="flex flex-wrap justify-center gap-4 mb-4">
        <div className="bg-slate-800 hover:g-gray-900 text-white font-bold py-3 px-6  shadow-md  rounded-full cursor-pointer">
          Machine Learning
        </div>
        <div className="bg-slate-800 hover:bg-gray-900 text-white font-bold py-3 px-6  shadow-md  rounded-full cursor-pointer">
          Sentiment Analysis
        </div>
        <div className="bg-slate-800 hover:g-gray-900 text-white font-bold py-3 px-6  shadow-md  rounded-full cursor-pointer">
          Text Summarization
        </div>
        <div className="bg-slate-800 hover:g-gray-900 text-white font-bold py-3 px-6  shadow-md  rounded-full cursor-pointer">
          React
        </div>
      </div> */}
      <div className="flex justify-center gap-4">
        <button
          className="bg-button hover:bg-blue-700 text-white font-bold py-3 px-6  shadow-md  rounded-full"
          onClick={() => navigate("/")}
        >
          Feel Good Now
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-slate-700 font-bold py-2 px-6 rounded-full shadow-md">
          Browse All News
        </button>
      </div>
      <p className="text-sm text-stale-300 text-center mt-6">
        Made with ❤️ by Team
      </p>
    </section>
  );
}

export default About;
