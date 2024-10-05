const {connectDb, closeDb} = require('./connectDb.js');
var db;

var getHoroscopesByTime = async (time) => {
    db = connectDb();
    const collectionsObj = await require('./collections.js');
    var horoObj = {};
    for(collection in collectionsObj) {
        var horo = await collectionsObj[collection].findOne({time: time});
        horoObj[horo.title] = horo;
    }
    return horoObj;
}

module.exports = getHoroscopesByTime;