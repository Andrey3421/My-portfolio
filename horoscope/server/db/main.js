const {connectDb, closeDb} = require('./connectDb.js');
const checkHoroName = require('./checkHoroName.js');
const addPastDoc = require('./addPastDoc.js');
const addNewHoroDoc = require('./addNewHoroDoc.js');
const horoArrGenerationForDefiniteTime = require('../GPT/horoArrGenerationForDefiniteTime.js');
const horoscopeProcessing = require('../horoscopeProcessing/horoscopeProcessing.js');
const pageGeneration = require('../pageGeneration/pageGeneration.js');

const everyDay = require('./dataDisplacement/dataDisplacementAtCertainTime/everyDay.js');
const everyWeek = require('./dataDisplacement/dataDisplacementAtCertainTime/everyWeek.js');
const everyMonth = require('./dataDisplacement/dataDisplacementAtCertainTime/everyMonth.js');
const everyYear = require('./dataDisplacement/dataDisplacementAtCertainTime/everyYear.js');

connectDb();

const start = async () => {
  try {
    const dbHoroscopes = await connectDb();
    const collectionsObj = await require('./collections.js');

    //await everyDay();
    // await everyWeek();
    // await everyMonth();
    // await everyYear();
    
    var unprocessedHoroscopes = require('../horoscopeProcessing/horoscopes.js');
    //var unprocessedHoroscopes = await horoArrGenerationForDefiniteTime('today');
    var horoscopes = await horoscopeProcessing(unprocessedHoroscopes);

    for(horoscope of horoscopes) {
      try {
        if(
          await checkHoroName(horoscope.title)
        ) {
          for(var symbol in collectionsObj) {
            await addPastDoc(collectionsObj[symbol]);
            await addNewHoroDoc(horoscope.title, symbol, collectionsObj[symbol]);
          };
        } else {
          throw new Error(`Используется не существующий зодиак ${horoscope.title}`);
        }
      } catch(e) {
        console.log(e);
      }
    };

    await pageGeneration('today');
    await pageGeneration('tomorrow');
    await pageGeneration('week');
    await pageGeneration('month');
    await pageGeneration('year');
  } catch(e) {
    console.log(e);
  } finally {
    await closeDb();
  }
}

start();