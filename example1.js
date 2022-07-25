// const _items = {
//   name: "water",
//   quantity: 4,
//   price: 250,
// };

function expandStockInput(item) {
  const jibu = [];
  for (i = 0; i < item.quantity; i++) {
    const j = { name: item.name, id: `${item.id}-${i + 1}` /*literal string*/, price: item.price, quantity: 1 };
    jibu.push(j);
  }
  return jibu;
}


// expandStockInput(fiat)

module.exports = {
    expandStockInput
}
