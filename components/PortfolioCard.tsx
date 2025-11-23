import Link from 'next/link'
import SanityImage from './SanityImage'
import { PortfolioProject } from '@/lib/sanity.types'

interface PortfolioCardProps {
  project: PortfolioProject
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug.current}`}
      className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative h-64 overflow-hidden">
        <SanityImage
          image={project.mainImage}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </span>
        )}
      </div>
      <div className="p-6 bg-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-gray-600 capitalize">
            {(project as any).category === 'Custom' && (project as any).customCategory
              ? (project as any).customCategory
              : (project as any).category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 line-clamp-2">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
