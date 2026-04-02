export default function About() {
  return (
    <div className="container section">
      <div className="section-heading">
        <p className="eyebrow">Profile</p>
        <h2>プロフィール</h2>
        <p>
          森林 × GIS × ドローンを軸に、
          現場で使える解析を作っている人です。
        </p>
      </div>

      <div className="card" style={{ marginBottom: "20px" }}>
        <h3 style={{ marginTop: 0 }}>柴草　快 / Kai Shibakusa</h3>
        <p>
          長野県職員として林業・治山系の業務に関わる中で、
          「データはあるのに活かしきれていない」と感じたのがきっかけで
          退職後、GeoTivity を作り始めました。
        </p>
        <p>
          現在は、QGISベースで単木解析や資源量推定を
          現場でそのまま使える形に落とし込むことに取り組んでいます。
        </p>
        <p>
          GeoTivity はその中で開発しているメインプロダクトです。
        </p>
      </div>

      <div className="card-grid cols-2">
        <article className="card">
          <h3>やってること</h3>
          <p>
            ・QGISプラグイン開発<br />
            ・単木解析 / 樹冠抽出<br />
            ・ドローンデータの処理（LiDAR / 写真測量）<br />
            ・森林業務に合わせたGISの設計
          </p>
        </article>

        <article className="card">
          <h3>経歴ざっくり</h3>
          <p>
            ・元長野県職員（林業・治山系）6年間在職<br />
            ・現場寄りの森林解析を実務で経験<br />
            ・GeoTivity を個人開発
          </p>
        </article>

        <article className="card">
          <h3>スタンス</h3>
          <p>
            研究で終わるものではなく、
            「明日から現場で使えるか」を基準に作っています。
          </p>
        </article>

        <article className="card">
          <h3>連絡</h3>
          <p>
            導入相談・解析相談などお気軽にどうぞ。
          </p>
          <p>
            <a href="mailto:info@geotivity.jp">info@geotivity.jp</a>
          </p>
        </article>
      </div>
    </div>
  );
}