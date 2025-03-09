import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, g as addAttribute, d as renderComponent } from '../chunks/astro/server_Cy8jEVLc.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cmm1-og6.mjs';
import { RefreshCcw, ExternalLink } from 'lucide-preact';
import { signal } from '@preact/signals';
import { jsxs, jsx } from 'preact/jsx-runtime';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_DmAGue3w.mjs';
export { renderers } from '../renderers.mjs';

const quotes = [["Overconfidence is a slow and insidious killer.", "Darkest Dungeon"], ["An idiot admires complexity, a genius admires simplicity. The more complicated something is, the more an idiot will admire it. If you make something so clusterfucked he can’t understand it, he’s gonna think you’re a god.", "Terry Davis"], ["If I must fall, I will rise each time a better man.", "Dalinar Kholin"], ["Abolish the idea of winning by “chance”, and claim victory as a logical consequence.", "Blue Lock"], ["Your real ability only consists of what you can actually do when it counts.", "Blue Lock"], ["When my bird was looking at my computer monitor, I thought, ‘Woah, that bird has no idea what he’s looking at.’ And yet what does the bird do? Does he panic? No, he can’t really panic, he just does the best he can. Is he able to live in a world where he’s so ignorant? Well, he doesn’t really have a choice. The bird is okay even though he doesn’t understand the world. You’re that bird looking at the monitor, and you’re thinking to yourself, I can figure this out. Maybe you have some bird ideas. Maybe that’s the best you can do.", "Terry Davis"], ["The question, is not whether you will love, hurt, dream, and die. It is what you will love, why you will hurt, when you will dream, and how you will die. This is your choice. You cannot pick the destination, only the path.", "Jasnah Kholin"], ["The longer you live, the more you fail. Failure is the mark of a life well lived. In turn, the only way to live without failure is to be of no use to anyone. Trust me, I’ve practiced.", "Wit"], ["The trick to happiness wasn’t in freezing every momentary pleasure and clinging to each one, but in ensuring one’s life would produce many future moments to anticipate.", "Brandon Sanderson"], ["The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step, Dalinar.", "Dalinar Kholin"], ["And so, does the destination matter? Or is it the path we take? I declare that no accomplishment has substance nearly as great as the road used to achieve it. We are not creatures of destinations. It is the journey that shapes us. Our callused feet, our backs strong from carrying the weight of our travels, our eyes open with the fresh delight of experiences lived.", "Brandon Sanderson"], ["It's said that everything you eat, even the air you breath, becomes part of you. The axi that make up the matter you take in come to make up you instead. I, however, find that the moments we take into our souls as memories are far more important than what we eat. We need those moments as surely as the air, and they linger. Potent. Yes, a person is more than their experiences, stacked up like stones. But our best moments are the foundations we use to reach for the sky.", "Wit"], ["I've heard that art is the only truly useless creation - intended for no mechanical purpose. Valued only because of the perception of the people who view it. The thing is, everything is useless, intrinsically. Nothing has value unless we grant it that value. Any object can be worth whatever we decide it to be worth.", "Wit"]];
let randomQuote = signal([""]);
const Quote = () => {
  if (typeof window == "undefined") {
    return jsxs("section", {
      id: "About",
      class: "mb-8 scroll-m-8",
      children: [jsx("div", {
        class: "mb-4 h-8 w-full animate-pulse rounded-md bg-gray-700/30"
      }), jsx("div", {
        class: "mb-4 h-8 w-full animate-pulse rounded-md bg-gray-700/30"
      }), jsx("div", {
        class: "mb-4 h-8 w-full animate-pulse rounded-md bg-gray-700/30"
      }), jsx("div", {
        class: "ml-6 h-6 w-1/2 animate-pulse rounded-md bg-gray-700/30"
      })]
    });
  } else {
    randomQuote.value = quotes[Math.floor(Math.random() * quotes.length)];
    return jsxs("section", {
      id: "About",
      class: "mb-8 scroll-m-8",
      children: [jsxs("h2", {
        class: "indent-6 font-mono text-2xl",
        children: ['"', randomQuote.value[0], '"']
      }), jsxs("h3", {
        class: "flex mt-2 indent-6 text-sm items-center gap-x-2 font-normal",
        children: [jsxs("span", {
          children: ["- ", randomQuote.value[1]]
        }), jsx("button", {
          onClick: () => randomQuote.value = quotes[Math.floor(Math.random() * quotes.length)],
          class: "duration-200 transition-all hover:-rotate-180",
          children: jsx(RefreshCcw, {
            size: 16
          })
        })]
      })]
    });
  }
};

const $$PersonalDescription = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mb-14 scroll-mt-16 lg:scroll-mt-24 scroll-m-8" data-astro-cid-gvchaua4> <p class="indent-2" data-astro-cid-gvchaua4>
Hi, I'm Bence, a first year student in Immersive Software Engineering.
        I've been programming since I was 11, but I only recently seriously
        started getting into web development and design around the summer of
        2023, with my first website <a href="https://betterexams.ie" data-astro-cid-gvchaua4>BetterExams.ie</a>. You can see all of my projects listed below.
</p> <p class="mt-2 indent-2" data-astro-cid-gvchaua4>
Outside of development, I'm a big fan of reading, design, and oxford commas. (If you
        couldn't tell by the quotes, I'm a rather big fan of Brandon Sanderson).
        Here are some of my favourite works, across a variety of mediums:
