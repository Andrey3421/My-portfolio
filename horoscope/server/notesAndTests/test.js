const horoscopes = require('../horoscopes');

const text1 = horoscopes[62].text;
const text2 = 'Раскройте свой потенциал, Девы. Следующая неделя будет благоприятным временем для роста и самоосознания.Следующая неделяСледующая неделяСледующая неделя Используйте свои навыки и таланты на полную мощность. Будьте открыты к новым возможностям и стремитесь к самосовершенствованию. Ваши усилия принесут вам заслуженное вознаграждение.'
const text3 = 'Сегодняшний день будет благоприятен для общения и обмена идеями. Будьте открыты новым возможностям и не бойтесь высказывать свои мысли. Важно сохранять ясность в мыслях и избегать спешки при принятии решений. Помните о важности коммуникации и уважительного cотношения к окружающим.'


// console.log(text1);
// console.log(text1.match(/.{3}/));
//console.log(text3.match(/[С с]{1}[е]{1}[г]{1}[о]{1}[д]{1}[н]{1}[я]{1}[ш]{1}[н]{1}[и]{1}[й]{1}[ ]{1}[д]{1}[е]{1}[н]{1}[ь]{1}/))

const crRegExForPhrase = (phrase) => {
    let regEx = '';

    phrase.split('').map((symbol) => {
        regEx += `[${symbol}]{1}`;
    })
    
    return regEx;
}

// const regEx = {
//   findForDeleteNextCaps: /(^|\s|[.,:;'"!?])(Сегодня|Завтра|Послезавтра)(\s|[.,:;'"!?])/g,
//   findForDeleteWithSpace: {
//     spaseLeft: /\s(сегодня|завтра|послезавтра)(\s|[.,:;'"!?])/g,
//     spaseRight: /(\s|[.,:;'"!?])(сегодня|завтра|послезавтра)\s/g,
//   }
// }

// const textTest = () => {
//   for(const horoscope of horoscopes) {
//     if(horoscope.text.match(regEx.findForDeleteNextCaps)) {
//       console.log(horoscope.text.match(regEx.findForDeleteNextCaps))
//     }
//     if(horoscope.text.match(regEx.findForDeleteWithSpace)) {
//       console.log(horoscope.text.match(regEx.findForDeleteWithSpace))
//     }
//   }
// }

// textTest();