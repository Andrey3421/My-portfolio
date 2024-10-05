var {connectDb} = require('../connectDb.js');
var db;

var displacementToPast = async (collection, time) => {
    db = await connectDb();

    var displacementPath;
    if(time == 'today' || time == 'tomorrow' || time == 'after tomorrow') {
        displacementPath = 'past.day';
    } else if(time == 'week' || time == 'next week') {
        displacementPath = 'past.week';
    } else if(time == 'month' || time == 'next month') {
        displacementPath = 'past.month';
    } else if(time == 'year' || time == 'next year') {
        displacementPath = 'past.year';
    }

    var doc = await collection.findOne({time: time});
    if(doc === null) {
        return console.error(`Документ не найден.`);
    }

    var pastDoc = await collection.findOne({[displacementPath]: {$exists: true}})
    var getObjectPropertyByPath = (obj, path) => {
        return path.split('.').reduce((o, p) => {return o ? o[p] : undefined}, obj);
    }
    
    var checkUniqId = (doc) => {
        var arr = getObjectPropertyByPath(pastDoc, displacementPath);

        for(obj of arr) {
            if(obj._id === doc._id) {
                console.error(`Документ с id ${doc._id} уже существует.`)
                return false;
            }
        }
        return true;
    }

    var date = new Date();

    if(checkUniqId(doc)) {
        doc.timeLastUse = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
        await collection.updateOne({'past': {$exists: true}}, {$push: {[displacementPath]: doc}});
        await collection.deleteOne({time: time});
    }
};

module.exports = displacementToPast;