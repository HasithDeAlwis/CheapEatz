<script lang="ts">
	import '../app.css';
	import { Navbar } from '$lib/shared/features/navigation';

	// TODO: Replace with logic to fetch user location --> local storage :)
	const location = 'Kingston, ON';
	let { children } = $props();
</script>

<Navbar {location} />
{@render children()}
