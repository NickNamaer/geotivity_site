import { Link } from "react-router-dom";
import heroMonitor from "../assets/hero-monitor.png";
import SEO from "../components/SEO";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GeoTivity",
  url: "https://geotivity.jp",
  logo: "https://geotivity.jp/logo-mark.png",
  email: "info@geotivity.jp",
  description:
    "GeoTivityは、森林解析ソフトの提供と、ドローン・LiDAR・GISを活用した森林解析サービスを行う事業です。",
  founder: {
    "@type": "Person",
    name: "柴草 快",
  },
  sameAs: [],
};

const services = [
  {
    title: "森林解析ソフトウェアの開発・販売",
    text: "GeoTivity for QGIS を中心に、CHM作成、樹頂点抽出、樹冠作成、単木解析、森林資源量推定までを一連で扱える環境を整備しています。"
  },
  {
    title: "森林解析サービス",
    text: "ドローン写真測量、LiDAR、既存GISデータなどをもとに、森林資源量の把握、解析結果の可視化、施業検討のための資料化を支援します。"
  },
  {
    title: "導入・活用支援",
    text: "自治体、森林組合、林業事業体、調査会社などを対象に、導入前相談、データ条件の整理、運用設計まで伴走します。"
  }
];

const strengths = [
  "QGISベースで導入しやすい",
  "森林実務を踏まえたUIと処理フロー",
  "単木解析から小班単位の整理まで見据えた構成",
  "ソフト販売と解析受託の両方に対応",
  "将来的な拡張を見据えたエンジン設計"
];

export default function HomePage() {
  return (
    <>
      <SEO
        title="GeoTivity | 森林解析ソフトと森林データ活用"
        description="GeoTivityは、森林解析ソフト（GeoTivity for QGIS）の提供と、ドローン・LiDAR・GISを活用した森林解析サービスを行う事業です。現場で使える単木解析・資源量推定を実現します。"
        path="/"
        jsonLd={JSON_LD}
      />
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Forest Analytics / Software / GIS</p>
            <h1>森林解析を、現場のツールに。</h1>
            <p className="lead">
              GeoTivityは、森林解析ソフトの提供と、森林データ活用のための解析サービスを行う事業です。
              現場で使えること、判断につながることを重視して設計しています。
            </p>
            <div className="button-row">
              <Link className="btn btn-primary" to="/software">価格・製品ページを見る</Link>
              <a className="btn btn-secondary" href="#business">事業内容を見る</a>
            </div>
          </div>

          <div
            className="hero-visual"
            style={{ backgroundImage: `url(${heroMonitor})` }}
            aria-label="GeoTivity 解析画面"
          />
        </div>
      </section>

      <section className="section" id="business">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Business</p>
            <h2>事業内容</h2>
            <p>ソフトウェアと解析サービスの両輪で、森林データ活用を前に進めます。</p>
          </div>

          <div className="card-grid cols-3">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Why GeoTivity</p>
            <h2>GeoTivityの強み</h2>
            <p className="body-copy">
              研究用途だけではなく、実務の中で扱いやすい森林解析環境を目指しています。
              処理の流れが分かりやすく、GIS上で結果を確認しながら次の判断につなげやすい構成です。
            </p>
          </div>
          <div className="bullet-panel">
            {strengths.map((item) => (
              <div className="bullet-item" key={item}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Software</p>
            <h2>GeoTivity for QGIS</h2>
            <p>価格、トライアルダウンロード、販売相談、お問い合わせまでを製品ページにまとめています。</p>
          </div>
          <div className="cta-panel">
            <div>
              <h3>本体 税込330,000円 / 年間サポート 税込110,000円</h3>
              <p>GeoTivity Engine 本体については別途相談です。</p>
            </div>
            <Link className="btn btn-primary" to="/software">製品ページへ進む</Link>
          </div>
        </div>
      </section>
    </>
  );
}