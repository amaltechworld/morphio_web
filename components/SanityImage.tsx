import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'
import { SanityImage as SanityImageType } from '@/lib/sanity.types'

interface SanityImageProps {
  image: SanityImageType
  alt?: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function SanityImage({
  image,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
}: SanityImageProps) {
  if (!image?.asset) {
    return null
  }

  const imageUrl = urlFor(image).width(width).height(height).url()

  return (
    <Image
      src={imageUrl}
      alt={alt || image.alt || ''}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  )
}
