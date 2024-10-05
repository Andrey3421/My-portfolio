var generationReserveTime = (time) => {
    if(time === 'today' || time === 'tomorrow') {
        return 'after tomorrow';
    } else if(time === 'week') {
        return 'next week';
    } else if(time === 'month') {
        return 'next month';
    } else if(time === 'year') {
        return 'next year';
    } else {
        throw new Error('Эта функция не обрабатывает заданый аргумент. Она принимает только значения: today, tomorrow, week, month и year');
    };
};

module.exports = generationReserveTime;