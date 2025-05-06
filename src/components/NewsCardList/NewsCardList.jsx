import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";

function NewsCardList({
  articles,
  visibleCount,
  setVisibleCount,
  isLoggedIn,
  handleSaveArticle,
  savedArticles,
}) {
  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="newsCardList__container">
      <h2 className="newsCardList__title">Search results</h2>
      <ul className="newsCardList__list">
        {articles.slice(0, visibleCount).map((article, index) => (
          <li className="newsCardList__card" key={index}>
            <NewsCard
              isLoggedIn={isLoggedIn}
              image={article.urlToImage}
              date={article.publishedAt}
              title={article.title}
              description={article.description}
              source={article.source.name}
              url={article.url}
              keyword={article.keyword}
              handleSaveArticle={handleSaveArticle}
              isSaved={savedArticles.some(
                (savedArticle) => savedArticle.url === article.url
              )}
            />
          </li>
        ))}
      </ul>
      {articles.length > visibleCount && (
        <button className="newsCardList__show-more-btn" onClick={showMore}>
          Show More
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
