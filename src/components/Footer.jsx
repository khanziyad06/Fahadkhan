const Footer = () => {
  return (
    <footer className="border-t border-stone-200 bg-white/80">
      <div className="section-shell flex flex-col gap-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Fahad Khan. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/fkedits._" target="_blank" rel="noreferrer" className="transition-colors hover:text-slate-900">
            Instagram
          </a>
          <a href="https://wa.me/918689868953" target="_blank" rel="noreferrer" className="transition-colors hover:text-slate-900">
            WhatsApp
          </a>
          <a href="mailto:fahadyasir2629@gmail.com" className="transition-colors hover:text-slate-900">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
