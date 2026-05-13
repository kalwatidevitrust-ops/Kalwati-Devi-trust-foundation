import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Target />, title: "Mission", desc: "To empower every woman with the tools and confidence to lead an independent life." },
    { icon: <Eye />, title: "Vision", desc: "A rural India where gender is not a barrier to economic or social freedom." },
    { icon: <ShieldCheck />, title: "Values", desc: "Integrity, Transparency, and relentless Seva (Service) to the community." },
    { icon: <Heart />, title: "Empathy", desc: "Understanding grassroots struggles and providing personalized support." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Header */}
      <section className="bg-[#0D5C4A] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#BEF264]/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">What we do</h1>
          <p className="text-white/70 text-xl max-w-3xl mx-auto">
            Founded with a vision to transform lives, Kalwati Devi Trust Foundation is more than an NGO; it's a movement towards self-reliance.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Empowering through <br />
                <span className="text-[#0D5C4A]">Skill and Spirit</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Kalwati Devi Trust Foundation (KDTF) was established to honor the legacy of selfless service. We identified that the biggest gap in rural development was the lack of vocational skills among women.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Starting with just five sewing machines in a small village, we have grown into a multi-state foundation providing not just tools, but the mindset of an entrepreneur to every woman we touch.
              </p>
              <div className="pt-4 border-l-4 border-[#BEF264] pl-6">
                <p className="text-xl font-medium italic text-[#0D5C4A]">
                  "When you empower a woman, you empower a whole family and eventually, a nation."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="/regenerated_image_1777656436097.png" className="rounded-3xl h-64 w-full object-cover" alt="Workshop" referrerPolicy="no-referrer" />
                <img src="/regenerated_image_1777656444905.png" className="rounded-3xl h-48 w-full object-cover" alt="Learning" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="/regenerated_image_1777656440586.png" className="rounded-3xl h-48 w-full object-cover" alt="Support" referrerPolicy="no-referrer" />
                <img src="/regenerated_image_1777656448831.png" className="rounded-3xl h-64 w-full object-cover" alt="Group" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0D5C4A]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-[#0D5C4A] text-[#BEF264] rounded-xl flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
