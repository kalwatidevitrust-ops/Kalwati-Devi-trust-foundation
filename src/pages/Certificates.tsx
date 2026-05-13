import { motion, AnimatePresence } from 'motion/react';
import { Award, ShieldCheck, CheckCircle, FileCheck, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import isoCertImage from '../assets/images/regenerated_image_1777712957632.jpg';
import form10acPdf from '../assets/images/regenerated_image_1777713521671.pdf';
import form10acPreview from '../assets/images/regenerated_image_1777713892690.png';
import socialImpactImage from '../assets/images/regenerated_image_1777716115181.jpg';
import trustRegImage from '../assets/images/regenerated_image_1777716291242.png';

// Note: In a real environment, these would be the actual document scans provided by the user.
// For now, I'm using the provided document images as the gallery for the 80G & 12A certificate.
const form10acPage2 = "https://firebasestorage.googleapis.com/v0/b/firejet-9717e.appspot.com/o/kalwati-devi%2Fform10ac_p2.png?alt=media";

const certificates = [
  {
    title: "Certificate of Enrolment",
    issuer: "",
    icon: <ShieldCheck className="w-12 h-12" />,
    desc: "",
    image: isoCertImage,
    pdf: "https://drive.google.com/drive/folders/1ppfohnLKxD6_Hny3QscjDooB4yoElmZx?usp=sharing",
    gallery: [isoCertImage]
  },
  {
    title: "KDTF PAN registration",
    issuer: "",
    icon: <Award className="w-12 h-12" />,
    desc: "",
    image: socialImpactImage,
    gallery: [socialImpactImage]
  },
  {
    title: "80G & 12A (Form 10AC)",
    issuer: "",
    icon: <FileCheck className="w-12 h-12" />,
    desc: "",
    image: form10acPreview,
    pdf: "https://drive.google.com/drive/folders/1D58qwm2Lp7fRsZ9rEzCWyG6BDonvSDtc?usp=drive_link",
    gallery: [form10acPreview, form10acPage2]
  },
  {
    title: "Trust Registration",
    issuer: "",
    icon: <CheckCircle className="w-12 h-12" />,
    desc: "",
    image: trustRegImage,
    pdf: "https://drive.google.com/drive/folders/1-etnPPppBcZyLY7JQPHKlb0wk_coaFYE?usp=sharing",
    gallery: [trustRegImage]
  }
];

export default function Certificates() {
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openGallery = (gallery: string[]) => {
    setSelectedGallery(gallery);
    setCurrentIdx(0);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedGallery) {
      setCurrentIdx((prev) => (prev + 1) % selectedGallery.length);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedGallery) {
      setCurrentIdx((prev) => (prev - 1 + selectedGallery.length) % selectedGallery.length);
    }
  };

  const handleButtonClick = (cert: typeof certificates[0]) => {
    if (cert.pdf) {
      window.open(cert.pdf, '_blank');
    } else {
      openGallery(cert.gallery);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-[#0D5C4A] py-24 relative overflow-hidden text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Recognition</h1>
          <p className="text-white/70 text-xl max-w-3xl mx-auto">
            Certifications and awards that validate our commitment to social change.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[3rem] shadow-2xl overflow-hidden group border border-gray-100"
              >
                <div 
                  className="relative h-64 overflow-hidden cursor-zoom-in"
                  onClick={() => openGallery(cert.gallery)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[#0D5C4A]/20 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 p-4 rounded-full shadow-lg">
                      {cert.pdf ? (
                        <FileCheck className="w-8 h-8 text-[#0D5C4A]" />
                      ) : (
                        <ZoomIn className="w-8 h-8 text-[#0D5C4A]" />
                      )}
                    </div>
                  </div>

                  <div className="absolute top-6 right-6 w-16 h-16 bg-[#BEF264] rounded-2xl flex items-center justify-center text-[#0D5C4A] shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    {cert.icon}
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-[#0D5C4A] leading-tight">{cert.title}</h3>
                  </div>
                  {cert.issuer && <p className="text-[#0D5C4A] opacity-60 font-bold text-sm mb-4 uppercase tracking-widest">{cert.issuer}</p>}
                  {cert.desc && <p className="text-gray-600 leading-relaxed mb-6">{cert.desc}</p>}
                  <button 
                    onClick={() => handleButtonClick(cert)}
                    className="flex items-center space-x-2 text-[#0D5C4A] font-bold text-sm hover:text-[#BEF264] transition-colors group/btn"
                  >
                    <span>{cert.pdf ? 'View Official PDF' : 'View Full Certificate'}</span>
                    <div className="w-8 h-[2px] bg-current transform origin-left transition-transform group-hover/btn:scale-x-150" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-[#0D5C4A]/95 backdrop-blur-md"
            onClick={() => setSelectedGallery(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-[#BEF264] transition-colors z-20"
              onClick={() => setSelectedGallery(null)}
            >
              <X className="w-10 h-10" />
            </button>

            {selectedGallery.length > 1 && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#BEF264] hover:text-[#0D5C4A] p-4 rounded-full text-white transition-all z-20"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-[#BEF264] hover:text-[#0D5C4A] p-4 rounded-full text-white transition-all z-20"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-20">
                  {selectedGallery.map((_, i) => (
                    <div 
                      key={i} 
                      className={cn(
                        "w-2 h-2 rounded-full transition-all",
                        i === currentIdx ? "bg-[#BEF264] w-8" : "bg-white/30"
                      )} 
                    />
                  ))}
                </div>
              </>
            )}

            <motion.div 
              key={currentIdx}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedGallery[currentIdx]} 
                alt="Full Document" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl bg-white p-4"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
