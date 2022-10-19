// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak;
var noun1;
var verb;
var adjective;
var noun2;
var place;

var speakButton = document.querySelector('.playback');

var displayNoun1 = document.querySelector('.displayNoun1');
var displayVerb = document.querySelector('.displayVerb');
var displayAdjective = document.querySelector('.displayAdjective');
var displayNoun2 = document.querySelector('.displayNoun2');
var displayPlace = document.querySelector('.displayPlace');

var noun1Button = document.querySelector('.noun1');
var verbButton = document.querySelector('.verb');
var adjectiveButton = document.querySelector('.adjective');
var noun2Button = document.querySelector('.noun2');
var placeButton = document.querySelector('.place');
var clearButton = document.querySelector('.clear');
var randomizeButton = document.querySelector('.randomize');

var noun1Array = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var verbArray = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var adjectiveArray = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var noun2Array = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var placeArray = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];


/* Functions
-------------------------------------------------- */
//Gets the random element from the array when we pass in an array
function getRandomValue(array){
	return array[Math.floor(Math.random()*array.length)];
}
function clearOutput(){
	noun1 = '';
	verb = '';
	adjective = '';
	noun2 = '';
	place = '';
	displayNoun1.innerHTML = '';
	displayVerb.innerHTML ='';   
	displayAdjective.innerHTML = '';
	displayNoun2.innerHTML =  '';
	displayPlace.innerHTML =  '';
}
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.onclick = function(){
	noun1 = getRandomValue(noun1Array);
	displayNoun1.innerHTML = noun1;
}
verbButton.onclick = function(){
	verb = getRandomValue(verbArray);
	displayVerb.innerHTML = verb;
}
adjectiveButton.onclick = function(){
	adjective = getRandomValue(adjectiveArray);
	displayAdjective.innerHTML = adjective;
}
noun2Button.onclick = function(){
	noun2 = getRandomValue(noun2Array);
	displayNoun2.innerHTML = noun2;
}
placeButton.onclick = function(){
	place = getRandomValue(placeArray);
	displayPlace.innerHTML = place;
}
clearButton.onclick = clearOutput;

randomizeButton.onclick = function(){
	noun1 = getRandomValue(noun1Array);
	verb = getRandomValue(verbArray);
	adjective = getRandomValue(adjectiveArray);
	noun2 = getRandomValue(noun2Array);
	place = getRandomValue(placeArray);
	displayPlace.innerHTML = noun1 + ' ' + verb + ' ' + adjective + ' ' + noun2 + ' ' + place;
}

// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	textToSpeak = noun1 + ' ' + verb + ' ' + adjective + ' ' + noun2 + ' ' + place;
	speakNow(textToSpeak);
}
