import React from 'react';
import { Plus, Sun, Sparkles, Droplets, Feather, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const treatments = [
  {
    title: "Trattamenti viso personalizzati",
    description: "Protocolli esclusivi per la purificazione, luminosità e giovinezza della tua pelle.",
    icon: <Sun size={32} strokeWidth={1.5} className="text-[#6b4226]" />
  },
  {
    title: "Biorivitalizzazione & Filler",
    description: "Miglioramenti lievi che rinfrescano i tuoi tratti senza cambiare la tua essenza.",
    icon: <Sparkles size={32} strokeWidth={1.5} className="text-[#6b4226]" />
  },
  {
    title: "Rigenerazione Anti-Aging",
    description: "Idratazione profonda e soluzioni avanzate per restituire tono ed elasticità al tuo viso.",
    icon: <Droplets size={32} strokeWidth={1.5} className="text-[#6b4226]" />
  },
  {
    title: "Epilazione laser",
    description: "Tecnologia all'avanguardia per una pelle liscia come la seta, in totale comfort e sicurezza.",
    icon: <Feather size={32} strokeWidth={1.5} className="text-[#6b4226]" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
};

export default function TreatmentsSection() {
  return (
    <section id="servizi" className="w-full pt-20 pb-20 md:pb-48 lg:pb-64 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Badge Top */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 px-4 py-1.5 rounded-full mb-20 shadow-sm"
          style={{ backgroundColor: '#fcf8f3', border: '1px solid rgba(166, 124, 82, 0.15)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#a67c52]" />
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-[#a67c52] uppercase">
            I nostri trattamenti
          </span>
        </motion.div>

        {/* Heading Treatment Section */}
        <div className="w-full max-w-4xl text-center mb-24">
          <h2 
            className="text-black font-medium leading-[1.05]"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
              letterSpacing: '-0.03em'
            }}
          >
            I nostri servizi
          </h2>
        </div>

        {/* Cards container: Grid layout to match reference */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {treatments.map((t, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="group relative w-full border border-stone-200/60 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 lg:p-14 flex flex-col gap-8 hover:border-[#a67c52]/30 hover:bg-[#fcfaf7] transition-all duration-500 bg-[#fdfcfb] shadow-sm overflow-hidden"
            >
              {/* Top Row: Icon + Plus Button */}
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-3xl bg-stone-50 flex items-center justify-center text-[#a67c52] border border-stone-100/50 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                  {React.cloneElement(t.icon, { size: 28 })}
                </div>
                <button 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border border-stone-200 bg-white hover:bg-[#1a1a1a] hover:border-[#1a1a1a] hover:text-white transition-all duration-500 shadow-sm"
                  aria-label="Espandi trattamento"
                >
                  <Plus size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Middle: Title + Description */}
              <div className="flex flex-col gap-4 py-4">
                <h3 
                  className="text-black font-medium leading-tight"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {t.title}
                </h3>
                <p className="text-black/60 text-[15px] md:text-base leading-relaxed max-w-sm">
                  {t.description}
                </p>
              </div>

              {/* Bottom: View Detail Button */}
              <div className="mt-auto">
                <button className="flex items-center gap-3.5 px-6 py-2.5 rounded-full bg-white border border-stone-200 hover:border-[#a67c52]/40 hover:text-[#a67c52] transition-all duration-500 text-[13px] font-bold tracking-widest uppercase shadow-sm">
                  Scopri i dettagli
                </button>
              </div>

              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial-gradient from-[#a67c52]/[0.03] to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
