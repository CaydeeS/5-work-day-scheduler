
var now = moment().format('LLL');
var timeOnly = $("currentDay");
var currentHour = moment().format("HH");


//header date
var todaysDate = document.createElement('p');
todaysDate.textContent = (now);
currentDay.appendChild(todaysDate);


function storeLocal() {
    allRows.querySelector('row');
    
}

function saveChanges() {
    saveButton.querySelector('saveBtn');
    saveButton.addEventListener("click" , storeLocal);
    console.log(saveChanges);

}

