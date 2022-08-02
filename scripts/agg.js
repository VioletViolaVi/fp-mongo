let db = connect("mongodb://localhost:27017/supermarket");

seedDatabase();

// Seed the database with some data
// Best practice is for this to be in a separate file
function seedDatabase() {
  //Check that the list collection is empty before inserting the data
  if (db.list.find().count() === 0) {
    db.list.insertMany([
      { name: "hummus", price: 1.99, category: "snacks" },
      { name: "poppadoms", price: 1.5, category: "snacks" },
      { name: "coffee", price: 11.49, category: "drinks" },
      { name: "cider", price: 3.5, category: "drinks" },
      { name: "milk", price: 1.99, category: "drinks" },
      { name: "tofu", price: 3.5, category: "fresh" },
    ]);
  }
}

// calculate total price of each category
function categoryTotals() {
  return db.list.aggregate({
    $group: { _id: "$category", total: { $sum: "$price" } },
  });
}

// calculate total price of all items
function totalPrice() {
  return db.list.aggregate({
    $group: { _id: "", return: { $sum: "$price" } },
  });
}

// get only items that cost more than x then calculate the price of each matching category
function categoryTotalsForItemsOver(x) {
  return db.list.aggregate([
    { $match: { price: { $gt: x } } },
    { $group: { _id: "$category", total: { $sum: "$price" } } },
  ]);
}
