const items = [
  {
    bakery: "bread",
  },
  {
    bakery: "muffin",
  },
  {
    bakery: "cake",
  },
];
items;

const filtered = items.filter((a) => a.bakery.includes("c"));

filtered;
const mapped = filtered.map((a)=> a)
mapped