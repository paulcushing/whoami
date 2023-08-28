<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { PUBLIC_MIXPANEL_TOKEN } from '$env/static/public';

	/* Mixpanel */
	import mixpanel from 'mixpanel-browser';
	mixpanel.init(PUBLIC_MIXPANEL_TOKEN, { debug: false });

	export let data;
</script>

{#key data.pathname}
	<div in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 100 }}>
		<slot />
	</div>
{/key}
