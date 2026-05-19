import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaTwitter, FaFacebook } from 'react-icons/fa'

const links = {
  'Quick Links': [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Diaspora Opportunities', href: '#diaspora' },
    { label: 'Public Notices', href: '#notices' },
    { label: 'Appointments', href: '#appointments' },
    { label: 'Contact', href: '#contact' },
  ],
  'Services': [
    { label: 'Passport Application', href: '#services' },
    { label: 'Birth Certificate', href: '#services' },
    { label: 'Temporary Travel Doc', href: '#services' },
    { label: "Driver's Licence", href: '#services' },
    { label: 'Repatriation', href: '#services' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-zim-black text-white">
      {/* Zimbabwe flag strip */}
      <img src="/ZimFlag.png" alt="Flag of Zimbabwe" className="w-full h-3 object-cover object-center" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/ZimCOA.png" alt="Zimbabwe Coat of Arms" className="w-12 h-12 object-contain" />
              <div>
                <p className="font-heading font-bold text-sm">Zimbabwe Consulate</p>
                <p className="text-white/50 text-xs">Cape Town</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Official consular services for Zimbabwean nationals residing in the Western Cape, South Africa.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-white/60">
                <HiLocationMarker className="text-zim-green mt-0.5 flex-shrink-0" size={16} />
                <span>55 Kuper Street, Zonnebloem, Cape Town 7925</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <HiPhone className="text-zim-green flex-shrink-0" size={16} />
                <a href="tel:+27214611994" className="hover:text-white transition-colors">+27 21 4611 994-5</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <HiMail className="text-zim-green flex-shrink-0" size={16} />
                <a href="mailto:info@zimconsulatecpt.co.za" className="hover:text-white transition-colors">info@zimconsulatecpt.co.za</a>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-white/60 text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social + hours */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
              Connect
            </h4>
            <div className="flex gap-3 mb-8">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-zim-green transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-zim-green transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={16} />
              </a>
            </div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/40 mb-4">
              Office Hours
            </h4>
            <div className="space-y-1.5 text-sm text-white/60">
              <div className="flex justify-between gap-4">
                <span>Mon – Thu</span>
                <span className="text-white/80">09:30–14:30</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Friday</span>
                <span className="text-white/80">09:30–12:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sat – Sun</span>
                <span className="text-white/40">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>&copy; {new Date().getFullYear()} Zimbabwe Consulate Cape Town. All rights reserved.</p>
          <p>Official diplomatic representation of the Republic of Zimbabwe</p>
        </div>
      </div>
    </footer>
  )
}
