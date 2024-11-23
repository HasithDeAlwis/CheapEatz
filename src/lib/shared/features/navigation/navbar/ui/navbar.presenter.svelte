<script lang="ts">
	import NavbarComponent from './navbar.component.svelte';
	/**SCAFFOLDING
	 * 1. Props for the navbar are imported here
	 * 2. Props passed to the navbar component
	 *
	 */
	let { location }: { location: string } = $props();
</script>

<header class="w-full">
	<div class="max-w-screen-3xl">
		<NavbarComponent {location} />
	</div>
</header>
