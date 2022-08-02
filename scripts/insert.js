db = connect("mongodb://localhost:27017/shelter");

db.dogs.insertMany([
  { name: "Mochi", breed: "pug", ownerName: "Naz", age: 8 },
  { name: "Masha", breed: "pug", ownerName: "Vesna", age: 12 },
  { name: "Hendon", breed: "poddle", ownerName: "Vesna", age: 7 },
  { name: "Zola", breed: "golden retriever", ownerName: "Beth", age: 15 },
  { name: "Snip", breed: "greyhound", age: 3 },
]);

db.dogs.insertOne({
  name: "cooper",
  breed: "golden retriever",
  ownerName: "Trent",
});
