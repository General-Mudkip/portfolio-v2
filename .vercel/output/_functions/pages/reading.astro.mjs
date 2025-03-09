import { c as createComponent, a as createAstro, m as maybeRenderHead, g as addAttribute, r as renderTemplate, d as renderComponent, F as Fragment } from '../chunks/astro/server_Cy8jEVLc.mjs';
import { Star, ExternalLink } from 'lucide-preact';
import { $ as $$Image } from '../chunks/_astro_assets_CkvgA7ej.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cmm1-og6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$PositionDiv = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PositionDiv;
  let props = Astro2.props;
  let position = props.props.position;
  let textColour = "text-sky-300";
  if (position == 0) {
    textColour = "text-amber-400 border border-[0.3rem] border-amber-400 transition-all duration-200 group-hover:bg-amber-400 drop-shadow-md group-hover:text-slate-200";
  } else if (position == 1) {
    textColour = "text-slate-300 border border-[0.2rem] border-slate-300";
  } else if (position == 2) {
    textColour = "text-amber-600 border border-[0.1rem] border-amber-600";
  }
  return renderTemplate`${position != void 0 ? renderTemplate`${maybeRenderHead()}<div${addAttribute(`absolute -rotate-3 rounded-lg bg-slate-800 w-fit h-fit p-4 text-4xl ${textColour} shadow-lg font-bold inset-y-16 -inset-x-[3.7rem]`, "class")}><span class="transition-all duration-200 group-hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
#${position + 1}</span></div>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {})}`}`;
}, "/home/bence/projects/portfolio-v2/src/components/books/PositionDiv.astro", void 0);

const $$Astro$1 = createAstro();
const $$BookCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BookCard;
  const { props } = Astro2.props;
  const hardcoverUrl = "https://hardcover.app/books/" + props.book.slug;
  const formattedDate = props.book.release_date.slice(0, 4);
  console.log(props);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(hardcoverUrl, "href")} target="_blank"> <div class="group relative mb-4 flex max-h-56 flex-row gap-4 rounded-xl border-2 border-slate-500 p-4 transition-all duration-150 hover:border-transparent hover:bg-slate-400/10"> ${renderComponent($$result, "Image", $$Image, { "src": props.book.image.url, "class": "max-h-full max-w-32 basis-1/6 rounded-lg", "alt": `Cover of ${props.book.title}`, "width": "8000", "height": "8000" })} <div class="flex basis-5/6 flex-col"> <h3 class="mb-1 flex flex-row gap-x-1 text-sm text-slate-200 transition-all duration-150 group-hover:text-sky-400"> ${formattedDate} · ${props.book.pages} pages · ${props.book.rating.toString().slice(0, 4)} ${renderComponent($$result, "Star", Star, { "size": "18", "class": "place-self-center" })} </h3> <h2 class="flex gap-x-2 text-xl font-bold text-slate-200 transition-all duration-150 group-hover:text-sky-400"> <span>${props.book.title}</span> ${renderComponent($$result, "ExternalLink", ExternalLink, { "size": 16, "class": "place-self-center" })} </h2> <h3 class="text-md font-mono text-slate-200 transition-all duration-150 group-hover:text-sky-400">
By ${props.book.contributions[0].author.name} </h3> <p class="text-truncate overflow-y-scroll indent-4 transition-all duration-150 group-hover:text-white"> ${props.book.description} </p> ${renderComponent($$result, "PositionDiv", $$PositionDiv, { "props": props })} </div> </div> </a>`;
}, "/home/bence/projects/portfolio-v2/src/components/books/BookCard.astro", void 0);

const $$CurrentlyReading = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://api.hardcover.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoiNyIsImlkIjo4NDQ1LCJhcHBsaWNhdGlvbklkIjoyLCJsb2dnZWRJbiI6dHJ1ZSwic3ViIjoiODQ0NSIsImlhdCI6MTc0MTUzNzczNSwiZXhwIjoxNzQzOTU3MjM1LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtcm9sZSI6InVzZXIiLCJYLWhhc3VyYS11c2VyLWlkIjoiODQ0NSJ9fQ.OJeJDf1jHgFzriurAjMFk27cG_JauyrPXNJRVglaa3A"
    },
    body: JSON.stringify({
      query: `
        query CurrentlyReading {
          me {
            user_books(where: {status_id: {_eq: 2}}) {
              id
              book {
                title
                pages
                book_series {
                  series {
                    name
                  }
                }
                description
                image {
                  url
                }
                release_date
                rating
                slug

                contributions {
                   author {
                     name
                   }
                }

              }
            }
          }
        }      
