var timeBlocks = document.querySelectorAll(".row > div");
var saveBtns = document.querySelectorAll(".saveBtn");
var events = document.querySelectorAll(".events");
var currentDay = document.getElementById("currentDay");



timeBlocks.forEach(function (block) {
  var time = new Date().getHours();
  var currentTime = moment(time, "h");
  var blockTime = moment(block.dataset.time, "h");
  console.log(currentTime);
  console.log(blockTime);
  if (currentTime.isBefore(blockTime)) {
    block.classList.add("past")
  } else if (currentTime.isAfter(blockTime)) {
    block.classList.add("future")

  } else {
    block.classList.add("present")

  }

})

var now = moment().format('MMMM Do YYYY, h:mm:ss a');

currentDay.innerHTML = now

function onClick(elem) {
  var val = elem.previousElementSibling.value;;
  if (val == '') {
    console.log('no input');
    localStorage.setItem("event", val);
    eventDisplayCheck();
  } else {
    console.log(val);
    localStorage.setItem("event", val);
    eventDisplayCheck();
  }

}

function eventDisplayCheck() {
  if (localStorage.getItem("event")) {
    var val = localStorage.getItem("event");
  } else {
    var val = "";
  }
}
// saveBtns.forEach(function (button) {
//   button.addEventListener("click", function (event) {
//     localStorage.setItem("event", events.value);

//     eventDisplayCheck();
//   })
// })
// saveBtns.forEach(function (button) {
//   button.addEventListener("click", function (elem) {
//     //get the parent
//     var parent = elem.parentNode;

//     var val = parent
//       .querySelector('input[type=text]')//search the parent's children to simulate sibling searching
//       .value; //the non-jQuery way to get the value
//     if (val == '') {
//       console.log('no input');
//     } else {
//       console.log(val);
//     }
//   })
// })
