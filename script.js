const shopName = "Hirono's Corner";
const currentYear = 2026;
let = 0;

//Products
const sips = ["Wandering Soul Latte", "Little Stranger Mocha", "Hirono's Dream"];
const bites = ["Butter Croissant", "Chocolate Chip Cookie", "Chocolate Cake Slice"];
const gallery = ["Hirono: Shelter Series", "Hirono: Reshape Series", "Hirono: The Other One Series"];

//Count
const sipsCount = sips.length;
const bitesCount = bites.length;
const galleryCount = gallery.length;

total = sipsCount + bitesCount + galleryCount;

document.getElementById("shop-name").textContent = shopName;
document.getElementById("copyright").textContent = `© ${currentYear} ${shopName} — A Little Corner for Wandering Souls. All rights reserved.`;

//Display Product Count
document.getElementById("sip").textContent = sipsCount;
document.getElementById("bite").textContent = bitesCount;
document.getElementById("gallery").textContent = galleryCount;
document.getElementById("pCount").textContent = total;

//Console
console.log('Shop Name: ', shopName);
console.log('Current Year: ', currentYear);
console.log('Total Products: ', total);
