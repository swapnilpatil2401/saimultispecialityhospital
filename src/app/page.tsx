import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { faqs, hospitalContact, mapSearchUrl, serviceArea, services } from "@/lib/site";

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <section className="hero">
        <div className="hero-orb orb-one" aria-hidden="true" />
        <div className="hero-orb orb-two" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="hero-kicker"><span /> Care that feels closer</p>
            <h1>Good health begins with <em>being heard.</em></h1>
            <p className="hero-lede">
              Thoughtful, patient-first healthcare for families in Sangavi, New Sangavi, Pimple Saudagar and the wider Pune community.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/contact#contact-form">Book an appointment <span aria-hidden="true">↗</span></Link>
              {hospitalContact.phone
                ? <a className="button button-outline" href={`tel:${hospitalContact.phone}`}>Call the hospital <span aria-hidden="true">↗</span></a>
                : <Link className="button button-outline" href="/services">Explore our services</Link>}
            </div>
            <div className="hero-note"><span className="note-icon" aria-hidden="true">✳</span><span>Care starts with a conversation.<br /><strong>We’re here to help you take the next step.</strong></span></div>
          </div>
          <div className="hero-art" role="img" aria-label="Illustration of a welcoming healthcare centre">
            <div className="hero-sun" />
            <div className="hero-building">
              <div className="building-roof" />
              <div className="building-face">
                <div className="building-cross"><span /><span /></div>
                <div className="building-label">SANGAVI<br />HOSPITAL</div>
                <div className="building-windows"><i /><i /><i /></div>
                <div className="building-door" />
              </div>
              <div className="building-shadow" />
            </div>
            <div className="art-leaf leaf-left">⌁</div>
            <div className="art-leaf leaf-right">⌁</div>
            <div className="art-caption"><span className="caption-dot" /> Your neighbourhood care team</div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="container hero-bottom-inner">
            <span>Healthcare for the community</span><span className="bottom-line" /><span>Sangavi · Pune, Maharashtra</span><span className="bottom-cross" aria-hidden="true">✳</span>
          </div>
        </div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <div className="intro-label"><span className="eyebrow">A little closer to home</span><span className="vertical-note">SANGAVI · PUNE</span></div>
          <div className="intro-content">
            <h2>Care is more than treatment.<br /><em>It’s how you feel along the way.</em></h2>
            <div className="intro-lower"><p>At Sangavi Hospital, we believe every good care journey begins with a thoughtful conversation. Find information about our services, learn what to expect and reach out to our team when you’re ready.</p><Link className="text-link" href="/about">Get to know us <span aria-hidden="true">↗</span></Link></div>
          </div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="container">
          <div className="section-topline"><SectionHeading eyebrow="Care for every chapter" title="Our healthcare services" description="From everyday health questions to specialist consultations, explore care options and find the right place to begin." /><Link className="text-link desktop-link" href="/services">View all services <span aria-hidden="true">↗</span></Link></div>
          <div className="service-grid">{services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
          <Link className="text-link mobile-link" href="/services">View all services <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="care-section section-pad">
        <div className="container care-layout">
          <div className="care-art" aria-hidden="true">
            <div className="care-circle"><span className="care-cross"><i /><i /></span><span className="care-art-word">CARE<br />WITH<br />HEART</span></div>
            <span className="care-spark spark-a">✳</span><span className="care-spark spark-b">✳</span>
            <div className="care-art-caption">A place to begin again</div>
          </div>
          <div className="care-copy">
            <span className="eyebrow">Why Sangavi Hospital</span>
            <h2>Human care.<br /><em>Clear next steps.</em></h2>
            <p>Finding healthcare should feel straightforward. We’re building a welcoming place where people can understand their options, ask questions and connect with the care they need.</p>
            <ul className="check-list"><li><span aria-hidden="true">✓</span> A patient-first approach to every conversation</li><li><span aria-hidden="true">✓</span> A range of healthcare services in one place</li><li><span aria-hidden="true">✓</span> Conveniently serving nearby Pune communities</li></ul>
            <Link className="button button-dark" href="/about">Discover our approach <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="community-section section-pad">
        <div className="container">
          <SectionHeading eyebrow="Your care, your way" title="Useful details for your next step." description="Get to know the care team and learn about the hospital experience before you get in touch." />
          <div className="community-grid">
            <article><span className="eyebrow">Our clinicians</span><h3>Meet the people behind your care.</h3><p>Find verified clinician information and ask the team about current appointment availability.</p><Link className="text-link" href="/doctors">Explore the doctor directory <span aria-hidden="true">↗</span></Link></article>
            <article><span className="eyebrow">Your visit</span><h3>Know what to ask before you arrive.</h3><p>Explore facility information and confirm the details that matter for your visit.</p><Link className="text-link" href="/facilities">Explore hospital facilities <span aria-hidden="true">↗</span></Link></article>
          </div>
        </div>
      </section>

      <section className="location-section section-pad">
        <div className="container location-layout">
          <div className="location-copy"><span className="eyebrow">Close to your community</span><h2>Care that’s<br /><em>within reach.</em></h2><p>Looking for a hospital near Sangavi, New Sangavi or Pimple Saudagar? Sangavi Hospital is focused on serving families across Pimpri-Chinchwad and Pune.</p><div className="area-chips">{serviceArea.slice(0, 4).map((area) => <span key={area}>{area}</span>)}</div><Link className="text-link" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link></div>
          <div className="map-card">
            <div className="map-grid" aria-hidden="true"><span className="map-road road-one" /><span className="map-road road-two" /><span className="map-road road-three" /><span className="map-road road-four" /><span className="map-park park-one" /><span className="map-park park-two" /></div>
            <div className="map-pin"><span>✚</span></div>
            <div className="map-label"><strong>Sangavi Hospital</strong><span>{hospitalContact.address || "Sangavi · Pune, Maharashtra"}</span></div>
            <a className="map-open" href={mapSearchUrl} target="_blank" rel="noreferrer">Search on Google Maps <span aria-hidden="true">↗</span></a>
            <p className="map-disclaimer">Confirm the hospital’s exact address before travelling.</p>
          </div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="container faq-layout">
          <div><span className="eyebrow">A few helpful answers</span><h2>Good questions.<br /><em>Clear answers.</em></h2><p>Can’t find what you need? Send the team an enquiry.</p><Link className="text-link" href="/contact">Ask us a question <span aria-hidden="true">↗</span></Link></div>
          <div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="emergency-strip" aria-label="Emergency information">
        <div className="container"><strong>Medical emergency?</strong><p>This website is not an emergency service. Contact local emergency services or go to the nearest emergency department immediately.</p></div>
      </section>

      <section className="contact-banner" id="contact-cta">
        <div className="container contact-banner-inner"><div><span className="eyebrow">We’re listening</span><h2>Your health questions<br />deserve a conversation.</h2></div><Link className="button button-light" href="/contact#contact-form">Talk to our team <span aria-hidden="true">↗</span></Link><span className="banner-spark" aria-hidden="true">✳</span></div>
      </section>
    </main>
  );
}
