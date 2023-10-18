import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

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
    <html lang="en">
      <body className={spaceMono.className + " bg-background"}>{children}</body>
    </html>
  );
}
