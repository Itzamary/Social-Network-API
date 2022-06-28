const currentDate = new Date()
const currentMonth = currentDate.getMonth();
let currentMonthName;
const currentDayOfMonth = currentDate.getDate();
const currentYear = currentDate.getFullYear();
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
let dayPeriod;

function convertToDate(){

    if (currentMonth === 1) {
        return currentMonthName = jan;
    } else if(currentMonth === 2) {
        return currentMonthName = 'feb';
    } else if(currentMonth === 3) {
        return currentMonthName = 'mar';
    } else if (currentMonth === 4) {
        return currentMonthName = 'apr';
    } else if(currentMonth === 5) {
        return currentMonthName = 'may';
    } else if(currentMonth === 6) {
        return currentMonthName = 'jun';
    } else if (currentMonth === 7) {
        return currentMonthName = 'jul';
    } else if (currentMonth === 8) {
        return currentMonthName = 'aug';
    } else if (currentMonth === 9) {
        return currentMonthName = 'sep';
    } else if (currentMonth === 10) {
        return currentMonthName = 'oct';
    } else if (currentMonth === 11) {
        return currentMonthName = 'nov';
    } else {
        return currentMonthName = 'dec';
    };
};

function timeStamp(){

    if (currentHour >= 12) {
        return dayPeriod = 'pm';
    } else {
        return dayPeriod = 'am';
    }
}


convertToDate();
timeStamp();

function newDateFormat() {
    const newDate = (`${currentMonthName} ${currentDayOfMonth}, ${currentYear} at ${currentHour}:${currentMinute} ${dayPeriod}`)
    return newDate
};

newDateFormat();
module.exports = newDateFormat;