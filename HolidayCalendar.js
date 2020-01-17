class HolidayCalendar{

    constructor() {
        this.holidayRules = []
    }

    isHoliday(aDate){
        return this.holidayRules.some(rule => rule.isHoliday(aDate))
    }

    addHolidayRule(holidayRule){
        this.holidayRules.push(holidayRule)
    }
}

module.exports = HolidayCalendar

/* BORRAR

const MonthDay = require("./MonthDay");


class HolidayCalendar {

    dayOfWeekHoliday = [];
    dayOfMonthHoliday = [];
    holidayRule = [];

    isHoliday(aDate) {
        return this.isDayOfWeekHoliday(aDate)
            || this.isDayOfMonthHoliday(aDate);
    }

    isDayOfWeekHoliday(aDate) {
        return this.dayOfWeekHoliday.includes(aDate.getDay())
    }

    isDayOfMonthHoliday(aDate) {
        return this.dayOfMonthHoliday.some(monthDay => MonthDay.from(aDate).equals(monthDay));
    }


    makeDayOfWeekHoliday (aDayOfWeek){
        this.dayOfWeekHoliday.push(aDayOfWeek);
    }

    makeDayOfMonthHoliday(aMonthDay){
        this.dayOfMonthHoliday.push(aMonthDay);
    }
} */
