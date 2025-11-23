import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPortfolioProjects, getPortfolioProjectBySlug } from '@/lib/sanity.queries'
import SanityImage from '@/components/SanityImage'
import { PortableText } from '@portabletext/react'

export async function generateStaticParams() {
  const projects = await getAllPortfolioProjects()
  return projects.map((project: any) => ({
    slug: project.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getPortfolioProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Morphio Web Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getPortfolioProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const allProjects = await getAllPortfolioProjects()
  const currentIndex = allProjects.findIndex((p: any) => p.slug.current === slug)
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <SanityImage
          image={project.mainImage}
          alt={project.title}
          width={1920}
          height={1080}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="container-custom relative text-white pb-12">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <span className="font-medium capitalize">{project.category.replace('-', ' ')}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {project.clientName || project.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl">{project.description}</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {project.completedDate && (
              <div className="card text-center">
                <div className="text-sm font-semibold text-neutral-500 uppercase mb-2">Completed</div>
                <div className="text-2xl font-bold text-primary-600">
                  {new Date(project.completedDate).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric'
                  })}
                </div>
              </div>
            )}
            <div className="card text-center">
              <div className="text-sm font-semibold text-neutral-500 uppercase mb-2">Category</div>
              <div className="text-2xl font-bold text-primary-600 capitalize">
                {project.category.replace('-', ' ')}
              </div>
            </div>
            {project.tags && project.tags.length > 0 && (
              <div className="card text-center">
                <div className="text-sm font-semibold text-neutral-500 uppercase mb-2">Technologies</div>
                <div className="text-2xl font-bold text-primary-600">{project.tags.length}+</div>
              </div>
            )}
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
              <p className="text-lg text-neutral-700 leading-relaxed">{project.description}</p>
            </div>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.gallery.map((image: any, index: number) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                      <SanityImage
                        image={image}
                        alt={image.alt || `${project.title} - Image ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                      {image.caption && (
                        <p className="text-sm text-neutral-600 mt-2 px-2">{image.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Content */}
            {project.content && project.content.length > 0 && (
              <div className="mb-16 prose prose-lg max-w-none">
                <PortableText value={project.content} />
              </div>
            )}

            {/* Technologies/Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-mono text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Link */}
            {project.projectUrl && (
              <div className="mb-16 text-center">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  <span>Visit Live Site</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready for Similar Results?
              </h3>
              <p className="text-xl mb-6 text-white/90">
                Let's create something amazing for your business too.
              </p>
              <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-100">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      {allProjects.length > 1 && (
        <section className="section bg-neutral-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href={`/portfolio/${prevProject.slug.current}`}
                className="group card flex items-center gap-4 hover:border-primary-500 border-2 border-transparent transition-all"
              >
                <svg className="w-8 h-8 text-primary-500 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="flex-1">
                  <div className="text-sm text-neutral-500 mb-1">Previous Project</div>
                  <div className="font-bold text-lg">{prevProject.title}</div>
                </div>
              </Link>

              <Link
                href={`/portfolio/${nextProject.slug.current}`}
                className="group card flex items-center gap-4 hover:border-primary-500 border-2 border-transparent transition-all justify-end"
              >
                <div className="flex-1 text-right">
                  <div className="text-sm text-neutral-500 mb-1">Next Project</div>
                  <div className="font-bold text-lg">{nextProject.title}</div>
                </div>
                <svg className="w-8 h-8 text-primary-500 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link href="/portfolio" className="btn btn-outline">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
