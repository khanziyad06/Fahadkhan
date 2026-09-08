import { motion, useReducedMotion } from 'framer-motion'

const highlights = [
  'Assignment-based reel work',
  'Local car dealership creative',
  'Perfume store campaign design',
  'Social media post concepts',
  'Poster + ad creative assignments',
]

const FreelanceHighlights = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="section-shell py-16 sm:py-20">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <span className="section-tag">Freelance highlights</span>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
          Trusted by growing brands and personal projects.
        </h2>
      </motion.div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {highlights.map((item, index) => (
          <motion.div
            key={item}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-[1.5rem] border border-stone-200 bg-white p-5 text-center text-sm font-medium text-slate-700 shadow-sm"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FreelanceHighlights
