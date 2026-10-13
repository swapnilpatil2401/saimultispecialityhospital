export type Doctor = {
  slug: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  expertise: string[];
  consultation: string;
};

// Add only verified clinician details before publishing profiles.
export const doctors: Doctor[] = [];
