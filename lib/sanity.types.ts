export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

export interface PortfolioProject {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  mainImage: SanityImage
  gallery?: SanityImage[]
  category: string
  tags?: string[]
  clientName?: string
  projectUrl?: string
  completedDate?: string
  content?: any[]
  featured: boolean
  order?: number
}

export interface Service {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  icon?: string
  image?: SanityImage
  features?: string[]
  pricing?: number
  content?: any[]
  order?: number
}

export interface Template {
  _id: string
  name: string
  slug: {
    current: string
  }
  description: string
  preview: SanityImage
  category: string
  price: number
  features?: string[]
  demoUrl?: string
  popular: boolean
}
