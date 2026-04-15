import React, { useRef } from 'react';
import { Star, Calendar, Sparkles, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const REVIEWS = [
  {
    id: 1,
    text: "Ero dubbiosa riguardo ai trattamenti estetici, ma i risultati sono incredibilmente naturali e mi sento benissimo.",
    author: "Elena M.",
    role: "Direttrice Creativa",
  },
  {
    id: 2,
    text: "Centro professionale e accogliente con tecnologie all'avanguardia. Il trattamento laser è stato piacevole.",
    author: "Sara V.",
    role: "Insegnante",
  },
  {
    id: 3,
    text: "Un'esperienza fantastica dall'inizio alla fine. Lo staff è estremamente competente e attento alle mie esigenze.",
    author: "Martina D.",
    role: "Imprenditrice",
  },
  {
    id: 4,
    text: "Pelle radiosa dopo una sola seduta. Consiglierò sicuramente questo centro a tutte le mie amiche!",
    author: "Giulia S.",
    role: "Avvocato",
  }
];

const bentoItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export default function BentoGridSection() {
  const marqueeRef = useRef(null);
  const isInView = useInView(marqueeRef, { amount: 0.1 });

  return (
    <section className="w-full py-24 md:py-48 lg:py-64 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          {/* Badge Top */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full mb-16 shadow-sm"
            style={{ backgroundColor: '#fcf8f3', border: '1px solid rgba(166, 124, 82, 0.15)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a67c52]" />
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-[#a67c52] uppercase">
              Perché i nostri clienti ci scelgono
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-black font-medium max-w-4xl"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.03em'
            }}
          >
            Leader nel settore
          </motion.h2>
        </div>

        {/* BENTO GRID */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
        >
          
          {/* ================= COLUMN 1 ================= */}
          <div className="flex flex-col gap-8 h-full">
            
            {/* Box 1: Before / After */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="relative w-full h-[320px] md:h-[420px] rounded-[2.5rem] overflow-hidden bg-[#e6ded5] group cursor-pointer shadow-sm border border-black/5"
            >
              <img src="/before-after.png" alt="Risultati Prima e Dopo" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
              
              {/* Labels Prima / Dopo */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] tracking-widest font-bold uppercase text-black shadow-sm z-10">
                Prima
              </div>
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] tracking-widest font-bold uppercase text-black shadow-sm z-10">
                Dopo
              </div>

              {/* Glass overlay text */}
              <div 
                className="absolute inset-x-5 bottom-5 bg-stone-900/60 backdrop-blur-xl border border-white/10 rounded-[1.8rem] flex flex-col p-7 z-10 shadow-xl"
                style={{ willChange: 'backdrop-filter' }}
              >
                <h3 className="text-white text-2xl md:text-3xl font-serif mb-4 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Risultati reali,<br />storie di bellezza
                </h3>
                <div className="flex items-center gap-5 text-white/80 text-[12px] font-medium tracking-wide">
                  <span className="flex items-center gap-2"><Calendar size={14} className="opacity-70" /> 12 Settimane</span>
                  <span className="flex items-center gap-2"><Sparkles size={14} className="opacity-70" /> Illuminante</span>
                </div>
              </div>
              
              {/* Simulator line */}
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/40 flex items-center justify-center -translate-x-1/2 z-20">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <ChevronLeft size={14} color="white" />
                  <ChevronRight size={14} color="white" />
                </div>
              </div>
            </motion.div>

            {/* Box 2: Skin Analysis */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full flex-grow rounded-[2.5rem] bg-[#f8f4f0] p-10 flex flex-col items-center justify-center text-center shadow-sm border border-black/5"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 text-[#a67c52] font-bold text-[10px] uppercase tracking-[0.2em] shadow-sm">
                Gratis
              </div>
              <h3 className="text-black text-3xl font-serif mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Analisi della pelle
              </h3>
              <p className="text-black/60 text-sm mb-8 leading-relaxed max-w-[240px]">
                Consulenza esperta personalizzata per le tue esigenze
              </p>
              <button className="group flex items-center gap-4 pl-2 pr-6 py-2 rounded-full bg-white border border-stone-200 hover:bg-[#1a1a1a] transition-all duration-500 w-fit shadow-sm">
                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-[#f8f4f0] group-hover:bg-white/10 transition-colors duration-500">
                  <ArrowUpRight size={16} strokeWidth={2} className="text-[#a67c52] group-hover:text-white" />
                </span>
                <span className="text-[14px] font-semibold text-[#1a1a1a] group-hover:text-white transition-colors duration-500">
                  Prenota ora
                </span>
              </button>
            </motion.div>

          </div>

          {/* ================= COLUMN 2 ================= */}
          <div className="flex flex-col gap-8 h-full">

            {/* Box 3: Seamless Client */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full h-[200px] md:h-[240px] rounded-[2.5rem] bg-[#fdfcfb] p-10 relative overflow-hidden shadow-sm flex flex-col justify-between border border-black/5"
            >
              <h3 className="text-black text-3xl md:text-4xl font-serif leading-[1.1] z-10 max-w-[220px]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Un'esperienza impeccabile
              </h3>
              <img src="/hero-2.png" alt="Mani" loading="lazy" decoding="async" className="absolute -bottom-12 -right-12 w-72 h-72 object-contain opacity-40 mix-blend-multiply transition-transform duration-700 group-hover:scale-110" />
            </motion.div>

            {/* Box 4: Tailored to vision */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full flex-grow rounded-[2.5rem] bg-[#f8f4f0] p-10 flex flex-col items-center justify-center text-center shadow-sm border border-black/5"
            >
              <div className="flex items-center justify-center mb-8">
                <div className="w-18 h-18 rounded-full overflow-hidden border-2 border-white z-20 shadow-md">
                  <img src="/hero-1.png" alt="avatar" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="w-22 h-22 rounded-full overflow-hidden border-4 border-white -ml-4 z-30 shadow-xl scale-110">
                  <img src="/hero-3.png" alt="avatar" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="w-18 h-18 rounded-full overflow-hidden border-2 border-white -ml-4 z-20 shadow-md">
                  <img src="/hero-4.png" alt="avatar" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-black text-3xl font-serif mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Su misura per te
              </h3>
              <p className="text-black/60 text-sm max-w-[260px] leading-relaxed">
                Piani di trattamento personalizzati per ogni tipo di inestetismo.
              </p>
            </motion.div>

            {/* Box 5: Decorative Bottom */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full h-[160px] md:h-[200px] rounded-[2.5rem] bg-[#e6ded5] overflow-hidden shadow-sm border border-black/5"
            >
              <img src="/hero-4.png" alt="Clinic" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-90 object-center transition-transform duration-1000 group-hover:scale-105" />
            </motion.div>

          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="flex flex-col gap-8 h-full">

            {/* Box 6: 10+ Years */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full h-[200px] md:h-[240px] rounded-[2.5rem] bg-[#fdfcfb] p-10 relative overflow-hidden shadow-sm flex flex-col justify-center border border-black/5"
            >
              <div className="absolute text-[9rem] font-serif text-black/[0.03] bottom-[-3rem] right-[-1rem] leading-none whitespace-nowrap select-none pointer-events-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                2016
              </div>
              <h3 className="text-black text-6xl font-serif mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>10+</h3>
              <p className="text-black/60 text-sm mb-6 max-w-[160px] leading-relaxed font-medium">
                Anni di eccellenza nel benessere estetico
              </p>
              <div className="flex flex-col gap-2.5">
                <span className="px-4 py-1.5 bg-stone-100/80 rounded-full text-[11px] font-bold tracking-wider text-[#8c6b4a] w-max uppercase">2,000+ Procedure</span>
                <span className="px-4 py-1.5 bg-stone-100/80 rounded-full text-[11px] font-bold tracking-wider text-[#8c6b4a] w-max uppercase">50+ Trattamenti</span>
              </div>
            </motion.div>

            {/* Box 7: Looping Reviews */}
            <motion.div 
              variants={bentoItemVariants}
              className="w-full flex-grow rounded-[2rem] bg-[#fdfcfb] border border-stone-200/50 p-8 flex flex-col shadow-sm overflow-hidden h-[350px] md:h-[450px]"
            >
              {/* Header Stats */}
              <div className="flex flex-col items-center text-center mb-6 z-10 bg-[#fdfcfb]">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#8c6b4a] text-[#8c6b4a]" />)}
                </div>
                <h3 className="text-black text-4xl font-serif mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>99%</h3>
                <p className="text-black/60 text-sm">Clienti globali totalmente soddisfatti</p>
              </div>

              {/* Masking Container for Marquee */}
              <div className="relative flex-1 overflow-hidden mask-image-bento" ref={marqueeRef}>
                {/* Due div iterati per creare l'effetto loop continuo */}
                <div 
                  className="flex flex-col gap-4 animate-marquee-vertical"
                  style={{ 
                    animationPlayState: isInView ? 'running' : 'paused',
                    willChange: 'transform'
                  }}
                >
                  {/* Prima iterazione */}
                  {REVIEWS.map((r) => (
                    <div key={`a-${r.id}`} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex flex-col gap-3 shrink-0">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-[#a67c52] text-[#a67c52]" />)}
                      </div>
                      <p className="text-black/80 text-sm leading-relaxed">"{r.text}"</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex flex-col">
                          <span className="text-black font-semibold text-[13px]">{r.author}</span>
                          <span className="text-stone-400 text-xs">{r.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Seconda iterazione (copia per l'effetto infinito) */}
                  {REVIEWS.map((r) => (
                    <div key={`b-${r.id}`} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex flex-col gap-3 shrink-0">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-[#a67c52] text-[#a67c52]" />)}
                      </div>
                      <p className="text-black/80 text-sm leading-relaxed">"{r.text}"</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex flex-col">
                          <span className="text-black font-semibold text-[13px]">{r.author}</span>
                          <span className="text-stone-400 text-xs">{r.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* CSS inline trick block per lo sbiadimento in alto/basso per le recensioni */}
              <style dangerouslySetInnerHTML={{__html: `
                .mask-image-bento {
                  -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
                  mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
                }
              `}} />

            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
