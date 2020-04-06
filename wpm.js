// timer
console.log("banana");


var seconds = 60;
document.getElementById("timer").innerHTML = seconds;

document.getElementById("optimism").onclick = function myTimer() {
    setInterval(function (){
      if (seconds===-0.009999999996633669) {
        document.getElementById("timer").innerHTML = "Done!";
      }
      else if (seconds>0) {
      seconds = seconds - .01;
      document.getElementById("timer").innerHTML = seconds.toFixed(2);
    }
  }, 10);
};


document.getElementById("testbutt").onclick = function testFunction() {
  let head = document.getElementById("head");
  head.classList.toggle("myStyle");
};

function minusOne(num1) {
  let num2 = num1 - 1;
  return num2;
}
