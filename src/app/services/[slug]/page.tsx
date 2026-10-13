import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, services, siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Sangavi, Pune`,
    description: `${service.shortDescription} Contact Sangavi Hospital, serving Sangavi and nearby Pune communities, to ask about availability.`,
    alternates: { canonical: absoluteUrl(`/services/${service.slug}`) },
    openGraph: {
      title: `${service.title} in Sangavi, Pune`,
      description: service.shortDescription,
      url: absoluteUrl(`/services/${service.slug}`),
    },
    twitter: {
      title: `${service.title} in Sangavi, Pune`,
      description: service.shortDescription,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    name: service.title,
    description: service.description,
    provider: { "@type": "Hospital", name: "Sangavi Hospital", url: siteUrl },
    areaServed: ["Sangavi", "New Sangavi", "Pimple Saudagar", "Pimpri-Chinchwad", "Pune"],
    url: absoluteUrl(`/services/${service.slug}`),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
      { "@type": "ListItem", position: 3, name: service.title, item: absoluteUrl(`/services/${service.slug}`) },
    ],
  };

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/services">Services</Link><span aria-hidden="true">/</span><span>{service.title}</span></div><span className="eyebrow">Healthcare services</span><h1>{service.title} in <em>Sangavi, Pune.</em></h1><p>{service.shortDescription}</p></div></section>
      <section className="prose-section"><div className="container prose-grid"><aside className="prose-aside">About this service</aside><div className="prose-content service-detail"><h2>Thoughtful guidance for your care</h2><p>{service.description}</p><p>People in Sangavi, New Sangavi, Pimple Saudagar and across Pimpri-Chinchwad can contact the hospital to ask about current availability, appointment arrangements and any preparation they may need.</p><p className="medical-note">{service.slug === "emergency-care" ? "If you may be experiencing a medical emergency, contact local emergency services or go to the nearest emergency department immediately. Do not wait for a response through this website." : "This page provides general information only, not diagnosis or treatment advice. Please speak with a qualified healthcare professional about your individual circumstances."}</p><h2>Make an enquiry</h2><p>Send the team a message to ask about this service. For urgent or emergency symptoms, do not use the contact form.</p>      <Link className="button" href="/contact#contact-form">Enquire about {service.title} <span aria-hidden="true">↗</span></Link></div></div></section>
    </main>
  );
}
