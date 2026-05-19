import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'

const contactItems = [
  {
    icon: <HiLocationMarker size={22} />,
    label: 'Address',
    lines: ['55 Kuper Street', 'Zonnebloem, Cape Town 7925'],
  },
  {
    icon: <HiPhone size={22} />,
    label: 'Phone',
    lines: ['+27 21 4611 994-5'],
    href: 'tel:+27214611994',
  },
  {
    icon: <HiMail size={22} />,
    label: 'Email',
    emails: [
      'zimcapetown@zimfa.gov.zw',
      'zimconsulatecpt@gmail.com',
      'info@zimconsulatecpt.co.za',
    ],
  },
  {
    icon: <HiClock size={22} />,
    label: 'Hours',
    lines: ['Mon–Thu: 09:30–14:30', 'Fri: 09:30–12:00', 'Sat–Sun: Closed'],
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

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-subtitle mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            Contact Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-xl mx-auto"
          >
            Reach out by phone or email, or visit us at our offices in Zonnebloem, Cape Town.
          </motion.p>
        </div>

        {/* Contact info cards — 4 across on desktop, 2×2 on tablet, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {contactItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08}>
              <div className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-zim-green/30 hover:bg-zim-green/5 transition-all duration-200 h-full">
                <div className="w-10 h-10 bg-zim-green text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zim-green mb-1.5">{item.label}</p>
                  {item.emails
                    ? item.emails.map((email, j) => (
                        <a
                          key={j}
                          href={`mailto:${email}`}
                          className="block text-sm text-gray-700 hover:text-zim-green transition-colors truncate"
                        >
                          {email}
                        </a>
                      ))
                    : item.lines.map((line, j) => (
                        item.href
                          ? <a key={j} href={item.href} className="block text-sm text-gray-700 hover:text-zim-green transition-colors">{line}</a>
                          : <p key={j} className="text-sm text-gray-700">{line}</p>
                      ))
                  }
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Map — full width */}
        <FadeIn delay={0.2}>
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 w-full" style={{ height: '480px' }}>
            <iframe
              title="Zimbabwe Consulate Cape Town Map"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=55%20Kuper%20Street,%20Zonnebloem,%20Cape%20Town,%20South%20Africa&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
