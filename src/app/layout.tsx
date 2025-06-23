"use client";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      <body
        className={`${inter.className} antialiased bg-secondary`}
      >
        {children}
      </body>
    </html>
  );
}
