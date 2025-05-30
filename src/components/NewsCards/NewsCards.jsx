import React from "react";
import "./NewsCards.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCards({
  articles,
  visibleCount,
  setVisibleCount,
  isLoggedIn,
  handleSaveArticle,
  savedArticles,
  isSaved,
}) {
  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="news-cards">
      <h2 className="news-cards__title">Search results</h2>
      <ul className="news-cards__list">
        {articles.slice(0, visibleCount).map((article) => (
          <li className="news-cards__card" key={article.url}>
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
              savedArticles={savedArticles}
              isSaved={isSaved}
            />
          </li>
        ))}
      </ul>
      {articles.length > visibleCount && (
        <button className="news-cards__show-more-btn" onClick={showMore}>
          Show More
        </button>
      )}
    </section>
  );
}

export default NewsCards;
