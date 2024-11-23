<script lang="ts">
	import '../app.css';
	// TODO: Fix so that we can use barreled imports
	import Navbar from '$lib/shared/features/navigation/navbar/ui/navbar.presenter.svelte';

	// TODO: Replace with logic to fetch user location --> local storage :)
	const location = 'Kingston, ON';
	let { children } = $props();
</script>

<Navbar {location} />
{@render children()}
