import SEO from "../components/SEO";

const plugins = [
  {
    name: "GeoTivity Drone Tools",
    price: "無料",
    description:
      "QGISからNodeODMを使いやすくするための無料プラグインです。ドローン写真処理の導入補助として利用できます。",
    features: [
      "QGISからNodeODMへ接続",
      "Docker / NodeODM 利用の導線整理",
      "オルソ画像・DSM等の作成補助",
      "無料公開プラグイン",
    ],
    href: "/downloads/geotivity_nodeodm_connector.zip",
  },
];

export default function DownloadPage() {
  return (
    <div className="container section">
      <SEO
        title="無料プラグイン ダウンロード | GeoTivity"
        description="GeoTivityが公開する無料QGISプラグインのダウンロードページです。ドローン写真処理や森林解析の導入を支援します。"
        path="/download"
      />

      <div className="section-heading">
        <p className="eyebrow">Free Download</p>
        <h2>無料プラグイン ダウンロード</h2>
        <p>
          GeoTivity が公開する無料の QGIS プラグインをダウンロードできます。
          森林解析やドローン写真処理を、より簡単に始めるためのツールです。
        </p>
      </div>

      <div className="card-grid cols-2">
        {plugins.map((plugin) => (
          <article className="pricing-card" key={plugin.name}>
            <p className="pricing-label">{plugin.price}</p>
            <h3>{plugin.name}</h3>
            <p className="pricing-description">{plugin.description}</p>

            <ul className="pricing-list">
              {plugin.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a
              className="btn btn-primary btn-block"
              href={plugin.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              ダウンロード
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}