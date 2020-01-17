class DateInterval {

    constructor(startDate, endDate) {
        if(startDate > endDate) {
            throw new Error(DateInterval.errorInvalidInterval());
        }

        this.start = startDate;
        this.end = endDate;
    }

    static errorInvalidInterval() {
        return  "Invalid Interval";
    }

    contains(aDate) {
        return aDate <= this.end
            && aDate >= this.start;
    }
}

module.exports = DateInterval
