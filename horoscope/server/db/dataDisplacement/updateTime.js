const {connectDb} = require('../connectDb');
var db;

var updateTime = async(collection, time) => {
    db = await connectDb();

    if(time == 'tomorrow') {
        await collection.updateOne({time: 'tomorrow'}, {$set: {time: 'today'}})
    } else if(time == 'after tomorrow') {
        await collection.updateOne({time: 'after tomorrow'}, {$set: {time: 'tomorrow'}})
    } else if(time == 'next week') {
        await collection.updateOne({time: 'next week'}, {$set: {time: 'week'}})
    } else if(time == 'next month') {
        await collection.updateOne({time: 'next month'}, {$set: {time: 'month'}})
    } else if(time == 'next year') {
        await collection.updateOne({time: 'next year'}, {$set: {time: 'year'}})
    } else {
        console.error(`Функция updateTime не работает с временем ${time}, а только с временем tomorrow, after tomorrow next week next month и next year.`)
    }
};

module.exports = updateTime;