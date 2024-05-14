import React from "react";

function About() {
  return (
    <section className="about  text-black px-60 py-2 flex flex-col items-center justify-center h-screen gap-4 ">
      <h1 className="text-4xl font-bold text-center  border-b-2 border-black mb-3">
        Moody News: Feel-Good News for You
      </h1>
      <div className="flex flex-col gap-4 md:flex-row md:gap-8 items-center justify-between">
        <div className="w-full md:w-1/2">
          <p className="text-xl leading-relaxed">
            Drowning in negativity? Us too. That's why we created Mood News.
          </p>
          <p className="text-xl leading-relaxed">
            Our innovative platform uses Machine Learning to curate personalized
            news snippets based on your mood. Whether you're feeling happy,
            anxious, or anywhere in between, Mood News delivers relevant,
            bite-sized updates tailored to your emotional state.
          </p>
        </div>
        <img
          className="w-full md:w-1/3 object-cover "
          src="src/assets/happy-news.svg"
          alt="Moody News Illustration"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-slate-800 text-white rounded-full px-6 py-2 font-bold text-center">
          Machine Learning
        </div>
        <div className="bg-slate-800 text-white rounded-full px-6 py-2 font-bold text-center">
          Sentiment Analysis
        </div>
        <div className="bg-slate-800 text-white rounded-full px-6 py-2 font-bold text-center">
          Text Summarization
        </div>
        <div className="bg-slate-800 text-white rounded-full px-6 py-2 font-bold text-center">
          React
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button className="bg-button hover:bg-blue-700 text-white font-bold py-3 px-6  shadow-md  rounded-full">
          Feel Good Now
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-slate-700 font-bold py-2 px-6 rounded-full shadow-md">
          Browse All News
        </button>
      </div>
      <p className="text-sm text-stale-300 text-center">Made with ❤️ by Team</p>
    </section>
  );
}

export default About;
