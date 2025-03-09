import { c as createComponent, a as createAstro, r as renderTemplate } from '../chunks/astro/server_Cy8jEVLc.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate(_a || (_a = __template(['--\nimport Layout from "../layouts/Layout.astro"\n<Layout title="Bence R.">\n    <h1 id="heading" class="text-5xl font-bold text-slate-200"></h1>\n\n    <h2 id="hided" class="hidden pt-8 transition-all duration-700">\n    </h2>\n    <a id="return" class="hidden" href="/">return home.</a>\n\n    <span class="-mx-8 block w-screen text-center lg:hidden">\n        Made with \u2764\uFE0F using\n        <a href="https://astro.build" target="_blank">Astro</a>.\n    </span>\n</Layout>\n\n<style>\n    @reference "tailwindcss";\n    a {\n        @apply cursor-pointer font-mono text-white transition-colors duration-200 hover:text-sky-400;\n    }\n</style>\n\n<script>\nvar i = 0;\nvar j = 0;\nvar txt = "You seem to have lost your way..."\nvar txt2 = "This is a 404 page. Let me know if something is supposed to be here. If not,"\nvar speed = 50; /* The speed/duration of the effect in milliseconds */\n\nfunction typeWriter() {\n    if (i < txt.length) {\n        document.getElementById("heading").innerHTML += txt.charAt(i);\n        i++;\n        setTimeout(typeWriter, speed);\n    }\n\n    if (i >= txt.length) {\n        document.getElementById("hided").style.display = "block"\n        if (j < txt2.length) {\n            document.getElementById("hided").innerHTML += txt2.charAt(j);\n            j++;\n            setTimeout(typeWriter, speed);\n        }\n    }\n\n    if (j >= txt2.length) {\n        document.getElementById("return").style.display = "block"\n    }\n\n}\n\ntypeWriter()\n<\/script>'])));
}, "/home/bence/projects/portfolio-v2/src/pages/404.astro", void 0);

const $$file = "/home/bence/projects/portfolio-v2/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
