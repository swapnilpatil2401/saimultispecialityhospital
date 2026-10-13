import type { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/service-card";
import { absoluteUrl, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Healthcare Services in Sangavi, Pune",
  description:
    "Explore healthcare services at Sangavi Hospital, serving Sangavi, New Sangavi, Pimple Saudagar and Pimpri-Chinchwad.",
  alternates: { canonical: absoluteUrl("/services") },
  openGraph: {
    title: "Healthcare Services in Sangavi, Pune",
    description: "Explore healthcare services at Sangavi Hospital, serving Sangavi, New Sangavi, Pimple Saudagar and Pimpri-Chinchwad.",
    url: absoluteUrl("/services"),
  },
  twitter: {
    title: "Healthcare Services in Sangavi, Pune",
    description: "Explore healthcare services at Sangavi Hospital for Sangavi and nearby Pune communities.",
  },
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Services</span></div><span className="eyebrow">Care, thoughtfully connected</span><h1>Healthcare services for <em>everyday life.</em></h1><p>Explore the healthcare areas listed by Sangavi Hospital. Contact the team to confirm current availability, appointments and the right next step for your needs.</p></div></section>
      <section className="section-pad"><div className="container"><div className="service-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div><p className="medical-note" style={{ marginTop: 28 }}>Service information is general and does not replace advice from a qualified healthcare professional. Availability may change; please confirm details with the hospital.</p></div></section>
    </main>
  );
}
