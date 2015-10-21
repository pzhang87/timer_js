// object solution


var timer = {

  //create selectors that target the buttons
  elements: {
    resetButton: document.querySelector("#reset"),
    startButton: document.querySelector("#start"),
    pauseButton: document.querySelector("#pause"),
    displayTime: document.querySelector("#timer"),
  },
  //declare variables

  seconds: 0,
  timerId: 0,
  isRunning: false,

  //create click handlers

  listener: function listener(){
    this.elements.resetButton.addEventListener("click", function(){
      console.log("reset");
      clearInterval(this.timerId);
      this.seconds = 0;
      this.elements.displayTime.textContent = "Stop Watch";
      this.isRunning = false;
    }.bind(this));

    this.elements.startButton.addEventListener("click", function(){
      while (!this.isRunning) {
      console.log("start");
      this.isRunning = true;
      this.timerId = setInterval(this.updateTime, 1000);
    }
      }.bind(this));

    this.elements.pauseButton.addEventListener("click", function() {
      console.log("pause");
      clearInterval(this.timerId);
      this.isRunning = false;
    }.bind(this));
  },

  updateTime: function (){
    console.dir(this);
    timer.elements.displayTime.textContent = timer.seconds;
    timer.seconds++;
  }.bind(timer),

}

timer.listener();
//
// console.log(timer.resetButton);
// console.log(timer.startButton);
// console.log(timer)
