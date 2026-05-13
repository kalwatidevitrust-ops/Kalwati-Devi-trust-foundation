import { Heart, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0D5C4A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-lg">
                <img src="/logo_kdtf.png" alt="KDTF Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm tracking-tight leading-tight uppercase">Kalwati Devi</span>
                <span className="text-[#BEF264] text-[10px] font-bold uppercase tracking-[0.1em]">Trust Foundation</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Kalwati Devi Trust Foundation is dedicated to the holistic empowerment of Indian women through skills, resources, and emotional support.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#BEF264]">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/about-us" className="hover:text-[#BEF264] transition-colors">Our Mission</Link></li>
              <li><Link to="/members" className="hover:text-[#BEF264] transition-colors">Members</Link></li>
              <li><Link to="/certificates" className="hover:text-[#BEF264] transition-colors">Recognition</Link></li>
              <li><Link to="/about" className="hover:text-[#BEF264] transition-colors">What we do</Link></li>
              <li><Link to="/programs" className="hover:text-[#BEF264] transition-colors">Programs</Link></li>
              <li><Link to="/donate" className="hover:text-[#BEF264] transition-colors">Support Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#BEF264]">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#BEF264] shrink-0 mt-1" />
                <span className="text-sm"><strong>Head Office:</strong> R-47, A VANI VIHAR UTTAM NAGAR DELHI-110059</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#BEF264] shrink-0 mt-1" />
                <span className="text-sm"><strong>Sub-office:</strong> Thapa Colony, Near Khatu Shyam Mandir Selaqui, Dehradun – 248197 Uttarakhand, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#BEF264] shrink-0" />
                <span className="text-sm">+91 7017193523</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#BEF264] shrink-0" />
                <span className="text-sm">kdtf12345@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex justify-center items-center text-white/40 text-xs text-center">
          <p>© 2026 Kalwati Devi Trust Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
