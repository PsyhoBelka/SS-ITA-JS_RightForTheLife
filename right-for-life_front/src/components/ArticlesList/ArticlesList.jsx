import React from "react";
import {ArticleItem} from "../ArticleItem";

export const ArticlesList = ({articles, listTitle, url}) => {
  return (
    <div>
      <h1 className="mb-6 font-bold text-lightgray-700 text-4xl uppercase">{listTitle}</h1>
      <div className="flex flex-wrap justify-center -mx-4">
        {articles.map(article => {
          return <ArticleItem key={article.id} article={article} url={url}/>;
        })}
      </div>
    </div>
  );
};
