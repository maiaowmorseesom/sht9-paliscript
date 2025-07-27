import { u as push, w as pop, x as escape_html, z as attr_class, F as attr_style, G as ensure_array_like, J as head, K as attr, N as maybe_selected, O as stringify, P as clsx } from './index-tbSDFNYm.js';

const albumCoverDefault = "/_app/immutable/assets/album-cover.2zubXIYP.avif";
const albumCoverJapan = "/_app/immutable/assets/album-cover-japan.0DIi6ff5.avif";
const albumCoverPiano = "/_app/immutable/assets/album-cover-piano.BVPyx2Dh.avif";
const albumCoverCatcat = "/_app/immutable/assets/album-cover-catcat.JwsNv4fV.avif";
const albumTexture = "/_app/immutable/assets/album-texture.rwR0OP_z.avif";
const albumCracks = "/_app/immutable/assets/album-cracks.Dy4k1dqy.avif";
const vinyl = "/_app/immutable/assets/vinyl.C7Bhu67P.avif";
const creators = "/_app/immutable/assets/creators.A65BnIKR.avif";
function Audio_control($$payload, $$props) {
  push();
  const { audioBasePath } = $$props;
  const defaultTheme = {
    label: "Normal",
    value: "",
    audioPath: "original.wav",
    containterClasses: "bg-gray-900 text-white",
    albumCoverUrl: albumCoverDefault
  };
  let activeTheme = defaultTheme;
  const alternateAudioMixes = [
    defaultTheme,
    {
      label: "Japan",
      value: "japan",
      audioPath: "bg1.wav",
      containterClasses: "bg-red-900 text-white",
      albumCoverUrl: albumCoverJapan
    },
    {
      label: "Piano",
      value: "piano",
      audioPath: "bg3.wav",
      containterClasses: "bg-indigo-900 text-white",
      albumCoverUrl: albumCoverPiano
    },
    {
      label: "Cat Cat",
      value: "catcat",
      audioPath: "uia_audio.wav",
      containterClasses: "bg-amber-700 text-white",
      albumCoverUrl: albumCoverCatcat
    }
  ];
  const each_array = ensure_array_like(alternateAudioMixes);
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<style>
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
        object-fit: cover;
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
  </style>`);
  });
  $$payload.out.push(`<div class="w-full h-fit gap-4 flex flex-col text-white gap-y-6"><div class="flex flex-col justify-center items-center bg-amber-400 py-8"><h2 class="text-3xl mb-4 font-bold font-charmonman">เจ้าภาพงานบุญ</h2> <img alt="creators"${attr("src", creators)} class="h-64"/></div> <div${attr_class(`h-fit gap-4 flex flex-col text-white gap-y-6 py-12 ${stringify(activeTheme.containterClasses)}`)}><div class="flex justify-center items-center w-full px-8"><div class="relative w-80 h-80"><div id="album" class="relative top-0 left-0 h-full w-full"><div id="cover-before"${attr_style(`background-image: url(${stringify(albumTexture)});`)}></div> <div id="cover"${attr_style(`background-image: url(${stringify(activeTheme.albumCoverUrl)});`)}><div id="print"></div></div> <div id="cover-after"${attr_style(`background-image: url(${stringify(albumCracks)});`)}></div> <div id="vinyl"${attr_class(clsx("playing"))}${attr_style(`background-image: url(${stringify(vinyl)});`)}><div id="print"></div></div></div></div></div> <div class="flex items-center justify-center gap-x-4"><p class="text-2xl font-bold font-charmonman">ควบคุมการปลุกเสก</p> <audio${attr("src", `${audioBasePath}/${activeTheme.audioPath}`)} controls></audio></div> <div class="flex items-center justify-center gap-x-4"><a${attr("href", `${audioBasePath}/${activeTheme.audioPath}`)} class="text-xl font-charmonman px-6 py-4 bg-white outline rounded-md text-black">นิมนต์เสียงมาเจิมเครื่องคุณ</a></div> <div class="flex items-center justify-center gap-x-4"><select class="w-48" name="audioMix"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let mix = each_array[$$index];
    $$payload.out.push(`<option${attr("value", mix.value)}${maybe_selected($$payload, mix.value)}>${escape_html(mix.label)}</option>`);
  }
  $$payload.out.push(`<!--]--></select></div></div></div>`);
  pop();
}
const BorderAHorBottom = "/_app/immutable/assets/border-a-hb-h60.C73kcS7p.svg";
const BorderAVertLeft = "/_app/immutable/assets/border-a-vl-h60.DobfYuy1.svg";
const BorderAVertRight = "/_app/immutable/assets/border-a-vr-h60.Cxy_C9AV.svg";
function Chant_text($$payload, $$props) {
  const borderHeight = "60px";
  let {
    text = `
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
    `
  } = $$props;
  $$payload.out.push(`<div class="w-full h-full min-h-screen"><div class="relative w-full h-full"><div class="flex w-full items-center justify-center py-24 px-16"><div class="prose w-full"><h1 class="text-center text-blue-800 font-charmonman">บทนมัสการอันศักด์สิทธิ์</h1> <p class="text-center text-blue-800 text-lg">${escape_html(text)}</p> <h2 class="text-center text-blue-800 font-charmonman">สาธุ</h2></div></div> <div${attr_class(`absolute px-[${stringify(borderHeight)}] top-0 left-0 w-full rotate-180 bg-repeat-x`)}${attr_style(`background-image: url(${stringify(BorderAHorBottom)}); height: ${stringify(borderHeight)};`)}></div> <div${attr_class(`absolute px-[${stringify(borderHeight)}] bottom-0 left-0 w-full bg-repeat-x`)}${attr_style(`background-image: url(${stringify(BorderAHorBottom)}); height: ${stringify(borderHeight)};`)}></div> <div class="absolute top-0 left-0 h-full bg-repeat-y"${attr_style(`background-image: url(${stringify(BorderAVertLeft)}); width: ${stringify(borderHeight)};`)}></div> <div class="absolute top-0 right-0 h-full bg-repeat-y"${attr_style(`background-image: url(${stringify(BorderAVertRight)}); width: ${stringify(borderHeight)};`)}></div></div></div>`);
}
function _page($$payload, $$props) {
  push();
  let audioBasePath = "http://localhost:8000";
  let paliscriptText = "";
  $$payload.out.push(`<div class="w-full h-full min-h-screen grid grid-cols-2 gap-x-4 p-4">`);
  Chant_text($$payload, { text: paliscriptText });
  $$payload.out.push(`<!----> `);
  Audio_control($$payload, { audioBasePath });
  $$payload.out.push(`<!----></div>`);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BxlZiWad.js.map
