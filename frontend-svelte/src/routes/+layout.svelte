<script lang="ts">
	import '../app.css';
	import "@fontsource/charmonman";

	let { children } = $props();
</script>

<div class="font-serif">
	{@render children()}
</div>
