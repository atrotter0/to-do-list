// BUSINESS LOGIC
function ListItem(task, time, location) {
  this.task = task;
  this.time = time;
  this.location = location;
}

function validateInput(uiTask, uiTime, uiLocation) {
  if (uiTask !== "" && uiTime !== "" && uiLocation !== "") {
    var toDoItem = new ListItem(uiTask, uiTime, uiLocation);
    displayItem(toDoItem);
    $("#the-form")[0].reset();
  } else {
    $(".alert").fadeIn(800).delay(5000).fadeOut(800);
    $("#warning").text("You need to fill out all fields to submit a new task.");
  }
}

function displayItem(toDo) {
  var removeButton = "<button type='button' class='btn btn-danger btn-md btn-remove'>X</button>";
  var panelHeading = "<div class='panel panel-default'><div class='panel-heading'>" + toDo.task + removeButton + "</div>";
  var panelBody = "<div class='panel-body'>" + toDo.time + "<br/>" + toDo.location + "</div></div>";
  $("#to-do-list").append(panelHeading + panelBody);
  addBtnEventListener();
  addHeaderEventListener();
}

function addBtnEventListener() {
  $(".btn-remove").bind("click", function() {
    removeTask(this);
  });
}

function addHeaderEventListener() {
  $(".panel-heading").bind("click", function() {
    $(this).siblings(".panel-body").slideToggle();
  });
}


function removeTask(element){
  $(element).parents().parents(".panel").remove();
}

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("#add-item").click(function(event) {
    event.preventDefault();

    var uiTask = $("#task").val();
    var uiTime = $("#time").val();
    var uiLocation = $("#location").val();
    validateInput(uiTask, uiTime, uiLocation);
  });
});
