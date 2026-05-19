import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiCalendar, HiClock, HiExclamation } from 'react-icons/hi'

const rules = [
  'All clients are served strictly by appointment between 09:30 and 14:30 (Mon–Thu) and 09:30–12:00 on Fridays.',
  'A maximum of 100 clients will be assisted per day on a first-come, first-served basis.',
  'Your appointment confirmation must be presented at the security checkpoint.',
  'Clients without a confirmation of appointment will not be allowed onto the premises.',
  'Time slots are neither interchangeable nor transferable. Please adhere to your allotted time slot.',
  'If there are multiple applicants, fill in their details under the dependants option when booking.',
  'Please bring a printed copy of your appointment confirmation.',
]

export default function Appointments() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <section id="appointments" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-subtitle mb-3"
          >
            Booking
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            Book an Appointment
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-xl mx-auto"
          >
            Select a date and time that suits you. Please read the appointment rules before booking.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Rules sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-zim-green/10 text-zim-green rounded-xl flex items-center justify-center">
                  <HiCalendar size={22} />
                </div>
                <h3 className="font-heading font-bold text-zim-black">Appointment Rules</h3>
              </div>
              <ul className="space-y-3">
                {rules.map((rule, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-zim-green text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zim-green rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <HiClock size={22} className="text-zim-gold" />
                <h3 className="font-heading font-bold">Office Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/70">Monday – Thursday</span>
                  <span className="font-semibold">09:30 – 14:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Friday</span>
                  <span className="font-semibold">09:30 – 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Saturday – Sunday</span>
                  <span className="font-semibold text-white/50">Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <div className="flex gap-3">
                <HiExclamation className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-amber-800">
                  <strong>Remember to bring</strong> all required documents for your specific service. Check the Services section above for a complete list.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Calendly embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/zimconsulatecapetown/30min"
              style={{ minWidth: '320px', height: '680px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
