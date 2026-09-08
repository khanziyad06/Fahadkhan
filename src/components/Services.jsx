import { motion, useReducedMotion } from 'framer-motion'

const services = [
  {
    title: 'Short-form editing',
    text: 'Reels and social-first edits built to hold attention, keep the pace dynamic, and boost retention.',
  },
  {
    title: 'Motion graphics',
    text: 'Animated brand moments, transitions, lower thirds, and visual identity work with a clean, modern rhythm.',
  },
  {
    title: 'Product videos',
    text: 'Sales-focused product visuals that highlight features, craftsmanship, and premium presentation.',
  },
  {
    title: 'Poster / ad creatives',
    text: 'Instagram-ready static and motion creatives designed with strong hierarchy, typography, and brand clarity.',
  },
]

const Services = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="services" className="section-shell py-16 sm:py-20">
      <div className="mb-8">
        <span className="section-tag">Services</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
          Visual storytelling for brands that want to look elevated.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-lg font-semibold text-slate-900">
              0{index + 1}
            </div>
            <h3 className="mb-3 text-xl font-semibold tracking-[-0.04em] text-slate-900">{service.title}</h3>
            <p className="text-sm leading-7 text-slate-600">{service.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 rounded-[1.5rem] border border-dashed border-stone-300 bg-stone-100/80 p-5 text-center text-sm font-medium text-slate-700">
        Packages discussed on inquiry
      </div>
    </section>
  )
}

export default Services
