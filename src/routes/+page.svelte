<script lang="ts">
	import { Button } from '$lib/shadcn/ui/button';
	let { data }: { data: { title: string; content: string } } = $props();
</script>

<h1>{data.title}</h1>
<div>{data.content}</div>
<Button>Click MEEEE!!!</Button>
