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
    <section className="w-full py-20 md:py-48 lg:py-56 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          {/* Badge Top */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-6 py-2 rounded-full mb-12 shadow-sm"
            style={{ backgroundColor: '#fcf8f3', border: '1px solid rgba(166, 124, 82, 0.1)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a67c52]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#a67c52] uppercase">
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
              fontSize: 'clamp(3.2rem, 8vw, 7rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.02em'
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          
          {/* ================= COLUMN 1 ================= */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* Box 1: Before / After */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden bg-[#e6ded5] group cursor-pointer shadow-sm"
            >
              <img src="/before-after.png" alt="Risultati Prima e Dopo" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
              
              {/* Labels Prima / Dopo */}
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-black shadow-sm z-10">
                Prima
              </div>
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-black shadow-sm z-10">
                Dopo
              </div>

              {/* Glass overlay text */}
              <div 
                className="absolute inset-x-4 bottom-4 bg-[#916b4a]/60 backdrop-blur-lg border border-white/20 rounded-[1.5rem] flex flex-col p-6 z-10 shadow-xl"
                style={{ willChange: 'backdrop-filter' }}
              >
                <h3 className="text-white text-xl md:text-2xl font-serif mb-3 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  Risultati reali,<br />storie di bellezza
                </h3>
                <div className="flex items-center gap-4 text-white/90 text-[13px]">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> 12 Settimane</span>
                  <span className="flex items-center gap-1.5"><Sparkles size={14} /> Trattamento illuminante</span>
                </div>
              </div>
              
              {/* Simulator line */}
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/60 flex items-center justify-center -translate-x-1/2 z-20">
                <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40">
                  <ChevronLeft size={12} color="white" />
                  <ChevronRight size={12} color="white" />
                </div>
              </div>
            </motion.div>

            {/* Box 2: Skin Analysis */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full flex-grow rounded-[2rem] bg-[#f5ede3] p-8 flex flex-col items-center justify-center text-center shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4 text-[#a67c52] font-bold text-xs uppercase tracking-wider">
                Free
              </div>
              <h3 className="text-black text-2xl font-serif mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Analisi della pelle
              </h3>
              <p className="text-black/70 text-sm mb-6">
                Consulenza esperta gratuita
              </p>
              <button className="group flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-[#f5ede3] border border-black/20 hover:bg-[#6b4226] transition-colors duration-300 w-fit">
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white group-hover:bg-[#f5ede3] transition-colors duration-300">
                  <ArrowUpRight size={14} strokeWidth={2} color="#6b4226" />
                </span>
                <span className="text-[13px] font-medium text-[#6b4226] group-hover:text-white transition-colors duration-300">
                  Prenota ora
                </span>
              </button>
            </motion.div>

          </div>

          {/* ================= COLUMN 2 ================= */}
          <div className="flex flex-col gap-6 h-full">

            {/* Box 3: Seamless Client */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full h-[180px] md:h-[220px] rounded-[2rem] bg-[#f5ede3] p-8 relative overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <h3 className="text-black text-3xl font-serif leading-tight z-10 max-w-[200px]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Un'esperienza cliente impeccabile
              </h3>
              <img src="/hero-2.png" alt="Mani" loading="lazy" decoding="async" className="absolute -bottom-10 -right-10 w-64 h-64 object-contain opacity-50 mix-blend-multiply" />
            </motion.div>

            {/* Box 4: Tailored to vision */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full flex-grow rounded-[2rem] bg-[#f5ede3] p-8 flex flex-col items-center justify-center text-center shadow-sm"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#f5ede3] z-20 shadow-md">
                  <img src="/hero-1.png" alt="avatar" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#f5ede3] -ml-4 z-30 shadow-lg scale-110">
                  <img src="/hero-3.png" alt="avatar" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#f5ede3] -ml-4 z-20 shadow-md">
                  <img src="/hero-4.png" alt="avatar" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-black text-2xl font-serif mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Su misura per la tua pelle
              </h3>
              <p className="text-black/70 text-sm max-w-xs">
                Piani di trattamento personalizzati per ogni tipo di inestetismo.
              </p>
            </motion.div>

            {/* Box 5: Decorative Bottom */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full h-[150px] md:h-[180px] rounded-[2rem] bg-[#e6ded5] overflow-hidden shadow-sm"
            >
              <img src="/hero-4.png" alt="Clinic" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-90 object-center" />
            </motion.div>

          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="flex flex-col gap-6 h-full">

            {/* Box 6: 10+ Years */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full h-[180px] md:h-[220px] rounded-[2rem] bg-[#f5ede3] p-8 relative overflow-hidden shadow-sm flex flex-col justify-center"
            >
              <div className="absolute text-[8rem] font-serif text-black/[0.03] bottom-[-2rem] right-[-1rem] leading-none whitespace-nowrap select-none pointer-events-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Dal 2016
              </div>
              <h3 className="text-black text-5xl font-serif mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>10+</h3>
              <p className="text-black/70 text-sm mb-6 max-w-[150px] leading-relaxed">
                Anni di eccellenza nel benessere estetico
              </p>
              <div className="flex flex-col gap-2">
                <span className="px-3 py-1 bg-white/70 rounded-full text-xs font-semibold text-[#8c6b4a] w-max">2,000+ Procedure</span>
                <span className="px-3 py-1 bg-white/70 rounded-full text-xs font-semibold text-[#8c6b4a] w-max">50+ Trattamenti</span>
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
