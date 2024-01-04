import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NextUiProvider from "@/providers/NextUiProvider";
import NextNavbar from "@/components/nextui-navbar";
import { SiteFooter } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConvertifyX - Free Unlimited File Converter",
  description: `Unleash your creativity with ConvertifyX – the ultimate online tool for
  unlimited and free multimedia conversion. Transform images, audio, and
  videos effortlessly, without restrictions. Start converting now and
  elevate your content like never before!`,
  creator: "Muhammad Zain-ul-Abdin, SOUHAIL BEN-LHACHEMI",
  keywords:
    "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUiProvider>
          <NextNavbar />
          <Toaster />
          <div className="pt-24 min-h-screen lg:pt-24 2xl:pt-32 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
            {children}
          </div>
          <SiteFooter />
        </NextUiProvider>
      </body>
    </html>
  );
}
