<script lang="ts">
	import { FAQStore } from '$lib/stores/FAQStores';
	import OneFAQ from '$lib/components/OneFAQ.svelte';
	import { slide } from 'svelte/transition';

	let data;

	FAQStore.subscribe((value) => {
		data = value;
	});

	console.log(data);
</script>

<div class="relative heightClass bg-base px-[8%]">
	<div class="flex">
		<div
			class="text-3xl pt-10 pb-[0.6rem] font-extrabold relative flex text-primaryDark psuedoUnderline font-satoshi sm:text-5xl"
		>
			Common questions
		</div>
	</div>

	<OneFAQ FAQs={data} />
</div>

<style>
	.heightClass {
		min-height: 100vh;
		min-height: 100svh;
	}
	.psuedoUnderline::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 10px;
		background-color: none;
		border-bottom: 2px solid #784858;
		border-top: 2px solid #784858;
	}
</style>
