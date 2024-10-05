const {connectDb} = require('../../connectDb.js');
const updateTime = require('../updateTime.js');
const displacementToPast = require('../displacementToPast.js');
const pageGeneration = require('../../../pageGeneration/pageGeneration.js');
var db;

var everyDay = async () => {
    db = await connectDb();
    const collectionsObj = await require('../../collections.js');
    for(collection in collectionsObj) {
        await displacementToPast(collectionsObj[collection], 'today');
        await updateTime(collectionsObj[collection], 'tomorrow');
        await updateTime(collectionsObj[collection], 'after tomorrow');
    }
    
    await pageGeneration('today');
    await pageGeneration('tomorrow');
}

module.exports = everyDay;