<script lang="ts">
  import albumCover from '$lib/assets/album-cover.avif';
  import albumTexture from '$lib/assets/album-texture.avif';
  import albumCracks from '$lib/assets/album-cracks.avif';
  import vinyl from '$lib/assets/vinyl.avif';

  let isPlaying = false;

  function togglePlayback() {
    isPlaying = !isPlaying;
  }
</script>

<div class="w-full h-full gap-4 flex flex-col">
  <div class="flex w-full h-64 justify-center items-center bg-gray-400">
    big stupid flexbox
  </div>

  <div class="flex justify-center items-center w-full bg-black/80 px-8 py-16">
    <div class="relative w-80 h-80">
      <div id="album" class="relative top-0 left-0 h-full w-full">
        <div id="cover-before" style="background-image: url({albumTexture});"></div>
        <div id="cover" style="background-image: url({albumCover});">
          <div id="print"></div>
        </div>
        <div id="cover-after" style="background-image: url({albumCracks});"></div>
        <div id="vinyl" class={isPlaying ? 'playing' : 'pausing'} style="background-image: url({vinyl});">
          <div id="print"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-center">
    <button
      class="bg-white/80 hover:bg-white text-black border rounded-md p-3 shadow-lg transition-all"
      on:click={togglePlayback}
      aria-label={isPlaying ? 'Pause' : 'Play'}
    >
      {#if isPlaying}
        หยุดปลุกเสก
      {:else}
        เริ่มปลุกเสก
      {/if}
    </button>
  </div>

</div>

<svelte:head>
  <style>
      #cover {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-image: url();
        background-size: 100% 100%;
        box-shadow: 5px 0 20px 0 rgba(0,0,0,0.6),
                    inset 0 0 10px 5px rgba(255,255,255,0.2),
              inset 0 0 4px 2px rgba(0,0,0,0.2);
        border-radius: 4px;
      }
      #cover-before {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        border-radius: 4px;
        mix-blend-mode: screen;
        opacity: 0.5;
        content: '';
      }
      #cover-after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        border-radius: 4px;
        mix-blend-mode: screen;
        opacity: 0.2;
        content: '';
      }
      #vinyl {
          position: absolute;
          top: 2.5%;
          left: 2.5%;
          z-index: 0;
          width: 95%;
          height: 95%;
          display: block;
          background-size: 106% 106%;
          background-position: center;
          box-shadow: 0 0 20px 4px rgba(0,0,0,0.6);
          border-radius: 50%;
          content: '';
          &.playing {
            animation: 5s linear spinThat infinite, ease-out getOut 1s forwards;
          }

          &.pausing {
            animation: 5s linear spinThat 0s paused, ease-in getIn 1s forwards;
          }

          &::before {
            position: absolute;
            top: 2.5%;
            left: 2.5%;
            z-index: 10;
            width: 95%;
            height: 95%;
            /* background-image: url('http://www.designresourcebox.com/ths/diverse/blacktextures/82267467.jpg'); //dead link */
            background-size: 100% 100%;
            border-radius: 50%;
            mix-blend-mode: screen;
            opacity: 0.3;
            content: '';
          }
          #print {
            position: absolute;
            top: 33%;
            left: 33%;
            height: 34%;
            width: 34%;
            box-shadow: inset 0 0 0 5px rgba(150,150,150,0.5);
            /* background-image: url('http://assets.teamrock.com/image/14d29742-c6f7-43f6-bbe1-6bf7b3b34c6f?w=800'); //dead link */
        background-size: cover;
            border-radius: 50%;
          }
      }

      @keyframes getOut {
        0% {
          left: 0;
        }
        100% {
          left: 50%;
        }
      }
      @keyframes getIn {
        0% {
          left: 50%;
        }
        100% {
          left: 0;
        }
      }
      @keyframes spinThat {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
  </style>
</svelte:head>