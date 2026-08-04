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
    downloads: [
      {
        os: "Windows",
        icon: "🪟",
        description: "Windows 10 / 11",
        href: "/downloads/geotivity_nodeodm_connector.zip",
      },
      {
        os: "macOS",
        icon: "🍎",
        description: "Intel / Apple Silicon",
        href: "/downloads/geotivity_drone_tools_macos.zip",
      },
    ],
  },
];

export default function DownloadPage() {
  return (
    <div className="container section">
      <SEO
        title="無料プラグイン ダウンロード | GeoTivity"
        description="GeoTivityが公開する無料QGISプラグインのダウンロードページです。Windows版・macOS版のGeoTivity Drone Toolsを配布しています。"
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

            <p className="pricing-description">
              {plugin.description}
            </p>

            <ul className="pricing-list">
              {plugin.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="stack-buttons">
              {plugin.downloads.map((download) => (
                <a
                  key={download.os}
                  className="btn btn-primary btn-block"
                  href={download.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${download.os}版 GeoTivity Drone Toolsをダウンロード`}
                >
                  <span aria-hidden="true">{download.icon}</span>{" "}
                  {download.os}版をダウンロード
                  <small
                    style={{
                      display: "block",
                      marginTop: "0.25rem",
                      fontSize: "0.75rem",
                      opacity: 0.85,
                    }}
                  >
                    {download.description}
                  </small>
                </a>
              ))}
            </div>

            <div
              style={{
                marginTop: "1.25rem",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                利用にはQGIS、Docker Desktop、NodeODMが必要です。
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}