import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import cover from '@/assets/gvr/cover.asset.json';
import gvr1 from '@/assets/gvr/GVR1.jpg.asset.json';
import gvr2 from '@/assets/gvr/GVR2.jpg.asset.json';
import gvr3 from '@/assets/gvr/GVR3.jpg.asset.json';
import gvr4 from '@/assets/gvr/GVR4.jpg.asset.json';
import gvr5 from '@/assets/gvr/GVR5.jpg.asset.json';
import gvr6 from '@/assets/gvr/GVR6.jpg.asset.json';
import gvr7 from '@/assets/gvr/GVR7.jpg.asset.json';
import gvr8 from '@/assets/gvr/GVR8.jpg.asset.json';
import gvr9 from '@/assets/gvr/GVR9.jpg.asset.json';
import gvr10 from '@/assets/gvr/GVR10.jpg.asset.json';
import gvr11 from '@/assets/gvr/GVR11.jpg.asset.json';
import gvr12 from '@/assets/gvr/GVR12.jpg.asset.json';
import gvr13 from '@/assets/gvr/GVR13.jpg.asset.json';
import gvr14 from '@/assets/gvr/GVR14.jpg.asset.json';
import gvr15 from '@/assets/gvr/GVR15.jpg.asset.json';
import gvr16 from '@/assets/gvr/GVR16.jpg.asset.json';
import gvr17 from '@/assets/gvr/GVR17.jpg.asset.json';
import gvr18 from '@/assets/gvr/GVR18.jpg.asset.json';
import gvr19 from '@/assets/gvr/GVR19.jpg.asset.json';
import gvr20 from '@/assets/gvr/GVR20.jpg.asset.json';
import gvr21 from '@/assets/gvr/GVR21.jpg.asset.json';
import gvr22 from '@/assets/gvr/GVR22.jpg.asset.json';
import gvr23 from '@/assets/gvr/GVR23.jpg.asset.json';
import gvr24 from '@/assets/gvr/GVR24.jpg.asset.json';
import gvr25 from '@/assets/gvr/GVR25.jpg.asset.json';
import gvr26 from '@/assets/gvr/GVR26.jpg.asset.json';
import gvr27 from '@/assets/gvr/GVR27.jpg.asset.json';
import gvr28 from '@/assets/gvr/GVR28.jpg.asset.json';
import gvr29 from '@/assets/gvr/GVR29.jpg.asset.json';
import gvr30 from '@/assets/gvr/GVR30.jpg.asset.json';
import gvr31 from '@/assets/gvr/GVR31.jpg.asset.json';
import gvr32 from '@/assets/gvr/GVR32.jpg.asset.json';
import gvr33 from '@/assets/gvr/GVR33.jpg.asset.json';

const GvrGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectImages = [
    { src: cover.url, caption: 'PNC Process Automation Workflow Map', alt: 'Cross-functional swimlane diagram of the PNC automation process' },
    ...[gvr1, gvr2, gvr3, gvr4, gvr5, gvr6, gvr7, gvr8, gvr9, gvr10,
       gvr11, gvr12, gvr13, gvr14, gvr15, gvr16, gvr17, gvr18, gvr19, gvr20,
       gvr21, gvr22, gvr23, gvr24, gvr25, gvr26, gvr27, gvr28, gvr29, gvr30,
       gvr31, gvr32, gvr33].map((a, i) => ({
      src: a.url,
      caption: `Final Report — Page ${i + 1}`,
      alt: `GVR Process Automation final report page ${i + 1}`,
    })),
  ];

  const goToPrevious = () =>
    setCurrentIndex((p) => (p === 0 ? projectImages.length - 1 : p - 1));
  const goToNext = () =>
    setCurrentIndex((p) => (p === projectImages.length - 1 ? 0 : p + 1));

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold mb-6 dark:text-white">
            Process Automation Consulting — Greater Vancouver REALTORS®
          </h1>

          <div className="mb-8 text-gray-700 dark:text-gray-300">
            <p className="mb-4">
              A consulting engagement to automate the Privacy Notice and Consent (PNC) workflow at the
              Greater Vancouver REALTORS® board. Modular Python automations replace a manual,
              time-intensive process and integrate directly with Paragon MLS, projected to save
              approximately 780 staff hours per year.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Python</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Pandas</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Selenium</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Process Automation</span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm dark:text-gray-200">Paragon MLS</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-colors">
            <div className="relative">
              <img
                src={projectImages[currentIndex].src}
                alt={projectImages[currentIndex].alt}
                className="w-full object-contain max-h-[800px] transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={goToPrevious} className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors" aria-label="Previous image">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button onClick={goToNext} className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors" aria-label="Next image">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <p className="text-gray-700 dark:text-gray-300">
                  {currentIndex + 1} / {projectImages.length}
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {projectImages[currentIndex].caption}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">Project Details</h2>
            <div className="prose max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300">
                Partnering with the Greater Vancouver REALTORS® board, this project re-engineered the
                Privacy Notice and Consent (PNC) workflow — a recurring, document-heavy compliance
                process — into an automated pipeline that reduces handling time, improves data
                accuracy, and produces audit-ready records.
              </p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">Key contributions:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Developed modular automation scripts using Python, Pandas, and Selenium to streamline the PNC process and replace manual, time-intensive workflows.</li>
                <li>Designed an automation framework and unified data structures that integrate with Paragon MLS and generate compliance-ready audit logs.</li>
                <li>Implemented the automated system, projected to save approximately 780 staff hours annually by eliminating repetitive tasks and improving data accuracy.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GvrGallery;
