<script lang="ts">
	import BorderAHorBottom from '$lib/assets/border-a-hb-h60.svg';
	import BorderAVertLeft from '$lib/assets/border-a-vl-h60.svg';
	import BorderAVertRight from '$lib/assets/border-a-vr-h60.svg';

	export let borderHeight = '60px';
	export let text = `
อัจจุตะ hello_worl1d_1 สัมมา ปารัมภะargปริโยนาหะ สัมมาอธิกะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello Worldนะ ทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

กรณะ hello_world_2ปารัมภะargปริโยนาหะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello World 2นะทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

hello_worl1d_1ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ
hello_world_2ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ
    `;
</script>

<div class="p-4 w-full h-full min-h-screen">
    <div class="relative w-full h-full">
        <!-- Content with padding for borders -->
        <div class="flex w-full items-center justify-center py-24 px-16">
            <div class="prose w-full">
                <h1 class="text-center text-blue-800">บทนมัสการอันศักด์สิทธิ์</h1>
                <p class="text-center text-blue-800 text-base/[2.5]">{text}</p>
                <h2 class="text-center text-blue-800">สาธุ</h2>
            </div>
        </div>

        <!-- Horizontal Borders -->
        <div
            class="absolute px-[{borderHeight}] top-0 left-0 w-full rotate-180 bg-repeat-x"
            style="background-image: url({BorderAHorBottom}); height: {borderHeight};"
        ></div>
        <div
            class="absolute px-[{borderHeight}] bottom-0 left-0 w-full transform bg-repeat-x"
            style="background-image: url({BorderAHorBottom}); height: {borderHeight};"
        ></div>

        <!-- Vertical Borders - Fixed approach -->
        <div
            class="absolute top-0 left-0 h-full"
            style="background-image: url({BorderAVertLeft}); background-repeat: repeat-y; width: {borderHeight}; transform-origin: top left;"
        ></div>
        <div
            class="absolute top-0 right-0 h-full transform"
            style="background-image: url({BorderAVertRight}); background-repeat: repeat-y; width: {borderHeight}; transform-origin: top right;"
        ></div>

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
</div>
