const HolidayRule = require ("./HolidayRule")
const MonthDay = require ("./MonthDay")


class DayOfMonthHolidayRule extends HolidayRule{
    constructor(aDayOfMonth){
        super()
        this.dayOfMonth = aDayOfMonth
    }

    isHoliday(aDate){
        return MonthDay.from(aDate).equals(this.dayOfMonth)
    }
}

module.exports = DayOfMonthHolidayRule