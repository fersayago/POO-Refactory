class MonthDay {
    constructor(month, day) {
        this.month = month;
        this.day = day;
    }

    static from(aDate) {
        return new MonthDay(aDate.getMonth(), aDate.getDate());
    }

    equals(aMonthDay) {
        return aMonthDay.day == this.day
            && aMonthDay.month == this.month;
    }
}

module.exports = MonthDay