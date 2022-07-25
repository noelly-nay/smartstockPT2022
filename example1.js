// const _items = {
//   name: "water",
//   quantity: 4,
//   price: 250,
// };

function expandStockInput(items) {
  const jibu = [];
  for (i = 0; i < items.quantity; i++) {
    const j = { name: items.name, id: i + 1, price: items.price };
    jibu.push(j);
  }
  return jibu;
}


// expandStockInput(fiat)

module.exports = {
    expandStockInput
}
