import { GrievanceDepartment } from './types.ts';

export const GRIEVANCE_DEPARTMENTS: GrievanceDepartment[] = [
  {
    id: 'gad',
    name: 'General Administration Department (GAD)',
    category: 'Administration & Governance',
    handles: [
      'Delays in administrative clearances and citizen charter compliance',
      'Civil service officer conduct and government office responsiveness',
      'Unresolved matters escalated across multiple departments',
      'Right to Information (RTI) implementation hurdles'
    ],
    portalName: 'JK SAMADHAN – Unified Citizen Grievance Portal',
    portalUrl: 'https://samadhan.jk.gov.in',
    directComplaintUrl: 'https://samadhan.jk.gov.in',
    contactHelpline: '1800-572-2327 / 0194-2479231 (Srinagar) / 0191-2544498 (Jammu)',
    isUnified: true,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'General administrative grievances are logged into the apex JK SAMADHAN portal. You will receive a unique tracking token via SMS upon submission.',
    departmentCode: 'JK-GAD'
  },
  {
    id: 'education',
    name: 'Education Department (School & Higher Education)',
    category: 'Education & Academics',
    handles: [
      'Scholarship distribution delays and portal verification issues',
      'Teacher availability and school infrastructure deficits',
      'Excessive fee charges or private school regulation complaints',
      'Board examination and certificate attestation delays'
    ],
    portalName: 'JK SAMADHAN (Select School / Higher Education Department)',
    portalUrl: 'https://samadhan.jk.gov.in',
    directComplaintUrl: 'https://samadhan.jk.gov.in',
    contactHelpline: '0194-2452674 (DSE Kashmir) / 0191-2598349 (DSE Jammu)',
    isUnified: true,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'Does not have a separate unmonitored grievance site. Log into JK SAMADHAN and select "School Education Department" or "Higher Education Department" as the target authority.',
    departmentCode: 'JK-EDU'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medical Education Department',
    category: 'Health & Medical Services',
    handles: [
      'Doctor absenteeism and emergency ward negligence',
      'Ayushman Bharat PM-JAY Golden Card denial or hospital billing irregularities',
      'Shortage of essential medicines at Jan Aushadhi / hospital pharmacies',
      'Ambulance 108 non-response or peripheral clinic delays'
    ],
    portalName: 'JK SAMADHAN & Ayushman Bharat Grievance Cell',
    portalUrl: 'https://samadhan.jk.gov.in',
    directComplaintUrl: 'https://grievance.pmjay.gov.in',
    contactHelpline: '14555 (Ayushman Bharat National Helpline) / 104 (Health Helpline)',
    isUnified: true,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'For general hospital complaints use JK SAMADHAN. For specific PM-JAY Golden card rejections, use the National PM-JAY Grievance Portal at grievance.pmjay.gov.in.',
    departmentCode: 'JK-HME'
  },
  {
    id: 'pdd',
    name: 'Electricity / Power Development Department (JKPDD / KPDCL / JPDCL)',
    category: 'Power & Energy Utilities',
    handles: [
      'Unscheduled power curtailments and transformer breakdowns',
      'Erroneous electricity billing and meter malfunction',
      'Delays in new power connections or tariff revisions',
      'Damaged high-voltage wires and electric pole hazards'
    ],
    portalName: 'JKPDD Customer Care 1912 & JK SAMADHAN',
    portalUrl: 'https://samadhan.jk.gov.in',
    directComplaintUrl: 'https://kpdcl.jkpdd.net',
    contactHelpline: '1912 (Toll-Free 24x7 Power Emergency) / 0194-2450000 (KPDCL) / 0191-2470400 (JPDCL)',
    isUnified: true,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'For immediate power failure or spark emergency, dial 1912 first. For persistent billing disputes and policy failure, file via JK SAMADHAN selecting Power Development Department.',
    departmentCode: 'JK-PDD'
  },
  {
    id: 'jal_shakti',
    name: 'Jal Shakti / Water Supply Department (PHE)',
    category: 'Water & Sanitation Utilities',
    handles: [
      'Contaminated or muddy drinking water supply',
      'Prolonged pipeline bursts and untreated leakage',
      'Deprivation of clean water in rural tap connections (JJM)',
      'Water tanker supply irregularities during shortages'
    ],
    portalName: 'Jal Shakti Kashmir Grievance Cell & JK SAMADHAN',
    portalUrl: 'https://jalshaktiphekashmir.in/grievances',
    directComplaintUrl: 'https://jalshaktiphekashmir.in/grievances',
    contactHelpline: '1800-180-7015 (Toll-Free) / 0194-2452234 / 0191-2543654',
    isUnified: false,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'Jal Shakti PHE Kashmir maintains an online grievance portal at jalshaktiphekashmir.in/grievances. Citizens can also file water grievances on JK SAMADHAN.',
    departmentCode: 'JK-PHE'
  },
  {
    id: 'fcs_ca',
    name: 'Food, Civil Supplies & Consumer Affairs (FCS&CA)',
    category: 'Ration & Consumer Protection',
    handles: [
      'Non-issuance or under-weighing of subsidized ration / grains',
      'Fair Price Shop (FPS) dealer malpractices and overcharging',
      'Ration card bifurcation, addition of family members, or e-KYC failure',
      'Commercial LPG cylinder black-marketing and adulteration'
    ],
    portalName: 'PDS-GRAMS J&K (Public Distribution System Grievances)',
    portalUrl: 'https://feastjk.gov.in/jkgrams/',
    directComplaintUrl: 'https://feastjk.gov.in/jkgrams/',
    contactHelpline: '1800-180-7011 (Toll-Free Kashmir) / 1800-180-7106 (Toll-Free Jammu)',
    isUnified: false,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'PDS-GRAMS is the dedicated verified grievance portal for ration, food grains, and dealer concerns at feastjk.gov.in/jkgrams/. It provides direct tracking by docket number.',
    departmentCode: 'JK-FCSCA'
  },
  {
    id: 'police',
    name: 'Police Department (J&K Police)',
    category: 'Public Safety & Law Enforcement',
    handles: [
      'Online tenant, employee, and character verification issues',
      'Cyber crime, online financial frauds, and digital harassment',
      'Non-cognizable report (NCR) / lost item registrations',
      'Traffic congestion, unauthorized parking, and road safety enforcement'
    ],
    portalName: 'J&K Police Citizen e-Services Portal & ERSS 112',
    portalUrl: 'https://www.jkpoliceeservices.gov.in/Login.aspx',
    directComplaintUrl: 'https://www.jkpoliceeservices.gov.in/Login.aspx',
    contactHelpline: '112 (National Emergency Number) / 1930 (National Cyber Crime Helpline)',
    isUnified: false,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'Use jkpoliceeservices.gov.in for character verification, tenant reporting, and event permission grievances. For active emergencies dial 112; for cyber fraud dial 1930 immediately.',
    departmentCode: 'JK-POLICE'
  },
  {
    id: 'municipal',
    name: 'Housing & Urban Development / Municipal Bodies (SMC & JMC)',
    category: 'Urban Civic Infrastructure',
    handles: [
      'Uncollected household garbage and illegal waste dumping',
      'Broken streetlights, uncleaned storm drains, and open manholes',
      'Building permission plan delays and unauthorized construction',
      'Stray dog sterilization and stray animal safety concerns'
    ],
    portalName: 'SMC Grievance Cell / JMC Portal / JK SAMADHAN',
    portalUrl: 'https://smcsrinagar.in',
    directComplaintUrl: 'https://samadhan.jk.gov.in',
    contactHelpline: '1800-180-7038 (SMC Toll Free) / 0191-2520448 (JMC Jammu)',
    isUnified: true,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'SMC and JMC take civic concerns through their control helplines and via JK SAMADHAN under Housing & Urban Development Department.',
    departmentCode: 'JK-HUDD'
  },
  {
    id: 'transport',
    name: 'Transport Department (Motor Vehicles Department J&K)',
    category: 'Road Transport & Mobility',
    handles: [
      'Delays in Smart Card Driving Licences and RC delivery',
      'Overcharging and refusal by auto-rickshaws, cabs, or private buses',
      'Fitness certificate and road permit delays',
      'Overloading and passenger safety violations'
    ],
    portalName: 'MoRTH Parivahan Grievances & JK SAMADHAN',
    portalUrl: 'https://parivahan.gov.in',
    directComplaintUrl: 'https://parivahan.gov.in/parivahan//en/content/complaint-suggestions',
    contactHelpline: '0194-2485558 (RTO Kashmir) / 0191-2479802 (RTO Jammu)',
    isUnified: true,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'Parivahan national grievance form at parivahan.gov.in resolves national software issues. State level RTO enforcement matters should be lodged on JK SAMADHAN.',
    departmentCode: 'JK-TRANS'
  },
  {
    id: 'revenue',
    name: 'Revenue Department (Land Records & Tehsildar Services)',
    category: 'Land & Citizen Certificates',
    handles: [
      'Delays in issuance of Domicile, Category, or Income certificates',
      'Discrepancies in digitized Jamabandi (Aapki Zameen Aapki Nigrani)',
      'Mutation (Inteqaal) delays and land demarcation grievances',
      'Encroachment on state/kahcharai land'
    ],
    portalName: 'JK SAMADHAN & Land Records Helpdesk',
    portalUrl: 'https://samadhan.jk.gov.in',
    directComplaintUrl: 'https://landrecords.jk.gov.in',
    contactHelpline: '0194-2452297 / 0191-2476570',
    isUnified: true,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'All land revenue and certificate complaints are systematically routed through JK SAMADHAN under Revenue Department. Keep your application/khasra number ready.',
    departmentCode: 'JK-REV'
  },
  {
    id: 'rural_development',
    name: 'Rural Development & Panchayati Raj (RDD)',
    category: 'Rural Governance & Employment',
    handles: [
      'MGNREGA wage delays and job card non-issuance',
      'PMAY-Gramin housing grant delay or verification dispute',
      'Substandard rural link road or Panchayat community asset work',
      'Gram Panchayat fund utilization grievances'
    ],
    portalName: 'JK SAMADHAN & Janbhagidari Portal',
    portalUrl: 'https://samadhan.jk.gov.in',
    directComplaintUrl: 'https://janbhagidari.jk.gov.in',
    contactHelpline: '0194-2454645 / 0191-2554000',
    isUnified: true,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'Grievances regarding rural works and village panchayats are registered on JK SAMADHAN under Rural Development & Panchayati Raj.',
    departmentCode: 'JK-RDD'
  },
  {
    id: 'pwd',
    name: 'Public Works Department (PWD / R&B)',
    category: 'Roads, Bridges & Public Works',
    handles: [
      'Potholes, delayed macadamization, and broken road shoulders',
      'Substandard culvert and bridge construction',
      'Damage to public roads caused by private laying of utility pipes',
      'Delays in government infrastructure contractor payments'
    ],
    portalName: 'JK SAMADHAN (Public Works Department)',
    portalUrl: 'https://samadhan.jk.gov.in',
    directComplaintUrl: 'https://samadhan.jk.gov.in',
    contactHelpline: '0194-2506208 (CE R&B Kashmir) / 0191-2547983 (CE R&B Jammu)',
    isUnified: true,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'PWD Roads & Buildings handles grievances directly via the unified JK SAMADHAN portal. Specify exact road stretch, landmark, and district when lodging.',
    departmentCode: 'JK-PWD'
  },
  {
    id: 'social_welfare',
    name: 'Social Welfare Department',
    category: 'Welfare & Social Security',
    handles: [
      'Old-age, widow, and disability pension DBT disbursement failure',
      'Marriage assistance scheme for poor girls delays',
      'Special equipment and aid distribution for specially-abled persons',
      'Hostel admission and pre-matric minority scholarship verification'
    ],
    portalName: 'JK SAMADHAN & e-Suvidha Social Welfare Cell',
    portalUrl: 'https://samadhan.jk.gov.in',
    directComplaintUrl: 'https://samadhan.jk.gov.in',
    contactHelpline: '0194-2473763 / 0191-2478400',
    isUnified: true,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'Register on JK SAMADHAN and choose Social Welfare Department. Attach your sanction order number and Aadhaar-seeded bank account status.',
    departmentCode: 'JK-SWD'
  },
  {
    id: 'labour',
    name: 'Labour & Employment Department',
    category: 'Workers & Unorganized Sector',
    handles: [
      'Building & Other Construction Workers (BOCW) welfare card benefits',
      'Minimum wage disputes and illegal workplace termination',
      'e-Shram card registration errors and insurance claims',
      'Child labour prohibition enforcement'
    ],
    portalName: 'JK SAMADHAN & e-Shram Grievance Portal',
    portalUrl: 'https://samadhan.jk.gov.in',
    directComplaintUrl: 'https://eshram.gov.in',
    contactHelpline: '14434 (National e-Shram Helpline) / 0194-2452296',
    isUnified: true,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'Labour disputes can be filed on JK SAMADHAN under Labour & Employment or escalated to the Assistant Labour Commissioner (ALC) in your respective district.',
    departmentCode: 'JK-LABOUR'
  },
  {
    id: 'other_departments',
    name: 'Other Government Departments & Unified Redressal',
    category: 'All State & Central Departments',
    handles: [
      'Tourism, Forest, Horticulture, Agriculture, and Animal Husbandry',
      'Industries & Commerce, Mining, and Geology disputes',
      'Central Government offices operating in J&K (Post, Railways, Telecom)',
      'Any government agency not specifically categorized above'
    ],
    portalName: 'JK SAMADHAN (State) & CPGRAMS (Central Ministries)',
    portalUrl: 'https://samadhan.jk.gov.in',
    directComplaintUrl: 'https://pgportal.gov.in',
    contactHelpline: '1800-572-2327 (JK SAMADHAN) / 1800-11-4000 (CPGRAMS)',
    isUnified: true,
    lastCheckedDate: 'October 2026',
    guidanceNote: 'If your issue is with a J&K State body, select it from the 40+ departments dropdown in JK SAMADHAN. If it is with a Central Ministry (e.g. Post Office, Passport, EPFO), use CPGRAMS at pgportal.gov.in.',
    departmentCode: 'JK-UNIFIED'
  }
];
