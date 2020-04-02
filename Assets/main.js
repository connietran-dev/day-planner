// Initialize empty array for saved events
var events = JSON.parse(localStorage.getItem("events")) || [];

var startTime = 9;


// Display current date in jumbotron
$("#currentDay").text(moment().format("llll"));
// TODO: Remove - for testing moment
console.log(moment().startOf('day').format("llll"));


// Generate time blocks for 9 am to 5 pm
for (let index = 0; index < 9; index++) {

    // Create row
    var divRow = $("<div class='row'>");
    divRow.attr("data-id", index);
    $(".container").append(divRow);

    // Create objects in events array with index as id for local storage
    events.push({ eventId: index });
    console.log(events);
    localStorage.setItem("events", JSON.stringify(events));

    // Populate first column with time
    var tableTime = $('<div class="hour col-1">');
    tableTime.text(moment(startTime, "h").format("LT"));
    startTime++;
    divRow.append(tableTime);

    // Create <textarea>s for events
    var eventDesc = $('<div class="description col-10">');
    var eventTextArea = $('<textarea cols="65"></textarea>');
    eventDesc.html(eventTextArea);
    eventTextArea.attr("data-id", index);
    divRow.append(eventDesc);

    // Get event description out of local storage to display in text event
    var eventArray = JSON.parse(localStorage.getItem("events"));
    var eventText = events[index].description;
    eventTextArea.val(eventText);

    // eventTextArea.val(eventDisplay);

    // if (eventDesc) {
    //     eventTextArea.value = description;
    //   } else {
    //     eventTextArea.value = "";
    //   }


    // Create save buttons
    var saveDiv = $('<div class="saveBtn col-1">');
    divRow.append(saveDiv);
    var saveBtn = $("<i class='far fa-save'></i>");
    saveDiv.html(saveBtn);
    saveBtn.attr("data-id", index);


};



// Add event listener to save button
$(".far").on("click", saveEvent);

function saveEvent() {

    // Get data-id of saveBtn which is set to index in array

    // Alternate:
    // parseInt(event.target.parentElement.id);
    // console.log(event.target.parentElement.id);

    var dataId = $(this).attr("data-id");
    console.log("The data-id of clicked item is: " + dataId);


    // Take textarea value with that currentId and...

    var eventText = $( `textarea[data-id|='${dataId}']` ).val();
    console.log("Event text is " + eventText);
    
    // Alternate:
    // var currentRow = document.getElementsByClassName("row " + currentId)
    // console.log(currentRow);

    // var currentText = currentRow.children[1].childNodes[7];
    // console.log(currentText);

    // set to description property of that ID/index in events array    

    events[dataId].description = eventText;
    console.log(events);
    
    localStorage.setItem("events", JSON.stringify(events));

    console.log("Description saved for id: " + dataId);


};