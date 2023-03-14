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
	.text-title {
		font-size: clamp(1.4rem, 5vw, 1.9rem);
		line-height: 1.08;
		color: #282a30;
		font-weight: 700;
	}

	.text-Q {
		font-size: clamp(1rem, 1.4vw, 1.3rem);
		line-height: 1.08;

		font-weight: 600;
	}

	.text-thin {
		font-size: clamp(0.8rem, 4vw, 1.2rem);
		line-height: 1.08;
		color: #8c8c8c;
		font-weight: 500;
	}

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
