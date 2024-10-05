var {connectDb} = require('./connectDb.js');
var collectionNamesArr = require('./collectionNamesArr.js')
var db;

var addCollections = async (collectionNamesArr) => {
    db = await connectDb();
    var symbolsObj = {};
    for (collectionName of collectionNamesArr) {
        symbolsObj[collectionName] = await db.createCollection(`${collectionName}`);
    }
    return symbolsObj;
};

module.exports = addCollections(collectionNamesArr);