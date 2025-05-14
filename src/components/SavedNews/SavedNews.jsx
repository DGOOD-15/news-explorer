import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ currentUser, savedArticles, handleSaveArticle }) {
  function getUniqueKeywords(articles) {
    const allKeywords = articles.map((article) => article.keyword);
    const uniqueKeywords = [...new Set(allKeywords)].filter(
      (keyword) => keyword
    );
    return uniqueKeywords;
  }

  return (
    <section className="savedNews">
      <header className="savedNews__header">
        <h1 className="savedNews__title">Saved articles</h1>
        <p className="savedNews__user-info">
          {currentUser.name}, you have {savedArticles.length} saved articles
        </p>
        <div className="savedNews__keywords">
          <span className="savedNews__keywords-label">By keywords: </span>
          <span className="savedNews__keywords-values">
            {(() => {
              const capitalizeWord = (word) => {
                return (
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                );
              };

              const sortedKeywords = getUniqueKeywords(savedArticles);
              const firstTwo = sortedKeywords.slice(0, 2).map(capitalizeWord);
              const remainingCount = sortedKeywords.length - 2;

              return remainingCount > 0
                ? `${firstTwo.join(", ")} and ${remainingCount} others`
                : firstTwo.join(", ");
            })()}
          </span>
        </div>
      </header>
      <div className="savedNews__container">
        <div className="savedNews__content">
          {savedArticles.length > 0 ? (
            <ul className="savedNews__list">
              {savedArticles.map((article) => (
                <li className="savedNews__article" key={article.url}>
                  <NewsCard
                    image={article.urlToImage}
                    date={article.publishedAt}
                    title={article.title}
                    description={article.description}
                    source={article.source.name}
                    url={article.url}
                    keyword={article.keyword}
                    isLoggedIn={true}
                    isSaved={true}
                    handleSaveArticle={() => handleSaveArticle(article)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="saved-news__empty-message">
              You don't have any saved articles yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default SavedNews;
