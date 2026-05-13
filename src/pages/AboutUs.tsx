import { motion } from 'motion/react';
import { History, Users, Globe, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="bg-[#0D5C4A] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">About us</h1>
            <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
              We are a non-profit organization dedicated to fostering sustainable change by empowering the underprivileged through education and skill development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <div className="inline-flex items-center space-x-2 text-[#0D5C4A] font-bold uppercase tracking-widest text-sm justify-center">
              <History className="w-4 h-4" />
              <span>Our Heritage</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Building a Legacy of <br />
              <span className="text-[#0D5C4A]">Compassion & Empowerment</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The Kalwati Devi Trust Foundation was born from a simple yet powerful idea: that every individual, regardless of their background, deserves the opportunity to achieve their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership/Team Call to action */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#BEF264]/5 rounded-full blur-3xl" />
            <div className="max-w-3xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0D5C4A] mb-8">Guided by Ethics, Driven by Results</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Our leadership team comprises educators, social workers, and industry professionals who bring a wealth of experience to our programs. We believe in complete transparency and accountability in all our operations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-[#BEF264]" />
                  <span className="font-bold text-[#0D5C4A] text-sm">Global Impact</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-[#BEF264]" />
                  <span className="font-bold text-[#0D5C4A] text-sm">Certified NGO</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-[#BEF264]" />
                  <span className="font-bold text-[#0D5C4A] text-sm">Direct Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
