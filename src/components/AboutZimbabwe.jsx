import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HiGlobeAlt, HiSun, HiUserGroup, HiLocationMarker, HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const facts = [
  { label: 'Capital', value: 'Harare' },
  { label: 'Population', value: '~16 million' },
  { label: 'Area', value: '390,757 km²' },
  { label: 'Currency', value: 'ZiG / USD' },
  { label: 'Languages', value: '16 official' },
  { label: 'Independence', value: '18 April 1980' },
]

const highlights = [
  {
    icon: <HiSun size={26} />,
    title: 'Climate',
    body: "Zimbabwe enjoys one of Africa's finest climates — warm and sunny with 4–10 hours of sunshine daily. The rainy season runs November to April, while May to July is a dry, mild winter.",
  },
  {
    icon: <HiGlobeAlt size={26} />,
    title: 'Victoria Falls',
    body: "One of the Seven Natural Wonders of the World, Victoria Falls (Mosi-oa-Tunya — \"the smoke that thunders\") sees 5.45 million litres of water plunge over a 106 m chasm every minute.",
  },
  {
    icon: <HiLocationMarker size={26} />,
    title: 'Great Zimbabwe',
    body: "The ancient stone city of Great Zimbabwe is the largest pre-colonial structure in sub-Saharan Africa and a UNESCO World Heritage Site. Its name gives the country its identity — \"house of stone\".",
  },
  {
    icon: <HiUserGroup size={26} />,
    title: 'People & Culture',
    body: 'Home to the Shona and Ndebele as the major groups, Zimbabwe is rich in art, music, and sculpture. The country has one of the highest literacy rates in Africa at over 90%.',
  },
]

const tourismSpots = [
  {
    name: 'Victoria Falls',
    region: 'Matabeleland North',
    description: 'The world-famous waterfall on the Zambezi River. Bungee jumping, white-water rafting, sunset cruises.',
    color: 'from-blue-600 to-blue-400',
  },
  {
    name: 'Hwange National Park',
    region: 'Matabeleland North',
    description: "Zimbabwe's largest game reserve — home to over 40,000 elephants, lions, leopards, and wild dogs.",
    color: 'from-amber-700 to-amber-500',
  },
  {
    name: 'Great Zimbabwe Ruins',
    region: 'Masvingo',
    description: 'UNESCO World Heritage Site. Ancient stone city dating back to the 11th century and the cradle of Zimbabwean civilisation.',
    color: 'from-stone-600 to-stone-400',
  },
  {
    name: 'Matobo Hills',
    region: 'Matabeleland South',
    description: 'Extraordinary granite landscape, ancient San rock art, white rhino tracking, and the grave of Cecil John Rhodes.',
    color: 'from-gray-600 to-gray-400',
  },
  {
    name: 'Eastern Highlands',
    region: 'Manicaland',
    description: "Zimbabwe's \"little Switzerland\" — lush mountains, tea estates, trout fishing, and the Nyanga and Chimanimani parks.",
    color: 'from-green-700 to-green-500',
  },
  {
    name: 'Lake Kariba',
    region: 'Mashonaland West',
    description: "One of the world's largest man-made lakes. Houseboat safaris, tiger fishing, and spectacular sunsets.",
    color: 'from-teal-600 to-teal-400',
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function AboutZimbabwe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [activeSpot, setActiveSpot] = useState(0)

  const prev = () => setActiveSpot(i => (i === 0 ? tourismSpots.length - 1 : i - 1))
  const next = () => setActiveSpot(i => (i === tourismSpots.length - 1 ? 0 : i + 1))

  return (
    <section id="zimbabwe" className="py-24 bg-zim-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-zim-gold font-semibold uppercase tracking-widest text-sm mb-3"
          >
            Discover
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-heading font-bold text-3xl md:text-4xl mb-4"
          >
            About <span className="text-zim-gold">Zimbabwe</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            A landlocked nation in southern Africa with extraordinary wildlife, ancient heritage, breathtaking landscapes, and warm, welcoming people.
          </motion.p>
        </div>

        {/* Quick facts strip */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-16">
            {facts.map(f => (
              <div key={f.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="font-heading font-bold text-zim-gold text-base">{f.value}</p>
                <p className="text-white/50 text-xs mt-1">{f.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {highlights.map((h, i) => (
            <FadeIn key={h.title} delay={i * 0.08}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-zim-gold/40 hover:bg-white/8 transition-all duration-200 h-full">
                <div className="w-12 h-12 bg-zim-gold/10 text-zim-gold rounded-xl flex items-center justify-center mb-4">
                  {h.icon}
                </div>
                <h3 className="font-heading font-bold text-white mb-2">{h.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{h.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tourism carousel */}
        <FadeIn delay={0.1}>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-zim-gold font-semibold uppercase tracking-widest text-xs mb-1">Tourism</p>
              <h3 className="font-heading font-bold text-xl">Must-Visit Destinations</h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-zim-gold/20 transition-colors"
                aria-label="Previous"
              >
                <HiChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-zim-gold/20 transition-colors"
                aria-label="Next"
              >
                <HiChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {tourismSpots.map((spot, i) => (
              <motion.div
                key={spot.name}
                animate={{ opacity: activeSpot === i ? 1 : 0.45, scale: activeSpot === i ? 1 : 0.97 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveSpot(i)}
                className={`rounded-2xl overflow-hidden cursor-pointer border transition-all duration-200 ${activeSpot === i ? 'border-zim-gold/60 shadow-lg shadow-zim-gold/10' : 'border-white/10'}`}
              >
                <div className={`bg-gradient-to-br ${spot.color} p-6`}>
                  <p className="text-xs text-white/70 font-medium uppercase tracking-wider mb-1">{spot.region}</p>
                  <h4 className="font-heading font-bold text-white text-lg">{spot.name}</h4>
                </div>
                <div className="bg-white/5 p-5">
                  <p className="text-white/70 text-sm leading-relaxed">{spot.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* CTA strip */}
        <FadeIn delay={0.15}>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Visit Zimbabwe */}
            <a
              href="https://zimbabwetourism.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 bg-zim-green rounded-2xl p-7 hover:bg-zim-green-light transition-colors duration-200"
            >
              <div>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">Tourism</p>
                <h3 className="font-heading font-bold text-white text-xl mb-1">Visit Zimbabwe</h3>
                <p className="text-white/70 text-sm">Explore destinations, safaris, tours, and travel guides.</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                <HiArrowRight size={22} className="text-white" />
              </div>
            </a>

            {/* Apply for Visa */}
            <a
              href="https://www.evisa.gov.zw/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 bg-zim-gold rounded-2xl p-7 hover:bg-yellow-300 transition-colors duration-200"
            >
              <div>
                <p className="text-zim-black/60 text-xs font-semibold uppercase tracking-widest mb-1">Entry</p>
                <h3 className="font-heading font-bold text-zim-black text-xl mb-1">Apply for a Visa</h3>
                <p className="text-zim-black/70 text-sm">Apply for your Zimbabwe e-Visa quickly and securely online.</p>
              </div>
              <div className="w-12 h-12 bg-zim-black/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-zim-black/20 transition-colors">
                <HiArrowRight size={22} className="text-zim-black" />
              </div>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
