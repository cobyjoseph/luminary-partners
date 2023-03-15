<script>
	import A2 from '$lib/components/A2.svelte';
	import { FAQStore } from '$lib//stores/FAQStores';
	import { each } from 'svelte/internal';

	let outerData;

	FAQStore.subscribe((value) => {
		outerData = value;
	});

	console.log(outerData);
</script>

<A2 innerData={outerData}>stuff</A2>
