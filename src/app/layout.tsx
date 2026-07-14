import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { site } from "@/lib/constants";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Seyfeli Gayrimenkul | Kumrular Group", template: "%s | Seyfeli Gayrimenkul" },
  description: "Kumrular Group güvencesiyle Ankara'da premium gayrimenkul ve yatırım danışmanlığı.",
  openGraph: { title: "Seyfeli Gayrimenkul", description: "Ankara'da premium gayrimenkul danışmanlığı.", url: site.url, siteName: site.name, locale: "tr_TR", type: "website" },
  twitter: { card: "summary_large_image", title: "Seyfeli Gayrimenkul", description: "Kumrular Group güvencesiyle premium gayrimenkul danışmanlığı." },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body className="noise">
        <SmoothScrollProvider>
          <Header />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
