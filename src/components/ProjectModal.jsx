import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'

const ProjectModal = ({ project, onClose }) => {
  const isImageAsset = /\.(png|jpe?g|webp|avif|gif)$/i.test(project.videoUrl || project.thumbnail || '')
  const galleryItems = project.videoGallery || []
  const [activeVideo, setActiveVideo] = useState(galleryItems[0] || null)

  const selectedVideo = useMemo(() => {
    if (!galleryItems.length) return null
    return galleryItems.find((item) => item.src === activeVideo?.src) || galleryItems[0]
  }, [activeVideo, galleryItems])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-2 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.24 }}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-2xl sm:rounded-[1.75rem]"
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-4 py-3 sm:px-6 sm:py-4">
          <div className="min-w-0 pr-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-xs">{project.category}</p>
            <h3 className="mt-1 text-lg font-semibold tracking-[-0.04em] text-slate-900 sm:text-xl">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 px-0 text-sm text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[calc(92vh-76px)] overflow-y-auto p-3 sm:p-6">
          {galleryItems.length > 0 ? (
            <>
              <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
                <video
                  key={selectedVideo?.src}
                  src={selectedVideo?.src}
                  controls
                  playsInline
                  preload="metadata"
                  poster={selectedVideo?.thumbnail || project.thumbnail}
                  className="aspect-[9/16] w-full object-cover"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {galleryItems.map((item) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setActiveVideo(item)}
                    className={`overflow-hidden rounded-2xl border text-left transition-all ${
                      selectedVideo?.src === item.src
                        ? 'border-slate-900 bg-slate-50 shadow-sm'
                        : 'border-stone-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <img src={item.thumbnail || project.thumbnail} alt={item.title} className="h-24 w-full object-cover sm:h-28" />
                    <div className="px-3 py-2 text-sm font-medium text-slate-700">{item.title}</div>
                  </button>
                ))}
              </div>
            </>
          ) : project.videoType === 'youtube' || project.videoType === 'vimeo' || project.videoType === 'instagram' ? (
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
              <ReactPlayer
                url={project.videoUrl}
                controls
                width="100%"
                height="100%"
                className="aspect-video w-full"
              />
            </div>
          ) : isImageAsset ? (
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
              <img
                src={project.videoUrl || project.thumbnail}
                alt={project.title}
                className="mx-auto max-h-[60vh] w-full object-contain"
              />
            </div>
          ) : (
            <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
              <video
                src={project.videoUrl}
                controls
                playsInline
                preload="metadata"
                poster={project.thumbnail}
                className="aspect-[9/16] w-full object-cover"
              />
            </div>
          )}

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">{project.description}</p>

          {project.externalLink && (
            <a
              href={project.externalLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              View more on Instagram
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal
