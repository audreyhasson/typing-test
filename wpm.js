// timer
console.log("banana");

var seconds = 60.00;
document.getElementById("timer").innerHTML = seconds.toFixed(2);


// most dangerous game
var words = ['off', 'there', 'to', 'the', 'right', 'somewhere', 'is', 'a', 'large', 'island', 'said', 'Whitney.', 'It', 'is', 'rather', 'a', 'mystery.', 'What', 'island', 'is', 'it?', 'Rainsford', 'asked.', 'The', 'old', 'charts', 'call', 'it', 'Ship', 'Trap', 'Island,', 'Whitney', 'replied.', 'A', 'suggestive', 'name', 'is', 'it', 'not?', 'Sailors', 'have', 'a', 'curious', 'dread', 'of', 'the', 'place.', 'I', 'do', 'not', 'know', 'why.', 'Some', 'superstition.', 'Cannot', 'see', 'it.', 'remarked', 'Rainsford', 'trying', 'to', 'peer', 'through', 'the', 'dank', 'tropical', 'night', 'that', 'was', 'palpable', 'as', 'it', 'pressed', 'its', 'thick', 'warm', 'blackness', 'in', 'upon', 'the', 'yacht.',
'You', 'have', 'good', 'eyes.', 'said', 'Whitney','with', 'a', 'laugh', 'and', 'I', 'have', 'seen', 'you','pick', 'off', 'a', 'moose', 'moving', 'in', 'the', 'brown','fall', 'bush', 'at', 'four', 'hundred', 'yards', 'but', 'even','you', 'can', 'not', 'see', 'four', 'miles', 'or', 'so', 'through','a', 'moonless', 'Caribbean', 'night.', 'Nor', 'four', 'yards', 'admitted', 'Rainsford.', 'Ugh!', 'It', 'is', 'like', 'moist', 'black', 'velvet.', 'It', 'will', 'be', 'light', 'enough', 'in', 'Rio',
'promised', 'Whitney.', 'We', 'should', 'make', 'it', 'in', 'a', 'few', 'days.', 'I', 'hope', 'the', 'jaguar', 'guns', 'have', 'come', 'from', 'Purdey.', 'We', 'should', 'have', 'some', 'good', 'hunting', 'up', 'the', 'Amazon.', 'Great', 'sport', 'hunting.', 'The', 'best', 'sport', 'in', 'the', 'world', 'agreed', 'Rainsford.', 'For', 'the', 'hunter', 'amended', 'Whitney.', 'Not', 'for', 'the', 'jaguar.', 'Do', 'not', 'talk', 'rot', 'Whitney', 'said', 'Rainsford', 'You', 'are', 'a',
'big','game', 'hunter,', 'not', 'a', 'philosopher.', 'Who', 'cares', 'how', 'a', 'jaguar', 'feels?', 'Perhaps', 'the', 'jaguar', 'does.', 'observed', 'Whitney.', 'Bah!', 'They', 'have', 'no', 'understanding.',
'Even', 'so', 'I', 'rather', 'think', 'they', 'understand', 'one', 'thing', 'fear.', 'The', 'fear', 'of', 'pain', 'and', 'the', 'fear', 'of', 'death.']

var theySee = words.slice(0,5).join(" ");
document.getElementById("r-words").innerHTML = theySee

let clear = "";
let correctWords = [];
let mispelledWords = [];

function myWords() {
  let start = 0;
  let end = 5;
  var theySee = words.slice(start,end).join(" ");
  document.getElementById("r-words").innerHTML = theySee
  document.body.onkeydown = function() {
    if(event.keyCode === 32 || event.keyCode === 'Spacebar') {
      let firstword = start;
      var forChecking = " " + words[firstword];
        if (words[firstword] === "off") {
          var forChecking = "off";
        }
      start = start + 1;
      end = end + 1;
      var theySee = words.slice(start,end).join(" ");
      document.getElementById("r-words").innerHTML = theySee;
      let theirWord = document.getElementById("textbox").value;
      document.getElementById("textbox").value = clear;
        if (forChecking === theirWord) {
          correctWords.push(theirWord);
        }
        if (forChecking !== theirWord) {
          mispelledWords.push(theirWord);
        }
    }
    else {
      var theySee = words.slice(start,end).join(" ");
      document.getElementById("r-words").innerHTML = theySee;
    }
}
}


document.getElementById("textbox").onfocus = myWords();
document.getElementById("textbox").onfocus = function(){
  setTimeout(ready, 1000);
  setTimeout(set, 2000);
  setTimeout(go, 3000);
  setTimeout (function(){
    setInterval(function (){
      if (seconds===-0.009999999996633669) {
        document.getElementById("timer").innerHTML = "00.00";
      }
      else if (seconds>0) {
        seconds = seconds - .01;
        document.getElementById("timer").innerHTML = seconds.toFixed(2);
      }
    }, 10);
  }, 3000);
  setTimeout(myResults, 63000);
}

function ready() {
  document.getElementById("textbox").setAttribute("placeholder", "ready");
}

function set(){
  document.getElementById("textbox").setAttribute("placeholder", "set");
}

function go() {
  document.getElementById("textbox").setAttribute("placeholder", "go!");
}

//lists of words spelled right and wrong

function myResults() {
  let totalWords = correctWords.length + mispelledWords.length;
  let accuracy = ((correctWords.length/totalWords)*100).toFixed(0);
  let resultsString = "You typed " + totalWords + " WPM! Your accuracy was " + accuracy + "%!";
  document.getElementById("results-p").innerHTML = resultsString;
  document.getElementById("retry").classList.remove("hideme")
}
/*
function showResults() {
  if (document.getElementById("timer") === "done!") {
    document.getElementById("someshow").classList.remove("hideme");
  }
}
*/
