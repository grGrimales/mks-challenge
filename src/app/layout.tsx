import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Providers } from "./components/ui";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "MKS APP",
  description:
    "Loja online de produtos de tecnologia ao seu alcance com apenas alguns cliques",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "",
    images:
      "https://res.cloudinary.com/dcxto1nnl/image/upload/v1717246351/MKS/7b28d403-cc34-4a9d-9ebc-27d4c0cab8ea.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
