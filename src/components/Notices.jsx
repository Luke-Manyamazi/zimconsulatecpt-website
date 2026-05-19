import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HiDocumentText, HiDownload, HiEye, HiX, HiCalendar, HiChevronDown, HiChevronUp } from 'react-icons/hi'

const notices = [
  {
    id: 1,
    title: 'Updated Passport Application Requirements — 2025',
    date: '15 April 2025',
    category: 'Passports',
    categoryColor: 'bg-blue-100 text-blue-700',
    summary: 'Important updates to the passport application process effective 1 May 2025. Please read before attending your appointment.',
    pdfUrl: '/notices/passport-requirements-2025.pdf',
    filename: 'passport-requirements-2025.pdf',
  },
  {
    id: 2,
    title: 'Public Holiday — Office Closure Notice',
    date: '2 May 2025',
    category: 'Operations',
    categoryColor: 'bg-orange-100 text-orange-700',
    summary: "The Consulate will be closed on 16 June 2025 (Youth Day) and 9 August 2025 (National Women's Day). Plan your visits accordingly.",
    pdfUrl: '/notices/office-closure-2025.pdf',
    filename: 'office-closure-2025.pdf',
  },
  {
    id: 3,
    title: 'Fee Adjustment — Consular Services',
    date: '1 March 2025',
    category: 'Fees',
    categoryColor: 'bg-green-100 text-green-700',
    summary: "Revised fee structure for selected consular services effective 1 April 2025. Temporary Travel Documents and Driver's Licence confirmations are affected.",
    pdfUrl: '/notices/fee-schedule-2025.pdf',
    filename: 'fee-schedule-2025.pdf',
  },
  {
    id: 4,
    title: 'Biometric Passport Rollout — Notice to Applicants',
    date: '10 February 2025',
    category: 'Passports',
    categoryColor: 'bg-blue-100 text-blue-700',
    summary: 'Zimbabwe is transitioning to biometric passports. All new applications will now be for biometric passports only. Read the full notice for transition details.',
    pdfUrl: '/notices/biometric-passport-notice.pdf',
    filename: 'biometric-passport-notice.pdf',
  },
  {
    id: 5,
    title: 'Emergency Contact Protocol for Distressed Zimbabweans',
    date: '20 January 2025',
    category: 'General',
    categoryColor: 'bg-red-100 text-red-700',
    summary: 'Updated procedures for Zimbabwean nationals in distress in the Western Cape. Includes 24/7 emergency contact numbers and assistance protocols.',
    pdfUrl: '/notices/emergency-protocol-2025.pdf',
    filename: 'emergency-protocol-2025.pdf',
  },
]

const MOBILE_INITIAL = 2

function PlaceholderPDF({ title }) {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gray-50 gap-4 p-8 text-center">
      <div className="w-20 h-20 bg-zim-green/10 text-zim-green rounded-2xl flex items-center justify-center">
        <HiDocumentText size={40} />
      </div>
      <div>
        <p className="font-heading font-bold text-zim-black text-lg mb-2">{title}</p>
        <p className="text-gray-500 text-sm max-w-xs">
          This is a placeholder. When a real PDF is uploaded it will display inline here for reading and be available to download.
        </p>
      </div>
      <div className="bg-zim-green/5 border border-zim-green/20 rounded-xl px-6 py-3 text-sm text-zim-green font-medium">
        PDF will appear here when uploaded
      </div>
    </div>
  )
}

function PDFViewer({ notice }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <PlaceholderPDF title={notice.title} />
  return (
    <iframe
      src={notice.pdfUrl}
      title={notice.title}
      className="w-full border-0"
      style={{ height: '500px' }}
      onError={() => setFailed(true)}
    />
  )
}

