import { motion } from 'motion/react';
import { Users } from 'lucide-react';

const members = [
  {
    name: "MR. MANJEET PAL",
    role: "Social Worker & Chairman",
    bio: "S/o: Shri. SURESH PAL, R/o: Shaheed Bhagat Singh Colony, Dehradun, Raipur, Chakrata Dehradun, Uttarakhand-248008."
  },
  {
    name: "MR. BALWANT CHAUHAN",
    role: "Social Worker & Treasurer",
    bio: "S/o: Sh. MURTI CHAUHAN, R/o: House No. 58/4, Village Kistud, Tehsil Tyuni, Post Kirad, Kirsali, Dehradun, Uttarakhand-248001."
  },
  {
    name: "MR. ARUN PAL",
    role: "Social Worker & Gen. Secretary",
    bio: "S/o: Sh. SURESH PAL, R/o: Shaheed Bhagat Singh Colony, Tapovan, Adhoiwala, Dehradun, Uttarakhand-248001."
  }
];

export default function Members() {
  return (
    <div className="pt-20">
      <section className="bg-[#0D5C4A] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Members</h1>
          <p className="text-white/70 text-xl max-w-3xl mx-auto">
            The dedicated team behind Kalwati Devi Trust Foundation.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-[#BEF264] transition-colors"
              >
                <div className="w-16 h-16 bg-[#BEF264] rounded-2xl flex items-center justify-center text-[#0D5C4A] mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0D5C4A] mb-1">{member.name}</h3>
                <p className="text-[#0D5C4A]/60 font-bold text-sm uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
