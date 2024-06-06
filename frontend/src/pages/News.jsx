import React from "react";
import Content from "../components/Content";
import Post from "./Post";
import SumNews from "./SumNews";
import { updatedNews } from "../utils/News";

const News = () => {
  return (
    <div>
      <SumNews news={updatedNews} />
    </div>
  );
};

export default News;
