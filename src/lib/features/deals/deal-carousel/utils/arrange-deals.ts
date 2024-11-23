import type { Deal } from '$lib/entities/deal.js'

interface AllDeals {
    [key: string]: Deal[]
}

export function arrangeDeals(deals: Deal[]): AllDeals {
    const allDeals: AllDeals = {}

    deals.forEach((deal) => {
        deal.category.forEach((category) => {
            if (!allDeals[category]) {
                allDeals[category] = []
            }

            allDeals[category].push(deal)
        })
    })

    return allDeals
}