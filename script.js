var possibleTimes = ["8", "9", "10", "11", "12", "13", "14", "15", "16",];
var timeBlocks = document.querySelectorAll(".row > div");
var saveBtns = document.querySelectorAll(".saveBtn");
var events = document.querySelectorAll(".events");
var currentDay = document.getElementById("currentDay");

var storage = possibleTimes.reduce(function (object, string) {
  object[string] = localStorage.getItem(string) || "";
  return object;

}, {});
console.log(storage)

//event.forEach
events.forEach(function (textarea) {
  // storage [possibleTime]
  var parent = textarea.parentNode;

  var time = parent.querySelector("div").dataset.time;
  var storageVal = storage[time];
  textarea.value = storageVal;
})

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

saveBtns.forEach(function (button) {
  button.addEventListener("click", function (elem) {
    //get the parent
    var parent = button.parentNode;
    console.log(parent);
    var val = parent
      .querySelector('textarea')//search the parent's children to simulate sibling searching
      .value; //the non-jQuery way to get the value
    console.log(val);
    var time = parent.querySelector("div").dataset.time;
    console.log(time);
    if (val == '') {
      console.log('no input');
    } else {
      // console.log(val);
      localStorage.setItem(time, val);
    }
  })
})
