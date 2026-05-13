import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-5xl mx-auto bg-[#BEF264] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0D5C4A]/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0D5C4A]/10 rounded-full blur-3xl -ml-32 -mb-32" />

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-[#0D5C4A] mb-8 leading-tight"
          >
            Aapka sahyog kisi ki <br /> zindagi badal sakta hai
          </motion.h2>
          
          <p className="text-[#0D5C4A]/80 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Every contribution helps us reach more women in need. Join our journey to make rural India self-reliant.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://drive.google.com/drive/folders/1ppfohnLKxD6_Hny3QscjDooB4yoElmZx?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-[#0D5C4A] text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl text-center"
            >
              Donate Now
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-5 border-2 border-[#0D5C4A] text-[#0D5C4A] rounded-full font-bold text-lg hover:bg-[#0D5C4A] hover:text-white transition-all"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
