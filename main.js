
var now = moment().format('LLL');
var timeOnly = $("currentDay");
var currentHour = moment().format("HH");

var saveButton = document.getElementById("saveToLocal");
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


