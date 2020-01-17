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