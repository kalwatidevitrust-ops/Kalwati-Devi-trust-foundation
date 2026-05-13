import { motion } from 'motion/react';
import { Users, BookOpen, Handshake, HeartHandshake } from 'lucide-react';

const programs = [
  {
    title: "Skill Training",
    description: "Holistic training in stitching (Silai), handicrafts, and vocational skills.",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "Rozgaar Support",
    description: "Connecting skilled women to markets and providing job placement assistance.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Samagri Sahayata",
    description: "Providing essential tools like sewing machines and material kits to start work.",
    icon: <Handshake className="w-6 h-6" />,
  },
  {
    title: "Mahila Vikas",
    description: "Holistic development programs including financial literacy and health.",
    icon: <HeartHandshake className="w-6 h-6" />,
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0D5C4A] font-bold tracking-widest uppercase text-sm mb-4"
          >
            Kalyan ki Oor
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            What We Do
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#0D5C4A]/5 p-8 rounded-3xl border border-[#0D5C4A]/10 hover:bg-[#0D5C4A] transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#0D5C4A] rounded-2xl flex items-center justify-center mb-6 text-[#BEF264] group-hover:bg-[#BEF264] group-hover:text-[#0D5C4A] transition-colors">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">{program.title}</h3>
              <p className="text-gray-600 group-hover:text-white/70 transition-colors leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
