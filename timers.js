// object solution

var timer = {

  //create selectors that target the buttons
  resetButton: document.querySelector("#reset"),
  startButton: document.querySelector("#start"),
  pauseButton: document.querySelector("#pause"),

  //declare variables

  displayTime = document.querySelector("h1"),
  //this.displayTime.id = "#timer",

  seconds: 0,
  timerId,
  isRunning: false,

  //create click handlers

  resetTimer: function() {
    console.log("reset"),
    clearInterval(this.timerId),
    this.seconds = 0,
    this.displayTime.textContent = "Stop Watch"
    this.isRunning = false,
  },

  var startTimer = function() {
    while (!isRunning) {
    console.log("start");
    this.isRunning = true;
    this.timerId = setInterval(updateTime, 1000);
      }
    }

  var pauseTimer = function() {
    console.log("pause");
    clearInterval(timerId);
    isRunning = false;
  }

  //add event listeners on buttons

  resetButton.addEventListener("click", resetTimer);
  startButton.addEventListener("click", startTimer);
  pauseButton.addEventListener("click", pauseTimer);

  //timer update function

  var updateTime = function() {
    displayTime.textContent = seconds;
    seconds++;
  }

}

console.log(timer.resetButton);
console.log(timer.startButton);
console.log(timer.)
