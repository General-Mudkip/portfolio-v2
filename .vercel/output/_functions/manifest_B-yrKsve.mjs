import { e as decodeKey } from './chunks/astro/server_Cy8jEVLc.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bh5ejwht.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/bence/projects/portfolio-v2/","cacheDir":"file:///home/bence/projects/portfolio-v2/node_modules/.astro/","outDir":"file:///home/bence/projects/portfolio-v2/dist/","srcDir":"file:///home/bence/projects/portfolio-v2/src/","publicDir":"file:///home/bence/projects/portfolio-v2/public/","buildClientDir":"file:///home/bence/projects/portfolio-v2/dist/client/","buildServerDir":"file:///home/bence/projects/portfolio-v2/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.4.2_@types+node@22.7.4_jiti@2.4.2_lightningcss@1.29.2_rollup@4.35.0_typescript@5.3.3_yaml@2.5.1/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BuvQ8mVQ.css"}],"routeData":{"route":"/reading","isIndex":true,"type":"page","pattern":"^\\/reading\\/?$","segments":[[{"content":"reading","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/reading/index.astro","pathname":"/reading","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BuvQ8mVQ.css"},{"type":"inline","content":"a[data-astro-cid-gvchaua4]{cursor:pointer;font-family:var(--font-mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);color:var(--color-slate-200,oklch(.929 .013 255.508));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.2s;transition-duration:.2s}@media (hover:hover){a[data-astro-cid-gvchaua4]:hover{color:var(--color-sky-400,oklch(.746 .16 232.661))}}/*! tailwindcss v4.0.12 | MIT License | https://tailwindcss.com */a[data-astro-cid-j7pv25f6]{cursor:pointer;font-family:var(--font-mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);color:var(--color-slate-200,oklch(.929 .013 255.508));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function,cubic-bezier(.4,0,.2,1)));transition-duration:var(--tw-duration,var(--default-transition-duration,.15s));--tw-duration:.2s;transition-duration:.2s}@media (hover:hover){a[data-astro-cid-j7pv25f6]:hover{color:var(--color-sky-400,oklch(.746 .16 232.661))}}@property --tw-duration{syntax:\"*\";inherits:false}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/bence/projects/portfolio-v2/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/bence/projects/portfolio-v2/src/pages/ramblings/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/bence/projects/portfolio-v2/src/pages/reading/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/bence/projects/portfolio-v2/src/components/blog/BlogList.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/ramblings/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.4.2_@types+node@22.7.4_jiti@2.4.2_lightningcss@1.29.2_rollup@4.35.0_typescript@5.3.3_yaml@2.5.1/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/ramblings/[...slug]@_@astro":"pages/ramblings/_---slug_.astro.mjs","\u0000@astro-page:src/pages/reading/index@_@astro":"pages/reading.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","/home/bence/projects/portfolio-v2/node_modules/.pnpm/astro@5.4.2_@types+node@22.7.4_jiti@2.4.2_lightningcss@1.29.2_rollup@4.35.0_typescript@5.3.3_yaml@2.5.1/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DZVvTSvw.mjs","/home/bence/projects/portfolio-v2/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/bence/projects/portfolio-v2/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Dk6sakPl.mjs","\u0000@astrojs-manifest":"manifest_B-yrKsve.mjs","/home/bence/projects/portfolio-v2/src/components/content/quote":"_astro/quote.BVfxQ8J8.js","@astrojs/preact/client.js":"_astro/client.D4LaonVb.js","/home/bence/projects/portfolio-v2/node_modules/.pnpm/astro@5.4.2_@types+node@22.7.4_jiti@2.4.2_lightningcss@1.29.2_rollup@4.35.0_typescript@5.3.3_yaml@2.5.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.DksKCMWR.js","/home/bence/projects/portfolio-v2/src/components/profile/Age.astro?astro&type=script&index=0&lang.ts":"_astro/Age.astro_astro_type_script_index_0_lang.CYSy6oqt.js","/home/bence/projects/portfolio-v2/node_modules/.pnpm/@preact+signals@2.0.1_preact@10.19.3/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.Xw9PcqUa.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/bence/projects/portfolio-v2/src/components/profile/Age.astro?astro&type=script&index=0&lang.ts","function r(){let t=document.querySelector(\"#asdf\");if(!t)return;const n=setInterval(()=>{const a=((Date.now()-11424672e5)/315576e5).toFixed(12).slice(0,12);t.innerText=a},30);return()=>clearInterval(n)}let e=r();document.addEventListener(\"astro:page-load\",()=>{e&&e(),e=r()});"]],"assets":["/_astro/index.BuvQ8mVQ.css","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.DksKCMWR.js","/_astro/client.D4LaonVb.js","/_astro/preact.module.DosACnla.js","/_astro/quote.BVfxQ8J8.js","/_astro/signals-core.module.DM0dM7rX.js","/_astro/signals.module.Xw9PcqUa.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"6mEersbheCNs2HrDzyNhQbG9AUlCBvar4cEAvWdvAQk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
