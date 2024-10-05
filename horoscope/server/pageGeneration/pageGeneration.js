const {connectDb} = require('../db/connectDb.js')
const fs = require('fs');
const path = require('path');
const getHoroscopesByTime = require('../db/getHoroscopesByTime');

var pageGeneration = async (time) => {
    await connectDb()
    var horoObjTimeToday = await getHoroscopesByTime(time);
    var pageCarcass = require('./pageCarcasses/' + time + '.js');
    var generatedText = pageCarcass;
    var timeToUpperCaseFirstSymbol = time.split('', 1).join().toUpperCase() + time.slice(1);

    for(horoTimeToday in horoObjTimeToday ) {
        var searchPhrase = 'id="' + horoTimeToday + 'HoroTextFor' + timeToUpperCaseFirstSymbol + '">';

        generatedText = generatedText.replace(searchPhrase, () => {
            return searchPhrase + horoObjTimeToday[horoTimeToday].text;
        });
        await fs.writeFileSync(path.resolve(__dirname, '../../pages/min' + timeToUpperCaseFirstSymbol + '.html'), generatedText)
    };
    return generatedText;
};
module.exports = pageGeneration;