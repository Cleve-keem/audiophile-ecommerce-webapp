import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import ConvexClientProvider from "@/context/convexClientProvider";

export const metadata: Metadata = {
  title: {
    template: "Audiophile Ecommerce | %s",
    default: "Welcome - Audiophile",
  },
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
        <ConvexClientProvider>{children}</ConvexClientProvider>
        <Footer />
      </body>
    </html>
  );
}
