import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="section-shell py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-soft sm:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="section-tag">Contact</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
              Ready to build something scroll-stopping?
            </h2>
            <div className="mt-6 grid gap-3 text-sm text-slate-600">
              <a href="mailto:fahadyasir2629@gmail.com" className="inline-flex min-h-[46px] items-center justify-start rounded-2xl border border-stone-200 bg-stone-50 px-4 font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900">
                Email: fahadyasir2629@gmail.com
              </a>
              <a href="https://wa.me/918689868953?text=Hi%20Fahad%2C%20I%27d%20like%20to%20book%20a%20project." target="_blank" rel="noreferrer" className="inline-flex min-h-[46px] items-center justify-start rounded-2xl border border-stone-200 bg-stone-50 px-4 font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900">
                WhatsApp: +91 8689868953
              </a>
              <a href="tel:+918689868953" className="inline-flex min-h-[46px] items-center justify-start rounded-2xl border border-stone-200 bg-stone-50 px-4 font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900">
                Phone: +91 8689868953
              </a>
              <a href="https://www.instagram.com/fkedits._" target="_blank" rel="noreferrer" className="inline-flex min-h-[46px] items-center justify-start rounded-2xl border border-stone-200 bg-stone-50 px-4 font-medium text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-900">
                Instagram: @fkedits._
              </a>
            </div>
          </div>

          <form action="https://formspree.io/f/xjvnoykn" method="POST" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-slate-700">
              Project details
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your video, timeline, and goals"
                className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-slate-800 outline-none transition focus:border-slate-400 focus:bg-white"
              />
            </label>

            <button
              type="submit"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
