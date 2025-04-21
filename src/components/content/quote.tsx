import { RefreshCcw } from "lucide-preact";
import { signal, type Signal } from '@preact/signals';

const quotes = [
    ["Overconfidence is a slow and insidious killer.", "Darkest Dungeon"],
    [
        "An idiot admires complexity, a genius admires simplicity. The more complicated something is, the more an idiot will admire it. If you make something so clusterfucked he can’t understand it, he’s gonna think you’re a god.",
        "Terry Davis",
    ],
    ["If I must fall, I will rise each time a better man.", "Dalinar Kholin"],
    [
        "Abolish the idea of winning by “chance”, and claim victory as a logical consequence.",
        "Blue Lock",
    ],
    [
        "Your real ability only consists of what you can actually do when it counts.",
        "Blue Lock",
    ],
    [
        "When my bird was looking at my computer monitor, I thought, ‘Woah, that bird has no idea what he’s looking at.’ And yet what does the bird do? Does he panic? No, he can’t really panic, he just does the best he can. Is he able to live in a world where he’s so ignorant? Well, he doesn’t really have a choice. The bird is okay even though he doesn’t understand the world. You’re that bird looking at the monitor, and you’re thinking to yourself, I can figure this out. Maybe you have some bird ideas. Maybe that’s the best you can do.",
        "Terry Davis",
    ],
    [
        "The question, is not whether you will love, hurt, dream, and die. It is what you will love, why you will hurt, when you will dream, and how you will die. This is your choice. You cannot pick the destination, only the path.",
        "Jasnah Kholin",
    ],
    [
        "The longer you live, the more you fail. Failure is the mark of a life well lived. In turn, the only way to live without failure is to be of no use to anyone. Trust me, I’ve practiced.",
        "Wit",
    ],
    [
        "The trick to happiness wasn’t in freezing every momentary pleasure and clinging to each one, but in ensuring one’s life would produce many future moments to anticipate.",
        "Brandon Sanderson",
    ],
    [
        "The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step, Dalinar.",
        "Dalinar Kholin",
    ],
    [
        "And so, does the destination matter? Or is it the path we take? I declare that no accomplishment has substance nearly as great as the road used to achieve it. We are not creatures of destinations. It is the journey that shapes us. Our callused feet, our backs strong from carrying the weight of our travels, our eyes open with the fresh delight of experiences lived.",
        "Brandon Sanderson",
    ],
    [
        "It's said that everything you eat, even the air you breath, becomes part of you. The axi that make up the matter you take in come to make up you instead. I, however, find that the moments we take into our souls as memories are far more important than what we eat. We need those moments as surely as the air, and they linger. Potent. Yes, a person is more than their experiences, stacked up like stones. But our best moments are the foundations we use to reach for the sky.",
        "Wit"
    ],
    [
        "I've heard that art is the only truly useless creation - intended for no mechanical purpose. Valued only because of the perception of the people who view it. The thing is, everything is useless, intrinsically. Nothing has value unless we grant it that value. Any object can be worth whatever we decide it to be worth.",
        "Wit"
    ],
    [
        "My memory is to the world as a drawing is to the photograph. Imperfect. More perfect. We remember what we must, what we choose to, because it is more beautiful and real than the truth.",
        "Hadrian Marlowe"
    ],
    [
        "The artist sees things not in terms of what is or might be, but in terms of what must be. Of what our world must become. This is why a portrait will—to the human observer—always defeat the photograph",
        "Hadrian Marlowe"
    ],
];


let randomQuote = signal([""])

const Quote = () => {
    if (typeof window == "undefined") {
        return (
            <section id="About" class="mb-8 scroll-m-8">
                <div class="mb-4 h-8 w-full animate-pulse rounded-md bg-gray-700/30"></div>
                <div class="mb-4 h-8 w-full animate-pulse rounded-md bg-gray-700/30"></div>
                <div class="mb-4 h-8 w-full animate-pulse rounded-md bg-gray-700/30"></div>
                <div class="ml-6 h-6 w-1/2 animate-pulse rounded-md bg-gray-700/30"></div>
            </section>
        );
    } else {
        randomQuote.value = quotes[Math.floor(Math.random() * quotes.length)];
        return (
            <section id="About" class="mb-8 scroll-m-8">
                <h2 class="indent-6 font-mono text-2xl">"{randomQuote.value[0]}"</h2>
                <h3 class="flex mt-2 indent-6 text-sm items-center gap-x-2 font-normal">
                    <span>- {randomQuote.value[1]}</span>
                    <button
                        onClick={() => randomQuote.value = quotes[Math.floor(Math.random() * quotes.length)]}
                        class="duration-200 transition-all hover:-rotate-180 hover:cursor-pointer"
                    >
                        <RefreshCcw size={16} />
                    </button>
                </h3>

            </section >
        );
    }
};

export default Quote;
