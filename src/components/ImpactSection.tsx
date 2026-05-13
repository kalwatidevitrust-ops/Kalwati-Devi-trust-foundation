import { motion } from 'motion/react';

const stats = [
  { value: "5000+", label: "Mahilayein Sashakt" },
  { value: "1000+", label: "Rozgaar Avsar" },
  { value: "200+", label: "Training Camps" },
  { value: "50+", label: "Villages Impacted" },
];

export default function ImpactSection() {
  return (
    <section className="py-24 bg-[#0D5C4A] relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#BEF264] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
            >
              <p className="text-5xl md:text-6xl font-bold text-[#BEF264] mb-2">{stat.value}</p>
              <p className="text-white/70 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
