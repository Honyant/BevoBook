import { type ClassValue, clsx } from 'clsx';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "BevoBook - Your AI Course Assistant",
  description = "BevoBook is an AI assistant that provides personalized course recommendations for UT Austin students, simplifying the registration process.",
  image = "@/app/thumbnail.png",
  icons = "@/app/favicon.ico",
  noIndex = false
} : {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image
        }
      ]
    },
    icons,
    metadataBase: new URL('https://www.bevobook.tech/'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}