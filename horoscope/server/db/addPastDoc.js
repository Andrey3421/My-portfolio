var {connectDb} = require('./connectDb.js');
var db;


var addPastDoc = async (collection) => {
    db = await connectDb();
    var horoPast = await collection.find({'past': {$exists: true}});
    var horoPastArr = await horoPast.toArray();

    if(!horoPastArr.length) {
        await collection.insertOne({
          past: {
              day: [],
              week: [],
              month: [],
              year: [],
          }
        });
    }
}

module.exports = addPastDoc;