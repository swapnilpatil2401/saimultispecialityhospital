import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { doctors } from "@/lib/doctors";

export const dynamicParams = false;

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);
  if (!doctor) return {};
  return {
    title: `${doctor.name} | ${doctor.specialization}`,
    description: `Meet ${doctor.name}, ${doctor.specialization} at Sangavi Hospital in Pune. Ask the hospital team about consultation availability.`,
    alternates: { canonical: absoluteUrl(`/doctors/${doctor.slug}`) },
    openGraph: {
      title: `${doctor.name} | ${doctor.specialization}`,
      description: `Meet ${doctor.name}, ${doctor.specialization} at Sangavi Hospital in Pune.`,
      url: absoluteUrl(`/doctors/${doctor.slug}`),
    },
    twitter: {
      title: `${doctor.name} | ${doctor.specialization}`,
      description: `Meet ${doctor.name}, ${doctor.specialization} at Sangavi Hospital in Pune.`,
    },
  };
}

export default async function DoctorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = doctors.find((item) => item.slug === slug);
  if (!doctor) notFound();
  const doctorJsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    medicalSpecialty: doctor.specialization,
    description: `${doctor.qualification}. ${doctor.experience} experience.`,
    worksFor: { "@type": "Hospital", name: "Sangavi Hospital", url: siteUrl },
    url: absoluteUrl(`/doctors/${doctor.slug}`),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Doctors", item: absoluteUrl("/doctors") },
      { "@type": "ListItem", position: 3, name: doctor.name, item: absoluteUrl(`/doctors/${doctor.slug}`) },
    ],
  };
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/doctors">Doctors</Link><span aria-hidden="true">/</span><span>{doctor.name}</span></div><span className="eyebrow">{doctor.specialization}</span><h1>{doctor.name}</h1><p>{doctor.qualification} · {doctor.experience}</p></div></section>
      <section className="prose-section"><div className="container prose-grid"><aside className="prose-aside">Doctor profile</aside><div className="prose-content"><h2>Areas of expertise</h2><ul>{doctor.expertise.map((area) => <li key={area}>{area}</li>)}</ul><h2>Consultation information</h2><p>{doctor.consultation}</p><Link className="button" href="/contact#contact-form">Enquire about an appointment <span aria-hidden="true">↗</span></Link></div></div></section>
    </main>
  );
}
