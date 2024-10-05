var timeWordHandling = (text) => {
  let leaveLastCharacterUpperCase = (phrase) => {
    try {
      return phrase.split('')[phrase.length - 1].toUpperCase();
    } catch(e) {
      console.log(e);
    }
  }
  let replacePhraseAndLeaveLastAndFirstCharacter = (newPhrase, phrase) => {
    try {
      if(newPhrase.length > 0 && phrase.split('')[0].match(/[^А-я]{1}/)) {
        return phrase.split('')[0] + newPhrase + phrase.split('')[phrase.length - 1];
      }
      return newPhrase + phrase.split('')[phrase.length - 1];
    } catch(e) {
      console.log(e);
    }
  }

  return text
    .replace(/Сегодня\s./g, (phrase) => {return (leaveLastCharacterUpperCase(phrase))})
    .replace(/[^А-я]сегодня[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('', phrase)})
    .replace(/Сегодняшний день[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('Этот день', phrase)})
    .replace(/[^А-я]cегодняшний день[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('этот день', phrase)})

    .replace(/Завтра\s./g, (phrase) => {return (leaveLastCharacterUpperCase(phrase))})
    .replace(/[^А-я]завтра[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('', phrase)})
    .replace(/Завтрашний день[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('Этот день', phrase)})
    .replace(/[^А-я]завтрашний день[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('этот день', phrase)})

    .replace(/Послезавтра\s./g, (phrase) => {return (leaveLastCharacterUpperCase(phrase))})
    .replace(/[^А-я]послезавтра[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('', phrase)})
    .replace(/Послезавтрашний день[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('Этот день', phrase)})
    .replace(/[^А-я]послезавтрашний день[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('этот день', phrase)})

    .replace(/Следующей неделе[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('Этой неделе', phrase)})
    .replace(/[^А-я]следующей неделе[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('этой неделе', phrase)})
    .replace(/Следующая неделя[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('Эта неделя', phrase)})
    .replace(/[^А-я]следующая неделя[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('эта неделя', phrase)})

    .replace(/В следующем месяце[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('В этом месяце', phrase)})
    .replace(/[^А-я]в следующем месяце[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('в этом месяце', phrase)})
    .replace(/Предстоящий месяц[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('Этот месяц', phrase)})
    .replace(/[^А-я]предстоящий месяц[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('этот месяц', phrase)})
    .replace(/Следующий месяц[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('Этот месяц', phrase)})
    .replace(/[^А-я]следующий месяц[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('этот месяц', phrase)})

    .replace(/В следующем году[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('В этом году', phrase)})
    .replace(/[^А-я]в следующем году[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('в этом году', phrase)})
    .replace(/Предстоящий год[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('Этот год', phrase)})
    .replace(/[^А-я]предстоящий год[^А-я]/g, (phrase) => {return replacePhraseAndLeaveLastAndFirstCharacter('этот год', phrase)})
};

module.exports = timeWordHandling;