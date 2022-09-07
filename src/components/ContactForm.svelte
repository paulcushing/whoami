<script>
	let showModal = false;
	let showThanksModal = false;

	let contactName = '';
	let email = '';
	let message = '';
	let errors = {};

	function showContact() {
		showModal = true;
	}

	function showThanks() {
		showThanksModal = true;
	}

	function closeModal() {
		showModal = false;
		showThanksModal = false;
	}

	function sendMessage() {
		// check for errors / empty
		if (contactName === '') {
			errors.contactName = 'You forgot your name?!!';
		} else {
			delete errors.contactName;
		}
		if (email === '' || !email.includes('@')) {
			errors.email = 'Please let me know where to email a response.';
		} else {
			delete errors.email;
		}
		if (message === '') {
			errors.message = 'You forgot to include a message.';
		} else {
			delete errors.message;
		}

		const site = 'https://whatgodsaysabout.me';

		if (Object.keys(errors).length === 0) {
			// No errors
			// send to Slack
			const payload = {
				name: contactName,
				email: email,
				message: message,
				site: 'WhatGodSaysAbout.me'
			};

			return fetch('https://whatgodsaysabout.me/contact/slack/send', {
				method: 'POST',
				body: JSON.stringify(payload),
				headers: {
					'Content-Type': 'application/json; charset=utf-8',
					'Content-Length': payload.length,
					Accept: 'application/json'
				}
			})
				.then((res) => {
					showThanks();

					contactName = '';
					email = '';
					message = '';
					return;
				})
				.catch((error) => {
					console.log(error);
					return;
				});
		} else {
			console.log(errors);
		}
	}
</script>

<button
	on:click={showContact}
	href="https://www.thepaulcushing.com/about/"
	class="px-4 text-gray-500 hover:text-white">Contact</button
>

{#if showModal}
	<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

		<div class="fixed inset-0 z-10 overflow-y-auto">
			<div class="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
				<div
					class="grow mx-2 mb-2 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
				>
					<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div class="">
							{#if showThanksModal}
								<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">
										Thanks!
									</h3>
									<div class="mt-2">
										<p class="col-span-12">
											I sincerely appreciate your feedback and will respond to questions as soon as
											I'm able to.
										</p>
									</div>
								</div>
							{:else}
								<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">
										Questions or Comments?
									</h3>
									<div class="mt-2">
										<div class="col-span-12">
											<label for="contact-name" class="block text-sm font-medium text-gray-700"
												>Name</label
											>
											{#if errors.contactName}
												<input
													type="text"
													bind:value={contactName}
													name="contact-name"
													id="contact-name"
													autocomplete="name"
													class="p-2 mt-1 block w-full rounded-md border border-4 border-red-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
												/>
											{:else}
												<input
													type="text"
													bind:value={contactName}
													name="contact-name"
													id="contact-name"
													autocomplete="name"
													class="p-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
												/>
											{/if}
										</div>
										<div class="mt-2 col-span-12">
											<label for="email-address" class="block text-sm font-medium text-gray-700"
												>Email address</label
											>
											{#if errors.email}
												<input
													type="email"
													bind:value={email}
													name="email-address"
													id="email-address"
													autocomplete="email"
													class="p-2 mt-1 block w-full rounded-md border border-4 border-red-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
												/>
											{:else}
												<input
													type="email"
													bind:value={email}
													name="email-address"
													id="email-address"
													autocomplete="email"
													class="p-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
												/>
											{/if}
										</div>
										<div class="mt-2 col-span-12">
											<label for="message" class="block text-sm font-medium text-gray-700"
												>Message</label
											>
											{#if errors.message}
												<textarea
													bind:value={message}
													type="text"
													name="message"
													id="message"
													class="p-2 mt-1 block w-full rounded-md border border-4 border-red-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
												/>
											{:else}
												<textarea
													bind:value={message}
													type="text"
													name="message"
													id="message"
													class="p-2 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
												/>
											{/if}
										</div>
									</div>
								</div>
							{/if}
						</div>
					</div>
					<div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
						{#if showThanksModal}
							<button
								on:click={closeModal}
								type="button"
								class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
								>OK</button
							>
						{:else}
							<button
								on:click={sendMessage}
								type="button"
								class="inline-flex w-full justify-center rounded-md border border-transparent bg-slate-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
								>Submit</button
							>
							<button
								on:click={closeModal}
								type="button"
								class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
								>Cancel</button
							>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
</style>
