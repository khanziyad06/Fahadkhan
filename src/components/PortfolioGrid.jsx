import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { portfolioFilters, projects } from '../data/projects'
import ProjectModal from './ProjectModal'

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const prefersReducedMotion = useReducedMotion()

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const handleProjectClick = (project) => {
    if (project.externalLink) {
      window.open(project.externalLink, '_blank', 'noopener,noreferrer')
      return
    }

    setSelectedProject(project)
  }

  return (
    <section id="work" className="section-shell py-16 sm:py-20">
      <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="section-tag">Portfolio</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-900 sm:text-4xl">
            Selected work.
          </h2>
        </div>

        <div className="-mx-1 overflow-x-auto pb-1 md:mx-0 md:overflow-visible">
          <div className="flex min-w-max gap-2 md:flex-wrap md:justify-end">
            {portfolioFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`min-h-[44px] rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'border border-stone-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="md:max-h-[75vh] md:overflow-y-auto md:pr-2">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              className="group cursor-pointer overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-sm"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent opacity-70" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-700 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              <div className="space-y-3 p-5">
                <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-900">
                  {project.title}
                </h3>
                <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default PortfolioGrid
