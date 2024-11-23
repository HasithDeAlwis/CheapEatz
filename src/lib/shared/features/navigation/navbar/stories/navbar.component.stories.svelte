<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Navbar from '../ui/navbar.component.svelte';

	const { Story } = defineMeta({
		title: 'Components/Navbar',
		component: Navbar,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		},
		args: {
			location: 'Kingston, ON'
		},
		argTypes: {
			location: {
				control: { type: 'text' },
				description: 'Current page location displayed in the navbar.'
			}
		}
	});
</script>

<!-- Stories -->

<Story name="Home Navbar" args={{ location: 'Kingston, ON' }} />
