import "./globals.css";
import type { Metadata } from "next";
import Provider from "./providers/Provider";
export const metadata: Metadata = {
  title: "Akram`s | Portfolio",
  description: "Akram Abuhajar Works and Contacts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
      </head>
      {/* <body>{children}</body> */}
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
