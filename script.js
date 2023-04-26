var eventsData; 
var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

function setHourColors() {
    var now = dayjs();

    for (var i = 7; i < 16; i++) {
        if (i < now.hour()) {
            $("#hour-" + i + " textarea").addClass("past");
        } else if (i == now.hour()) {
            $("#hour-" + i + " textarea").addClass("present"); 
        }
    
    }
}

function loadStoredData() {
    eventsData = JSON.parse(localStorage.getItem("calendarEvents"));
    if (!eventsData) {
        eventsData = {
            hour7:"",
            hour8:"",
            hour9:"",
            hour10:"",
            hour11:"",
            hour12:"",
            hour13:"",
            hour14:"",
            hour15:"",
            hour16:"",
        };
    }
    //TODO Load existing data from local storage
}

function handleSaveClick(event) {
    // grab data from HTML
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];

//modify data object
    eventsData["hour" + hour] = value;

// TODO Store this hour's data in local storage
  localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}

$(".saveBtn").on("click", handleSaveClick);

$(function() {
    loadStoredData();
    setHourColors();
});

setInterval(displayTime, 1);