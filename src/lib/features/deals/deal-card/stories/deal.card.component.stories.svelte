<script module>
	import AandW from '$lib/assets/stores/a&w-1.avif';
	import PizzaPizza from '$lib/assets/stores/pizza-pizza-1.avif';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import DealCard from '../ui/deal.card.component.svelte';

	const { Story } = defineMeta({
		name: 'Components/DealCard',
		component: DealCard,
		tags: ['autodocs'],
		parameters: {
			layout: 'centered'
		},
		argTypes: {
			deal: {
				control: 'object',
				description: 'Deal data to display in the card.',
				table: {
					type: {
						summary: 'object',
						detail: `{
                            name: string;
                            distance: string;
                            image: string;
                            storeName: string;
                        }`
					}
				}
			}
		}
	});
</script>

<Story
	name="A&W Deal"
	args={{
		deal: {
			name: 'Buy One Get One Free',
			distance: 1.1,
			image: { src: AandW, alt: 'A&W food' },
			storeName: 'A&W',
			savedPercentage: 4,
			link: 'https://www.aw.ca/en/home'
		}
	}}
/>

<Story
	name="Pizza Pizza Deal"
	args={{
		deal: {
			name: '20% Off Pizza',
			distance: 2.2,
			image: { src: PizzaPizza, alt: 'Pizza Pizza food' },
			storeName: 'Pizza Pizza',
			savedPercentage: 20,
			link: 'https://www.pizzapizza.ca/'
		}
	}}
/>
