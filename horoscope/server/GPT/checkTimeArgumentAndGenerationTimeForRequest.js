var checkTimeArgumentAndGenerationTimeForRequest = async(timeArgument) => {
  var timeForRequest = await timeArgument;

  if(timeArgument === 'today') {
    timeForRequest = 'сегодня';
  } else if(timeArgument === 'week') {
    timeForRequest = 'неделю';
  } else if(timeArgument === 'month') {
    timeForRequest = 'месяц';
  } else if(timeArgument === 'year') {
    timeForRequest = 'год';
  } else {
    throw new Error('Эта функция не обрабатывает заданый аргумент. Она принимает только значения: today, week, month и year')
  }

  return timeForRequest;
}

module.exports = checkTimeArgumentAndGenerationTimeForRequest;