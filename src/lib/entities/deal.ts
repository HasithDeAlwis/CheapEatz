import type { Media } from '$lib/entities/media.js'

export interface Deal {
    id: number
    name: string
    savedPercentage: number
    distance: number
    storeName: string
    image: Media
    category: string[]
    link: string
}
