import { motion } from 'framer-motion'
import { HiArrowRight, HiCalendar } from 'react-icons/hi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-zim-green-dark via-zim-green to-zim-green-light" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-8 text-white"
            >
              <span className="w-2 h-2 bg-zim-gold rounded-full animate-pulse" />
              Official Zimbabwe Consulate · Cape Town, South Africa
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 text-white"
            >
              Serving Zimbabweans
              <br />
              <span className="text-zim-gold">in the Western Cape</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-white/80 text-lg max-w-xl mb-10 leading-relaxed"
            >
              Consular services for Zimbabwean citizens living in South Africa — passports, birth certificates, travel documents, and more.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#appointments"
                className="inline-flex items-center justify-center gap-2 bg-zim-gold text-zim-black font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all duration-200 text-base shadow-lg shadow-black/20"
              >
                <HiCalendar size={20} />
                Book an Appointment
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-200 text-base"
              >
                View Services
                <HiArrowRight size={20} />
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { value: '5', label: 'Services' },
                { value: 'Mon–Fri', label: 'Open Days' },
                { value: '09:30', label: 'Opens At' },
                { value: 'CPT', label: 'Location' },
              ].map(stat => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 text-center">
                  <p className="font-heading font-bold text-xl text-zim-gold">{stat.value}</p>
                  <p className="text-white/70 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: COA + flag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex flex-col items-center gap-8"
          >
            {/* Coat of Arms */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-75" />
              <img
                src="/ZimCOA.png"
                alt="Zimbabwe Coat of Arms"
                className="relative w-72 h-72 object-contain drop-shadow-2xl"
              />
            </div>

            {/* Zimbabwe flag */}
            <div className="w-full max-w-xs">
              <p className="text-white/50 text-xs text-center uppercase tracking-widest mb-3">Republic of Zimbabwe</p>
              <img
                src="/ZimFlag.png"
                alt="Flag of Zimbabwe"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
