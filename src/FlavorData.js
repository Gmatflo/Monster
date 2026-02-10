import originalImg from './assets/monster_black_bg.png';
import whiteImg from './assets/monster_white_clean.png';
import mangoImg from './assets/monster_mango_fiesta.png';
import paradiseImg from './assets/monster_paradise_clean.png';
import rosaImg from './assets/monster_rosa_clean.png';

export const flavors = [
    {
        id: 0,
        name: "Original Monster",
        subtitle: "Energy Drink",
        description: "The classic energy drink that started it all. Smooth, easy to drink, and packs a powerful punch.",
        price: "4.50$",
        img: originalImg,
        bg: "#000000",
        accent: "#66ff00",
        textColor: "#ffffff",
        details: {
            profile: "Smooth & Bold",
            nutrition: { calories: "110", caffeine: "160mg", sugars: "27g" },
            vibe: "Legendary"
        }
    },
    {
        id: 1,
        name: "Monster Ultra White",
        subtitle: "Zero Sugar",
        description: "Zero sugar, zero calories, and all the Monster flavor you love. Crisp and refreshing.",
        price: "4.50$",
        img: whiteImg,
        bg: "#2c3e50",
        accent: "#ffffff",
        textColor: "#ffffff",
        details: {
            profile: "Citrus & Light",
            nutrition: { calories: "0", caffeine: "140mg", sugars: "0g" },
            vibe: "Ethereal"
        }
    },
    {
        id: 2,
        name: "Monster Mango Loco",
        subtitle: "Juice Monster",
        description: "A heavenly blend of exotic juices that's sure to attract even the most stubborn spirit.",
        price: "5.00$",
        img: mangoImg,
        bg: "#ff9d00",
        accent: "#ffcc00",
        textColor: "#ffffff",
        details: {
            profile: "Sweet & Tropical",
            nutrition: { calories: "120", caffeine: "160mg", sugars: "28g" },
            vibe: "Heavenly"
        }
    },
    {
        id: 3,
        name: "Ultra Paradise",
        subtitle: "Pure Refreshment",
        description: "Where is paradise? A chalet on the slopes, a stream-side ranch or a surf shack on the beach.",
        price: "4.50$",
        img: paradiseImg,
        bg: "#b5e48c",
        accent: "#66ff00",
        textColor: "#000000",
        details: {
            profile: "Crisp & Kiwi",
            nutrition: { calories: "0", caffeine: "140mg", sugars: "0g" },
            vibe: "Exotic"
        }
    },
    {
        id: 4,
        name: "Ultra Rosá",
        subtitle: "Bright Refreshment",
        description: "Roses are red, violets are blue, Ultra Rosá is pink and has zero sugar too.",
        price: "4.50$",
        img: rosaImg,
        bg: "#ff4785",
        accent: "#ff80ab",
        textColor: "#ffffff",
        details: {
            profile: "Floral & Grape",
            nutrition: { calories: "0", caffeine: "140mg", sugars: "0g" },
            vibe: "Vibrant"
        }
    }
];
