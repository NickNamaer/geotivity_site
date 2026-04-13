import { useEffect } from "react";

const SITE_NAME = "GeoTivity";
const BASE_URL = "https://geotivity.jp";

/**
 * SEO コンポーネント
 * useEffect で document.head のメタタグを直接操作します。
 *
 * Props:
 *  - title: ページタイトル（例: "GeoTivity for QGIS | GeoTivity"）
 *  - description: ページ説明文（～120文字推奨）
 *  - path: ページパス（例: "/software"）
 *  - ogImage: OG 画像 URL（フルパス、省略可）
 *  - jsonLd: JSON-LD オブジェクト（省略可）
 */
export default function SEO({ title, description, path = "", ogImage, jsonLd }) {
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImageUrl = ogImage || `${BASE_URL}/ogp.png`;

  useEffect(() => {
    // タイトル
    document.title = title;

    // helper: <head> 内のメタタグを取得・更新する
    function setMeta(name, content) {
      let el =
        document.head.querySelector(`meta[name="${name}"]`) ||
        document.head.querySelector(`meta[property="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        if (name.startsWith("og:") || name.startsWith("twitter:")) {
          el.setAttribute("property", name);
        } else {
          el.setAttribute("name", name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    }

    function setLink(rel, href) {
      let el = document.head.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    }

    // 基本メタ
    setMeta("description", description);
    setLink("canonical", canonicalUrl);

    // Open Graph
    setMeta("og:type", "website");
    setMeta("og:site_name", SITE_NAME);
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:url", canonicalUrl);
    setMeta("og:image", ogImageUrl);
    setMeta("og:locale", "ja_JP");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImageUrl);

    // JSON-LD
    const JSON_LD_ID = "json-ld-structured-data";
    let scriptEl = document.head.querySelector(`#${JSON_LD_ID}`);
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = JSON_LD_ID;
        scriptEl.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else {
      // このページに JSON-LD が不要なら削除
      if (scriptEl) scriptEl.remove();
      }
  }, [title, description, canonicalUrl, ogImageUrl, jsonLd]);

  return null;
}
