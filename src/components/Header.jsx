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
          <a className="nav-button" href="#contact">お問い合わせ</a>
        </nav>
      </div>
    </header>
  );
}
