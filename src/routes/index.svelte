<script>
	const data = {
		0: {
			title: 'Home',
			verse: 'null'
		},
		1: {
			title:
				"I am God's child for I am born again of the incorruptible seed of the Word of God that lives and abides forever.",
			verse: '1 Peter 1:23'
		},
		2: {
			title: 'I am forgiven of all my sins and washed in the blood.',
			verse: 'Ephesians 1:7; Hebrews 9:14; Colossians 1:14; 1 John 2:12; 1 John 1:9'
		},
		3: {
			title: 'I am a new creation.',
			verse: '2 Corinthians 5:17'
		},
		4: {
			title: 'I am a temple where the Holy Spirit lives.',
			verse: '1 Corinthians 6:19'
		},
		5: {
			title: "I am delivered from the power of darkness; Christ brings me into God's kingdom.",
			verse: 'Colossians 1:13'
		},
		6: {
			title: 'I am redeemed from the curse of the law.',
			verse: '1 Peter 1:18-19'
		},
		7: {
			title: 'I am holy and without blame before God.',
			verse: 'Ephesians 1:4'
		},
		8: {
			title: 'I am established to the end.',
			verse: '1 Corinthians 1:8'
		},
		9: {
			title: 'I have been brought closer to God through the blood of Christ.',
			verse: 'Ephesians 2:13'
		},
		10: {
			title: 'I am victorious.',
			verse: 'Revelation 21:7'
		},
		11: {
			title: 'I am set free.',
			verse: 'John 8:31-32'
		},
		12: {
			title: ' I am strong in the Lord.',
			verse: 'Ephesians 6:10'
		},
		13: {
			title: 'I am dead to sin.',
			verse: 'Romans 6:2 & 11; 1 Peter 2:24'
		},
		14: {
			title: 'I am more than a conqueror.',
			verse: 'Romans 8:37'
		},
		15: {
			title: 'I am a co-heir with Christ.',
			verse: 'Romans 8:16-17'
		},
		16: {
			title: 'I am sealed with the Holy Spirit of promise.',
			verse: 'Ephesians 1:13'
		},
		17: {
			title: 'I am in Christ Jesus by his doing.',
			verse: '1 Corinthians 1:30'
		},
		18: {
			title: 'I am accepted in Jesus Christ.',
			verse: 'Ephesians 1:5-6'
		},
		19: {
			title: 'I am complete in Him.',
			verse: 'Colossians 2:10'
		},
		20: {
			title: 'I am crucified with Christ.',
			verse: 'Galatians 2:20'
		},
		21: {
			title: 'I am alive with Christ.',
			verse: 'Ephesians 2:4-5'
		},
		22: {
			title: 'I am free from condemnation.',
			verse: 'Romans 8:1'
		},
		23: {
			title: 'I am reconciled to God.',
			verse: '2 Corinthians 5:18'
		},
		24: {
			title: 'I am qualified to share in his inheritance.',
			verse: 'Colossians 1:12'
		},
		25: {
			title:
				'I am firmly rooted, established in my faith and overflowing with gratefulness and thankfulness.',
			verse: 'Colossians 2:7'
		},
		26: {
			title: 'I am called by God.',
			verse: '2 Timothy 1:9'
		},
		27: {
			title: 'I am chosen.',
			verse: '1 Thessalonians 1:4; Ephesians 1:4; 1 Peter 2:9'
		},
		28: {
			title: 'I am an ambassador of Christ.',
			verse: '2 Corinthians 5:20'
		},
		29: {
			title: "I am God's workmanship created in Christ Jesus for good works.",
			verse: 'Ephesians 2:10'
		},
		30: {
			title: "I am the apple of my Father's eye.",
			verse: 'Deuteronomy 32:10; Psalm 17:8'
		},
		31: {
			title: 'I am healed by the stripes of Jesus.',
			verse: '1 Peter 2:24; Isaiah 53:6'
		},
		32: {
			title: 'I am being changed into his image.',
			verse: '2 Corinthians 3:18; Philippians 1:6'
		},
		33: {
			title: 'I am raised up with Christ and am seated in heavenly places.',
			verse: 'Ephesians 2:6'
		},
		34: {
			title: 'I am beloved of God.',
			verse: 'Colossians 3:12; Romans 1:7; 1 Thessalonians 1:4'
		},
		35: {
			title: 'I have the mind of Christ.',
			verse: 'Philippians 2:5; 1 Corinthians 2:16'
		},
		36: {
			title: 'I have obtained an inheritance.',
			verse: 'Ephesians 1:11'
		},
		37: {
			title: 'I have access by one Spirit to the Father.',
			verse: 'Ephesians 2:18'
		},
		38: {
			title: 'I have overcome the world.',
			verse: '1 John 5:4'
		},
		39: {
			title: 'I have everlasting life and will not be condemned.',
			verse: 'John 5:24; John 6:47'
		},
		40: {
			title: 'I have the peace of God that transcends all understanding.',
			verse: 'Philippians 4:7'
		},
		41: {
			title:
				'I have received power-the power of the Holy Spirit; power to lay hands on the sick and see them recover; power to cast out demons; power over all the power of the enemy; nothing shall by any means hurt me.',
			verse: 'Mark 16:17-18; Luke 10:17-19'
		},
		42: {
			title: 'I live by and in the law of the Spirit of Life in Christ Jesus.',
			verse: 'Romans 8:2'
		},
		43: {
			title: 'I walk in Christ Jesus.',
			verse: 'Colossians 2:6'
		},
		44: {
			title: 'I can do all things (everything) in and through Christ Jesus.',
			verse: 'Philippians 4:13'
		},
		45: {
			title: 'We shall do even greater things than Jesus did.',
			verse: 'John 14:12'
		},
		46: {
			title:
				'I possess the Great One in me because greater is He who is in me than he who is in the world.',
			verse: '1 John 4:4'
		},
		47: {
			title: 'I press toward the mark for the prize of the high calling of God.',
			verse: 'Philippians 3:14'
		},
		48: {
			title: 'I always triumph in Christ.',
			verse: '2 Corinthians 2:14'
		},
		49: {
			title: 'My life shows forth his praise.',
			verse: '1 Peter 2:9'
		},
		50: {
			title: 'My life is hidden with Christ in God.',
			verse: 'Colossians 3:3'
		}
	};

	let page = 0;

	function handleClickNext() {
		page++;
	}

	function handleClickPrev() {
		page--;
	}

	function handleClickHome() {
		page = 0;
	}
