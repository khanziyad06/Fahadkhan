import { motion, useReducedMotion } from 'framer-motion'

const Hero = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="home" className="section-shell pt-8 pb-16 sm:pt-12 lg:pt-20 lg:pb-20">
      <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 xl:gap-16">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="order-1 max-w-full space-y-5 sm:space-y-6"
        >
          <span className="section-tag">Freelance editor • motion designer</span>

          <div className="space-y-3 sm:space-y-4">
            <h1 className="max-w-xl text-balance text-[clamp(2.3rem,8vw,4.25rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-slate-900 lg:text-[clamp(3.6rem,5vw,6.4rem)]">
              Video Editor & Motion Designer
            </h1>
            <p className="max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              I craft short-form videos, reels, motion graphics, and product visuals that feel premium, punchy, and built to stop the scroll.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#work"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-soft transition-transform hover:-translate-y-0.5"
            >
              View work
            </a>
            <a
              href="https://wa.me/918689868953?text=Hi%20Fahad%2C%20I%27d%20like%20to%20book%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
            >
              Book a project
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-1 text-sm text-slate-500 sm:gap-3">
            <span>Short-form reels</span>
            <span className="text-stone-300">•</span>
            <span>Motion graphics</span>
            <span className="text-stone-300">•</span>
            <span>Product videos</span>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 24, scale: 0.96 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="order-2 flex items-center justify-center px-1 sm:px-2 lg:justify-end"
        >
          <div className="relative w-full max-w-[440px]">
            <div className="absolute inset-4 -z-10 rounded-[2.25rem] bg-gradient-to-br from-stone-200 via-stone-100 to-transparent blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-2 shadow-[0_28px_70px_rgba(15,23,42,0.08)]">
              <img
                src="/IMG_9215.PNG"
                alt="Fahad portrait"
                className="h-[330px] w-full rounded-[1.5rem] object-cover object-center sm:h-[420px] lg:h-[560px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
