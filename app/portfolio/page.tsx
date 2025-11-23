import { getAllPortfolioProjects } from '@/lib/sanity.queries'
import PortfolioCard from '@/components/PortfolioCard'
import Link from 'next/link'

// This makes the page dynamic and fetches fresh data on each request
export const dynamic = 'force-dynamic'

export default async function PortfolioPage() {
  const projects = await getAllPortfolioProjects()

  // Get unique categories from projects
  const categories = Array.from(new Set(projects.map((p: any) => p.category)))

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="section bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Browse our latest work and see how we've helped small businesses like yours establish a stunning online presence.
            </p>
            <div className="flex items-center justify-center gap-4 text-neutral-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
                <span className="font-semibold">{projects.length} Projects Completed</span>
              </div>
              <span className="text-neutral-400">•</span>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>100% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          {projects.length > 0 ? (
            <>
              {/* Featured Projects */}
              {projects.some((p: any) => p.featured) && (
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects
                      .filter((p: any) => p.featured)
                      .map((project: any) => (
                        <PortfolioCard key={project._id} project={project} />
                      ))}
                  </div>
                </div>
              )}

              {/* All Projects */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">
                  {projects.some((p: any) => p.featured) ? 'All Projects' : 'Our Work'}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project: any) => (
                    <PortfolioCard key={project._id} project={project} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-2xl font-bold mb-2">No projects yet</h3>
              <p className="text-neutral-600 mb-6">
                Projects will appear here once you add them to your Sanity Studio.
              </p>
              <Link href="/studio" className="btn btn-primary">
                Go to Sanity Studio
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-500 to-secondary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Let's create something amazing for your business too.
          </p>
          <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-100 text-lg px-8 py-4">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}
