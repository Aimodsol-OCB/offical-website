import IosClickFix from "@/components/IosClickFix";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Amidsol — IT Solutions & Technology",
  description:
    "Amidsol helps companies digitize their businesses with custom software, consulting, and product design.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      {/*
        Original theme stylesheets, copied verbatim (same load order as the
        scraped index.html: bootstrap first, then the theme's own style.css
        so its rules win the cascade, then animate.min.css for the .animated
        utility classes some components reference).
      */}
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
      </head>
      <body className="page_wrapper"> 
         <IosClickFix />
        {children}
      </body>
    </html>
  );
}
