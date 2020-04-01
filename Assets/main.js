$("#currentDay").text(moment().format("llll"));

// TODO: Remove - for testing moment
console.log(moment().startOf('day').format("llll"));

for (let index = 9; index < 18; index++) {

    var divRow = $("<div class='row'>");
    $(".container").append(divRow);

    var tableTime = $('<div class="hour col-2">');
    tableTime.text(moment(index, "h").format("LT"));
    divRow.append(tableTime);

    var tableDesc = $('<div class="description col-8">');
    tableDesc.html("<textarea></textarea>")
    divRow.append(tableDesc);

    var tableSave = $('<div class="save-Btn time-block col-2">');
    divRow.append(tableSave);
    
}