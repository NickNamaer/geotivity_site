import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div>
          <h3>GeoTivity</h3>
          <p>
            森林解析を、現場のツールに。
            <br />
            ソフトウェア提供と森林解析サービスの両面から、森林データ活用を支援します。
          </p>
        </div>

        <div>
          <h4>導線</h4>
          <ul>
            <li><Link to="/">事業内容</Link></li>
            <li><Link to="/software">GeoTivity for QGIS</Link></li>
            <li><Link to="/about">プロフィール</Link></li>
            <li><Link to="/contact">お問い合わせ</Link></li>
            <li><a href="mailto:info@geotivity.jp?subject=GeoTivity%20トライアル申込">トライアル申込</a></li>
          </ul>
        </div>

        <div>
          <h4>お問い合わせ</h4>
          <p>導入相談、販売、年間サポート、解析受託、Engine相談を受け付けています。</p>
          <a className="footer-mail" href="mailto:info@geotivity.jp">info@geotivity.jp</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">© 2026 GeoTivity</div>
      </div>
    </footer>
  );
}