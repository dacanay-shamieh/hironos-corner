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

function displayText(id, text) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = text;
    }
}

document.getElementById("shop-name").textContent = shopName;
document.getElementById("copyright").textContent = `© ${currentYear} ${shopName} — A Little Corner for Wandering Souls. All rights reserved.`;

//Display Product Count
document.getElementById("sip").textContent = sipsCount;
document.getElementById("bite").textContent = bitesCount;
document.getElementById("gallery").textContent = galleryCount;
document.getElementById("pCount").textContent = total;

//stock
const stockStatusElement = document.getElementById("stockStatus");

if (stockStatusElement) {
    const stock = Number(stockStatusElement.dataset.stock);

    if (
        stockStatusElement.dataset.stock !== undefined &&
        stockStatusElement.dataset.stock.trim() !== "" &&
        Number.isFinite(stock) &&
        stock > 10
    ) {
        stockStatusElement.textContent = "In stock";
    } else if (
        stockStatusElement.dataset.stock !== undefined &&
        stockStatusElement.dataset.stock.trim() !== "" &&
        Number.isFinite(stock) &&
        stock >= 1 &&
        stock <= 10
    ) {
        stockStatusElement.textContent = "Only a few left";
    } else if (stockStatusElement.dataset.stock !== undefined && stock === 0) {
        stockStatusElement.textContent = "Sold out";
    } else {
        stockStatusElement.textContent = "Stock unavailable";
    }
}


//delivery fee and total
const quantityInput = document.getElementById("quantity");
const finalTotalElement = document.getElementById("finalTotal");

const deliveryOptions = document.querySelectorAll(
    'input[name="delivery"]'
);

function calculateDelivery() {
    if (!quantityInput || !finalTotalElement) {
        return;
    }

    const selectedDelivery = document.querySelector(
        'input[name="delivery"]:checked'
    );

    if (!selectedDelivery) {
        finalTotalElement.textContent =
            "Please select a delivery option.";

    } else if (selectedDelivery.value === "pickup") {
        finalTotalElement.textContent =
            "You selected Store Pickup. No delivery fee.";

    } else if (selectedDelivery.value === "deliver") {
        const productPrice = Number(quantityInput.dataset.price);
        const quantity = Number(quantityInput.value);

        if (
            quantityInput.dataset.price === undefined ||
            quantityInput.dataset.price.trim() === "" ||
            !Number.isFinite(productPrice) ||
            productPrice < 0 ||
            !Number.isInteger(quantity) ||
            quantity < 1 ||
            quantity > 20
        ) {
            finalTotalElement.textContent =
                "Please enter a valid quantity and product price.";
            return;
        }

        const orderTotal = productPrice * quantity;

        // Example membership status
        const isMember = true;

        // Free delivery requires BOTH conditions
        const qualifiesForFreeDelivery =
            orderTotal >= 200 && isMember;

        // Ternary operator determines the delivery fee
        const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;

        const finalTotal = orderTotal + deliveryFee;

        finalTotalElement.textContent =
            `Order Total: ₱${orderTotal.toFixed(2)} | ` +
            `Delivery Fee: ${
                deliveryFee === 0
                    ? "FREE"
                    : "₱" + deliveryFee.toFixed(2)
            } | ` +
            `Final Total: ₱${finalTotal.toFixed(2)}`;

    } else {
        finalTotalElement.textContent =
            "Invalid delivery option.";
    }
}

// Update when quantity changes
if (quantityInput) {
    quantityInput.addEventListener("input", calculateDelivery);
}

// Update when delivery option changes
deliveryOptions.forEach(function (option) {
    option.addEventListener("change", calculateDelivery);
});

// Final calculation
calculateDelivery();

//shop status
const shopStatusElement = document.getElementById("shopStatus");

if (shopStatusElement) {
    const now = new Date();

    // Sunday = 0, Monday = 1, Saturday = 6
    const day = now.getDay();
    const hour = now.getHours();

    let isShopOpen;

    if (day === 0) {
        isShopOpen = false;
    } else if (
        day >= 1 &&
        day <= 6 &&
        hour >= 8 &&
        hour < 22
    ) {
        isShopOpen = true;
    } else {
        isShopOpen = false;
    }

    if (isShopOpen) {
        shopStatusElement.textContent =
            "The Little World Is Awake";
    } else {
        shopStatusElement.textContent =
            "The Little World Is Asleep";
    }
}

//Console
console.log("Shop Name: ", shopName);
console.log("Current Year: ", currentYear);
console.log("Total Products: ", total);
