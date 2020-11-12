// date at the top of the page
var today = moment();
$("#currentDay").text(today);

var auditTask = function(){
    var currentHour = moment().hour();
    $(".time-block").each(function(){
        var elementHour = parseInt($(this).attr("id"));

        if (elementHour < currentHour){
            $(this).removeClass(["present", "future"]).addClass("past");
        }
        else if (elementHour === currentHour){
            $(this).removeClass(["past", "future"]).addClass("present");
        }
        else {
            $(this).removeClass(["past", "present"]).addClass("future");
        }
    })
};



