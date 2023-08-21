<script>
	import { onMount } from 'svelte';
	import { data as promiseData } from '../../components/Data.svelte';
	import mixpanel from 'mixpanel-browser';

	let name;
	let personalize = false;
	let gender;

	// Gives page slug access
	export let data;

	onMount(async () => {
		console.log('Loading page: ' + data.slug);
		if (typeof localStorage !== 'undefined') {
			name = localStorage.getItem('name') || 'Guest';
			personalize = JSON.parse(localStorage.getItem('personalize')) || false;
			gender = localStorage.getItem('gender') || 'female';
		}

		mixpanel.track('Viewed Page', {
			Page: data.slug,
			Name: name,
			Personalize: personalize,
			Gender: gender
		});
	});

	const { neutral, masculine, feminine, verse } = promiseData[data.slug];

	const homePage = '/';
	const prevPage = data.slug === '1' ? '/' : '/' + (parseInt(data.slug) - 1).toString();

	const nextPage = '/' + (parseInt(data.slug) + 1).toString();
</script>

<svelte:head>
	<title>Who Am I - Who Does Jesus Say That I Am?</title>
</svelte:head>

<div class="flex flex-col w-full min-h-screen m-0 p-0 justify-between mb-24">
	<section class="flex flex-col w-full overflow-hidden bg-white sm:mx-auto mb-auto">
		<div class="flex justify-center p-8 bg-white lg:py-16 lg:px-2 lg:pl-10">
			<div class="flex flex-col items-start justify-center w-full lg:max-w-2xl">
				<p class="py-5 mb-5 text-gray-600 text-3xl lg:text-6xl">
					<span class="font-bold"
						>{personalize
							? gender === 'female'
								? feminine.replaceAll('{name}', name)
								: masculine.replaceAll('{name}', name)
							: neutral}</span
					>
				</p>
				<p class="py-5 mb-5 text-gray-900 underline text-xl lg:text-2xl">
					{@html verse}
				</p>
			</div>
		</div>
	</section>
	<section class="flex flex-col w-full overflow-hidden fixed left-0 bottom-0 sm:mx-auto">
		<div class="flex justify-center p-8 bg-white">
			<div class="flex flex-col items-start justify-center w-full lg:max-w-lg">
				<div class="flex w-full justify-between">
					<a
						href={prevPage}
						class="touch-pan-y inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
					>
						Previous
					</a>
					{#if data.slug < 50}
						<a
							href={nextPage}
							class="touch-pan-y inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
							data-rounded="rounded-lg"
							data-primary="gray-900"
						>
							Next
						</a>
					{:else}
						<a
							href={homePage}
							class="touch-pan-y inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
							data-rounded="rounded-lg"
							data-primary="gray-900"
						>
							Home
						</a>
					{/if}
				</div>
			</div>
		</div>
	</section>
</div>
