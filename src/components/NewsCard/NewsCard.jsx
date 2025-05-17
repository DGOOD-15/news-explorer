import "./NewsCard.css";
import { formatDate } from "../../utils/helpers.js";
import { useLocation } from "react-router-dom";

function NewsCard({
  isLoggedIn,
  isSaved,
  image,
  date,
  title,
  description,
  source,
  handleSaveArticle,
  keyword,
  url,
}) {
  const location = useLocation();
  const currentPath = location.pathname;
  const isSavedArticlesPage =
    currentPath === "/saved-articles" ||
    currentPath === "/news-explorer/saved-articles";

  const formattedDate = formatDate(date);

  const handleSaveClick = () => {
    if (!isLoggedIn) return;

    const articleToSave = {
      title: title,
      description: description,
      url: url,
      urlToImage: image,
      publishedAt: date,
      source: { name: source },
      keyword: keyword,
    };

    handleSaveArticle(articleToSave);
  };

  const buttonClassName = isSavedArticlesPage
    ? "newsCard__delete-btn"
    : `newsCard__save-btn ${isSaved ? "newsCard__save-btn-saved" : ""}`;
  console.log("Button className:", buttonClassName, "isSaved:", isSaved);

  return (
    <article className="newsCard">
      <img src={image} alt={title} className="newsCard__image" />
      {isSavedArticlesPage && (
        <div className="newsCard__keyword">
          {keyword?.charAt(0).toUpperCase() + keyword?.slice(1)}
        </div>
      )}
      <button
        type="button"
        className={
          isSavedArticlesPage
            ? "newsCard__delete-btn"
            : `newsCard__save-btn ${isSaved ? "newsCard__save-btn-saved" : ""}`
        }
        onClick={handleSaveClick}
        onTouchStart={handleSaveClick}
      >
        {!isLoggedIn && !isSavedArticlesPage && (
          <span className="newsCard__tooltip">Sign in to save articles</span>
        )}
        {isSavedArticlesPage && (
          <span className="newsCard__tooltip">Remove from saved</span>
        )}
      </button>
      <section className="newsCard__content">
        <p className="newsCard__date">{formattedDate}</p>
        <h2 className="newsCard__title">{title}</h2>
        <p className="newsCard__description">{description}</p>
        <p className="newsCard__source">{source}</p>
      </section>
    </article>
  );
}

export default NewsCard;
