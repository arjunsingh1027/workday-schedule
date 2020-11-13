var today = moment().format("dddd, MMMM Do");
var now = moment().format("H A");

// today's date
$("#currentDay").text(today);

var workday = [
    { time: "0900", event: "" },
    { time: "1000", event: "" },
    { time: "1100", event: "" },
    { time: "1200", event: "" },
    { time: "1300", event: "" },
    { time: "1400", event: "" },
    { time: "1500", event: "" },
    { time: "1600", event: "" },
    { time: "1700", event: "" },
];


// change colors on rows
function rowColor(time) {
    var planNow = moment(now, "H A");
    var planEntry = moment(time, "H A");
    if (planNow.isBefore(planEntry) === true) {
        return "future";
    } else if (planNow.isAfter(planEntry) === true) {
        return "past";
    } else {
        return "present";
    }
}

// save user input
$(".saveBtn").on("click", function () {
    var blockID = parseInt(
        $(this)
            .closest(".time-block")
            .attr("id")
    );
    var userEntry = $.trim(
        $(this)
            .parent()
            .siblings("textarea")
            .val()
    );
    planWorkday[blockID].event = userEntry;
});

// local storage
localStorage.setItem("workDay", JSON.stringify(planWorkday));
