var {connectDb} = require('./connectDb.js');
var db;

var addNewHoroDoc = async (collectionName, collectionKeyInObj, collection) => {
    db = connectDb();

    var symbolId = await collection.find({_id: `${horoscope._id}`});
    var symbolIdArr = await symbolId.toArray();

    if(
        collectionName === collectionKeyInObj &&
        symbolIdArr.length == 0
    ) {
        await collection.insertOne(horoscope);
    };
};

module.exports = addNewHoroDoc;