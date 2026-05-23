import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata: Metadata = {
  title: {
    default: "Mile High Production | Film Production & Distribution Company",
    template: "%s | Mile High Production",
  },
  description:
    "Mile High Production is a premier film production and distribution company dedicated to crafting cinematic experiences that inspire, entertain, and push the boundaries of storytelling.",
  keywords: [
    "film production",
    "movie production",
    "film distribution",
    "Mile High Production",
    "cinema",
    "filmmaking",
    "entertainment",
    "movies",
  ],
  authors: [{ name: "Mile High Production" }],
  creator: "Mile High Production",
  publisher: "Mile High Production",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://milehighproduction.com",
    siteName: "Mile High Production",
    title: "Mile High Production | Film Production & Distribution Company",
    description:
      "Crafting cinematic experiences that inspire, entertain, and push the boundaries of storytelling.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mile High Production | Film Production & Distribution Company",
    description:
      "Crafting cinematic experiences that inspire, entertain, and push the boundaries of storytelling.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <BootstrapClient />
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
