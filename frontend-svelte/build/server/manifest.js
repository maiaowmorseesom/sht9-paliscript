const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["AngsanaNew.woff","AngsanaNew.woff2","favicon.svg"]),
	mimeTypes: {".woff":"font/woff",".woff2":"font/woff2",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DqTbBvwg.js",app:"_app/immutable/entry/app.CCG-CVBW.js",imports:["_app/immutable/entry/start.DqTbBvwg.js","_app/immutable/chunks/CUGRssJY.js","_app/immutable/chunks/BUVVZkht.js","_app/immutable/chunks/DLl5_3dh.js","_app/immutable/entry/app.CCG-CVBW.js","_app/immutable/chunks/DLl5_3dh.js","_app/immutable/chunks/BUVVZkht.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dj0ihnNm.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-CWoBGo2O.js')),
			__memo(() => import('./chunks/1-D8q1kmlS.js')),
			__memo(() => import('./chunks/2-Bltsobah.js'))
		],
		routes: [
			{
				id: "/[[audioMix]]",
				pattern: /^(?:\/([^/]+))?\/?$/,
				params: [{"name":"audioMix","optional":true,"rest":false,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
