var timeWordHandling = require('./timeWordHandling.js');
var generateId = require('./generateId.js');

var horoscopeProcessing = async (horoscopes) => {

    var processedHoroscopes = horoscopes.map((horoscope) => {
        var timeWordHandlingText = timeWordHandling(horoscope.text);
        return {
            _id: generateId(timeWordHandlingText),
            title: horoscope.title,
            time: horoscope.time,
            text: timeWordHandlingText,
        }
    });
    
    return processedHoroscopes;
};



module.exports = horoscopeProcessing