<a href="https://hardcover.app/books/the-way-of-kings" data-astro-cid-gvchaua4>The Way of Kings</a>, <a href="https://mangadex.org/title/e5357466-c8a2-4259-9b02-2580185bd2bb/billy-bat" data-astro-cid-gvchaua4>Billy Bat</a>, and <a href="https://open.spotify.com/artist/2YZyLoL8N0Wb9xBt1NhZWg" data-astro-cid-gvchaua4>Kendrick Lamar</a>.
</p> </section> `;
}, "/home/bence/projects/portfolio-v2/src/components/content/PersonalDescription.astro", void 0);

const $$Astro$3 = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { name, href, description, tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank"> <div class="group m-2 mb-4 flex flex-col rounded-xl border-2 border-slate-500 p-4 transition-all duration-150 hover:border-transparent hover:bg-slate-400/10 hover:!opacity-100 group-hover/list:opacity-50"> <h2 class="flex gap-x-2 text-lg font-bold text-white transition-all duration-150 group-hover:text-sky-400"> <span>${name}</span> ${renderComponent($$result, "ExternalLink", ExternalLink, { "size": 16, "class": "place-self-center" })} </h2> <p class="indent-4 transition-all duration-150 group-hover:text-white"> ${description} </p> <ul class="mt-2 flex flex-row flex-wrap gap-2"> ${tags.map((tag) => renderTemplate`<li class="rounded-full bg-sky-500/15 px-3 py-1 font-mono text-xs text-sky-400"> ${tag} </li>`)} </ul> </div> </a>`;
}, "/home/bence/projects/portfolio-v2/src/components/content/ProjectCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProjectList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectList;
  return renderTemplate`${maybeRenderHead()}<section id="Projects" class="mb-14 group/list scroll-m-8"> <h2 class="mb-4 text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">
Projects
</h2> ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "name": "BetterExams.ie", "description": "An alternative to the official examinations.ie; A site where students and teachers alike can easily access and share past exam papers alongside resources for each subject, without having to deal with a form system from 2006.", "href": "https://betterexams.ie", "tags": [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Typescript"
  ] })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "name": "BetterExams Points", "description": "A grades tracker built specifically for Leaving Certificate students in Ireland. It automatically calculates total point scores, and tracks past test results, and allows users to compare their current points estimation to what is needed for their course.", "href": "https://points.betterexams.ie", "tags": [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Turso",
    "Prisma",
    "Typescript"
  ] })} ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "name": "My Portfolio", "description": "This site! A simple portfolio site built in an evening using Astro, Tailwind CSS, and Lucide icons. Inspired by Brittany Chiang's v5 portfolio.", "href": "https://www.bence.app", "tags": ["Astro", "Tailwind CSS", "Lucide Icons"] })} </section>`;
}, "/home/bence/projects/portfolio-v2/src/components/content/ProjectList.astro", void 0);

const $$Astro$1 = createAstro();
const $$BlogItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogItem;
  const { post } = Astro2.props;
  const pData = post.data;
  const postLink = "ramblings/" + pData.slug;
  const postDate = new Date(pData.pubDate);
  const postDateStr = postDate.toLocaleDateString();
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(postLink, "href")}> <div class="group m-2 mb-4 flex flex-col rounded-xl border-2 border-slate-500 p-4 transition-all duration-150 hover:border-transparent hover:bg-slate-400/10"> <span class="flex flex-row justify-between"> <h2 class="flex gap-x-2 text-lg font-bold text-slate-200 transition-all duration-150 group-hover:text-sky-400"> <span>${pData.title}</span> ${renderComponent($$result, "ExternalLink", ExternalLink, { "size": 16, "class": "place-self-center" })} </h2> <h3 class="mono text-gray-600"> ${postDateStr} </h3> </span> <p class="indent-4 transition-all duration-150 group-hover:text-slate-200"> ${pData.description} </p> <ul class="mt-2 flex flex-row flex-wrap gap-2"> ${pData.tags.map((tag) => renderTemplate`<li class="rounded-full bg-sky-500/15 px-3 py-1 font-mono text-xs text-sky-400">
#${tag} </li>`)} </ul> </div> </a>`;
}, "/home/bence/projects/portfolio-v2/src/components/blog/BlogItem.astro", void 0);

const $$BlogList = createComponent(async ($$result, $$props, $$slots) => {
  let allPosts = await getCollection("ramblings");
  return renderTemplate`${maybeRenderHead()}<h2 id="Ramblings" class="mb-4 text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl scroll-m-8">
Ramblings (Blog)
</h2> <div class="flex flex-col gap-y-4"> ${allPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogItem", $$BlogItem, { "post": post })}`)} </div>`;
}, "/home/bence/projects/portfolio-v2/src/components/blog/BlogList.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bence R.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Quote", Quote, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/bence/projects/portfolio-v2/src/components/content/quote", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "PersonalDescription", $$PersonalDescription, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ProjectList", $$ProjectList, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "BlogList", $$BlogList, { "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<span class="-mx-8 block w-screen text-center lg:hidden" data-astro-cid-j7pv25f6>
Made with ❤️ using
<a href="https://astro.build" target="_blank" data-astro-cid-j7pv25f6>Astro</a>.
</span> ` })} `;
}, "/home/bence/projects/portfolio-v2/src/pages/index.astro", void 0);

const $$file = "/home/bence/projects/portfolio-v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
