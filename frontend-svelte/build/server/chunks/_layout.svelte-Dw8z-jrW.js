function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out.push(`<div class="font-serif">`);
  children($$payload);
  $$payload.out.push(`<!----></div>`);
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-Dw8z-jrW.js.map
