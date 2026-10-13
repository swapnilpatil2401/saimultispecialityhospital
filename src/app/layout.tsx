import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { organizationJsonLd, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sangavi Hospital | Patient-focused care in Pune",
    template: "%s | Sangavi Hospital",
  },
  description:
    "Explore patient-focused healthcare services for Sangavi, New Sangavi, Pimple Saudagar and Pimpri-Chinchwad. Contact Sangavi Hospital to make an enquiry.",
  applicationName: "Sangavi Hospital",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Sangavi Hospital",
    title: "Sangavi Hospital | Patient-focused care in Pune",
    description:
      "Explore patient-focused healthcare services for Sangavi, New Sangavi, Pimple Saudagar and Pimpri-Chinchwad.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sangavi Hospital | Patient-focused care in Pune",
    description:
      "Explore patient-focused healthcare services for Sangavi, New Sangavi, Pimple Saudagar and Pimpri-Chinchwad.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
