import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="GeoTivity ホーム">
          <img src="/logo-mark.png" alt="GeoTivity ロゴマーク" className="brand-mark" />
          <img src="/logo-text.png" alt="GeoTivity" className="brand-text" />
        </Link>

        <nav className="site-nav">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            事業内容
          </NavLink>
          <NavLink to="/software" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            ソフト紹介
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            プロフィール
          </NavLink>
          <NavLink to="/contact" className="nav-button">
            お問い合わせ
          </NavLink>
        </nav>
      </div>
    </header>
  );
}