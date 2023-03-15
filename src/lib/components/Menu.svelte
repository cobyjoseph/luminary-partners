<script lang="ts">
</script>

<div class="flex justify-between text-white items-center py-5">
	<div class="flex items-center gap-3">
		<div class="w-[3rem] sm:w-[4rem] flex ">
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 223 253"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xml:space="preserve"
				xmlns:serif="http://www.serif.com/"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-640.677,-427.749)">
					<g id="Logo-w-bg" serif:id="Logo w bg">
						<rect x="687.594" y="453.944" width="142.87" height="201.645" style="fill:white;" />
						<g
							id="cut-out-letter"
							serif:id="cut out letter"
							transform="matrix(0.503093,0,0,0.471309,420.871,335.077)"
						>
							<path
								d="M879.75,238.306L879.75,690.982C879.75,713.985 861.075,732.66 838.072,732.66L478.587,732.66C455.584,732.66 436.909,713.985 436.909,690.982L436.909,238.306C436.909,215.303 455.584,196.628 478.587,196.628L838.072,196.628C861.075,196.628 879.75,215.303 879.75,238.306ZM620.349,283.301L620.463,612.75L721.727,612.75L721.727,592.952L639.692,592.952L639.692,283.301L620.349,283.301ZM603.622,612.286L603.622,283.327L550.782,283.327L550.782,645.646L757.861,645.646L757.861,559.265L654.094,559.265L654.094,578.016L739.019,578.016L739.019,627.532L568.623,627.532L568.623,301.622L583.733,301.622L583.733,612.75L603.622,612.286Z"
								style="fill:rgb(68,70,124);"
							/>
						</g>
					</g>
				</g>
			</svg>
		</div>
		<div class="flex flex-col text-xl sm:text-2xl font-bold font-josefinSans mt-1  ">
			<div class="flex ">Luminary</div>
			<div class="flex ">Partners</div>
		</div>
	</div>

	<div class="flex gap-10 text-lg font-semibold font-satoshi">
		<div class="fancy-link relative">About us</div>
		<div class="fancy-link relative">Services</div>
		<div class="fancy-link relative">FAQ</div>
		<div class="fancy-link relative">Contact</div>
	</div>
</div>

<style>
	.fancy-link::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2px;
		background: currentColor;
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transform-origin: right;
		transform-origin: right;
		transition: -webkit-transform 250ms ease-in;
		transition: transform 250ms ease-in;
		transition: transform 250ms ease-in, -webkit-transform 250ms ease-in;
	}

	.fancy-link:hover::after {
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
		-webkit-transform-origin: left;
		transform-origin: left;
	}
</style>
