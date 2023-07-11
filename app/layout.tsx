import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Tailwind",
  description: "Test how to use Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
