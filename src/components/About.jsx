import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiGlobeAlt, HiUserGroup, HiStar } from 'react-icons/hi'

const facts = [
  {
    icon: <HiGlobeAlt size={28} />,
    title: 'Our Mission',
    body: 'To provide efficient, professional, and dignified consular services to Zimbabwean nationals residing in the Western Cape and surrounding areas.',
  },
  {
    icon: <HiUserGroup size={28} />,
    title: 'Who We Serve',
    body: 'Zimbabwean citizens in the Republic of South Africa who require consular assistance, documentation, and official government services.',
  },
  {
    icon: <HiStar size={28} />,
    title: 'Our Commitment',
    body: 'We are committed to upholding the dignity of every Zimbabwean we serve, ensuring transparent processes and timely assistance.',
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <FadeIn>
              <p className="section-subtitle mb-3">About Us</p>
              <h2 className="section-title mb-6">
                The Consulate of the <span className="text-zim-green">Republic of Zimbabwe</span> in Cape Town
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Zimbabwe Consulate in Cape Town serves as the official diplomatic representation of the Republic of Zimbabwe in the Western Cape province. We facilitate consular services for Zimbabwean citizens and assist with all official documentation requirements.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Located in Zonnebloem, Cape Town, our office is open Monday to Thursday from 09:30 to 14:30 and on Fridays from 09:30 to 12:00.
              </p>
              <div className="flex items-center gap-4 p-4 bg-zim-green/5 border border-zim-green/20 rounded-xl">
                <div className="w-12 h-12 bg-zim-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiGlobeAlt className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-zim-black">Operating Hours</p>
                  <p className="text-sm text-gray-600">Mon–Thu: 09:30–14:30 &nbsp;|&nbsp; Fri: 09:30–12:00</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right */}
          <div className="grid gap-5">
            {facts.map((fact, i) => (
              <FadeIn key={fact.title} delay={i * 0.1}>
                <div className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-zim-green/30 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 bg-zim-green/10 text-zim-green rounded-xl flex items-center justify-center flex-shrink-0">
                    {fact.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-zim-black mb-1">{fact.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{fact.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
