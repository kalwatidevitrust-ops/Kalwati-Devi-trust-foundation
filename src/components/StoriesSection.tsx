import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function StoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Stories of Change
          </motion.h2>
        </div>

        <div className="bg-[#0D5C4A] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
            <img
              src="/regenerated_image_1777656198367.png"
              alt="Artisan Story"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative">
             <Quote className="absolute top-10 right-10 text-[#BEF264]/20 w-24 h-24" />
             
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="inline-block px-4 py-1 bg-[#BEF264] text-[#0D5C4A] rounded-full text-xs font-bold uppercase mb-6">
                  Featured Story
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  “Pehle ghar tak seemit thi, aaj apna kaam chala rahi hoon”
                </h3>
                <p className="text-white/70 text-lg mb-8 leading-relaxed italic">
                  "I used to believe my world was within four walls. Through KDTF's silai training, I discovered a purpose. Today, I don't just stitch clothes; I stitch my own future and support my children's education."
                </p>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
