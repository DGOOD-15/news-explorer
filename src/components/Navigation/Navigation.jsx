import "./Navigation.css";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navigation({
  handleSignInClick,
  isLoggedIn,
  handleLogout,
  currentUser,
}) {
  const location = useLocation();
  const currentPath = location.pathname;
  const isSavedArticlesPage =
    currentPath === "/saved-articles" ||
    currentPath === "/news-explorer/saved-articles";

  return (
    <nav className="navigation">
      <div className="navigation__link-container">
        <Link
          to="/"
          className={`navigation__logo ${
            isSavedArticlesPage ? "navigation__logo-saved" : ""
          }`}
        >
          NewsExplorer
        </Link>
        <div className="navigation__links">
          <NavLink
            to="/"
            className={(isActive) =>
              `navigation__home-link ${
                isActive ? "navigation__link_active" : ""
              } ${isSavedArticlesPage ? "navigation__home-link-saved" : ""}`
            }
          >
            {({ isActive }) => (
              <div
                className={`navigation__link-wrapper ${
                  isActive ? "navigation__link-wrapper_active" : ""
                }`}
              >
                Home
              </div>
            )}
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink
                to="/saved-articles"
                className={(isActive) =>
                  `navigation__saved-link ${
                    isActive ? "navigation__link_active" : ""
                  } ${
                    isSavedArticlesPage ? "navigation__saved-link-saved" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <div
                    className={`navigation__link-wrapper ${
                      isActive ? "navigation__link-wrapper_saved" : ""
                    }`}
                  >
                    Saved articles
                  </div>
                )}
              </NavLink>

              <button
                className={`navigation__sign-out-btn ${
                  isSavedArticlesPage ? "navigation__sign-out-btn-saved" : ""
                }`}
                onClick={handleLogout}
              >
                {currentUser?.name}
                <span
                  className={`navigation__logout-icon ${
                    isSavedArticlesPage ? "navigation__logout-icon-saved" : ""
                  }`}
                ></span>
              </button>
            </>
          ) : (
            <button
              className="navigation__sign-in-btn"
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
