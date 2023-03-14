<script>
	import photo1 from '$lib/assets/headshots/photo-1.png';
	import photo2 from '$lib/assets/headshots/photo-2.png';
	import photo3 from '$lib/assets/headshots/photo-3.png';
	import photo4 from '$lib/assets/headshots/photo-4.png';

	let staffData = [
		{
			name: 'text',
			role: 'text'
		},
		{
			name: 'text',
			role: 'text'
		},
		{
			name: 'text',
			role: 'text'
		},
		{
			name: 'text',
			role: 'text'
		}
	];
</script>

{#each staffData as i}
	<div class="flex gap-4 items-center sm:flex-col ">
		<div
			class="relative w-[10rem] h-[13rem] customTransition rounded-b-[100vw] overflow-clip hover:scale-105 flex  "
		>
			<div class="backgroundPhotoTexture w-[10rem] h-[10rem] absolute bottom-0 rounded-t-full  " />
			<!-- <img src={texturePhoto} alt="texture" class=" bg-cover absolute -z-10 bg-repeat" /> -->
			<img
				src={photo[i]}
				alt="person headshot"
				class="aboslute w-[10rem] h-[10rem] absolute bottom-0 -translate-y-1 scale-[130%] customTransition hover:-translate-y-3 hover:scale-[130%] hover:ease-in-out   "
			/>
		</div>
		<div class="flex flex-col sm:items-center ">
			<div class="flex text-xl text-white font-bold  ">Sarah Jones</div>
			<div class="flex text-sm text-white   ">Managing Director</div>
		</div>
	</div>
{/each}
