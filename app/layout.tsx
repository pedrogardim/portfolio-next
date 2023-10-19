import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import { spaceMono } from "../utils/fonts";

export const metadata: Metadata = {
  title: "Pedro Gardim",
  description: "Pedro Gardim's personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={spaceMono.className + " bg-background h-full"}>
        <div className="z-10 max-w-7xl w-full font-mono text-sm px-12 py-7 mx-auto h-full flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
