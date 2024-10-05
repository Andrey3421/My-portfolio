const zodiacObjForRequests = require('./zodiacObjForRequests.js');
const checkTimeArgumentAndGenerationTimeForRequest = require('./checkTimeArgumentAndGenerationTimeForRequest.js');
const horoGeneration = require('./horoGeneration.js');
const generationReserveTime = require('./generationReserveTime.js');


var horoArrGenerationForDefiniteTime = async (time) => {
  var horoArr = [];
  var timeForRequest = await checkTimeArgumentAndGenerationTimeForRequest(time);

  for(zodiac in zodiacObjForRequests) {
    horoArr.push({
      title: zodiac,
      time: generationReserveTime(time),
      text: await horoGeneration(zodiacObjForRequests[zodiac], timeForRequest),
    });
  };
  
  return horoArr;
};

module.exports = horoArrGenerationForDefiniteTime;
