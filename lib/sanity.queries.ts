import { client } from './sanity.client'

// Portfolio queries
export async function getAllPortfolioProjects() {
  return client.fetch(
    `*[_type == "portfolio"] | order(order asc, _createdAt desc) {
      _id,
      title,
      slug,
      description,
      mainImage,
      category,
      customCategory,
      tags,
      clientName,
      completedDate,
      featured,
      order
    }`
  )
}

export async function getFeaturedProjects() {
  return client.fetch(
    `*[_type == "portfolio" && featured == true] | order(order asc) [0...6] {
      _id,
      title,
      slug,
      description,
      mainImage,
      category,
      customCategory,
      tags
    }`
  )
}

export async function getPortfolioProjectBySlug(slug: string) {
  return client.fetch(
    `*[_type == "portfolio" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      mainImage,
      gallery,
      category,
      customCategory,
      tags,
      clientName,
      projectUrl,
      completedDate,
      content,
      featured
    }`,
    { slug }
  )
}

// Template queries
export async function getAllTemplates() {
  return client.fetch(
    `*[_type == "template"] | order(popular desc, name asc) {
      _id,
      name,
      slug,
      description,
      preview,
      category,
      customCategory,
      price,
      features,
      tags,
      demoUrl,
      popular
    }`
  )
}

export async function getTemplatesByCategory(category: string) {
  return client.fetch(
    `*[_type == "template" && category == $category] | order(name asc) {
      _id,
      name,
      slug,
      description,
      preview,
      category,
      customCategory,
      price,
      features,
      tags,
      demoUrl,
      popular
    }`,
    { category }
  )
}

export async function getTemplateBySlug(slug: string) {
  return client.fetch(
    `*[_type == "template" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      description,
      preview,
      category,
      customCategory,
      price,
      features,
      tags,
      demoUrl,
      popular
    }`,
    { slug }
  )
}
