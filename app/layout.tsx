import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GlobalNavbar } from "@/components/GlobalNavbar";
import { LocaleProvider } from "@/components/LocaleProvider";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.flextock.com"),
  title: {
    default: "Flextock — Commerce infrastructure for growing brands",
    template: "%s — Flextock",
  },
  description:
    "Flextock brings fulfillment, delivery, inventory, and cash workflows into one accountable operation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Flextock",
    title: "Flextock — Commerce infrastructure for growing brands",
    description:
      "Fulfillment, delivery, inventory, and cash workflows for growing commerce brands.",
    url: "https://www.flextock.com",
    images: [
      {
        url: "/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Flextock",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flextock — Commerce infrastructure for growing brands",
    description:
      "Fulfillment, delivery, inventory, and cash workflows for growing commerce brands.",
    images: ["/logos/logo.png"],
  },
  icons: {
    icon: "/logos/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Flextock",
              url: "https://www.flextock.com",
              logo: "https://www.flextock.com/logos/logo.png",
              sameAs: [
                "https://www.facebook.com/Flextock.eg/",
                "https://www.instagram.com/flextock.co/?hl=en",
                "https://www.linkedin.com/company/flextock/posts/?feedView=all",
                "https://www.tiktok.com/@flextock.eg",
              ],
            }),
          }}
        />
        <LocaleProvider>
          <GlobalNavbar />
          {children}
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
