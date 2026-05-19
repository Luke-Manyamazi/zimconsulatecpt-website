import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HiBriefcase, HiAcademicCap, HiCurrencyDollar, HiHome, HiGlobeAlt, HiArrowRight, HiClock, HiChevronDown, HiChevronUp } from 'react-icons/hi'

const INITIAL_COUNT = 3

const opportunities = [
  {
    icon: <HiBriefcase size={24} />,
    tag: 'Employment',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'Skilled Professionals Recruitment Drive',
    org: 'Zimbabwe Investment & Development Agency',
    location: 'Harare, Zimbabwe',
    deadline: '30 June 2025',
    description: 'ZIDA is seeking experienced professionals in engineering, healthcare, finance, and ICT sectors to return and contribute to Zimbabwe\'s economic development.',
    sectors: ['Engineering', 'Healthcare', 'Finance', 'ICT'],
  },
  {
    icon: <HiAcademicCap size={24} />,
    tag: 'Scholarship',
    tagColor: 'bg-purple-100 text-purple-700',
    title: 'Diaspora Scholarship Programme 2025',
    org: 'Ministry of Higher & Tertiary Education',
    location: 'Various Universities, Zimbabwe',
    deadline: '15 July 2025',
    description: 'Full scholarships available for children of Zimbabwean diaspora to pursue undergraduate and postgraduate studies at Zimbabwean universities.',
    sectors: ['Undergraduate', 'Postgraduate', 'STEM', 'Agriculture'],
  },
  {
    icon: <HiCurrencyDollar size={24} />,
    tag: 'Investment',
    tagColor: 'bg-green-100 text-green-700',
    title: 'Diaspora Investment Summit 2025',
    org: 'Zimbabwe Diaspora Investment Forum',
    location: 'Harare International Conference Centre',
    deadline: '1 August 2025',
    description: 'Annual forum connecting diaspora investors with vetted local business opportunities in agriculture, real estate, mining, and technology.',
    sectors: ['Agriculture', 'Real Estate', 'Mining', 'Technology'],
  },
  {
    icon: <HiHome size={24} />,
    tag: 'Housing',
    tagColor: 'bg-orange-100 text-orange-700',
    title: 'Diaspora Housing Scheme — Phase 3',
    org: 'National Building Society of Zimbabwe',
    location: 'Harare, Bulawayo & Gweru',
    deadline: 'Ongoing',
    description: 'Affordable home ownership scheme exclusively for diaspora members. Purchase plots or complete homes with flexible USD-denominated payment plans.',
    sectors: ['Residential', 'Plots', 'Housing Finance'],
  },
  {
    icon: <HiGlobeAlt size={24} />,
    tag: 'Community',
    tagColor: 'bg-teal-100 text-teal-700',
    title: 'Diaspora Community Development Fund',
    org: 'Ministry of Foreign Affairs & International Trade',
    location: 'Remote / Zimbabwe',
    deadline: '31 August 2025',
    description: 'Grants of up to USD $50,000 available for diaspora-led community development projects in education, water, sanitation, and rural electrification.',
    sectors: ['Education', 'WASH', 'Energy', 'Rural Dev'],
  },
  {
    icon: <HiBriefcase size={24} />,
    tag: 'Business',
    tagColor: 'bg-red-100 text-red-700',
    title: 'SME Mentorship & Incubation Programme',
    org: 'Zimbabwe SME Association',
    location: 'Virtual + Harare',
    deadline: '20 July 2025',
    description: 'Experienced diaspora entrepreneurs invited to mentor young Zimbabwean SME owners. Remote participation available with optional in-person residency.',
    sectors: ['Mentorship', 'SME', 'Entrepreneurship'],
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

export default function Diaspora() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? opportunities : opportunities.slice(0, INITIAL_COUNT)
  const hidden = opportunities.length - INITIAL_COUNT

  return (
    <section id="diaspora" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-subtitle mb-3"
          >
            Diaspora Desk
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            Opportunities for Zimbabweans Abroad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Stay connected with opportunities back home — jobs, scholarships, investment programmes, and community initiatives for Zimbabweans in the diaspora.
          </motion.p>
        </div>

        {/* Opportunity cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((opp, i) => (
            <FadeIn key={opp.title} delay={i * 0.07}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-zim-green/30 transition-all duration-200 flex flex-col h-full">
                <div className="p-6 flex-1">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-11 h-11 bg-zim-green/10 text-zim-green rounded-xl flex items-center justify-center flex-shrink-0">
                      {opp.icon}
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${opp.tagColor}`}>
                      {opp.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-zim-black text-base mb-1 leading-snug">
                    {opp.title}
                  </h3>
                  <p className="text-zim-green text-xs font-medium mb-3">{opp.org}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{opp.description}</p>

                  {/* Sectors */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {opp.sectors.map(s => (
                      <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-5 border-t border-gray-50 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <HiClock size={14} />
                    <span>Deadline: <strong className="text-gray-700">{opp.deadline}</strong></span>
                  </div>
                  <button className="inline-flex items-center gap-1 text-xs font-semibold text-zim-green hover:text-zim-green-dark transition-colors">
                    Learn more <HiArrowRight size={14} />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Show more / less */}
        {opportunities.length > INITIAL_COUNT && (
          <button
            onClick={() => setShowAll(v => !v)}
            className="mt-6 w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-zim-green border border-zim-green/30 rounded-xl hover:bg-zim-green/5 transition-colors"
          >
            {showAll ? (
              <><HiChevronUp size={18} /> Show less</>
            ) : (
              <><HiChevronDown size={18} /> Show {hidden} more opportunit{hidden !== 1 ? 'ies' : 'y'}</>
            )}
          </button>
        )}

        {/* CTA strip */}
        <FadeIn delay={0.3}>
          <div className="mt-12 bg-zim-green rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
            <div>
              <h3 className="font-heading font-bold text-xl mb-1">Have an opportunity to list?</h3>
              <p className="text-white/70 text-sm">Contact the Consulate to have your diaspora programme or initiative featured here.</p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 bg-zim-gold text-zim-black font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