`
    })
  });
  const json = await response.json();
  const currentlyReading = json["data"]["me"][0]["user_books"];
  return renderTemplate`${maybeRenderHead()}<h2 class="mb-1 mt-8 text-2xl tracking-tight text-slate-200">
Currently Reading
</h2> <h3 class="mb-2 text-lg">The books that I am reading at the moment.</h3> ${currentlyReading.map((book) => renderTemplate`${renderComponent($$result, "BookCard", $$BookCard, { "props": book })}`)}`;
}, "/home/bence/projects/portfolio-v2/src/components/books/CurrentlyReading.astro", void 0);

const $$TopFive = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://api.hardcover.app/v1/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoiNyIsImlkIjo4NDQ1LCJhcHBsaWNhdGlvbklkIjoyLCJsb2dnZWRJbiI6dHJ1ZSwic3ViIjoiODQ0NSIsImlhdCI6MTc0MTUzNzczNSwiZXhwIjoxNzQzOTU3MjM1LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciJdLCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGUiOiJ1c2VyIiwieC1oYXN1cmEtcm9sZSI6InVzZXIiLCJYLWhhc3VyYS11c2VyLWlkIjoiODQ0NSJ9fQ.OJeJDf1jHgFzriurAjMFk27cG_JauyrPXNJRVglaa3A"
    },
    body: JSON.stringify({
      query: `
        query TopFive {
          me {
            lists(where: {id: {_eq: 45547}}) {
              list_books(order_by: {position: asc}) { 
                date_added
                  position
                    book {
                      title
                      pages
                      book_series {
                        series {
                          name
                        }
                      }
                      description
                      image {
                        url
                      }
                      release_date
                      rating
                      slug
                        
                      contributions {
                        author {
                          name
                        }
                      }

                    }
              }
            }
          }
        }
`
    })
  });
  const json = await response.json();
  const topFive = json["data"]["me"][0]["lists"][0]["list_books"];
  return renderTemplate`${maybeRenderHead()}<h2 class="mb-1 mt-12 text-2xl tracking-tight text-slate-200">Top Five</h2> <h3 class="mb-2 text-lg">
My five favourite books that I've read, since I've starting tracking them in
    mid-2023.
</h3> ${topFive.map((book) => renderTemplate`${renderComponent($$result, "BookCard", $$BookCard, { "props": book })}`)}`;
}, "/home/bence/projects/portfolio-v2/src/components/books/TopFive.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Bence R." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 id="Title" class="mb-2 text-2xl font-bold tracking-tight text-slate-200 sm:text-5xl">
Reading
</h1> <h3 class="text-lg">
Here's a small window into what I like to read! I use the amazing
        service
<a class="cursor-pointer font-mono text-slate-200 transition-colors duration-200 hover:text-sky-400" href="https://hardcover.app" target="_blank">Hardcover</a> to track everything, and their API is what's used to fetch the data for
        this page.
</h3> ${renderComponent($$result2, "CurrentlyReading", $$CurrentlyReading, {})} ${renderComponent($$result2, "TopFive", $$TopFive, {})} <span class="-mx-8 block w-screen text-center lg:hidden">
Made with ❤️ using
<a class="cursor-pointer font-mono text-slate-200 transition-colors duration-200 hover:text-sky-400" href="https://astro.build" target="_blank">Astro</a>.
</span> ` })}`;
}, "/home/bence/projects/portfolio-v2/src/pages/reading/index.astro", void 0);

const $$file = "/home/bence/projects/portfolio-v2/src/pages/reading/index.astro";
const $$url = "/reading";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
