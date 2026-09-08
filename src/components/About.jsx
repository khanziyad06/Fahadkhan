import { motion, useReducedMotion } from 'framer-motion'
import { skillTags } from '../data/projects'

const About = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="about" className="section-shell py-16 sm:py-20">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div>
          <span className="section-tag">About</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
            Editing with intent, motion with clarity.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-600">
          <p>
            I&apos;m Fahad Khan, a freelance video editor and motion designer creating short-form edits, product videos, and brand visuals for businesses and creators who want clean storytelling with a premium feel.
          </p>
          <p>
            My work spans social media content, Instagram reels, ad creatives, and motion-driven brand assets. I&apos;m currently pursuing a certified degree in graphic design and video editing to keep my craft sharp and my creative process evolving.
          </p>
        </div>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-3">
        {skillTags.map((tag, index) => (
          <motion.span
            key={tag}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.04, duration: 0.3 }}
            className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default About
