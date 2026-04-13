import SEO from "../components/SEO";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GeoTivity for QGIS",
  operatingSystem: "Windows, macOS, Linux",
  applicationCategory: "GeographyApplication",
  offers: [
    {
      "@type": "Offer",
      name: "買い切りライセンス",
      price: "330000",
      priceCurrency: "JPY",
    },
    {
      "@type": "Offer",
      name: "年間サポート",
      price: "110000",
      priceCurrency: "JPY",
    },
  ],
  description:
    "QGISプラグインとして動作する森林解析ソフト。CHM作成、樹頂点抽出、樹冠作成、単木解析、森林資源量推定まで一連の処理に対応。",
  url: "https://geotivity.jp/software",
};

const features = [
  "DSM / DTM からのCHM作成",
  "CHM補正",
  "樹頂点抽出",
  "樹冠作成",
  "単木解析",
  "森林資源量推定",
  "QGIS上での結果確認",
  "実務フローを意識したUI"
];

const visuals = [
  {
    eyebrow: "Step 1",
    title: "オルソ画像",
    text: "元画像の状態から、森林の状況を確認します。",
    image: "/software/ortho.png",
    alt: "森林のオルソ画像"
  },
  {
    eyebrow: "Step 2",
    title: "樹頂点抽出",
    text: "1本1本の木を自動検出し、単木解析の起点を作成します。",
    image: "/software/treetops.png",
    alt: "樹頂点抽出結果"
  },
  {
    eyebrow: "Step 3",
    title: "樹冠作成",
    text: "樹冠をポリゴンとして分割し、木ごとの空間的なまとまりを把握します。",
    image: "/software/crowns.png",
    alt: "樹冠ポリゴン作成結果"
  },
  {
    eyebrow: "Step 4",
    title: "小班統計",
    text: "小班単位で材積・密度などの整理につなげられる解析結果を可視化します。",
    image: "/software/compartment-stats.png",
    alt: "小班統計の可視化結果"
  }
];

const pricing = [
  {
    name: "トライアル",
    price: "無料",
    description: "導入検討向け",
    features: [
      "プラグインZIPを直接ダウンロード可能",
      "初回起動時にトライアル自動開始",
      "面積制限あり"
    ],
    cta: "GeoTivity.zip をダウンロード",
    href: "https://github.com/NickNamaer/geotivity_site/releases/download/v1.0.0/GeoTivity_For_QGIS.zip"
  },
  {
    name: "GeoTivity for QGIS",
    price: "¥330,000（税込）",
    description: "買い切りライセンス",
    features: [
      "GeoTivity for QGIS 本体",
      "単木解析・資源量推定まで対応",
      "QGIS上で利用可能"
    ],
    cta: "購入・見積依頼",
    href: "mailto:info@geotivity.jp?subject=GeoTivity%20購入・見積依頼",
    featured: true
  },
  {
    name: "年間サポート",
    price: "¥110,000（税込）/年",
    description: "継続利用向け",
    features: [
      "アップデート提供",
      "メールサポート",
      "導入後の問い合わせ窓口"
    ],
    cta: "サポートを相談する",
    href: "mailto:info@geotivity.jp?subject=GeoTivity%20年間サポート相談"
  }
];

const flow = [
  {
    step: "STEP 1",
    title: "トライアル申込・お問い合わせ",
    text: "まずはトライアル利用や導入相談からスタート。利用目的、対象データ、想定ユーザーを確認します。"
  },
  {
    step: "STEP 2",
    title: "ヒアリング・ご案内",
    text: "ご利用用途や必要機能を伺い、トライアル条件や導入イメージ、必要に応じて製品説明をご案内します。"
  },
  {
    step: "STEP 3",
    title: "お見積・ご注文",
    text: "GeoTivity for QGIS 本体や年間サポートの有無を整理し、お見積をご案内します。"
  },
  {
    step: "STEP 4",
    title: "ライセンス発行・納品",
    text: "ご利用開始日や利用条件に応じて、ライセンス発行と導入案内を行います。"
  },
  {
    step: "STEP 5",
    title: "導入後フォロー",
    text: "年間サポート加入時はアップデートとメールサポートを継続提供します。"
  }
];

