import NewsCard from "./NewsCard";
const FilteredNews = ({ filteredNews, selectedEmotion }) => {
  return (
    <div className="bg-white mb-10 ">
      <div className="mx-auto max-w-7xl px-8 lg:px-8">
        {filteredNews.length === 0 ? (
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-1 text-xl leading-8 text-gray-900">
              No articles found for the selected emotion:{" "}
              <span className="font-bold">{selectedEmotion}</span>
            </p>
          </div>
        ) : (
          <div>
            <div className="mx-auto max-w-2xl  text-center">
              <p className="mt-1 text-xl leading-8 text-gray-900">
                You have selected the{" "}
                <span className="font-bold">{filteredNews[0].emotion}</span>{" "}
                emotion
              </p>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200  sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {filteredNews.map((item) => (
                <NewsCard key={item.title} news={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredNews;
