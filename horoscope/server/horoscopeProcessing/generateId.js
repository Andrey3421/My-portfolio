var horoscopes = require('./horoscopes')

var generateId = (text) => {
    var id = '';
    var textArr = text.split('');
    var textArrLength = text.split('').length;
    for (var i = 0; i < textArrLength; i += (Math.floor(textArrLength / 10))) {
        id = id + textArr[i].codePointAt().toString(16);
    };
    return id;
}

module.exports = generateId;
