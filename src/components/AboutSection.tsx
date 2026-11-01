import React from 'react';
import { 
  ShieldCheck, 
  Heart, 
  BookOpen, 
  Users, 
  CheckCircle, 
  Mail, 
  Send, 
  AlertCircle,
  Sparkles,
  Compass
} from 'lucide-react';

interface AboutSectionProps {
  onOpenSuggestModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenSuggestModal }) => {
  const values = [
    {
      title: 'Accessibility',
      desc: 'Information designed for everyone—students, parents, senior citizens, and people in remote hilly areas.'
    },
    {
      title: 'Transparency',
      desc: 'Direct, honest linking to official government websites without intermediaries, ads, or hidden charges.'
    },
    {
      title: 'Education',
      desc: 'Helping youth discover scholarships, free courses, competitive coaching, and digital libraries.'
    },
    {
      title: 'Community Support',
      desc: 'A volunteer public-service mindset dedicated to civic awareness throughout all 20 districts of J&K.'
    },
    {
      title: 'Accuracy',
      desc: 'Strict policy of listing only verified official portals, direct helplines, and legitimate notification links.'
    },
    {
      title: 'Digital Inclusion',
      desc: 'Simplifying complex bureaucratic jargon into plain, understandable English and local terms.'
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#176B5B] bg-[#176B5B]/10 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-[#F3A83B]" />
              <span>About RAAH J&K</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#104D43] font-display leading-tight">
              The right information, <br />
              <span className="text-[#176B5B] font-serif italic">without the confusion.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                <strong>RAAH J&K</strong> is an independent, student-led public-information initiative created to help citizens across all 20 districts of Jammu & Kashmir easily navigate government services, scholarship opportunities, public healthcare facilities, and grievance portals.
              </p>
              <p>
                Too often, students and families struggle to know which website is official, which office to visit, or where to file a complaint for electricity, ration, or water issues. Our mission is to eliminate confusion by gathering accurate, officially verified guidance in one welcoming, beginner-friendly digital space.
              </p>
              <p>
                This platform is 100% free and community-driven. It does not sell user data, does not show ads, and does not charge any service fees.
              </p>
            </div>

            {/* Strict Non-Affiliation Disclaimer */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 leading-relaxed flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-slate-900 block mb-0.5">
                  Official Affiliation Disclaimer:
                </strong>
                RAAH J&K is an independent public-service educational project and is <strong>not an official government website</strong>, nor is it officially affiliated with any government department. All administrative names and portal trademarks belong to their respective government authorities.
              </div>
            </div>

            {/* Creator Attribution Box */}
            <div className="p-5 bg-[#F6F9F7] rounded-2xl border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-bold text-[#176B5B] block">
                  Project Creator & Lead
                </span>
                <h4 className="text-lg font-bold text-slate-900">
                  Shariq Iqbal Shah
                </h4>
                <p className="text-xs text-slate-600">
                  Independent Student Developer & Civic Initiative Founder
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-700 pt-1">
                  <Mail className="w-3.5 h-3.5 text-[#176B5B]" />
                  <a 
                    href="mailto:shahshariq7722@gmail.com" 
                    className="font-medium text-[#176B5B] hover:underline"
                  >
                    shahshariq7722@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
                <a
                  href="mailto:shahshariq7722@gmail.com?subject=RAAH%20J%26K%20Feedback%20/%20Inquiry"
                  className="px-4 py-2.5 bg-[#176B5B] hover:bg-[#104D43] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 text-center"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Email Shariq</span>
                </a>
                <button
                  onClick={onOpenSuggestModal}
                  className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold rounded-xl transition-colors cursor-pointer text-center"
                >
                  Submit Feedback
                </button>
              </div>
            </div>

          </div>

          {/* Visual Showcase: Student Learning & Civic Assistance */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="/src/assets/images/raah_jk_students_1793548442377.jpg"
                alt="Students in Jammu & Kashmir engaged in scholarship learning and digital research"
                className="w-full h-72 sm:h-80 object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-4 bg-[#104D43] text-white rounded-2xl text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#F3A83B] font-bold uppercase tracking-wider text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Vision</span>
              </div>
              <p className="text-white/90 leading-relaxed font-serif text-sm">
                "No student in J&K should miss a scholarship deadline, and no family should be left stranded without knowing where to report a broken public service."
              </p>
            </div>
          </div>

        </div>

        {/* 6 Core Project Values */}
        <div className="pt-8 border-t border-slate-100">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-[#104D43] font-display">
              Our Core Operating Values
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Guiding principles behind every page, link, and resource on RAAH J&K.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, idx) => (
              <div key={idx} className="p-5 bg-[#F6F9F7] rounded-2xl border border-slate-200/90 shadow-xs">
                <span className="text-xs font-bold text-[#176B5B] block mb-1">
                  0{idx + 1}. {val.title}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
