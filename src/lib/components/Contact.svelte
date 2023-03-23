<div id="contact" class="mt-[6rem] px-[8%]">
	<div class=" font-satoshi text-4xl font-thin text-bright  ">Get in touch.</div>
	<div class="mt-[3rem] items-center  gap-[5rem] sm:grid sm:grid-cols-2">
		<div class="  font-satoshi text-2xl font-thin text-textLight">
			Contact us using the form or reach us at <a
				href="mailto:coby.joseph@gmail.com"
				class="text-secondaryDark">contact@luminarypartners.com</a
			>.
		</div>

		<form
			class="text-primary  mt-10 flex w-full flex-col flex-nowrap gap-5 sm:mt-0 "
			method="POST"
			action="?/contactAction"
		>
			<div class=" flex flex-col">
				<div class="text-sm font-bold text-bright ">Name</div>
				<input
					class="mt-1 rounded-md border     bg-secondaryDark bg-opacity-20 p-2"
					type="text"
					name="name"
					placeholder="Full name"
					required
				/>
			</div>
			<div class="flex flex-col">
				<div class="text-sm font-bold  text-bright ">Email</div>
				<input
					class="mt-1 rounded-md  border   bg-secondaryDark bg-opacity-20 p-2"
					type="email"
					name="email"
					placeholder="Email"
					required
				/>
			</div>
			<div class="flex w-full flex-col ">
				<div class="">
					<div class="text-sm font-bold text-bright ">Message</div>
					<textarea
						name="message"
						rows="3"
						class="mt-1 min-w-full rounded-md  border    bg-secondaryDark bg-opacity-20 p-2"
						placeholder="Let us know how we can help."
					/>
				</div>
			</div>
			<div class="flex">
				<button
					type="submit"
					class="mt-2 flex justify-center rounded-md  bg-bright py-[0.5rem] pr-5 pl-5  text-lg  font-semibold text-white "
					>Send</button
				>
			</div>
		</form>
	</div>
</div>

<style>
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: white;
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: white;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: white;
	}
</style>
