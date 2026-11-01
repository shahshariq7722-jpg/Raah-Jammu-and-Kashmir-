/**
 * Data types for RAAH J&K public information platform
 */

export type CategoryType = 
  | 'education' 
  | 'government' 
  | 'healthcare' 
  | 'careers' 
  | 'grievance' 
  | 'district';

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  simpleExplanation: string;
  category: CategoryType;
  subcategory: string;
  officialUrl: string;
  officialSource: string;
  verifiedDate: string;
  feeType: 'Free' | 'Nominal Govt Fee' | 'Eligibility Based' | 'Not Applicable';
  eligibilityInfo?: string;
  districtAvailability: 'All J&K' | string;
  keySteps?: string[];
  contactHelpline?: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface GrievanceDepartment {
  id: string;
  name: string;
  category: string;
  handles: string[];
  portalName: string;
  portalUrl: string;
  directComplaintUrl?: string;
  contactHelpline: string;
  isUnified: boolean; // true if handled through JK SAMADHAN unified portal
  lastCheckedDate: string;
  guidanceNote: string;
  departmentCode?: string;
}

export interface DistrictInfo {
  id: string;
  name: string;
  division: 'Jammu' | 'Kashmir';
  headquarters: string;
  officialWebsite: string;
  nicPortalUrl: string;
  dcOfficeContact: string;
  controlRoomHelpline: string;
  hospitals: string[];
  keyOffices: string[];
  description: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  department: string;
  summary: string;
  officialLink: string;
  isUrgent?: boolean;
}

export interface GlossaryTerm {
  term: string;
  officialContext: string;
  simpleDefinition: string;
  practicalExample: string;
}
