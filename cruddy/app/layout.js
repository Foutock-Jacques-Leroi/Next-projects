import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Cruddy - FYJL UMS",
  description: "A clean, fast interface to create, view, edit, and delete users connected to MongoDB in real time.",
  openGraph: {
    title: "Cruddy - FYJL UMS",
    description: "Manage your users with ease.",
    url: "https://fyjl-management-system.vercel.app",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
