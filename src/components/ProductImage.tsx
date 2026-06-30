
import { useState } from 'react'

interface ProductImageProps {
  src: string
  alt: string
  className?: string
}

export default function ProductImage({ src, alt, className = '' }: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isError, setIsError] = useState(false)

  // Reliable fallback images for different product types
  const fallbackImage = 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop'

  const handleError = () => {
    if (!isError) {
      setImgSrc(fallbackImage)
      setIsError(true)
    }
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  )
}
