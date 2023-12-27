const quotes = [
    ["Overconfidence is a slow and insidious killer.", "Darkest Dungeon"],
    [
        "An idiot admires complexity, a genius admires simplicity. The more complicated something is, the more an idiot will admire it. If you make something so clusterfucked he can’t understand it, he’s gonna think you’re a god.",
        "Terry Pratchet",
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
        "Terry Pratchet",
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
];

let randomQuote: string[];

if (typeof window === "undefined") {
    randomQuote = ["", ""];
}

randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const Quote = () => {
    return (
        <section id="quote" class="mb-8">
            <h2 class="text-2xl font-mono indent-6">"{randomQuote[0]}"</h2>
            <h3 class="text-sm font-normal indent-6 mt-2">
                - {randomQuote[1]}
            </h3>
        </section>
    );
};

export default Quote;
