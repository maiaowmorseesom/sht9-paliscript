<script lang="ts">
  import BorderAHorBottom from "$lib/assets/border-a-hb-h60.svg";
  import BorderAVertLeft from "$lib/assets/border-a-vl-h60.svg";
  import BorderAVertRight from "$lib/assets/border-a-vr-h60.svg";

  export let borderHeight = "60px";
  export let text = "Chant here!";

  // Calculate the content height to ensure vertical borders stretch properly
  let contentDiv;
</script>

<div class="relative w-full">
  <!-- Content with padding for borders -->
  <div class="p-16 flex items-center justify-center" bind:this={contentDiv}>
    <h1 class="text-center">{text}</h1>
  </div>

  <!-- Horizontal Borders -->
  <div class="absolute px-[{borderHeight}] top-0 left-0 w-full bg-repeat-x rotate-180"
       style="background-image: url({BorderAHorBottom}); height: {borderHeight};"></div>
  <div class="absolute px-[{borderHeight}] bottom-0 left-0 w-full bg-repeat-x transform "
       style="background-image: url({BorderAHorBottom}); height: {borderHeight};"></div>

  <!-- Vertical Borders - Fixed approach -->
  <div class="absolute top-0 left-0 h-full"
       style="background-image: url({BorderAVertLeft}); background-repeat: repeat-y; width: {borderHeight}; transform-origin: top left;"></div>
  <div class="absolute top-0 right-0 h-full transform"
       style="background-image: url({BorderAVertRight}); background-repeat: repeat-y; width: {borderHeight}; transform-origin: top right;">
      </div>

  <!-- Corner pieces to cover gaps -->
  <!-- <div class="absolute top-0 left-0 bg-no-repeat"
       style="background-image: url({BorderA}); width: {borderHeight}; height: {borderHeight};"></div>
  <div class="absolute top-0 right-0 bg-no-repeat transform rotate-90"
       style="background-image: url({BorderA}); width: {borderHeight}; height: {borderHeight}; transform-origin: top right;"></div>
  <div class="absolute bottom-0 left-0 bg-no-repeat transform -rotate-90"
       style="background-image: url({BorderA}); width: {borderHeight}; height: {borderHeight}; transform-origin: bottom left;"></div>
  <div class="absolute bottom-0 right-0 bg-no-repeat transform rotate-180"
       style="background-image: url({BorderA}); width: {borderHeight}; height: {borderHeight};"></div> -->
</div>