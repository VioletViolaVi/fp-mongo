db = connect("mongodb://localhost:27017/shelter");

// .sort(), .limit(), .count(), etc are mongoDB NOT Js!


function numberOfDogsByBreed(b) {
  return db.dogs.find({ breed: { $eq: b } }).count();
}
function ageOfDogs(ageParam) {
  return db.dogs.find({ age: { $eq: ageParam } });
}

function findOldestDog() {
  return db.dogs.find().sort({ age: -1 }).limit(1);
}

function findYoungestDog() {
  return db.dogs.find().sort({ age: 1 }).limit(1);
}
