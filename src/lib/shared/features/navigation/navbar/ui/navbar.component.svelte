<script lang="ts">
	import { Input } from '$lib/shadcn/ui/input';
	import * as Avatar from '$lib/shadcn/ui/avatar';
	/**SCAFFOLDING
	 * 1. Props for the navbar are imported here
	 * 2. Props passed to the navbar component
	 *
	 */
	// TODO: Implemente options later on with search
	//let { options, location } = $props();
	let { location } = $props();
</script>

<nav class="flex flex-col justify-between gap-y-3 bg-primary p-3 md:flex-row">
	<div class="flex flex-col items-start gap-x-3 md:flex-row md:items-end">
		<div class="flex w-full flex-row justify-between">
			<a href="/">
				<h2 class="text-3xl font-bold text-primary-foreground">CheapEatz</h2>
			</a>
			<div class="block md:hidden">
				<Avatar.Root>
					<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
					<Avatar.Fallback>CN</Avatar.Fallback>
				</Avatar.Root>
			</div>
		</div>
		<p class="w-full font-bold text-primary-foreground underline">{location}</p>
	</div>
	<div class="flex basis-1/2 flex-row gap-x-3">
		<Input class="basis-full" placeholder="Search" />

		<!--PROFILE ICON-->
		<div class="hidden md:block">
			<Avatar.Root>
				<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
				<Avatar.Fallback>CN</Avatar.Fallback>
			</Avatar.Root>
		</div>
	</div>
</nav>
