<script lang="ts">
	import { onMount } from 'svelte';

	let isVisible2 = false;
	let element2;

	const handleIntersect = (e) => {
		isVisible2 = e[0].isIntersecting;
	};

	onMount(() => {
		const root = null;
		const rootMargin = `0px 0px 0px 0px`;
		const options = { root, rootMargin };

		const observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(element2);
	});
</script>

<div bind:this={element2}>
	<slot {isVisible2} />
</div>
