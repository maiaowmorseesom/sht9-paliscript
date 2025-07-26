const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BBS3jyEJ.js",app:"_app/immutable/entry/app.FmmuVIw4.js",imports:["_app/immutable/entry/start.BBS3jyEJ.js","_app/immutable/chunks/AcT7AJbH.js","_app/immutable/chunks/xl7Y9oRY.js","_app/immutable/chunks/CHpdwjxu.js","_app/immutable/chunks/CIiAzNWF.js","_app/immutable/chunks/ChHW3xhn.js","_app/immutable/entry/app.FmmuVIw4.js","_app/immutable/chunks/CHpdwjxu.js","_app/immutable/chunks/CIiAzNWF.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/xl7Y9oRY.js","_app/immutable/chunks/ChHW3xhn.js","_app/immutable/chunks/D9n1ONxM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BgFGTRB4.js')),
			__memo(() => import('./chunks/1-HSl4KnKE.js')),
			__memo(() => import('./chunks/2-CLpwU_S9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
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
