// burger-menu
$('.main-item').click(function(){
    $('.navigation').fadeToggle();
});
// slider
jQuery('.slider').slick ({
    dots: false,
    arrows:true,
    autoplay: false,
    speed: 2000,
    draggable: false,
    fade:true
});
// calendar
$(function(){
    var data = [
        {"date": "2018-01-17 15:30:30", "title": "Событие 1", "description": "Lorem Ipsum dolor set", "url": "http://www.event3.com/"}
    ];
    $('#eventCalendar').eventCalendar({
        jsonData: data,
        jsonDateFormat: 'human',
        locales: {
            locale: "en",
            moment: {
                "months": ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
                    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"],
                "monthsShort": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
            }
        }
    });
});
