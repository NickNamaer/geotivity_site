import SEO from "../components/SEO";

export default function Contact() {
  return (
    <div className="container section">
      <SEO
        title="お問い合わせ | GeoTivity"
        description="GeoTivity へのトライアル申込・導入相談・購入・解析受託のお問い合わせはこちら。メールにてお気軽にご連絡ください。"
        path="/contact"
      />
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>お問い合わせ</h2>
        <p>
          GeoTivity に関するトライアル、導入、販売、解析相談はこちらからご連絡ください。
        </p>
      </div>

      <div className="card">
        <p>以下のメールアドレスまでご連絡ください。</p>
        <a className="btn btn-primary" href="mailto:info@geotivity.jp">
          info@geotivity.jp
        </a>
      </div>
    </div>
  );
}