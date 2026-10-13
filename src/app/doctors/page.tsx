import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { doctors } from "@/lib/doctors";

export const metadata: Metadata = {
  title: "Doctors and Specialists",
  description:
    "Find doctor and specialist information at Sangavi Hospital in Pune. Contact the hospital team to ask about appointments and current clinician availability.",
  alternates: { canonical: absoluteUrl("/doctors") },
  openGraph: {
    title: "Doctors and Specialists",
    description: "Find doctor and specialist information at Sangavi Hospital in Pune. Ask about appointments and current clinician availability.",
    url: absoluteUrl("/doctors"),
  },
  twitter: {
    title: "Doctors and Specialists",
    description: "Find doctor and specialist information at Sangavi Hospital in Pune.",
  },
};

export default function DoctorsPage() {
  return (
    <main id="main-content">
      <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Doctors</span></div><span className="eyebrow">Meet your care team</span><h1>People who put <em>care first.</em></h1><p>Learn about the clinicians connected with Sangavi Hospital and ask the team about current availability.</p></div></section>
      <section className="prose-section"><div className="container">
        {doctors.length === 0 ? <div className="doctor-empty"><span className="eyebrow">Doctor directory</span><h2>Clinician profiles are being updated.</h2><p>We’re preparing accurate doctor profiles with verified qualifications, specialities and appointment information. In the meantime, contact the hospital team to enquire about available clinicians and services.</p><Link className="button" href="/contact#contact-form">Ask about a doctor <span aria-hidden="true">↗</span></Link></div> : <div className="facility-grid">{doctors.map((doctor) => <article className="doctor-card" key={doctor.slug}><h2>{doctor.name}</h2><p>{doctor.specialization}</p><Link className="text-link" href={`/doctors/${doctor.slug}`}>View profile <span aria-hidden="true">↗</span></Link></article>)}</div>}
      </div></section>
    </main>
  );
}
