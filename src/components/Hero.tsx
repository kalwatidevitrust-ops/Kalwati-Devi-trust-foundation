import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0D5C4A]">
      {/* Background Gradient Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#BEF264]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-[#BEF264] fill-current" />
              <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">Seva se Sashaktikaran tak</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
              Empowering Women <br />
              Through <span className="text-[#BEF264]">Skills & Self-Reliance</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
              Kalwati Devi Trust Foundation supports women across India by providing skill training, resources, and opportunities to earn and grow independently.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/drive/folders/1ppfohnLKxD6_Hny3QscjDooB4yoElmZx?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#BEF264] text-[#0D5C4A] rounded-full font-bold text-lg hover:shadow-[0_0_25px_rgba(190,242,100,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Donate Now
              </a>
              <Link
                to="/programs"
                className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Join the Mission
              </Link>
            </div>

            <div className="mt-12 flex items-center space-x-4 opacity-70">
              <p className="text-white text-sm italic font-light max-w-[200px]">
                “Every woman deserves the chance to stand on her own feet.”
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white/5 shadow-2xl aspect-[4/5] lg:aspect-auto lg:h-[600px]">
               <img
                src="/regenerated_image_1777654986645.png"
                alt="Empowered Indian Women"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D5C4A]/60 to-transparent" />
            </div>

            {/* Decorative Dots/Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#BEF264]/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
