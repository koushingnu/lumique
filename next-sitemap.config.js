/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://lumique-web.com", // あなたの本番ドメイン
  generateRobotsTxt: true, // robots.txtも同時生成
  // 追加オプション例
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin", "/private"], // 除外したいパス（あれば）
};
