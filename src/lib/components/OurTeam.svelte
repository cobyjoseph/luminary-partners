<script lang="ts">
	import { draw, fly, scale, slide } from 'svelte/transition';
	import { sineInOut, quintIn, backOut } from 'svelte/easing';
	import StaffPhotos from '$lib/components/StaffPhotos.svelte';
	import InView from '$lib/components/InView.svelte';
	import InView2 from '$lib/components/InView2.svelte';
</script>

<div class="mt-[5rem] px-[8%] 2xl:px-[14%]">
	<div class=" font-satoshi text-4xl font-thin text-bright  ">
		Our team of experts is here to help.
	</div>
	<StaffPhotos />
</div>
