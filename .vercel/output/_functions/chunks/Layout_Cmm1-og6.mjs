import { c as createComponent, m as maybeRenderHead, f as renderScript, r as renderTemplate, d as renderComponent, a as createAstro, g as addAttribute, h as renderHead, b as renderSlot } from './astro/server_Cy8jEVLc.mjs';
/* empty css                         */
import { ChevronUp } from 'lucide-preact';

const $$Age = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span id="asdf" class="font-bold">
18.000000000
${renderScript($$result, "/home/bence/projects/portfolio-v2/src/components/profile/Age.astro?astro&type=script&index=0&lang.ts")} </span>`;
}, "/home/bence/projects/portfolio-v2/src/components/profile/Age.astro", void 0);

const $$Links = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-col gap-1"> <li class="flex w-3/4"> <a class="group flex items-center py-3" href="/#About"> <span class="mr-4 h-px w-16 bg-slate-600 transition-all group-hover:w-24 group-hover:bg-slate-300"></span> <span class="text-md font-mono uppercase tracking-wider text-slate-400 transition-all group-hover:text-slate-200">
About
</span> </a> </li> <li class="flex w-3/4"> <a class="group flex items-center py-3" href="/#Projects"> <span class="mr-4 h-px w-16 bg-slate-600 transition-all group-hover:w-24 group-hover:bg-slate-300"></span> <span class="text-md font-mono uppercase tracking-wider text-slate-400 transition-all group-hover:text-slate-200">
Projects
</span> </a> </li> <li class="flex w-3/4"> <a class="group flex items-center py-3" href="/#Ramblings"> <span class="mr-4 h-px w-16 bg-slate-600 transition-all group-hover:w-24 group-hover:bg-slate-300"></span> <span class="text-md font-mono uppercase tracking-wider text-slate-400 transition-all group-hover:text-slate-200">
Ramblings
</span> </a> </li> <li class="flex w-3/4"> <a class="group flex items-center py-3" href="/reading"> <span class="mr-4 h-px w-16 bg-slate-600 transition-all group-hover:w-24 group-hover:bg-slate-300"></span> <span class="text-md flex items-center gap-x-2 font-mono uppercase tracking-wider text-slate-400 transition-all group-hover:text-slate-200">
Reading
<span class="rounded-full bg-sky-500/15 px-3 py-1 font-mono text-xs text-sky-400">
NEW
</span> </span> </a> </li> <li class="hidden w-3/4 lg:flex"> <span class="group flex items-start py-3"> <span class="mr-4 mt-[0.7rem] h-px w-16 bg-slate-600 transition-all group-hover:w-24 group-hover:bg-slate-300"></span> <ul class="flex flex-col"> <span class="text-md flex items-center gap-x-2 font-mono uppercase tracking-wider text-slate-400 transition-all group-hover:text-slate-200">
Socials ${renderComponent($$result, "ChevronUp", ChevronUp, { "size": 16, "class": "rotate-90 transition-all group-hover:rotate-180" })} </span> <a href="https://www.github.com/General-Mudkip" class="cursor-pointer font-mono opacity-0 transition-all duration-200 hover:text-sky-400 group-hover:opacity-100" target="_blank">
GitHub
</a> <a href="https://www.linkedin.com/in/bence-redmond/" class="cursor-pointer font-mono opacity-0 transition-all duration-200 hover:text-sky-400 group-hover:opacity-100" target="_blank">
LinkedIn
</a> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="cursor-pointer font-mono opacity-0 transition-all duration-200 hover:text-sky-400 group-hover:opacity-100">
Twitter
</a> </ul> </span> </li> </ul>`;
}, "/home/bence/projects/portfolio-v2/src/components/profile/Links.astro", void 0);

const $$Astro$2 = createAstro();
const $$Profile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Profile;
  return renderTemplate`${maybeRenderHead()}<header class="flex flex-col justify-between lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24"> <div> <h1 class="text-5xl font-bold tracking-tight text-slate-200 sm:text-6xl">
Bence R.
</h1> <h2 class="mt-2 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
An ${renderComponent($$result, "Age", $$Age, {})} year-old developer.
</h2> <p class="mt-3 max-w-xs leading-normal">
I try to build open-source sites that are easy to use, accessible,
            and fast.
</p> <hr class="my-6 h-[2px] border-0 bg-slate-700 lg:w-4/5"> ${renderComponent($$result, "Links", $$Links, {})} <hr class="my-6 h-[2px] border-0 bg-slate-700 lg:hidden"> </div> <span class="hidden lg:block">
Made with ❤️ using <a class="cursor-pointer font-mono text-slate-200 transition-colors duration-200 hover:text-sky-400" href="https://astro.build" target="_blank">Astro</a>.</span> </header>`;
}, "/home/bence/projects/portfolio-v2/src/components/profile/Profile.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/bence/projects/portfolio-v2/node_modules/.pnpm/astro@5.4.2_@types+node@22.7.4_jiti@2.4.2_lightningcss@1.29.2_rollup@4.35.0_typescript@5.3.3_yaml@2.5.1/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/bence/projects/portfolio-v2/node_modules/.pnpm/astro@5.4.2_@types+node@22.7.4_jiti@2.4.2_lightningcss@1.29.2_rollup@4.35.0_typescript@5.3.3_yaml@2.5.1/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="bg-slate-900 bg-linear-to-br from-slate-900 to-slate-800 leading-relaxed text-slate-400 "> <div class="mx-auto min-h-screen max-w-(--breakpoint-xl) px-6 py-12 font-sans md:px-12 md:py-20 lg:flex lg:justify-between lg:gap-4 lg:px-24 lg:py-0"> ${renderComponent($$result, "Profile", $$Profile, {})} <main class="pt-8 lg:w-1/2 lg:py-24"> ${renderSlot($$result, $$slots["default"])} </main> </div> </body></html>`;
}, "/home/bence/projects/portfolio-v2/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
