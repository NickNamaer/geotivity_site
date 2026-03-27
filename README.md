# GeoTivity site

React + Vite で作成した GeoTivity のサイトです。

## ページ
- `/` 事業内容
- `/software` ソフト紹介 / トライアル / 販売導線

## 起動
```bash
npm install
npm run dev
```

## 差し替えポイント
- `public/logo-mark.jpg`
- `public/logo-text.jpg`
- `src/pages/SoftwarePage.jsx` 内のメールリンクや文言

現状はフォーム未実装でも公開できるよう、トライアル申込・見積依頼・お問い合わせを `mailto:` 導線にしてあります。
