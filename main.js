
var now = moment().format('LLL');
var timeOnly = $("currentDay");
var currentHour = moment().format("HH");

var saveButton = document.querySelector("button")

//look up in moment.js how to do the time bit

//write an if else for the coloring of the rows. selector to select the rows, and then link in the time factor. 

//link the button to save info to local storage. Do this first, the color is secondary.

var textEntry = [];


//header date
var todaysDate = document.createElement('p');
todaysDate.textContent = (now);
currentDay.appendChild(todaysDate);

function enterTextHere() {

    
    var textBox = $("<textarea>");
    textBox.text(enteredText);
    $(".time-block").append(textBox);
    
    if(enteredText !== "") {
        for (var i = 0; i < textEntry.length; i++) {
            var enteredText = $(".time.block").val();
            
            textEntry.push(enteredText);

            localStorage.setItem("textEntry", JSON.stringify(textEntry));
            $(".time.block").text(textEntry);
            $(".time.block").html(textEntry[i]);
        }
    }   else return;

    var storedTextEntry = JSON.parse(localStorage.getItem("textEntry"));

    if (storedTextEntry !== "") {
        textEntry = storedTextEntry;
    }
};

saveButton.addEventListener('click', enterTextHere)
console.log(saveButton);


