

function setHourColors() {
    var now = dayjs();
        for (var i = 9; i < 18; i++) {
            if (i < now.hour()) {
            $("#hour" + i + " textarea").addClass("past");
        } else if (i == now.hour()) {
            $("#hour" + i + " textarea").addClass("present"); 
        }    
    }
}

function loadStoredData() {
    //TODO Load existing data from local storage
}

function handleSaveClick(event) {
    var saveButton = $(event.target);
    // TODO Store this hour's data in local storage
}

$(function() {
    loadStoredData();
    setHourColors();
});

$(".saveBtn").on("click", handleSaveClick);