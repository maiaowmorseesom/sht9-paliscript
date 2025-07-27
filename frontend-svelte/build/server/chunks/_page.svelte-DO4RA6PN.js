import { X as fallback, T as escape_html, Y as attr_class, Z as attr_style, _ as bind_props, $ as stringify } from './index-DxRLqcD5.js';

function Audio_control($$payload) {
  $$payload.out.push(`<div class="w-full h-full"><h1>Audio control here!</h1></div>`);
}
const BorderAHorBottom = "/_app/immutable/assets/border-a-hb-h60.C73kcS7p.svg";
const BorderAVertLeft = "/_app/immutable/assets/border-a-vl-h60.DobfYuy1.svg";
const BorderAVertRight = "/_app/immutable/assets/border-a-vr-h60.Cxy_C9AV.svg";
function Chant_text($$payload, $$props) {
  let borderHeight = fallback($$props["borderHeight"], "60px");
  let text = fallback($$props["text"], "Chant here!");
  $$payload.out.push(`<div class="relative w-full"><div class="p-16 flex items-center justify-center"><h1 class="text-center">${escape_html(text)}</h1></div> <div${attr_class(`absolute px-[${stringify(borderHeight)}] top-0 left-0 w-full bg-repeat-x rotate-180`)}${attr_style(`background-image: url(${stringify(BorderAHorBottom)}); height: ${stringify(borderHeight)};`)}></div> <div${attr_class(`absolute px-[${stringify(borderHeight)}] bottom-0 left-0 w-full bg-repeat-x transform `)}${attr_style(`background-image: url(${stringify(BorderAHorBottom)}); height: ${stringify(borderHeight)};`)}></div> <div class="absolute top-0 left-0 h-full"${attr_style(`background-image: url(${stringify(BorderAVertLeft)}); background-repeat: repeat-y; width: ${stringify(borderHeight)}; transform-origin: top left;`)}></div> <div class="absolute top-0 right-0 h-full transform"${attr_style(`background-image: url(${stringify(BorderAVertRight)}); background-repeat: repeat-y; width: ${stringify(borderHeight)}; transform-origin: top right;`)}></div></div>`);
  bind_props($$props, { borderHeight, text });
}
function _page($$payload) {
  $$payload.out.push(`<div class="w-full h-full min-h-screen grid grid-cols-2 gap-x-4">`);
  Chant_text($$payload, {});
  $$payload.out.push(`<!----> `);
  Audio_control($$payload);
  $$payload.out.push(`<!----></div>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DO4RA6PN.js.map
