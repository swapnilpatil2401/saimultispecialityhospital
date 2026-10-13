import Link from "next/link";
import { hospitalContact, navLinks, services } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link className="brand brand-footer" href="/" aria-label="Sangavi Hospital home">
            <span className="brand-mark" aria-hidden="true"><span /><span /></span>
            <span className="brand-copy"><strong>SANGAVI</strong><small>HOSPITAL &amp; HEALTHCARE</small></span>
          </Link>
          <p>Patient-focused healthcare information for Sangavi and neighbouring communities in Pune.</p>
          <span className="footer-area">Sangavi · Pune, Maharashtra</span>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>{navLinks.slice(1).map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Services</h2>
          <ul>{services.slice(0, 5).map((service) => <li key={service.slug}><Link href={`/services/${service.slug}`}>{service.title}</Link></li>)}</ul>
        </div>
        <div>
          <h2>Get in touch</h2>
          <p>For an enquiry or appointment request, use our contact form.</p>
          {hospitalContact.phone && <p><a href={`tel:${hospitalContact.phone}`}>{hospitalContact.phone}</a></p>}
          {hospitalContact.email && <p><a href={`mailto:${hospitalContact.email}`}>{hospitalContact.email}</a></p>}
          {hospitalContact.hours && <p>{hospitalContact.hours}</p>}
          <Link className="footer-contact-link" href="/contact">Contact the hospital <span aria-hidden="true">↗</span></Link>
          {hospitalContact.address && <p className="footer-address">{hospitalContact.address}</p>}
          <p className="footer-address">Serving Sangavi, New Sangavi, Pimple Saudagar and Pimpri-Chinchwad.</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Sangavi Hospital. All rights reserved.</span>
        <div><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms">Terms &amp; conditions</Link></div>
        <span>Information on this website is not a substitute for medical advice.</span>
      </div>
    </footer>
  );
}
