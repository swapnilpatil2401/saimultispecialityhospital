import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Sangavi Hospital",
  description:
    "Learn about Sangavi Hospital's patient-focused approach and commitment to accessible healthcare in Sangavi and neighbouring Pune communities.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About Sangavi Hospital",
    description: "Learn about Sangavi Hospital's patient-focused approach and commitment to accessible healthcare in Sangavi and neighbouring Pune communities.",
    url: absoluteUrl("/about"),
  },
  twitter: {
    title: "About Sangavi Hospital",
    description: "Learn about Sangavi Hospital's patient-focused approach in Sangavi and neighbouring Pune communities.",
  },
};

const values = [
  ["01", "Listen first", "Every patient deserves the time and space to share what matters to them."],
  ["02", "Treat with respect", "We believe care should be considerate, inclusive and centred on each person."],
  ["03", "Communicate clearly", "Understanding your options helps you feel more confident about the next step."],
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero"><div className="container"><div className="breadcrumbs"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>About</span></div><span className="eyebrow">Who we are</span><h1>Care begins with <em>understanding.</em></h1><p>Sangavi Hospital is here to help people and families across Sangavi and nearby Pune communities find information, ask questions and connect with healthcare.</p></div></section>
      <section className="prose-section"><div className="container prose-grid"><aside className="prose-aside">Our purpose</aside><div className="prose-content"><h2>A welcoming place to start</h2><p>Health can bring uncertainty. Our aim is to make the first step feel simpler: learn about the services available, understand how to make an enquiry and have a thoughtful conversation with the hospital team.</p><p>We serve people looking for healthcare in Sangavi, New Sangavi, Pimple Saudagar, Pimpri-Chinchwad and surrounding parts of Pune. Before travelling, please confirm current service availability and location details directly with the hospital.</p><h2>Our mission</h2><p>To support our community with respectful, patient-focused care and clear information at every point of the healthcare journey.</p><h2>Our vision</h2><p>To be a trusted neighbourhood healthcare partner where people feel listened to, informed and supported.</p></div></div></section>
      <section className="section-pad" style={{ background: "var(--cream)" }}><div className="container"><div className="section-heading"><span className="eyebrow">What guides us</span><h2>Values you can feel.</h2></div><div className="values-grid">{values.map(([number, title, text]) => <article className="value-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="contact-banner"><div className="container contact-banner-inner"><div><span className="eyebrow">Let’s start with a conversation</span><h2>We’re here to help<br />you find the next step.</h2></div><Link className="button button-light" href="/contact#contact-form">Contact our team <span aria-hidden="true">↗</span></Link></div></section>
    </main>
  );
}
