import React, { useState } from 'react';
import { 
  Sparkles, 
  RotateCcw, 
  ExternalLink, 
  CheckCircle, 
  AlertTriangle, 
  Phone, 
  FileText, 
  HelpCircle,
  Bookmark,
  Share2
} from 'lucide-react';
import { DISTRICTS_DATA } from '../data/districts.ts';
import { ALL_RESOURCES } from '../data/resources.ts';
import { GRIEVANCE_DEPARTMENTS } from '../data/grievanceDepartments.ts';
import { ResourceItem, GrievanceDepartment } from '../data/types.ts';

interface SmartGuideProps {
  onToggleBookmark: (id: string) => void;
  savedResourceIds: string[];
  simpleLanguageMode: boolean;
}

export const SmartGuide: React.FC<SmartGuideProps> = ({
  onToggleBookmark,
  savedResourceIds,
  simpleLanguageMode,
}) => {
  // Step 1: Core Goal / Requirement
  const [goal, setGoal] = useState<string>('scholarship');
  
  // Step 2: User Persona / Type
  const [userType, setUserType] = useState<string>('school_student');
  
  // Step 3: District Selection (All 20 districts)
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Srinagar');
  
  // Step 4: Specific Need
  const [specificNeed, setSpecificNeed] = useState<string>('apply_eligibility');

  const [copiedLink, setCopiedLink] = useState(false);

  const goalOptions = [
    { id: 'scholarship', label: 'Scholarships & Student Financial Aid', badge: 'Education' },
    { id: 'electricity_complaint', label: 'Electricity Complaints & Billing Issues', badge: 'Power (JKPDD)' },
    { id: 'water_complaint', label: 'Drinking Water & Jal Shakti Supply Issue', badge: 'Jal Shakti (PHE)' },
    { id: 'ration_complaint', label: 'Ration Card, Food Supply & Fair Price Shop', badge: 'FCS&CA' },
    { id: 'certificates_domicile', label: 'Government Certificates (Domicile, Land Records, Category)', badge: 'e-UNNAT' },
    { id: 'healthcare', label: 'Ayushman Golden Card & Emergency Healthcare', badge: 'Health' },
    { id: 'police_services', label: 'Police Verification, Lost Item & e-Services', badge: 'J&K Police' },
    { id: 'career_training', label: 'Self Employment Schemes & Free Job Coaching', badge: 'Mission Youth' },
  ];

  const userTypeOptions = [
    { id: 'school_student', label: 'School Student (Classes 1-12)' },
    { id: 'college_student', label: 'College / University Student' },
    { id: 'citizen_resident', label: 'Citizen / Householder / Resident' },
    { id: 'job_seeker', label: 'Unemployed Youth / Jobseeker' },
    { id: 'senior_pensioner', label: 'Senior Citizen / Pensioner' },
  ];

  const needOptionsMap: Record<string, { id: string; label: string }[]> = {
    scholarship: [
      { id: 'apply_eligibility', label: 'Find eligibility rules and application steps' },
      { id: 'track_status', label: 'Track pending scholarship status or DBT payment' },
      { id: 'pmsss_jk', label: 'AICTE PMSSS for colleges outside J&K' },
    ],
    electricity_complaint: [
      { id: 'power_cut', label: 'Report sudden power cut or blown transformer' },
      { id: 'meter_billing', label: 'Challenge excessive or erroneous electricity bill' },
      { id: 'new_connection', label: 'Apply for a new domestic power connection' },
    ],
    water_complaint: [
      { id: 'water_leak', label: 'Report pipeline burst, muddy water or dry tap' },
      { id: 'jjm_tap', label: 'Request Jal Jeevan Mission rural tap connection' },
    ],
    ration_complaint: [
      { id: 'ration_card_add', label: 'Add family member or download e-Ration card' },
      { id: 'ration_non_supply', label: 'Dealer not providing monthly allocated grains' },
    ],
    certificates_domicile: [
      { id: 'domicile_apply', label: 'Apply for official J&K Domicile Certificate' },
      { id: 'land_records_check', label: 'Inspect family land records & Jamabandi' },
      { id: 'eunnat_portal', label: 'Browse 1,000+ online certificates on e-UNNAT' },
    ],
    healthcare: [
      { id: 'golden_card', label: 'Make / Download Ayushman Golden Card (₹5 Lakh cover)' },
      { id: 'emergency_ambulance', label: 'Call 108 emergency GPS ambulance' },
      { id: 'mental_health', label: 'Confidential 24/7 mental health counselling (14416)' },
    ],
    police_services: [
      { id: 'police_verification', label: 'Apply for online tenant / character verification' },
      { id: 'cyber_fraud', label: 'Report online bank fraud or cyber crime (1930)' },
      { id: 'lost_property', label: 'Report lost mobile, documents or items online' },
    ],
    career_training: [
      { id: 'mumkin_vehicle', label: 'MUMKIN Scheme commercial vehicle grant' },
      { id: 'tejaswini_women', label: 'TEJASWINI interest-free grant for women' },
      { id: 'parvaaz_coaching', label: 'PARVAAZ free competitive coaching for UPSC/JKAS/NEET' },
    ],
  };

  const currentNeeds = needOptionsMap[goal] || [
    { id: 'general_info', label: 'Find verified official portal and direct link' }
  ];

  // Reset to default
  const handleReset = () => {
    setGoal('scholarship');
    setUserType('school_student');
    setSelectedDistrict('Srinagar');
    setSpecificNeed('apply_eligibility');
  };

  // Find relevant resources based on selection
  const getGuidanceResult = () => {
    const matchedResources: ResourceItem[] = [];
    let matchedDepartment: GrievanceDepartment | undefined;
    const requiredDocs: string[] = [];
    const stepInstructions: string[] = [];
    let urgentHelpline = '';

    if (goal === 'scholarship') {
      matchedResources.push(...ALL_RESOURCES.filter(r => r.id === 'res-nsp' || r.id === 'res-pmsss'));
      matchedDepartment = GRIEVANCE_DEPARTMENTS.find(d => d.id === 'education');
      requiredDocs.push('Valid Aadhaar Card', 'Domicile Certificate of J&K', 'Marks Certificate of Previous Examination', 'Income Certificate issued by Tehsildar', 'Bank Passbook copy (Aadhaar Seeded)');
      stepInstructions.push(
        'Check that your Aadhaar number is active and seeded with your bank account via NPCI.',
        'Register online on scholarships.gov.in using your Aadhaar OTP.',
        'Submit the application and take a printout to your School / College Principal for institutional verification.'
      );
      urgentHelpline = '0120-6619540 (NSP) / 011-29581043 (AICTE PMSSS)';
    } else if (goal === 'electricity_complaint') {
      matchedDepartment = GRIEVANCE_DEPARTMENTS.find(d => d.id === 'pdd');
      urgentHelpline = '1912 (Toll-Free 24x7 Power Emergency)';
      requiredDocs.push('Consumer ID / CA Number printed on electricity bill', 'Mobile number registered with PDD', 'Photo of faulty meter or fallen line (if safety hazard)');
      stepInstructions.push(
        'For immediate live wire hazard or sudden outage, dial 1912 from your phone immediately.',
        'To challenge an inaccurate bill or damaged transformer, lodge your grievance on JK SAMADHAN (samadhan.jk.gov.in) under Power Development Department.',
        'Note down the SMS ticket token to track the assigned Junior Engineer response.'
      );
    } else if (goal === 'water_complaint') {
      matchedDepartment = GRIEVANCE_DEPARTMENTS.find(d => d.id === 'jal_shakti');
      urgentHelpline = '1800-180-7015 (PHE Toll Free) / 0194-2452234';
      requiredDocs.push('Consumer connection number (if billed connection)', 'Exact locality, ward, village name, and nearest landmark in ' + selectedDistrict);
      stepInstructions.push(
        'Submit online complaint via Jal Shakti PHE Kashmir grievance cell: jalshaktiphekashmir.in/grievances.',
        'Alternatively, submit via JK SAMADHAN selecting Jal Shakti Department.',
        'If no water tanker is supplied within 24 hours of total dry tap, escalate to Executive Engineer PHE in ' + selectedDistrict + '.'
      );
    } else if (goal === 'ration_complaint') {
      matchedResources.push(...ALL_RESOURCES.filter(r => r.id === 'res-pds'));
      matchedDepartment = GRIEVANCE_DEPARTMENTS.find(d => d.id === 'fcs_ca');
      urgentHelpline = '1800-180-7011 (Kashmir) / 1800-180-7106 (Jammu)';
      requiredDocs.push('Existing Ration Card (Ration ID / RC Number)', 'Aadhaar numbers of all family members', 'Active mobile number');
      stepInstructions.push(
        'Verify your monthly allocated ration quota on the official ePDS portal: jk.epds.nic.in.',
        'If a Fair Price Shop dealer refuses allocation or overcharges, file a formal complaint on PDS GRAMS: feastjk.gov.in/jkgrams/.',
        'You will receive a docket number that the Tehsil Supply Officer (TSO) must inspect.'
      );
    } else if (goal === 'certificates_domicile') {
      matchedResources.push(...ALL_RESOURCES.filter(r => r.id === 'res-domicile' || r.id === 'res-eunnat' || r.id === 'res-land-records'));
      matchedDepartment = GRIEVANCE_DEPARTMENTS.find(d => d.id === 'revenue');
      urgentHelpline = '0194-2479231 (e-UNNAT Support) / DC Office ' + selectedDistrict;
      requiredDocs.push('Aadhaar Card', 'Proof of 15 years residence or educational certificates (10th/12th from J&K school)', 'Ration card copy / parent PRC');
      stepInstructions.push(
        'Log in to e-UNNAT (eunnat.jk.gov.in) using your mobile OTP.',
        'Navigate to Revenue Department -> Application for Grant of Domicile Certificate.',
        'Upload verified PDF attachments. Under the Public Services Guarantee Act (PSGA), the Tehsildar must issue it within 15 working days.'
      );
    } else if (goal === 'healthcare') {
      matchedResources.push(...ALL_RESOURCES.filter(r => r.id === 'res-pmjay' || r.id === 'res-telemanas' || r.id === 'res-ambulance'));
      matchedDepartment = GRIEVANCE_DEPARTMENTS.find(d => d.id === 'healthcare');
      urgentHelpline = 'Dial 108 (Ambulance) / 14416 (Tele-MANAS) / 14555 (Golden Card)';
      requiredDocs.push('Ration Card (showing family unit)', 'Aadhaar Card of all family members');
      stepInstructions.push(
        'For emergency medical transport anywhere in ' + selectedDistrict + ', dial 108 immediately.',
        'For your free Ayushman Bharat Golden Card (₹5 Lakh cover), visit any CSC / Khidmat Centre or district hospital help desk with your ration card and Aadhaar for instant biometric generation.',
        'If an empanelled hospital denies free treatment under PM-JAY, lodge a complaint at grievance.pmjay.gov.in or call 14555.'
      );
    } else if (goal === 'police_services') {
      matchedDepartment = GRIEVANCE_DEPARTMENTS.find(d => d.id === 'police');
      urgentHelpline = 'Dial 112 (Emergency Police/Fire/Ambulance) / 1930 (Cyber Fraud Helpline)';
      requiredDocs.push('Identity Proof (Aadhaar / Passport / Voter ID)', 'Address proof of premises in ' + selectedDistrict);
      stepInstructions.push(
        'For cyber financial fraud (lost money in bank/UPI scam), dial 1930 within the first golden hour to freeze funds.',
        'For non-emergency citizen services like character verification, tenant reporting, or lost article reports, register on jkpoliceeservices.gov.in.',
        'For urgent distress or physical safety, dial 112 immediately.'
      );
    } else if (goal === 'career_training') {
      matchedResources.push(...ALL_RESOURCES.filter(r => r.id === 'res-mumkin' || r.id === 'res-tejaswini' || r.id === 'res-parvaaz' || r.id === 'res-jkssb'));
      matchedDepartment = GRIEVANCE_DEPARTMENTS.find(d => d.id === 'labour');
      urgentHelpline = 'District Employment & Counselling Centre, ' + selectedDistrict;
      requiredDocs.push('Domicile Certificate of J&K', 'Marks cards of 10th/12th/Graduation', 'Unemployment registration card with District Employment Exchange', 'Driving Licence (for MUMKIN scheme)');
      stepInstructions.push(
        'Register your profile with the District Employment & Counselling Centre in ' + selectedDistrict + '.',
        'Apply for Mission Youth schemes (MUMKIN, TEJASWINI, PARVAAZ) at missionyouth.jk.gov.in.',
        'Track notification releases for official recruitment on jkssb.nic.in.'
      );
    }

    // Lookup selected district details
    const districtObj = DISTRICTS_DATA.find(d => d.name.toLowerCase() === selectedDistrict.toLowerCase());

    return {
      matchedResources,
      matchedDepartment,
      requiredDocs,
      stepInstructions,
      urgentHelpline,
      districtObj
    };
  };

  const guidance = getGuidanceResult();

  const handleCopyGuide = () => {
    const text = `RAAH J&K Smart Guide Result:
Goal: ${goalOptions.find(g => g.id === goal)?.label}
District: ${selectedDistrict}
Helpline: ${guidance.urgentHelpline}
Portal: ${guidance.matchedDepartment?.portalUrl || 'https://samadhan.jk.gov.in'}`;
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section className="py-12 bg-[#F6F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#176B5B] bg-[#176B5B]/10 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-4 h-4 text-[#F3A83B]" />
            <span>Signature Interactive Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#104D43] font-display">
            RAAH Smart Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Answer 4 simple questions to receive verified step-by-step guidance, official application links, and direct helplines for your specific situation.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Questions Wizard on Left, Personalized Output on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Question Wizard Box */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs uppercase tracking-wider font-bold text-[#176B5B]">
                Interactive Navigator
              </span>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                title="Reset answers to default"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Q1: What are you looking for? */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                1. What are you looking for?
              </label>
              <select
                value={goal}
                onChange={(e) => {
                  setGoal(e.target.value);
                  const newNeeds = needOptionsMap[e.target.value];
                  if (newNeeds && newNeeds.length > 0) {
                    setSpecificNeed(newNeeds[0].id);
                  }
                }}
                className="w-full text-sm font-medium bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:bg-white focus:border-[#176B5B] focus:outline-none transition-all cursor-pointer"
              >
                {goalOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Q2: User Persona / Type */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                2. Which user category describes you?
              </label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full text-sm font-medium bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:bg-white focus:border-[#176B5B] focus:outline-none transition-all cursor-pointer"
              >
                {userTypeOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Q3: Which district in J&K are you from? */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                3. Which district are you from? (All 20)
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full text-sm font-medium bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:bg-white focus:border-[#176B5B] focus:outline-none transition-all cursor-pointer"
              >
                <optgroup label="Kashmir Division (10 Districts)">
                  {DISTRICTS_DATA.filter(d => d.division === 'Kashmir').map(d => (
                    <option key={d.id} value={d.name}>{d.name} District</option>
                  ))}
                </optgroup>
                <optgroup label="Jammu Division (10 Districts)">
                  {DISTRICTS_DATA.filter(d => d.division === 'Jammu').map(d => (
                    <option key={d.id} value={d.name}>{d.name} District</option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Q4: Specific Need */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                4. What specific information do you need?
              </label>
              <select
                value={specificNeed}
                onChange={(e) => setSpecificNeed(e.target.value)}
                className="w-full text-sm font-medium bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:bg-white focus:border-[#176B5B] focus:outline-none transition-all cursor-pointer"
              >
                {currentNeeds.map((need) => (
                  <option key={need.id} value={need.id}>
                    {need.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Important Disclaimer Card inside wizard */}
            <div className="p-3 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold">Informational Service Only:</strong> RAAH J&K does not process official applications, register complaints, or issue government approvals. We connect you directly with official government portals.
              </div>
            </div>
          </div>

          {/* Personalized Results & Guidance Output */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Action Bar for results */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span>{selectedDistrict} District</span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{userType.replace('_', ' ')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#104D43] mt-0.5">
                    Recommended Action Plan
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyGuide}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
                    title="Copy guidance summary"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copiedLink ? 'Copied!' : 'Share Guide'}</span>
                  </button>
                </div>
              </div>

              {/* Verified Helpline Banner */}
              {guidance.urgentHelpline && (
                <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-800 block">
                        Verified Helpline / Contact
                      </span>
                      <span className="text-sm font-semibold text-emerald-950">
                        {guidance.urgentHelpline}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step-by-Step Instructions */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#176B5B]" />
                  <span>Step-by-Step Guidance</span>
                </h4>
                <div className="space-y-2.5">
                  {guidance.stepInstructions.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-[#176B5B] text-white flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents Checklist */}
              {guidance.requiredDocs.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#F3A83B]" />
                    <span>Documents to Keep Ready</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {guidance.requiredDocs.map((doc, idx) => (
                      <li key={idx} className="text-xs text-slate-700 bg-amber-50/50 border border-amber-100 rounded-lg p-2.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F3A83B] shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Official Grievance Channel Card if applicable */}
              {guidance.matchedDepartment && (
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 block mb-2">
                    Target Government Redressal Authority
                  </span>
                  <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">
                        {guidance.matchedDepartment.name}
                      </h5>
                      <p className="text-xs text-slate-600 mt-1">
                        Portal: {guidance.matchedDepartment.portalName}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <span>{guidance.matchedDepartment.isUnified ? 'Handled via JK SAMADHAN' : 'Department-Specific Portal'}</span>
                        <span aria-hidden="true">·</span>
                        <span>Checked {guidance.matchedDepartment.lastCheckedDate}</span>
                      </div>
                    </div>

                    <a
                      href={guidance.matchedDepartment.directComplaintUrl || guidance.matchedDepartment.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-[#176B5B] hover:bg-[#104D43] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors shrink-0 flex items-center gap-1.5 self-start sm:self-center"
                    >
                      <span>Open Official Portal</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}

              {/* Matched Educational / Citizen Resource Cards */}
              {guidance.matchedResources.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 block mb-3">
                    Official Portals & Schemes
                  </span>
                  <div className="space-y-3">
                    {guidance.matchedResources.map((res) => {
                      const isSaved = savedResourceIds.includes(res.id);
                      return (
                        <div key={res.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs hover:border-[#176B5B] transition-colors">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <h5 className="text-sm font-bold text-[#104D43]">
                                {res.title}
                              </h5>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                {simpleLanguageMode ? res.simpleExplanation : res.description}
                              </p>
                              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                                <span>{res.officialSource}</span>
                                <span aria-hidden="true">·</span>
                                <span>{res.feeType}</span>
                              </div>
                            </div>

                            <button
                              onClick={() => onToggleBookmark(res.id)}
                              className="p-1.5 text-slate-400 hover:text-[#F3A83B] transition-colors cursor-pointer shrink-0"
                              title={isSaved ? 'Remove bookmark' : 'Save resource'}
                            >
                              <Bookmark className={`w-4 h-4 ${isSaved ? 'text-[#F3A83B] fill-[#F3A83B]' : ''}`} />
                            </button>
                          </div>

                          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                            <span className="text-slate-500">Last verified: {res.verifiedDate}</span>
                            <a
                              href={res.officialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#176B5B] hover:text-[#104D43] font-semibold flex items-center gap-1 group"
                            >
                              <span>Official Site</span>
                              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* District Administration Quick Connect */}
              {guidance.districtObj && (
                <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-semibold text-slate-900 block">
                      {guidance.districtObj.name} District Administration
                    </span>
                    <span>DC Office: {guidance.districtObj.dcOfficeContact}</span>
                  </div>
                  <a
                    href={guidance.districtObj.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#176B5B] hover:text-[#104D43] font-semibold flex items-center gap-1 shrink-0"
                  >
                    <span>{guidance.districtObj.name} NIC Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
