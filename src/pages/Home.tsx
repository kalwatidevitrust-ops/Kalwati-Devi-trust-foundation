import { motion } from 'motion/react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import StoriesSection from '../components/StoriesSection';
import CTASection from '../components/CTASection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <Hero />
      
      {/* About Quick Section */}
      <section className="py-24 bg-[#0D5C4A]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-1 max-w-4xl mx-auto items-center text-center">
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-[#0D5C4A] font-bold text-sm tracking-widest uppercase mb-4">Hamara Maqsad</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Seva se <br /> <span className="text-[#0D5C4A]">Sashaktikaran tak</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We believe that empowerment begins with a single skill. KDTF works at the grassroots level to turn vulnerabilities into strengths, ensuring every woman in rural India has the resources to lead a life of dignity and self-reliance.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 text-[#0D5C4A] font-bold text-lg group"
                >
                  <span>Hamari Kahani</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
           </div>
        </div>
      </section>

      <WhatWeDo />
      <StoriesSection />
      <CTASection />
    </motion.div>
  );
}
