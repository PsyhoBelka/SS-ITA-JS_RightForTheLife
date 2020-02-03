import React from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../../rootConstants";
import { withFetchDataIndicators } from "../../hoc/withFetchDataIndicators";
import { ErrorIndicator } from "../../components/ErrorIndicator";
import { Article } from "../../components/Article";

const NewsPage = ({ data }) => {
  let { id } = useParams();
  const article = data.find(article => article._id === id);

  if (!article)
    return (
      <ErrorIndicator
        message="Страница не найдена :("
        renderAction={() => <Link to="/news">Вернуться к новостям</Link>}
      />
    );

  return (
    <div className="-mt-10 max-w-4xl mx-auto">
      <Article article={article} />
    </div>
  );
};

const wrappedComponent = withFetchDataIndicators(
  NewsPage, 
  API.NEWS,
);

export { wrappedComponent as NewsPage };
