<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DealsSection from '../ui/deal-carousel.component.svelte';
	import AandW from '$lib/assets/stores/a&w-1.avif';
	import McDonalds from '$lib/assets/stores/mcdonalds-1.webp';
	import Wendys from '$lib/assets/stores/wendys-1.jpg';
	import Perrogies from '$lib/assets/stores/perrogies-1.jpg';
	import PizzaPizza from '$lib/assets/stores/pizza-pizza-1.avif';

	const { Story } = defineMeta({
		title: 'Components/Deals Section',
		component: DealsSection,
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		},
		argTypes: {
			category: {
				control: 'text',
				description: 'The category name for the section.',
				table: {
					type: { summary: 'string' }
				}
			},
			deals: {
				control: 'object',
				description: 'List of deals to display in the section.',
				table: {
					type: {
						summary: 'Deal[]',
						detail: `{
							name: string;
							distance: number;
							image: { src: string; alt: string };
							storeName: string;
							savedPercentage: number;
							link: string;
						}[]`
					}
				}
			}
		}
	});
</script>

<!-- Default Story -->
<Story
	name="Default"
	args={{
		category: 'Top Deals',
		deals: [
			{
				name: 'Buy One Get One Free',
				distance: 1.1,
				image: { src: AandW, alt: 'A&W food' },
				storeName: 'A&W',
				savedPercentage: 4,
				link: 'https://www.aw.ca/en/home'
			},
			{
				name: '20% Off Pizza',
				distance: 2.2,
				image: { src: PizzaPizza, alt: 'Pizza Pizza food' },
				storeName: 'Pizza Pizza',
				savedPercentage: 20,
				link: 'https://www.pizzapizza.ca/'
			},
			{
				name: 'Free Drink with Meal',
				distance: 0.8,
				image: { src: McDonalds, alt: 'McDonalds food' },
				storeName: 'McDonalds',
				savedPercentage: 5,
				link: 'https://www.mcdonalds.com/'
			},
			{
				name: 'Half Price Perogies',
				distance: 1.5,
				image: { src: Perrogies, alt: 'Perrogies' },
				storeName: 'Perrogies Place',
				savedPercentage: 50,
				link: 'https://www.perrogiesplace.com/'
			},
			{
				name: 'Buy One Get One Free Burger',
				distance: 2.0,
				image: { src: Wendys, alt: 'Wendys food' },
				storeName: 'Wendys',
				savedPercentage: 10,
				link: 'https://www.wendys.com/'
			}
		]
	}}
/>

<!-- Story with a different category -->
<Story
	name="Local Favorites"
	args={{
		category: 'Local Favorites',
		deals: [
			{
				name: 'Free Fries with Burger',
				distance: 0.5,
				image: { src: AandW, alt: 'A&W fries' },
				storeName: 'A&W',
				savedPercentage: 10,
				link: 'https://www.aw.ca/en/home'
			},
			{
				name: 'Large Pizza for $9.99',
				distance: 1.8,
				image: { src: PizzaPizza, alt: 'Pizza Pizza food' },
				storeName: 'Pizza Pizza',
				savedPercentage: 25,
				link: 'https://www.pizzapizza.ca/'
			}
		]
	}}
/>
