import Image from 'next/image'
import type { ComponentProps } from 'react'
import { imageSrc, isRemote } from '@/lib/utils'

// next/image for local, Google Drive or remote paths
export function MediaImage({ src, alt, ...props }: ComponentProps<typeof Image> & { src: string }) {
  return <Image src={imageSrc(src)} alt={alt} unoptimized={isRemote(src)} {...props} />
}
