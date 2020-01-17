const assert = require("assert");
const DateInterval = require("./DateInterval");

assert.isTrue = function (aBoolean) {
    return assert.ok(aBoolean);
};

assert.isFalse = function (aBoolean) {
    return assert.isTrue(!aBoolean);
};

suite("DateIntervalTest", function () {
    test("intervalContainsDate", function () {
        let includedDate = new Date(2019, 11, 23);
        let start = new Date(2019, 0, 1);
        let end = new Date(2019, 11, 31);
        let interval = new DateInterval(start, end);

        assert.isTrue(interval.contains(includedDate));
    })

    test("intervalMayNotContainDate", function () {
        let notIncludedDate = new Date(2020, 11, 23);
        let start = new Date(2019, 0, 1);
        let end = new Date(2019, 11, 31);
        let interval = new DateInterval(start, end);

        assert.isFalse(interval.contains(notIncludedDate));
    })

    test("startDateMustBeBeforeEndDate", function () {
        let start = new Date(2019, 0, 1);
        let end = new Date(2019, 11, 31);

        try {
            new DateInterval(end, start);
        }catch (e) {
            assert.equal(e.message, DateInterval.errorInvalidInterval())
        }
    })
});