import type { Metadata } from "next";
import "./globals.css";
import Header from "@/_components/Header";

export const metadata: Metadata = {
  title: "Audiophile Ecommerce",
  description: "created by Hackhim codes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
