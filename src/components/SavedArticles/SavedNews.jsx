import "./SavedNews.css";
import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ currentUser, savedArticles, handleSaveArticle }) {
  function getUniqueKeywords(articles) {
    // Extract all keywords from articles
    const allKeywords = articles.map((article) => article.keyword);
    // Remove duplicates and filter out any undefined/null values
    const uniqueKeywords = [...new Set(allKeywords)].filter(
      (keyword) => keyword
    );
    return uniqueKeywords;
  }

  return (
    <div className="savedNews">
      <header className="savedNews__header">
        <h1 className="savedNews__title">Saved articles</h1>
        <p className="savedNews__user-info">
          {currentUser.name}, you have {savedArticles.length} saved articles
        </p>
        <p className="savedNews__keywords">
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
        </p>
      </header>
      <div className="savedNews__container">
        <div className="savedNews__content">
          {savedArticles.length > 0 ? (
            <ul className="savedNews__list">
              {savedArticles.map((article, index) => (
                <li
                  className="savedNews__article"
                  key={`${article.title}-${index}`}
                >
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
            <div className="saved-news__empty">
              <p className="saved-news__empty-message">
                You don't have any saved articles yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SavedNews;
