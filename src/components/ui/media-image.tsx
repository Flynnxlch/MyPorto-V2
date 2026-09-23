import Image from 'next/image'
import type { ComponentProps } from 'react'
import { imageSrc, isRemote } from '@/lib/utils'

/**
 * next/image for any path from data/assets.ts: public files, Google Drive share
 * links or other URLs. Remote images skip the optimizer so no host allowlist is needed.
 */
export function MediaImage({ src, alt, ...props }: ComponentProps<typeof Image> & { src: string }) {
  return <Image src={imageSrc(src)} alt={alt} unoptimized={isRemote(src)} {...props} />
}
