<script lang="ts">
    import AudioControl from "$lib/components/audio-control.svelte";
    import ChantText from "$lib/components/chant-text.svelte";
    import { onMount } from "svelte";

  const audioExtension = "mp3";
  let paliscriptPath = $state('');
  let audioPath = $derived(getAudioPath(paliscriptPath));
  let paliscriptText = $state('');
  // let audioFile = $state('');

  $effect(() => {
    if (paliscriptPath) {
      console.log("Fetching from path:", paliscriptPath);
      fetch(paliscriptPath)
        .then((response) => response.text())
        .then((text) => {paliscriptText = text})
        .catch(err => console.error("Error fetching paliscript:", err));
    }
  });

  onMount(() => {
    const url = new URL(window.location.href);
    const queryParams = new URLSearchParams(url.search);
    const pathParam = queryParams.get('paliscriptPath');
    if (pathParam) {
      paliscriptPath = pathParam;
      console.log("Set path from query param:", paliscriptPath);
    } else {
      console.log("No paliscriptPath in query parameters");
    }
  });

  function getAudioPath(scriptPath: string) {
    if (!scriptPath) return '';

    // Replace file extension with audio extension
    const lastDotIndex = scriptPath.lastIndexOf('.');
    if (lastDotIndex !== -1) {
      return scriptPath.substring(0, lastDotIndex) + '.' + audioExtension;
    }

    // If no extension in the path, just add the audio extension
    return scriptPath + '.' + audioExtension;
  }
</script>

<div class="w-full h-full min-h-screen grid grid-cols-2 gap-x-4 p-4">
  <ChantText text={paliscriptText} />
  <AudioControl audioSrc={audioPath} />
</div>