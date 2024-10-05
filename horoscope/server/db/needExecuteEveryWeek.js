const {connectDb, closeDb} = require('./connectDb.js');
const checkHoroName = require('./checkHoroName.js');
const addPastDoc = require('./addPastDoc.js');
const addNewHoroDoc = require('./addNewHoroDoc.js');
const horoArrGenerationForDefiniteTime = require('../GPT/horoArrGenerationForDefiniteTime.js');
const horoscopeProcessing = require('../horoscopeProcessing/horoscopeProcessing.js');
const everyWeek = require('./dataDisplacement/dataDisplacementAtCertainTime/everyWeek.js');
const pageGeneration = require('../pageGeneration/pageGeneration.js');

const start = async () => {
  try {
    const dbHoroscopes = await connectDb();
    const collectionsObj = await require('./collections.js');

    await everyWeek();
    
    var unprocessedHoroscopes = await horoArrGenerationForDefiniteTime('week');
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

    await pageGeneration('week');
  } catch(e) {
    console.log(e);
  } finally {
    await closeDb();
  }
}

start();