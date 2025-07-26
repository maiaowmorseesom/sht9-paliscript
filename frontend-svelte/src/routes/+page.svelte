<script lang="ts">
	import AudioControl from "$lib/components/audio-control.svelte";
	import ChantText from "$lib/components/chant-text.svelte";
</script>

<div class="w-full h-full min-h-screen grid grid-cols-2 gap-x-4">
  <div class="w-full h-full">
    <ChantText />
  </div>
  <AudioControl />
</div>