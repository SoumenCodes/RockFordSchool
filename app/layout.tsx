import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rock Ford Public School | Excellence in Education",
  description: "Rock Ford Public School — nurturing young minds with academic excellence, character, and community.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
