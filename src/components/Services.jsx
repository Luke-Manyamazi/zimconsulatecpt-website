import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { HiBookOpen, HiDocument, HiIdentification, HiHeart, HiTruck, HiChevronDown, HiChevronUp } from 'react-icons/hi'

const services = [
  {
    id: 'passport',
    icon: <HiBookOpen size={28} />,
    title: 'Passport Application',
    summary: 'Requirements and fees for Zimbabwe passport applications from South Africa.',
    requirements: [
      'Long Birth Certificate (original + uncertified photocopy)',
      'Zimbabwean ID for applicants above 16 years (Paper, Plastic or Metal)',
      'Current or expired passport',
      'Marriage certificate / divorce order (where applicable)',
      'Two (2) colour passport photos — size 3.5cm × 4.5cm on white background',
      'Police Affidavit for lost or stolen passports',
      'Citizenship certificate (if applicable)',
      "For minors: parent/legal guardian must be present to sign Section 5. Parent's Passport & ID required.",
    ],
    fees: [
      { label: 'Passport form fee', amount: 'R300.00', note: 'Payable in cash at the Consulate' },
      { label: 'Urgent passport (24hrs)', amount: 'US$318', note: 'Paid at Passport Office in Zimbabwe' },
    ],
    note: 'The Consulate does not submit passport application forms on behalf of applicants. Forms are submitted to offices in Harare, Bulawayo, Gwanda, Gweru, or Chitungwiza.',
  },
  {
    id: 'ttd',
    icon: <HiTruck size={28} />,
    title: 'Temporary Travel Document',
    summary: 'Emergency travel document for Zimbabweans needing to return home.',
    requirements: [
      'Zimbabwe National Identity Card (ID) and / or birth certificate',
      'Expired passport or affidavit (in cases of lost or stolen passport)',
      'One passport size photo',
    ],
    fees: [
      { label: 'ETD / TTD fee', amount: 'R500.00', note: 'Payable at the Consulate' },
    ],
    note: 'An ETD/TTD can only be used to travel back to Zimbabwe. One cannot enter South Africa using an ETD or TTD.',
  },
  {
    id: 'birth',
    icon: <HiDocument size={28} />,
    title: 'Birth Certificate',
    summary: 'Registration of children born outside Zimbabwe to Zimbabwean parents.',
    requirements: [
      "Child's South African birth certificate (if applicable)",
      'Birth record & Health Card',
      "Mother's Zimbabwean ID, Birth Certificate and Passport",
      "Father's Zimbabwean ID, Birth Certificate and Passport",
      'Marriage Certificate (if applicable)',
    ],
    fees: [
      { label: 'Consulate fee', amount: 'R100.00', note: 'Payable in cash at the Consulate' },
      { label: 'Submission fee (Harare)', amount: 'US$50.00', note: 'Payable at Makombe Building, Harare' },
    ],
    note: 'Forms obtained from the Consulate must be submitted to the Registrar of Births and Deaths in Harare at Makombe Building.',
  },
  {
    id: 'repatriation',
    icon: <HiHeart size={28} />,
    title: 'Repatriation of Deceased',
    summary: 'Consular clearance for repatriation of human remains to Zimbabwe.',
    requirements: [
      'Death Certificate (Abridged Death Certificate)',
      "Copy of Deceased's Passport, Birth Certificate or Zimbabwean ID",
      "Copy of Deceased relative's Passport, Birth Certificate or ID + contact details",
      'Burial Order',
      'Embalming Certificate',
      'Non-Infectious Disease Certificate',
      'Notice of Death/Still Birth — DHA-1663A',
      'Notice of Death/Still Birth — DHA-1663B',
      'Final burial place in Zimbabwe',
    ],
    fees: [],
    note: 'No body shall be repatriated to Zimbabwe without clearance from the Consulate. For undocumented deceased, additional documents are required — contact the Consulate.',
  },
  {
    id: 'drivers',
    icon: <HiIdentification size={28} />,
    title: "Driver's Licence Confirmation",
    summary: 'Official confirmation of your Zimbabwean driver\'s licence validity.',
    requirements: [
      'Obtain a confirmation letter of your licence from CVR in Zimbabwe first',
      'Bring the confirmation letter and 2 passport photos to the Consulate',
    ],
    fees: [
      { label: 'Consulate confirmation fee', amount: 'R250.00', note: 'Payable at the Consulate' },
    ],
    note: 'Central Vehicle Registry (CVR): Tel +263 4 774474 | +263 4 759743-5 | Email: cvr@africaonline.com | 29 Robson Manyika Avenue, Harare',
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

function ServiceCard({ service, index }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <FadeIn delay={index * 0.08}>
      <div className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${expanded ? 'border-zim-green shadow-lg shadow-zim-green/10' : 'border-gray-100 shadow-sm hover:border-zim-green/30 hover:shadow-md'}`}>
        {/* Header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-6 flex items-start gap-4"
        >
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${expanded ? 'bg-zim-green text-white' : 'bg-zim-green/10 text-zim-green'}`}>
            {service.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-heading font-bold text-zim-black text-lg mb-1">{service.title}</h3>
            <p className="text-gray-500 text-sm">{service.summary}</p>
          </div>
          <div className={`text-gray-400 mt-1 flex-shrink-0 transition-colors ${expanded ? 'text-zim-green' : ''}`}>
            {expanded ? <HiChevronUp size={22} /> : <HiChevronDown size={22} />}
          </div>
        </button>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 border-t border-gray-100 pt-4 space-y-5">
                {/* Requirements */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zim-green mb-3">Requirements</p>
                  <ul className="space-y-2">
                    {service.requirements.map((req, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-700">
                        <span className="w-5 h-5 bg-zim-green/10 text-zim-green rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Fees */}
                {service.fees.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-zim-green mb-3">Fees</p>
                    <div className="space-y-2">
                      {service.fees.map((fee, i) => (
                        <div key={i} className="flex items-start justify-between gap-4 p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="text-sm font-medium text-zim-black">{fee.label}</p>
                            {fee.note && <p className="text-xs text-gray-500 mt-0.5">{fee.note}</p>}
                          </div>
                          <span className="font-bold text-zim-green text-sm whitespace-nowrap">{fee.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Note */}
                {service.note && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-800 leading-relaxed">
                      <span className="font-semibold">Note: </span>{service.note}
                    </p>
                  </div>
                )}

                <a
                  href="#appointments"
                  className="inline-flex items-center gap-2 bg-zim-green text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-zim-green-dark transition-colors"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-subtitle mb-3"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            Consular Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-xl mx-auto"
          >
            Click on any service below to view requirements, fees, and important notes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
