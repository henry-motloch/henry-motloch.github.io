import Navbar from '@/components/Navbar';
import GvrGallery from '@/components/GvrGallery';

const GvrAutomationPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <GvrGallery />
    </div>
  );
};

export default GvrAutomationPage;
