// Today's date
var today = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(today);

$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // Save in local storage
        localStorage.setItem(time, text);
    })

function trackTime () {
    var currentTime = moment().hour();

    $('.time-block').each(function () {
        var timeBlock = parseInt($(this).attr('id').split('hour')[1]);

        // Check time and add color indicator
        if(timeBlock < currentTime) {
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');
        }
        else if (timeBlock === currentTime) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        }
        else {
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future');
        }
    })
}

// Get description from local storage
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

trackTime();
})
