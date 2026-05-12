export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://fyjl-management-system.vercel.app/sitemap.xml",
  };
}