import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24"
    >
      <section className="bg-[#0D5C4A] py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Whether you want to volunteer, donate, or partner, we’d love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 -mt-16">
        <div className="bg-[#BEF264] rounded-[3rem] shadow-2xl overflow-hidden p-12 lg:p-20 text-[#0D5C4A] text-center">
          <h2 className="text-3xl font-bold mb-12">Reach Out</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-[#0D5C4A] text-white rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                 <p className="font-bold uppercase text-xs tracking-widest mb-1 opacity-60">Phone</p>
                 <p className="text-xl font-bold">+91 7017193523</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-[#0D5C4A] text-white rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                 <p className="font-bold uppercase text-xs tracking-widest mb-1 opacity-60">Email</p>
                 <p className="text-xl font-bold">kdtf12345@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-[#0D5C4A] text-white rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                 <p className="font-bold uppercase text-xs tracking-widest mb-1 opacity-60">Head Office</p>
                 <p className="text-lg font-bold">R-47, A VANI VIHAR UTTAM NAGAR DELHI-110059</p>
                 <p className="font-bold uppercase text-xs tracking-widest mt-4 mb-1 opacity-60">Sub-office</p>
                 <p className="text-lg font-bold">Thapa Colony, Near Khatu Shyam Mandir Selaqui, Dehradun – 248197 Uttarakhand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