function NoticeModal({ notice, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-start justify-between gap-3 p-4 sm:p-6 border-b border-gray-100">
          <div className="flex-1 min-w-0">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full inline-block mb-2 ${notice.categoryColor}`}>
              {notice.category}
            </span>
            <h3 className="font-heading font-bold text-zim-black text-base sm:text-lg leading-snug">{notice.title}</h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">{notice.date}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={notice.pdfUrl}
              download={notice.filename}
              className="inline-flex items-center gap-1.5 bg-zim-green text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-lg hover:bg-zim-green-dark transition-colors"
            >
              <HiDownload size={15} />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
            >
              <HiX size={20} />
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div className="flex-1 rounded-b-2xl overflow-hidden" style={{ minHeight: '400px' }}>
          <PDFViewer notice={notice} />
        </div>
      </motion.div>
    </motion.div>
  )
}

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

function NoticeCard({ notice, onRead, index }) {
  return (
    <FadeIn delay={index * 0.06}>
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-zim-green/30 hover:shadow-md transition-all duration-200">

        {/* ── Mobile layout ── */}
        <div className="sm:hidden p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${notice.categoryColor}`}>
              {notice.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <HiCalendar size={11} />
              {notice.date}
            </span>
          </div>
          <h3 className="font-heading font-semibold text-zim-black text-sm leading-snug mb-1">
            {notice.title}
          </h3>
          <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">
            {notice.summary}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onRead(notice)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-zim-green border border-zim-green/30 px-3 py-2 rounded-lg hover:bg-zim-green/5 transition-colors"
            >
              <HiEye size={14} />
              Read more
            </button>
            <a
              href={notice.pdfUrl}
              download={notice.filename}
              className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-zim-green text-white px-3 py-2 rounded-lg hover:bg-zim-green-dark transition-colors"
            >
              <HiDownload size={14} />
              Download
            </a>
          </div>
        </div>

        {/* ── Desktop layout ── */}
        <div className="hidden sm:flex items-start gap-5 p-6">
          <div className="w-12 h-12 bg-zim-green/10 text-zim-green rounded-xl flex items-center justify-center flex-shrink-0">
            <HiDocumentText size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${notice.categoryColor}`}>
                {notice.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <HiCalendar size={12} />
                {notice.date}
              </span>
            </div>
            <h3 className="font-heading font-bold text-zim-black text-base mb-1">{notice.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{notice.summary}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => onRead(notice)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-zim-green border border-zim-green/30 px-4 py-2 rounded-lg hover:bg-zim-green/5 transition-colors"
            >
              <HiEye size={16} />
              Read
            </button>
            <a
              href={notice.pdfUrl}
              download={notice.filename}
              className="inline-flex items-center gap-1.5 text-sm font-semibold bg-zim-green text-white px-4 py-2 rounded-lg hover:bg-zim-green-dark transition-colors"
            >
              <HiDownload size={16} />
              Download
            </a>
          </div>
        </div>

      </div>
    </FadeIn>
  )
}

export default function Notices() {
  const [selected, setSelected] = useState(null)
  const [showAll, setShowAll] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const visibleOnMobile = showAll ? notices : notices.slice(0, MOBILE_INITIAL)
  const hidden = notices.length - MOBILE_INITIAL

  return (
    <section id="notices" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="section-subtitle mb-3"
          >
            Announcements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title mb-4"
          >
            Public Notices
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-xl mx-auto"
          >
            Official notices and announcements from the Zimbabwe Consulate Cape Town. Read documents on this page or download them.
          </motion.p>
        </div>

        {/* Mobile: show limited notices + expand button */}
        <div className="sm:hidden space-y-3">
          <AnimatePresence initial={false}>
            {visibleOnMobile.map((notice, i) => (
              <NoticeCard key={notice.id} notice={notice} onRead={setSelected} index={i} />
            ))}
          </AnimatePresence>

          {notices.length > MOBILE_INITIAL && (
            <button
              onClick={() => setShowAll(v => !v)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-zim-green border border-zim-green/30 rounded-xl hover:bg-zim-green/5 transition-colors"
            >
              {showAll ? (
                <><HiChevronUp size={18} /> Show less</>
              ) : (
                <><HiChevronDown size={18} /> Show {hidden} more notice{hidden !== 1 ? 's' : ''}</>
              )}
            </button>
          )}
        </div>

        {/* Desktop: show all notices */}
        <div className="hidden sm:block space-y-4">
          {notices.map((notice, i) => (
            <NoticeCard key={notice.id} notice={notice} onRead={setSelected} index={i} />
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {selected && (
          <NoticeModal notice={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
