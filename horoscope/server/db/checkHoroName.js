var {connectDb} = require('./connectDb');
var collectionNamesArr = require('./collectionNamesArr')
var db

var checkHoroName = async (horoName) => {
    db = await connectDb();
    var answer = false;
    for (collectionName of collectionNamesArr) {
        if(horoName === collectionName) {
            return answer = true;
        }
    }
    return answer;
};

module.exports = checkHoroName;

