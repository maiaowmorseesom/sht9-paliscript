<script lang="ts">
	import BorderAHorBottom from '$lib/assets/border-a-hb-h60.svg';
	import BorderAVertLeft from '$lib/assets/border-a-vl-h60.svg';
	import BorderAVertRight from '$lib/assets/border-a-vr-h60.svg';

	const borderHeight = '60px';

    let { text = `
อัจจุตะ hello_worl1d_1 สัมมา ปารัมภะargปริโยนาหะ สัมมาอธิกะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello Worldนะ ทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

กรณะ hello_world_2ปารัมภะargปริโยนาหะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello World 2นะทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

hello_worl1d_1ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ
hello_world_2ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ

อัจจุตะ hello_worl1d_1 สัมมา ปารัมภะargปริโยนาหะ สัมมาอธิกะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello Worldนะ ทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

กรณะ hello_world_2ปารัมภะargปริโยนาหะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello World 2นะทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

hello_worl1d_1ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ
hello_world_2ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ

อัจจุตะ hello_worl1d_1 สัมมา ปารัมภะargปริโยนาหะ สัมมาอธิกะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello Worldนะ ทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

กรณะ hello_world_2ปารัมภะargปริโยนาหะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello World 2นะทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

hello_worl1d_1ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ
hello_world_2ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ

อัจจุตะ hello_worl1d_1 สัมมา ปารัมภะargปริโยนาหะ สัมมาอธิกะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello Worldนะ ทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

กรณะ hello_world_2ปารัมภะargปริโยนาหะ อารัมภะ
    ธัมมะสักกะอังคะlogปารัมภะทวิ-วจนะHello World 2นะทวิ-วจนะสัมพันธะ argปริโยนาหะวิรามะ
ปริปุญญะ

hello_worl1d_1ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ
hello_world_2ปารัมภะทวิ-วจนะfrom hello_worldอังคะjsทวิ-วจนะปริโยนาหะวิรามะ
    `} = $props();
</script>

<div class="w-full h-full min-h-screen">
    <div class="relative w-full h-full">
        <!-- Content with padding for borders -->
        <div class="flex w-full items-center justify-center py-24 px-16">
            <div class="prose w-full">
                <h1 class="text-center text-blue-800 font-charmonman">บทนมัสการอันศักด์สิทธิ์</h1>
                <p class="text-center text-blue-800 text-lg">{text}</p>
                <h2 class="text-center text-blue-800 font-charmonman">สาธุ</h2>
            </div>
        </div>

        <!-- Horizontal Borders -->
        <div
            class="absolute px-[{borderHeight}] top-0 left-0 w-full rotate-180 bg-repeat-x"
            style="background-image: url({BorderAHorBottom}); height: {borderHeight};"
        ></div>
        <div
            class="absolute px-[{borderHeight}] bottom-0 left-0 w-full bg-repeat-x"
            style="background-image: url({BorderAHorBottom}); height: {borderHeight};"
        ></div>

        <!-- Vertical Borders -->
        <div
            class="absolute top-0 left-0 h-full bg-repeat-y"
            style="background-image: url({BorderAVertLeft}); width: {borderHeight};"
        ></div>
        <div
            class="absolute top-0 right-0 h-full bg-repeat-y"
            style="background-image: url({BorderAVertRight}); width: {borderHeight};"
        ></div>
    </div>
</div>
