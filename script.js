var today = moment().format("dddd, MMMM Do");
var now = moment().format("H A");

// today's date
$("#currentDay").text(today);

let workday = {
    "0900": "",
    "1000": "",
    "1100": "",
    "1200": "",
    "1300": "",
    "1400": "",
    "1500": "",
    "1600": "",
    "1700": "",
};

// counting up with each new time block div
let counter = 1;
for (const property in workday) {
    let textEntry = "#text-entry" + counter;
    $(textEntry).text(workday[property]);
    let timeId = "#hour" + counter;
    let presentHour = moment().hour();
    let timeText = $(timeId).text();
    let timeNum = hourNumberFromString(timeText);

    // if statement to change txt entry of div color
    if (timeNum < presentHour) {
        $(textEntry).addClass("past");
    } else if (timeNum > presentHour) {
        $(textEntry).addClass("future");
    } else { $(textEntry).addClass("present") }
    counter++;
};

// button click event to save into local storage
$("button").click(function () {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();
    
    saveSchedule(hourString, value);
});

function hourNumberFromString(hourString) {
    switch (hourString) {
        case "0900": return 9;
        case "1000": return 10;
        case "1100": return 11;
        case "1200": return 12;
        case "1300": return 13;
        case "1400": return 14;
        case "1500": return 15;
        case "1600": return 16;
        case "1700": return 17;
    }
};


// saving to local storage
function loadCorrectDataset() {
    result = localStorage.getItem("workday")
    return (result ? result : workday);
};

function initLocalStorage() {
    localStorage.setItem("workday", JSON.stringify(workday));
};

function saveLocalStorage(dayObj) {
    localStorage.setItem("workday", JSON.stringify(dayObj));
};

function saveSchedule(hourString, val) {
    if(!localStorage.getItem("workday")) {
        initLocalStorage();
    };

    let workHours = JSON.parse(localStorage.getItem("workday"));
    workHours[hourString] = val

    saveLocalStorage(workHours);
};

function updateCalTasks(dayObject) {
    $(".hour").each(function(index){
        let res = $(this).children("div");
        $(this).children("textarea").text(dayObject[res.text()]);
    })
};
