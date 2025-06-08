// src/data/mockJobs.ts

// Define the type for a single job to ensure consistency and type-checking
export interface Job {
  id: number;
  title: string;
  specialty: string;
  clinicName: string;
  dates: string;
  time: string;
  location: string;
  rate: string;
  description: string;
  // New fields for custom application links
  applicationLink: string;
  buttonText?: string; // Optional: if you want custom text for the button
}

const mockJobs: Job[] = [
  {
    id: 1,
    title: 'Emergency Physician',
    specialty: 'Emergency Medicine',
    clinicName: 'City General Hospital',
    dates: 'Sunday, July 14th',
    time: '8:00 AM - 6:00 PM',
    location: 'Downtown, City',
    rate: '$120/hour',
    description: 'Seeking an experienced Emergency Physician for a busy Sunday shift. Must be board-certified with valid ACLS/BLS.',
    applicationLink: 'https://wa.me/yournumber?text=I%27m%20interested%20in%20the%20Emergency%20Physician%20shift%20at%20City%20General%20Hospital',
    buttonText: 'Apply via WhatsApp', // Custom button text
  },
  {
    id: 2,
    title: 'Pediatric Nurse',
    specialty: 'Pediatrics',
    clinicName: 'Children\'s Care Clinic',
    dates: 'Monday, July 15th',
    time: '9:00 AM - 5:00 PM',
    location: 'Northside, City',
    rate: '$65/hour',
    description: 'Experienced Pediatric Nurse needed for a day shift. Strong communication skills required.',
    applicationLink: 'https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform', // Example: A Google Form link
    buttonText: 'Apply via Google Form',
  },
  {
    id: 3,
    title: 'Dermatologist',
    specialty: 'Dermatology',
    clinicName: 'Skin Health Center',
    dates: 'Tuesday, July 16th',
    time: '10:00 AM - 4:00 PM',
    location: 'Westside, City',
    rate: '$150/hour',
    description: 'Board-certified Dermatologist for a specialized clinic. Must have experience with minor procedures.',
    applicationLink: 'https://www.skinhealthcenter.com/careers/dermatologist-opening', // Example: Link to the clinic's own job post
    buttonText: 'Apply on Clinic Site',
  },
  {
    id: 4,
    title: 'General Practitioner',
    specialty: 'Family Medicine',
    clinicName: 'Community Health Clinic',
    dates: 'Wednesday, July 17th',
    time: '9:00 AM - 5:00 PM',
    location: 'Eastside, City',
    rate: '$90/hour',
    description: 'GP needed for general consultations. Experience in primary care essential.',
    applicationLink: 'https://wa.me/anothernumber?text=I%27m%20interested%20in%20the%20GP%20shift%20at%20Community%20Health%20Clinic', // Another WhatsApp link
    // No buttonText here, will default to "Apply Now"
  },
];

export default mockJobs;