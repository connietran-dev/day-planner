// Initialize empty array of objects for saved events
var events = [{}];


// Display current date in jumbotron
$("#currentDay").text(moment().format("llll"));

// TODO: Remove - for testing moment
console.log(moment().startOf('day').format("llll"));

// Generate time blocks for 9 am to 5 pm
for (let index = 9; index < 18; index++) {

    var divRow = $("<div class='row'>");
    divRow.attr("id", index);
    $(".container").append(divRow);

    var tableTime = $('<div class="hour col-1">');
    tableTime.text(moment(index, "hha").format("LT"));
    divRow.append(tableTime);

    var tableDesc = $('<div class="description col-10">');
    tableDesc.html("<textarea cols='60'></textarea>")
    divRow.append(tableDesc);

    var tableSave = $('<div class="saveBtn time-block col-1">');
    tableSave.html("<i class='far fa-save'></i>");
    tableSave.attr("id", index);
    divRow.append(tableSave);

};



// Add event listener to save button
$(".saveBtn").on("click", handleClick);

function handleClick() {

    if (event.target.matches(".far")) {

        currentId = parseInt(event.target.parentElement.id);
        console.log(event.target);

        events[currentId].description = $("description").val();

        console.log("Description saved for id: " + currentId);

    }

};