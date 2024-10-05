const requestToGpt = require('./requestToGpt.js');

var horoGeneration = async (zodiacForRequest, timeForRequest) => {
    var request = `Напиши гороскоп для ${zodiacForRequest} на ${timeForRequest} на русском языке. Нужно написать только гороскоп и больше ничего. Не давай призывов к действию, а просто скажи чего ожидать.`;
  
    var answer = await requestToGpt(request);
    
    return answer;
};

module.exports = horoGeneration;