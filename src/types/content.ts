export interface CMSImage {
  url: string
  alternativeText: string
  height: number
  width: number
}

export interface CMSBasicCard {
  title: string
  body?: string
}

export interface CMSMediaCard extends CMSBasicCard {
  image: CMSImage
}