</script>

<svelte:head>
	<title>Who Am I - Who Does Jesus Say That I Am?</title>
	<html lang="en" />
</svelte:head>

<div class="flex flex-col w-full h-screen m-0 p-0 justify-between">
	{#if page === 0}
		<section class="flex flex-col flex-grow w-full overflow-hidden bg-white lg:flex-row sm:mx-auto">
			<div class="flex justify-end p-8 bg-white lg:py-32 lg:px-16 lg:pl-10 lg:w-1/2">
				<div class="flex flex-col items-start justify-center w-full lg:max-w-lg">
					<p
						class="inline-block px-2 py-1 mb-5 font-medium tracking-wider text-gray-900 uppercase bg-gray-200 rounded-full text-xxs"
					>
						Do you <i>really</i> know...
					</p>
					<h5 class="mb-3 text-3xl font-extrabold leading-none sm:text-4xl lg:text-7xl">
						Who Am I?
					</h5>
					<p class="py-5 mb-5 text-gray-600 lg:text-xl">
						Sometimes it helps to be reminded of who we REALLY are, rather than what others have
						told us. Here is a beautiful sample of what <span class="font-bold">Jesus</span> says about
						YOU, along with the verses.
					</p>
					<div class="flex items-center">
						<button
							on:click={handleClickNext}
							class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
							data-rounded="rounded-lg"
							data-primary="gray-900"
						>
							Get started
						</button>
					</div>
				</div>
			</div>
			<div class="relative lg:w-1/2">
				<img
					src="https://images.pexels.com/photos/2258240/pexels-photo-2258240.jpeg?cs=srgb&dl=pexels-luis-quintero-2258240.jpg&fm=jpg"
					alt="Hero"
					class="object-cover w-full lg:absolute h-80 lg:h-full"
				/>
			</div>
		</section>
	{:else}
		<section class="flex flex-col w-full overflow-hidden bg-white sm:mx-auto mb-auto">
			<div class="flex justify-center p-8 bg-white lg:py-32 lg:px-16 lg:pl-10">
				<div class="flex flex-col items-start justify-center w-full lg:max-w-lg">
					<p class="py-5 mb-5 text-gray-600 text-4xl lg:text-6xl">
						<span class="font-bold">{data[page].title}</span>
					</p>
					<p class="py-5 mb-5 text-gray-600 text-xl lg:text-2xl">
						{data[page].verse}
					</p>
				</div>
			</div>
		</section>
		<section class="flex flex-col w-full overflow-hidden bg-white sm:mx-auto">
			<div class="flex justify-center p-8 bg-white">
				<div class="flex flex-col items-start justify-center w-full lg:max-w-lg">
					<div class="flex w-full justify-between">
						<button
							on:click={handleClickPrev}
							class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
							data-rounded="rounded-lg"
							data-primary="gray-900"
						>
							Previous
						</button>
						{#if page < 50}
							<button
								on:click={handleClickNext}
								class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
								data-rounded="rounded-lg"
								data-primary="gray-900"
							>
								Next
							</button>
						{:else}
							<button
								on:click={handleClickHome}
								class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-900 focus:shadow-outline focus:outline-none"
								data-rounded="rounded-lg"
								data-primary="gray-900"
							>
								Home
							</button>
						{/if}
					</div>
				</div>
			</div>
		</section>
	{/if}

	<section class="py-10 bg-black">
		<div class="px-10 mx-auto max-w-7xl">
			<div class="flex flex-col justify-between text-center md:flex-row">
				<p class="order-last text-sm leading-tight text-gray-500 md:order-first">
					Built for God's glory and YOUR joy!
				</p>
				<ul class="flex flex-row justify-center pb-3 -ml-4 -mr-4 text-sm">
					<li>
						<a
							href="https://www.thepaulcushing.com/about/"
							class="px-4 text-gray-500 hover:text-white">Contact</a
						>
					</li>
				</ul>
			</div>
		</div>
	</section>
</div>
