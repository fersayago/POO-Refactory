const HolidayRule = require ("./HolidayRule")

class DayOfWeekHolidayRule extends HolidayRule{
    constructor(aDayOfWeek){
        super()
        this.dayOfWeek = aDayOfWeek
    }

    isHoliday(aDate){
        return aDate.getDay() == this.dayOfWeek
    }
}

module.exports = DayOfWeekHolidayRule