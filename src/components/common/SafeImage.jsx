import { useState } from 'react'
import placeholder from '../../assets/images/placeholder.webp'

export default function SafeImage({
  src,
  alt,
  className = '',
  loading = 'lazy',
  decoding = 'async',
  width,
  height,
}) {
  const [failed, setFailed] = useState(false)

  return (
    <img
      src={failed ? placeholder : src}
      alt={alt}
      className={className}
      loading={loading}
      decoding={decoding}
      width={width}
      height={height}
      onError={() => setFailed(true)}
    />
  )
}