const faq = [
  {
    q: "まずは試せますか？",
    a: "はい。GeoTivity.zip を直接ダウンロードして試せます。初回起動時にトライアルが自動開始されます（面積制限あり）。"
  },
  {
    q: "価格はいくらですか？",
    a: "GeoTivity for QGIS 本体は税込330,000円の買い切り、年間サポートは税込110,000円です。"
  },
  {
    q: "GeoTivity Engine 単体でも相談できますか？",
    a: "はい。Engine本体の提供や連携については別途相談として受け付けています。"
  },
  {
    q: "どんなユーザー向けですか？",
    a: "自治体、森林組合、林業事業体、調査会社、研究・実証用途のQGISユーザーを想定しています。"
  }
];

export default function SoftwarePage() {
  return (
    <>
      <SEO
        title="GeoTivity for QGIS | 価格・トライアル・導入相談 | GeoTivity"
        description="GeoTivity for QGIS は、QGISで動く森林解析プラグイン。単木解析・樹冠抽出・資源量推定まで対応。本体税込330,000円。トライアル無料ダウンロード可能。"
        path="/software"
        jsonLd={JSON_LD}
      />
      <section className="hero hero-tight">
        <div className="container product-hero">
          <div>
            <p className="eyebrow">Software</p>
            <h1>GeoTivity for QGIS</h1>
            <p className="lead">
              森林解析の一連の処理を、QGIS上で扱いやすく。
              トライアル申込から導入相談、販売までの動線をまとめた製品ページです。
            </p>
            <div className="button-row">
              <a className="btn btn-primary" href="https://github.com/NickNamaer/geotivity_site/releases/download/v1.0.0/GeoTivity_For_QGIS.zip">GeoTivity.zip をダウンロード</a>
              <a className="btn btn-secondary" href="#visuals">解析イメージを見る</a>
            </div>
          </div>
          <div className="product-sidecard">
            <h3>このページでできること</h3>
            <ul>
              <li>価格の確認</li>
              <li>トライアル申込</li>
              <li>購入・見積依頼</li>
              <li>導入までの流れ確認</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="visuals">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Visual Workflow</p>
            <h2>森林解析を、ここまで自動化。</h2>
            <p>
              航空写真から単木を検出し、樹冠を分割し、小班単位で整理につなげるまでの流れを、
              GeoTivity for QGIS 上で一連に扱えます。
            </p>
          </div>

          <div className="before-after-grid">
            <article className="image-feature-card">
              <div className="media-frame">
                <img src="/software/ortho.png" alt="森林のオルソ画像" />
              </div>
              <div className="image-feature-copy">
                <p className="eyebrow">Before</p>
                <h3>元データの確認</h3>
                <p>
                  オルソ画像の状態から森林の状況を確認し、解析対象の範囲や林況を把握します。
                </p>
              </div>
            </article>

            <article className="image-feature-card">
              <div className="media-frame">
                <img src="/software/compartment-stats.png" alt="小班統計の可視化結果" />
              </div>
              <div className="image-feature-copy">
                <p className="eyebrow">After</p>
                <h3>小班単位の整理へ</h3>
                <p>
                  単木解析結果を重ねて、小班単位で材積・密度などの整理につなげられる状態まで可視化します。
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Analysis Flow</p>
            <h2>処理の流れが、画像で分かる</h2>
            <p>GeoTivity の主要な処理フローを、そのまま製品イメージとして掲載しています。</p>
          </div>

          <div className="image-card-grid">
            {visuals.map((item) => (
              <article className="image-card" key={item.title}>
                <div className="media-frame">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="image-card-body">
                  <p className="image-card-eyebrow">{item.eyebrow}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="pricing">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Pricing</p>
            <h2>価格</h2>
            <p>価格を公開し、トライアルから購入相談まで迷わず進める構成にしています。</p>
          </div>

          <div className="card-grid cols-3 pricing-grid">
            {pricing.map((item) => (
              <article className={`pricing-card ${item.featured ? "featured" : ""}`} key={item.name}>
                <p className="pricing-label">{item.name}</p>
                <h3>{item.price}</h3>
                <p className="pricing-description">{item.description}</p>
                <ul className="pricing-list">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className={`btn ${item.featured ? "btn-primary" : "btn-secondary"} btn-block`} href={item.href}>
                  {item.cta}
                </a>
              </article>
            ))}
          </div>

          <div className="engine-note">
            <p className="eyebrow">Engine</p>
            <h3>GeoTivity Engine 本体は別途相談</h3>
            <p>
              Engine単体での提供、外部連携、個別要件に応じた利用については、
              別途ご相談ください。
            </p>
            <a className="btn btn-secondary" href="mailto:info@geotivity.jp?subject=GeoTivity%20Engine相談">
              Engineについて相談する
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="trial">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Trial</p>
            <h2>まずはトライアルから</h2>
            <p className="body-copy">
              導入前に、GeoTivity for QGIS をそのままダウンロードして試せる構成にしています。
              初回起動時にトライアルが自動開始されます（面積制限あり）。
            </p>
          </div>
          <div className="action-card">
            <h3>トライアルダウンロード</h3>
            <p>GeoTivity.zip を直接ダウンロードして試せます。初回起動時にトライアルが自動開始されます（面積制限あり）。</p>
            <div className="stack-buttons">
              <a className="btn btn-primary btn-block" href="https://github.com/NickNamaer/geotivity_site/releases/download/v1.0.0/GeoTivity_For_QGIS.zip" target="_blank" rel="noopener noreferrer">GeoTivity.zip をダウンロード</a>
              <a className="btn btn-secondary btn-block" href="#contact-cta">導入相談をする</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Features</p>
            <h2>主な機能</h2>
            <p>森林解析の主要フローを段階的に実行しやすい構成にしています。</p>
          </div>
          <div className="card-grid cols-4">
            {features.map((item) => (
              <div className="mini-card" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="purchase-flow">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Purchase Flow</p>
            <h2>導入・販売の流れ</h2>
            <p>トライアルから見積、注文、ライセンス発行までの流れを1ページで把握できる構成です。</p>
          </div>
          <div className="flow-grid flow-grid-5">
            {flow.map((item) => (
              <article className="flow-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid cols-2">
          <article className="pricing-box">
            <p className="eyebrow">Sales</p>
            <h2>購入・見積依頼</h2>
            <p>
              GeoTivity for QGIS 本体の購入や年間サポートの追加について、
              メールから相談できる導線を用意しています。
            </p>
            <a className="btn btn-primary" href="mailto:info@geotivity.jp?subject=GeoTivity%20購入・見積依頼">見積を依頼する</a>
          </article>

          <article className="pricing-box">
            <p className="eyebrow">Service</p>
            <h2>解析受託の相談</h2>
            <p>
              ソフト導入だけでなく、森林解析サービスの相談先としても使えるようにしています。
              データがあるが自社運用前にまず解析したいケースにも対応可能です。
            </p>
            <a className="btn btn-secondary" href="mailto:info@geotivity.jp?subject=GeoTivity%20解析相談">解析相談をする</a>
          </article>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>よくある質問</h2>
          </div>
          <div className="faq-list">
            {faq.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta" id="contact-cta">
        <div className="container cta-panel large-cta">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>ダウンロード、販売、導入相談はこちら</h2>
            <p>トライアルは GeoTivity.zip を直接ダウンロードして開始できます。販売や導入相談はメールで受け付けています。</p>
          </div>
          <div className="stack-buttons cta-buttons">
            <a className="btn btn-primary" href="https://github.com/NickNamaer/geotivity_site/releases/download/v1.0.0/GeoTivity_For_QGIS.zip" target="_blank" rel="noopener noreferrer">GeoTivity.zip をダウンロード</a>
            <a className="btn btn-secondary text-green-800" href="mailto:info@geotivity.jp?subject=GeoTivity%20お問い合わせ">お問い合わせする</a>
          </div>
        </div>
      </section>
    </>
  );
}
