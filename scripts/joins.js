db = connect("mongodb://localhost:27017/shelter");

seedDatabase();

// Seed the database with some data
// Best practice is for this to be in a separate file
function seedDatabase() {
    //Check that the list collection is empty before inserting the data
    if (db.owners.find().count() === 0) {
        db.owners.insertMany([
            { name: "Beth" },
            { name: "Naz" },
            { name: "Eric" },
            { name: "Vesna" },
            { name: "Matt" },
        ]);
    }
}

// Return every owner and list the dogs they own as a field called "pets"
function getAllOwnersAndDogs() {
    return db.owners.aggregate([
        {
            $lookup: {
                from: "dogs",
                localField: "name",
                foreignField: "ownerName",
                as: "pets",
            },
        },
    ]);
}

// Return a specific owner and list the dogs they own as a field called "pets"
// Note, the let and pipeline stuff is a fancier way of doing what we did in
// getAllOwnersAndDogs above
function getDogsFor(ownerName) {
    return db.owners.aggregate([
        { "???": { "???": "???" } },
        {
            $lookup: {
                from: "???",
                let: { owner: "$name" },
                pipeline: [
                    {
                        $match: {
                            $expr: { $eq: ["$ownerName", "$$owner"] },
                        },
                    },
                ],
                as: "???",
            },
        },
    ]);
}
