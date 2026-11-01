// URV Cafe menu — prices in Indian Rupees (₹), taken from the official menu card.
// To change a price or add an item, edit this file only.

export type MenuItem = {
  name: string;
  price: number;
  group?: string; // optional sub-heading inside a category (e.g. "Heart Waffles")
  popular?: boolean; // set true to show a "Must try" tag
};

export type MenuCategory = {
  id: string;
  title: string;
  icon: string;
  image: string;
  imageAlt: string;
  note?: string;
  kind: "drinks" | "food" | "sweets";
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "iced-coffee-shakes",
    title: "Iced Coffee & Shakes",
    icon: "🥤",
    image: "/images/cold-coffee.webp",
    imageAlt: "Oreo cold coffee shake topped with whipped cream and chocolate",
    kind: "drinks",
    items: [
      { name: "Classic Cold Coffee", price: 99 },
      { name: "Strawberry Shake", price: 129 },
      { name: "Butterscotch Shake", price: 129 },
      { name: "Hazelnut Cold Coffee", price: 129 },
      { name: "Caramel Latte", price: 129 },
      { name: "Vanilla Frost Latte", price: 129 },
      { name: "Boozy Tiramisu Frappe", price: 139 },
    ],
  },
  {
    id: "mojitos-refreshers",
    title: "Mojitos & Iced Refreshers",
    icon: "🍹",
    image: "/images/mojitos.webp",
    imageAlt: "Green apple and watermelon mojitos with mint and lime",
    kind: "drinks",
    items: [
      { name: "Fresh Lime Soda", price: 79 },
      { name: "Peach Iced Tea", price: 99 },
      { name: "Virgin Mojito", price: 109 },
      { name: "Watermelon Mojito", price: 119 },
      { name: "Green Apple Mojito", price: 119 },
      { name: "Jamun Mojito", price: 119 },
      { name: "Blue Lagoon Mojito", price: 119 },
    ],
  },
  {
    id: "hot-tea",
    title: "Hot Tea",
    icon: "☕",
    image: "/images/chai.webp",
    imageAlt: "Cup of hot masala chai garnished with mint",
    kind: "drinks",
    items: [
      { name: "Basic Chai", price: 29 },
      { name: "Masala Chai", price: 39 },
      { name: "Kulhad Chai", price: 39 },
    ],
  },
  {
    id: "starters",
    title: "Starters & Quick Bites",
    icon: "🍿",
    image: "/images/starters.webp",
    imageAlt: "Popcorn buckets and steamed veg momos",
    kind: "food",
    items: [
      { name: "Popcorn – Salted (Bucket)", price: 79 },
      { name: "Veg Momos – Steamed", price: 99 },
      { name: "Kurkure Momos", price: 129 },
    ],
  },
  {
    id: "maggi-fries",
    title: "Maggi & Fries",
    icon: "🍟",
    image: "/images/maggi-fries.webp",
    imageAlt: "Bowl of veg masala Maggi with a cup of french fries",
    kind: "food",
    items: [
      { name: "Plain Maggi", price: 59 },
      { name: "Double Masala Maggi", price: 69 },
      { name: "Veg Delight Maggi", price: 79 },
      { name: "Cheese Maggi", price: 79 },
      { name: "Classic Fries", price: 79 },
      { name: "Peri Peri Fries", price: 99 },
      { name: "Cheese Loaded Fries", price: 119 },
    ],
  },
  {
    id: "burgers-sandwiches",
    title: "Burgers & Sandwiches",
    icon: "🍔",
    image: "/images/burger-sandwich.webp",
    imageAlt: "Crispy veg burger and grilled cheese corn sandwich",
    kind: "food",
    items: [
      { name: "Crispy Veg Burger", price: 69 },
      { name: "Paneer Tikka Burger", price: 79 },
      { name: "Cheese Burst Burger", price: 89 },
      { name: "Veg Loaded Sandwich", price: 129 },
      { name: "Cheese Corn Sandwich", price: 129 },
      { name: "Paneer Sandwich", price: 139 },
    ],
  },
  {
    id: "pasta-pizza",
    title: "Pasta & Pizza",
    icon: "🍕",
    image: "/images/pizza.webp",
    imageAlt: "7-inch farmhouse pizza with olives, tomatoes and basil",
    note: "All pizzas are 7-inch",
    kind: "food",
    items: [
      { name: "Arrabiata (Red Sauce)", price: 159, group: "Pasta" },
      { name: "Alfredo (Creamy White Sauce)", price: 159, group: "Pasta" },
      { name: "Pink Sauce (Mixed)", price: 159, group: "Pasta" },
      { name: "Corn & Capsicum Pizza", price: 149, group: "Pizza" },
      { name: "Paneer & Onion Pizza", price: 159, group: "Pizza" },
      { name: "Paneer Lover Pizza", price: 169, group: "Pizza" },
      { name: "Farmhouse Pizza", price: 189, group: "Pizza" },
    ],
  },
  {
    id: "waffles",
    title: "Waffles",
    icon: "🧇",
    image: "/images/waffles.webp",
    imageAlt: "Heart waffle with raspberry and chocolate stick waffle",
    kind: "sweets",
    items: [
      { name: "Vanilla Sweetheart", price: 159, group: "Heart Waffles" },
      { name: "Choco Lover Heart", price: 159, group: "Heart Waffles" },
      { name: "Vanilla Cloud Stick", price: 159, group: "Stick Waffles" },
      { name: "Choco Blast Stick", price: 159, group: "Stick Waffles" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    icon: "🍫",
    image: "/images/desserts.webp",
    imageAlt: "Chocolate brownie with vanilla ice cream and chocolate drizzle",
    kind: "sweets",
    items: [
      { name: "Chocolava Cup", price: 99 },
      { name: "Chocolate Brownie", price: 109 },
      { name: "Brownie with Ice Cream", price: 129 },
      { name: "Ice Cream (Single Scoop)", price: 49 },
      { name: "Ice Cream (Double Scoop)", price: 89 },
    ],
  },
];

export type Offer = { badge: string; badgeSub: string; title: string; text: string };

export const offers: Offer[] = [
  {
    badge: "5%",
    badgeSub: "OFF",
    title: "Duo Deal",
    text: "Buy any food item with any drink, shake or mojito and get 5% off the bill. Example: a burger with a mojito.",
  },
  {
    badge: "10%",
    badgeSub: "OFF",
    title: "Trio Treat",
    text: "Order any 3 items, such as a burger, a sandwich and a cold coffee, and get 10% off.",
  },
  {
    badge: "FREE",
    badgeSub: "₹500+",
    title: "Squad Bonus",
    text: "Spend ₹500 or more and get a free ice cream.",
  },
  {
    badge: "10%",
    badgeSub: "OFF",
    title: "Student Card",
    text: "10% off with a college or student ID.",
  },
];

export const formatPrice = (n: number) => `₹${n}`;
export const allItems = menu.flatMap((c) => c.items.map((i) => ({ ...i, category: c })));
