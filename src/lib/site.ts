export const siteUrl = "https://sangavi-hospital.com";

export const hospitalName = "Sangavi Hospital";
export const serviceArea = [
  "Sangavi",
  "New Sangavi",
  "Pimple Saudagar",
  "Pimpri-Chinchwad",
  "Pune",
];

export const hospitalContact = {
  address: "New Sangavi Hospital, New Sangavi Pune",
  phone: "+91 98765 43210",
  email: "info@sangavi-hospital.com",
  hours: "24/7",
  emergencyContact: "+91 98765 43210",
};

export const mapSearchUrl = `https://maps.google.com/?q=${encodeURIComponent(
  hospitalContact.address || "Sangavi Hospital Sangavi Pune",
)}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "general-medicine",
    title: "General Medicine",
    shortDescription:
      "Everyday medical guidance, assessment and ongoing care for adults.",
    description:
      "General medicine supports the prevention, assessment and treatment of a wide range of adult health concerns. A consultation is a chance to discuss symptoms, medical history and next steps with a qualified clinician.",
    icon: "＋",
    color: "mint",
  },
  {
    slug: "cardiology",
    title: "Cardiology",
    shortDescription:
      "Heart-health consultations and coordinated cardiovascular care.",
    description:
      "Cardiology focuses on the heart and circulatory system. Speak with the hospital team about your concerns, the appropriate assessment and how to arrange a consultation.",
    icon: "♡",
    color: "coral",
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    shortDescription:
      "Evaluation and care for bone, joint and movement-related concerns.",
    description:
      "Orthopedic care addresses concerns affecting bones, joints and movement. The care team can help you understand available consultation options and the right next step for your needs.",
    icon: "⌁",
    color: "blue",
  },
  {
    slug: "pediatrics",
    title: "Pediatrics",
    shortDescription:
      "Healthcare support for infants, children and adolescents.",
    description:
      "Pediatric consultations are designed around the health and wellbeing of children and adolescents. Contact the hospital to ask about availability and appointment arrangements.",
    icon: "✳",
    color: "yellow",
  },
  {
    slug: "gynecology",
    title: "Gynecology",
    shortDescription:
      "Women's health consultations and compassionate guidance.",
    description:
      "Gynecology supports women's health through informed consultation and care planning. Contact the hospital team to discuss your concern and arrange an appropriate appointment.",
    icon: "❋",
    color: "lilac",
  },
  {
    slug: "emergency-care",
    title: "Emergency Care",
    shortDescription:
      "For urgent symptoms, seek emergency medical help immediately.",
    description:
      "If you or someone nearby may be experiencing a medical emergency, contact your local emergency services or go to the nearest emergency department now. Do not wait for an online response.",
    icon: "＋",
    color: "coral",
  },
  {
    slug: "diagnostics",
    title: "Diagnostics",
    shortDescription:
      "Information about diagnostic services and assessment options.",
    description:
      "Diagnostic testing can help clinicians understand a health concern and guide care. Please contact the hospital team to confirm which tests are available and whether a referral or preparation is needed.",
    icon: "⌕",
    color: "blue",
  },
  {
    slug: "surgery",
    title: "Surgery",
    shortDescription:
      "Consultation and care planning for surgical treatment options.",
    description:
      "Surgical care begins with a consultation to understand a diagnosis, treatment options, potential benefits and risks. The treating clinician will guide decisions based on each patient's individual circumstances.",
    icon: "✚",
    color: "mint",
  },
] as const;

export const faqs = [
  {
    question: "How can I enquire about an appointment?",
    answer:
      "Use the contact form on this website and tell us which service you need. The hospital team can follow up using the contact details you provide.",
  },
  {
    question: "Which areas does Sangavi Hospital serve?",
    answer:
      "The website is intended for people looking for healthcare in Sangavi, New Sangavi, Pimple Saudagar, Pimpri-Chinchwad and nearby parts of Pune.",
  },
  {
    question: "Can I use the contact form for a medical emergency?",
    answer:
      "No. The contact form is not monitored for emergencies. If you may be experiencing a medical emergency, contact local emergency services or go to the nearest emergency department immediately.",
  },
  {
    question: "How do I confirm a department's availability?",
    answer:
      "Send an enquiry through the contact form. Please confirm current services, clinician availability, timings and any preparation directly with the hospital before travelling.",
  },
];

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: hospitalName,
  description:
    "Patient-focused healthcare information and services for Sangavi, New Sangavi, Pimple Saudagar and Pimpri-Chinchwad, Pune.",
  url: siteUrl,
  areaServed: serviceArea.map((name) => ({
    "@type": "City",
    name,
  })),
  address: {
    "@type": "PostalAddress",
    streetAddress: hospitalContact.address,
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  telephone: hospitalContact.phone,
  email: hospitalContact.email,
  medicalSpecialty: [
    "PrimaryCare",
    "Cardiovascular",
    "Orthopedic",
    "Pediatric",
    "Gynecologic",
  ],
};

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
