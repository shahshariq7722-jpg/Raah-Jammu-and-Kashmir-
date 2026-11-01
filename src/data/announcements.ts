import { AnnouncementItem } from './types.ts';

export const RECENT_ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'ann-1',
    title: 'NSP & PMSSS Verification Warning for J&K Students',
    date: 'October 28, 2026',
    department: 'Higher Education Department & AICTE',
    summary: 'Students applying for post-matric scholarships must ensure their Aadhaar is actively seeded with their primary bank account (NPCI mapping), otherwise DBT disbursements will fail.',
    officialLink: 'https://scholarships.gov.in',
    isUrgent: true
  },
  {
    id: 'ann-2',
    title: 'Winter Power Curtailment Schedule Published by KPDCL & JPDCL',
    date: 'October 24, 2026',
    department: 'Power Development Department (JKPDD)',
    summary: 'The Power Development Department has issued the official winter schedule for metered and non-metered feeders across Kashmir and Jammu divisions. Check the 1912 customer care line for feeder-specific schedules.',
    officialLink: 'https://samadhan.jk.gov.in',
    isUrgent: false
  },
  {
    id: 'ann-3',
    title: 'e-UNNAT Integrates 40 New Public Services Under PSGA Timelines',
    date: 'October 15, 2026',
    department: 'Information Technology Department J&K',
    summary: 'Citizen applications for revenue certificates, NOCs, and trade permits now feature mandatory automated tracking with SMS notifications at each clearance milestone.',
    officialLink: 'https://eunnat.jk.gov.in',
    isUrgent: false
  },
  {
    id: 'ann-4',
    title: 'Tele-MANAS Mental Health Support Expansion to Regional Languages',
    date: 'October 05, 2026',
    department: 'Health & Medical Education Department',
    summary: 'Toll-free tele-counselling (Dial 14416) is fully staffed with native counsellors speaking Kashmiri, Dogri, Gojri, Pahari, Urdu, and English 24 hours a day.',
    officialLink: 'https://telemanas.mohfw.gov.in',
    isUrgent: false
  }
];
