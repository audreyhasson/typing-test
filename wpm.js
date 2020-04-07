// timer
console.log("banana");

var seconds = 60.00;
document.getElementById("timer").innerHTML = seconds.toFixed(2);

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

// random words
var words = ['off', 'there', 'to', 'the', 'right', 'somewhere', 'is', 'a', 'large', 'island', 'said', 'Whitney.', 'It', 'is', 'rather', 'a', 'mystery.', '"What', 'island', 'is', 'it?', 'Rainsford', 'asked.', 'The', 'old', 'charts', 'call', 'it', 'Ship', 'Trap', 'Island,', 'Whitney', 'replied.', 'A', 'suggestive', 'name', 'is', 'it', 'not?', 'Sailors', 'have', 'a', 'curious', 'dread', 'of', 'the', 'place.', 'I', 'do', 'not', 'know', 'why.', 'Some', 'superstition.', 'Cannot', 'see', 'it.', 'remarked', 'Rainsford', 'trying', 'to', 'peer', 'through', 'the', 'dank', 'tropical', 'night', 'that', 'was', 'palpable', 'as', 'it', 'pressed', 'its', 'thick', 'warm', 'blackness', 'in', 'upon', 'the', 'yacht.',
'You', 'have', 'good', 'eyes.', 'said', 'Whitney','with', 'a', 'laugh', 'and', 'I', 'have', 'seen', 'you','pick', 'off', 'a', 'moose', 'moving', 'in', 'the', 'brown','fall', 'bush', 'at', 'four', 'hundred', 'yards', 'but', 'even','you', 'can', 'not', 'see', 'four', 'miles', 'or', 'so', 'through','a', 'moonless', 'Caribbean', 'night.', 'Nor', 'four', 'yards', 'admitted', 'Rainsford.', 'Ugh!', 'It', 'is', 'like', 'moist', 'black', 'velvet.', 'It', 'will', 'be', 'light', 'enough', 'in', 'Rio',
'promised', 'Whitney.', 'We', 'should', 'make', 'it', 'in', 'a', 'few', 'days.', 'I', 'hope', 'the', 'jaguar', 'guns', 'have', 'come', 'from', 'Purdey.', 'We', 'should', 'have', 'some', 'good', 'hunting', 'up', 'the', 'Amazon.', 'Great', 'sport', 'hunting.', 'The', 'best', 'sport', 'in', 'the', 'world', 'agreed', 'Rainsford.', 'For', 'the', 'hunter', 'amended', 'Whitney.', 'Not', 'for', 'the', 'jaguar.', 'Do', 'not', 'talk', 'rot', 'Whitney', 'said', 'Rainsford', 'You', 'are', 'a',
'big','game', 'hunter,', 'not', 'a', 'philosopher.', 'Who', 'cares', 'how', 'a', 'jaguar', 'feels?', 'Perhaps', 'the', 'jaguar', 'does.', 'observed', 'Whitney.', 'Bah!', 'They', 'have', 'no', 'understanding.',
'Even', 'so', 'I', 'rather', 'think', 'they', 'understand', 'one', 'thing', 'fear.', 'The', 'fear', 'of', 'pain', 'and', 'the', 'fear', 'of', 'death.']

var theySee = words.slice(0,4).join(" ");
document.getElementById("r-words").innerHTML = theySee

function myWords() {
  let start = 0;
  let end = 4;
  var theySee = words.slice(start,end).join(" ");
  document.getElementById("r-words").innerHTML = theySee
  document.body.onkeyup = function(){
    if(event.keyCode === 32 || event.keyCode === 'Spacebar') {
      start = start + 1;
      end = end + 1;
      var theySee = words.slice(start,end).join(" ");
      document.getElementById("r-words").innerHTML = theySee;
      let returnValue = start-1;
    }
    else {
      var theySee = words.slice(start,end).join(" ");
      document.getElementById("r-words").innerHTML = theySee;
    }
}

}

//to get the words to change based on user input
document.getElementById("textbox").onfocus = function() {handleInput()}

//lists of words spelled right and wrong
let correctWords = [];
let mispelledWords = [];

var newWord = document.getElementById("textbox").value;


function handleInput(){
  let rightWord = myWords();
  if(event.keyCode === 32 || event.keyCode === 'Spacebar') {
    var newWord = document.getElementById("textbox").value;
    console.log(newWord);
  }
}

//test mess
