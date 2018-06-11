// BUSINESS LOGIC
function ListItem(task, time, location) {
  this.task = task;
  this.time = time;
  this.location = location;
}

function displayItem(toDo) {
  $(".to-do-list-row").append("<div class='col-md-4 to-do-task'>" + toDo.task + "</div>");
  $(".to-do-list-row").append("<div class='col-md-4 to-do-task'>" + toDo.time + "</div>");
  $(".to-do-list-row").append("<div class='col-md-4 to-do-task'>" + toDo.location + "</div>");
}

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("#add-item").click(function(event) {
    event.preventDefault();

    var uiTask = $("#task").val();
    var uiTime = $("#time").val();
    var uiLocation = $("#location").val();
    var toDoItem = new ListItem(uiTask, uiTime, uiLocation);
    displayItem(toDoItem);
    $("#the-form")[0].reset();
  });
});
