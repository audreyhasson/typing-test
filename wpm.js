// timer
console.log("banana");

var seconds = 60.00;

function myTimer(time) {
  time = time - .01;
  return time;
}
document.getElementById("timer").innerHTML = seconds;

function countdown() {
  if (seconds>0) {
    window.setInterval(myTimer(seconds), 10)
  };
  if (seconds === 0){

  }
};

countdown();

document.getElementById("optimism").onclick = countdown()


document.getElementById("testbutt").onclick = function testFunction() {
  let head = document.getElementById("head");
  head.classList.toggle("myStyle");
};
