import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

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
    title: 'Climate',
    body: "Zimbabwe enjoys one of Africa's finest climates — warm and sunny with 4–10 hours of sunshine daily. Rainy season runs November–April; winter (May–July) is dry and mild.",
    img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Victoria Falls',
    body: "One of the Seven Natural Wonders of the World. Mosi-oa-Tunya — \"the smoke that thunders\" — sees 5.45 million litres plunge 106 m every minute along the Zambezi River.",
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Great Zimbabwe',
    body: "The ancient stone city of Great Zimbabwe is the largest pre-colonial structure in sub-Saharan Africa and a UNESCO World Heritage Site — the very name the country is built on.",
    img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'People & Culture',
    body: 'Home to the Shona and Ndebele peoples, Zimbabwe boasts rich art, music, and sculpture traditions — with one of Africa\'s highest literacy rates at over 90%.',
    img: 'https://images.unsplash.com/photo-1531746790733-246659680098?auto=format&fit=crop&w=800&q=80',
  },
]

const destinations = [
  {
    name: 'Victoria Falls',
    region: 'Matabeleland North',
    description: 'Bungee jumping, white-water rafting, sunset river cruises on the mighty Zambezi.',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Hwange National Park',
    region: 'Matabeleland North',
    description: "Zimbabwe's largest game reserve — over 40,000 elephants, lions, leopards, and painted wolves.",
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Great Zimbabwe Ruins',
    region: 'Masvingo',
    description: 'Ancient 11th-century stone city. UNESCO World Heritage Site and cradle of Zimbabwean civilisation.',
    img: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Matobo Hills',
    region: 'Matabeleland South',
    description: 'Extraordinary granite landscape, ancient San rock art, and white rhino tracking safaris.',
    img: 'https://images.unsplash.com/photo-1580654712603-eb61d3e0085a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Eastern Highlands',
    region: 'Manicaland',
    description: "Zimbabwe's \"little Switzerland\" — lush peaks, tea estates, trout fishing, and Nyanga National Park.",
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Lake Kariba',
    region: 'Mashonaland West',
    description: "One of the world's largest man-made lakes. Houseboat safaris, tiger fishing, fiery sunsets.",
    img: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=900&q=80',
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
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => (i === 0 ? destinations.length - 1 : i - 1))
  const next = () => setActive(i => (i === destinations.length - 1 ? 0 : i + 1))

  return (
    <section id="zimbabwe" className="py-24 bg-zim-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
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

        {/* Quick facts */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-16">
            {facts.map(f => (
              <div key={f.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="font-heading font-bold text-zim-gold text-base leading-tight">{f.value}</p>
                <p className="text-white/50 text-xs mt-1">{f.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Highlight photo cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {highlights.map((h, i) => (
            <FadeIn key={h.title} delay={i * 0.08}>
              <div className="group relative rounded-2xl overflow-hidden h-72 cursor-default">
                {/* Photo */}
                <img
                  src={h.img}
                  alt={h.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-heading font-bold text-white text-lg mb-1">{h.title}</h3>
                  <p className="text-white/75 text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {h.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tourism destinations */}
        <FadeIn delay={0.1}>
          <div className="flex items-center justify-between mb-6">
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
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                animate={{ opacity: active === i ? 1 : 0.5, scale: active === i ? 1 : 0.97 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActive(i)}
                className={`group relative rounded-2xl overflow-hidden h-64 cursor-pointer border-2 transition-all duration-300 ${
                  active === i ? 'border-zim-gold shadow-xl shadow-zim-gold/20' : 'border-transparent'
                }`}
              >
                {/* Photo */}
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Active highlight ring glow */}
                {active === i && (
                  <div className="absolute inset-0 ring-2 ring-zim-gold/60 rounded-2xl pointer-events-none" />
                )}
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-zim-gold text-xs font-semibold uppercase tracking-wider mb-1">{dest.region}</p>
                  <h4 className="font-heading font-bold text-white text-lg leading-snug">{dest.name}</h4>
                  <p className="text-white/70 text-xs mt-1 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {dest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* CTA pair */}
        <FadeIn delay={0.15}>
          <div className="grid sm:grid-cols-2 gap-5">
            <a
              href="https://zimbabwetourism.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden h-44 flex items-end"
            >
              <img
                src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80"
                alt="Visit Zimbabwe"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zim-green/90 via-zim-green/40 to-transparent" />
              <div className="relative z-10 p-6 flex items-end justify-between w-full">
                <div>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">Tourism</p>
                  <h3 className="font-heading font-bold text-white text-xl">Visit Zimbabwe</h3>
                  <p className="text-white/70 text-sm">Explore destinations, safaris &amp; travel guides</p>
                </div>
                <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <HiArrowRight size={20} className="text-white" />
                </div>
              </div>
            </a>

            <a
              href="https://www.evisa.gov.zw/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden h-44 flex items-end"
            >
              <img
                src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=900&q=80"
                alt="Apply for a Visa"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-700/90 via-yellow-600/40 to-transparent" />
              <div className="relative z-10 p-6 flex items-end justify-between w-full">
                <div>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">Entry</p>
                  <h3 className="font-heading font-bold text-white text-xl">Apply for a Visa</h3>
                  <p className="text-white/70 text-sm">Apply for your Zimbabwe e-Visa online</p>
                </div>
                <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                  <HiArrowRight size={20} className="text-white" />
                </div>
              </div>
            </a>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
