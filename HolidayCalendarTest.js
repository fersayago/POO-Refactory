const assert = require("assert")
const HolidayCalendar = require("./HolidayCalendar")
const DayOfWeekHolidayRule = require("./DayOfWeekHolidayRule")
const DayOfMonthHolidayRule = require("./DayOfMonthHolidayRule")
const DateInterval = require("./DateInterval")
const MonthDay = require ("./MonthDay")

assert.isTrue = function (aBoolean) {
    return assert.ok(aBoolean);
};

assert.isFalse = function (aBoolean) {
    return assert.isTrue(!aBoolean);
};

suite("HolidayCalendarTest", function() {
    test("oneDayWeekCanBeHoliday", function () {
        let aHolidayCalendar = new HolidayCalendar();
        let aSunday = new Date(2020, 0, 19);
        //Para marcar dias de la semana como feriado:
        aHolidayCalendar.addHolidayRule(new DayOfWeekHolidayRule(aSunday.getDay()))

        assert.isTrue(aHolidayCalendar.isHoliday(aSunday));
    })

    test("oneDayOfWeekMayNotBeHoliday", function(){
        let aHolidayCalendar = new HolidayCalendar();
        let aMonday = new Date(2020, 0, 20);
        //aHolidayCalendar.addHolidayRule(new DayOfWeekHolidayRule(aMonday.getDay()))

        assert.isFalse(aHolidayCalendar.isHoliday(aMonday));
    }) 

    //No es necesario ya que testea lo mismo que oneDayWeekCanBeHoliday pero para el domingo
    test("oneDayWeekCanBeHolidaySaturday", function () {
        let aHolidayCalendar = new HolidayCalendar();
        let aSaturday = new Date(2020, 0, 18);
        aHolidayCalendar.addHolidayRule(new DayOfWeekHolidayRule(aSaturday.getDay()))

        assert.isTrue(aHolidayCalendar.isHoliday(aSaturday));
    })

    //para hacer que tanto sabado como domingo saen feriado:
    test("moreThanOneDayOfWeekCanBeHoliday", function () {
        let aHolidayCalendar = new HolidayCalendar();
        let aSaturday = new Date(2020, 0, 18);
        let aSunday = new Date(2020, 0, 19);
        aHolidayCalendar.addHolidayRule(new DayOfWeekHolidayRule(aSaturday.getDay()))
        aHolidayCalendar.addHolidayRule(new DayOfWeekHolidayRule(aSunday.getDay()))



        assert.isTrue(aHolidayCalendar.isHoliday(aSaturday));
        assert.isTrue(aHolidayCalendar.isHoliday(aSunday));

    })

    test("oneDayWeekCanBeChristmas", function() {
        let aHolidayCalendar = new HolidayCalendar();
        let christmas = new Date(2020, 11, 25);
        aHolidayCalendar.addHolidayRule(new DayOfMonthHolidayRule (MonthDay.from(christmas)))

        assert.isTrue(aHolidayCalendar.isHoliday(christmas));
    })
    
    test ("unDiaDeMesPodriaSerFeriadoLucio", function() {

        let aHolidayCalendar = new HolidayCalendar()
        let christmas = new Date(2020, 11, 25)
        aHolidayCalendar.addHolidayRule(new DayOfMonthHolidayRule (MonthDay.from(christmas)))
    
        assert.isTrue(aHolidayCalendar.isHoliday(christmas))
    })
    
    test ("unDiaDeMesPodriaNoSerFeriadoLucio", function() {
    
        let aHolidayCalendar = new HolidayCalendar()
        let nonHoliday = new Date(2020, 11, 21)
        //aHolidayCalendar.makeDayOfMonthHoliday(MonthDay.from(christmas))
    
        assert.isFalse(aHolidayCalendar.isHoliday(nonHoliday))
    })

    test("moreThanOneDayOfMonthCouldBeHoliday", function() {

        let aHolidayCalendar = new HolidayCalendar()
        let newYearDay = new Date (2020, 0, 1)
        let christmas = new Date (2020, 11, 25)
        aHolidayCalendar.addHolidayRule(new DayOfMonthHolidayRule (MonthDay.from(christmas)))
        aHolidayCalendar.addHolidayRule(new DayOfMonthHolidayRule (MonthDay.from(newYearDay)))

        assert.isTrue(aHolidayCalendar.isHoliday(christmas));
        assert.isTrue(aHolidayCalendar.isHoliday(newYearDay));
    })

    //AGREGAR TEST CON RULE SET

    test("DayOfWeekHolidayRule", function(){

    })
    
    test("dayOfMonthHolidayRule", function(){

    })

    test("IntervalHolidayRule", function () {
        let aHolidayCalendar = new HolidayCalendar();
        let start = new Date (2019, 0, 1);
        let end = new Date (2019,11,31);
        let interval = new DateInterval(start,end);
        let aMondayInterval = new Date (2019, 11, 23);
        let HolidayRule = new DayOfWeekHolidayRule(aMondayInterval.getDay());
        aHolidayCalendar.addHolidayRule(HolidayRule)
        
        //Completar el assert
        assert.isTrue(aHolidayCalendar.isHoliday(aMondayInterval));
    })
})