import { motion } from 'motion/react';
import { Scissors, Laptop, Briefcase, Users, HeartPulse, GraduationCap } from 'lucide-react';

const programs = [
  {
    title: "Silai & Tailoring",
    hindi: "सिलाई प्रशिक्षण",
    icon: <Scissors className="w-8 h-8" />,
    desc: "Certification courses in tailoring and fashion design to help women start their own boutiques.",
    img: "/regenerated_image_1777656710984.png"
  },
  {
    title: "Digital Learning",
    hindi: "डिजिटल साक्षरता",
    icon: <Laptop className="w-8 h-8" />,
    desc: "Equipping young girls with basic computer skills, internet usage, and online safety.",
    img: "/regenerated_image_1777656715494.png"
  },
  {
    title: "Self Employment",
    hindi: "स्वरोजगार",
    icon: <Briefcase className="w-8 h-8" />,
    desc: "Micro-entrepreneurship support including micro-loans and market linkage for handicrafts.",
    img: "/regenerated_image_1777656719573.png"
  },
  {
    title: "Health & Nutrition",
    hindi: "स्वास्थ्य और पोषण",
    icon: <HeartPulse className="w-8 h-8" />,
    desc: "Regular health checkups and awareness sessions on maternal health and sanitation.",
    img: "/regenerated_image_1777656723017.png"
  },
  {
    title: "Eco-Friendly Crafts",
    hindi: "पर्यावरण अनुकूल शिल्प",
    icon: <Users className="w-8 h-8" />,
    desc: "Training in making sustainable products like jute bags and recycled paper items.",
    img: "/regenerated_image_1777656726620.png"
  },
  {
    title: "Higher Education",
    hindi: "उच्च शिक्षा",
    icon: <GraduationCap className="w-8 h-8" />,
    desc: "Scholarships and guidance for girls aiming for professional degrees and careers.",
    img: "/regenerated_image_1777656729999.png"
  }
];

export default function Programs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="bg-[#0D5C4A] py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Our Programs</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Practical skills, professional support, and powerful outcomes for women across rural India.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="h-60 overflow-hidden relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0D5C4A] shadow-lg">
                  {p.icon}
                </div>
              </div>
              <div className="p-8">
                <p className="text-[#0D5C4A] font-bold text-sm mb-1">{p.hindi}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
