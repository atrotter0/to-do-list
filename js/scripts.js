var counter = 0;

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
  id = counter++;
  var removeButton = "<button type='button' class='btn btn-danger btn-md btn-remove'>X</button>";
  var completeButton = "<button type='button' class='btn btn-success btn-md btn-complete'>Complete</button>";
  var panelHeading = "<div class='panel panel-default'><div class='panel-heading' id=" + id + ">" + toDo.task + removeButton + completeButton + "</div>";
  var panelBody = "<div class='panel-body'>Scheduled Time: " + toDo.time + "<br/>Location: " + toDo.location + "</div></div>";
  $("#to-do-list").append(panelHeading + panelBody);
  addBtnEventListener();
  addHeaderEventListener(id);
}

function addBtnEventListener() {
  $(".btn-remove").bind("click", function() {
    removeTask(this);
  });

  $(".btn-complete").bind("click", function() {
    strikeOut(this);
  });
}

function addHeaderEventListener(id) {
  $("#" + id).bind("click", function() {
    $(this).siblings(".panel-body").slideToggle();
  });
}

function removeTask(element){
  $(element).parents().parents(".panel").remove();
}

function strikeOut(element){
  $(element).parents(".panel-heading").toggleClass("complete");
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
