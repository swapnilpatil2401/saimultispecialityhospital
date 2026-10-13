import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { absoluteUrl, hospitalContact, mapSearchUrl, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Sangavi Hospital",
  description:
    "Contact Sangavi Hospital to enquire about healthcare services or appointments in Sangavi, New Sangavi, Pimple Saudagar and Pimpri-Chinchwad, Pune.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Contact Sangavi Hospital",
    description: "Contact Sangavi Hospital to enquire about services or appointments in Sangavi and nearby Pune communities.",
    url: absoluteUrl("/contact"),
  },
  twitter: {
    title: "Contact Sangavi Hospital",
    description: "Contact Sangavi Hospital to enquire about services or appointments in Sangavi and nearby Pune communities.",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Sangavi Hospital",
  url: absoluteUrl("/contact"),
  mainEntity: { "@type": "Hospital", name: "Sangavi Hospital", url: siteUrl },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c") }} />
      <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Contact</span></div><span className="eyebrow">We’re here to listen</span><h1>Let’s find your <em>next step.</em></h1><p>For an appointment request or a question about our services, send the team a message. We’ll use the details you provide to respond.</p></div></section>
      <section className="container contact-page-grid">
        <aside className="contact-info"><span className="eyebrow">Contact information</span><h2>Start a conversation.</h2><p>Tell us how we can help. The hospital team will follow up using the contact details you share.</p><div className="contact-info-card"><h3>Location</h3><p>{hospitalContact.address || "Sangavi, Pune, Maharashtra — exact street address to be confirmed before your visit."}<br />Serving nearby Sangavi, New Sangavi, Pimple Saudagar and Pimpri-Chinchwad.</p></div>{hospitalContact.phone && <div className="contact-info-card"><h3>Phone</h3><p><a href={`tel:${hospitalContact.phone}`}>{hospitalContact.phone}</a></p></div>}{hospitalContact.email && <div className="contact-info-card"><h3>Email</h3><p><a href={`mailto:${hospitalContact.email}`}>{hospitalContact.email}</a></p></div>}{hospitalContact.hours && <div className="contact-info-card"><h3>Working hours</h3><p>{hospitalContact.hours}</p></div>}<div className="contact-info-card"><h3>Before your visit</h3><p>Please confirm current department availability and timings directly with the team before travelling.</p></div><div className="emergency-note"><strong>Medical emergency?</strong><p>{hospitalContact.emergencyContact ? <>Call <a href={`tel:${hospitalContact.emergencyContact}`}>{hospitalContact.emergencyContact}</a> or go to the nearest emergency department immediately. This form is not monitored for urgent care.</> : "Contact local emergency services or go to the nearest emergency department immediately. This form is not monitored for urgent care."}</p></div><a className="map-open" href={mapSearchUrl} target="_blank" rel="noreferrer">Search Sangavi Hospital on Google Maps <span aria-hidden="true">↗</span></a></aside>
        <ContactForm />
      </section>
      <section className="container contact-map-section" aria-label="Location search">
        <div className="map-frame-heading"><span className="eyebrow">Find the location</span><p>Search results may not identify the correct entrance. Please confirm the exact hospital address before travelling.</p></div>
        <iframe
          className="contact-map-frame"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(hospitalContact.address || "Sangavi Hospital Sangavi Pune")}&z=14&output=embed`}
          title="Google Maps search for Sangavi Hospital in Sangavi, Pune"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </section>
    </main>
  );
}
