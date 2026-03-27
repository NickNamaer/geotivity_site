import React from "react";

export default function GeoTivityCTA({
  downloadUrl = "/downloads/GeoTivity.zip",
  contactUrl = "/contact",
}) {
  return (
    <section className="w-full rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">森林解析を、現場のツールに。</h2>
        <p className="mt-4 text-gray-600">
          GeoTivity for QGIS は、単木解析・樹冠抽出・森林資源量推定を行うためのツールです。
        </p>

        <div className="mt-6 flex gap-4">
          <a href={downloadUrl} className="bg-emerald-600 text-white px-6 py-3 rounded-xl">
            GeoTivity.zip をダウンロード
          </a>
          <a href={contactUrl} className="border px-6 py-3 rounded-xl">
            お問い合わせ
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          初回起動時にトライアルが自動開始されます（面積制限あり）
        </p>
      </div>
    </section>
  );
}
