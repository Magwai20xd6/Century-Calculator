// Add event listeners to the forms
document.getElementById('find_end_date').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    findEndDate();
});
document.getElementById('find_day_number').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    findWhatDayImOn();
});


function popCurrentDate(){
    const current_date_node = document.getElementById("current_date");
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    current_date_node.value = formattedDate;
}


function validateEndDateForm(){
    const start_date_fed_node = document.getElementById("start_date_fed");
    const number_of_days_node = document.getElementById("number_of_days");
    const calculate_end_date_button = document.getElementById("calculate_end_date");

    if (start_date_fed_node.validity.valid && number_of_days_node.validity.valid) {
        calculate_end_date_button.disabled = false;
    } else {
        calculate_end_date_button.disabled = true;
    }
}

function validateDayNumberForm(){
    const start_date_fdn_node = document.getElementById("start_date_fdn");
    const current_date_node = document.getElementById("current_date");
    const calculate_day_number_button = document.getElementById("calculate_day_number");

    if (start_date_fdn_node.validity.valid && current_date_node.validity.valid) {
        calculate_day_number_button.disabled = false;
    } else {
        calculate_day_number_button.disabled = true;
    }
}

function toggle_SD_FED_Error(){
    const start_date_fed_node = document.getElementById("start_date_fed");
    const start_date_fed_error_node = document.getElementById("start_date_fed_error");

    if (!start_date_fed_node.validity.valid) {
        start_date_fed_error_node.textContent = "Invalid date format. Please use YYYY-MM-DD.";
    } else {
        start_date_fed_error_node.textContent = "";
    }
}

function toggle_SD_ND_Error(){
    const number_of_days_node = document.getElementById("number_of_days");
    const number_of_days_error_node = document.getElementById("number_of_days_error");

    if (!number_of_days_node.validity.valid) {
        number_of_days_error_node.textContent = "Invalid number of days. Please enter a valid number.";
    } else {
        number_of_days_error_node.textContent = "";
    }
}


function findEndDate() {
    var startDateObj = new Date(document.getElementById("start_date_fed").value),
        number_of_days = parseInt(document.getElementById("number_of_days").value);

    // Calculate the end date
    const endDateObj = new Date(startDateObj.getTime() + number_of_days * 24 * 60 * 60 * 1000);

    // Format the end date as YYYY-MM-DD
    // const endDate = endDateObj.toISOString().split('T')[0];

    // Format the end date as MM-DD-YYYY for display
    const endDateDisplay = endDateObj.toLocaleDateString();

    // Set the textContent of the span with id "end_date" to the calculated end date
    document.getElementById("end_date").textContent = endDateDisplay;
    console.log(`End date: ${endDateDisplay}`);
}


function findWhatDayImOn() {
    var current_date = new Date(document.getElementById("current_date").value),
        start_date_fdn = new Date(document.getElementById("start_date_fdn").value);
    
    // Calculate the difference in milliseconds
    var differenceInMilliseconds = current_date - start_date_fdn;

    // Convert milliseconds to days
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInDays = differenceInMilliseconds / millisecondsPerDay;

    day_number = Math.floor(differenceInDays) + 1; // Add 1 to include the start date

    // Set the textContent of the span with id "day_number" to the calculated day number
    document.getElementById("day_number").textContent = day_number;
}




// This code as a bookmarklet.
//javascript:(function()%7Bfunction%20findEndDate(startDate%2C%20days)%20%7B%2F%2F%20Parse%20the%20start%20dateconst%20startDateObj%20%3D%20new%20Date(startDate)%3B%2F%2F%20Calculate%20the%20end%20dateconst%20endDateObj%20%3D%20new%20Date(startDateObj.getTime()%20%2B%20days%20*%2024%20*%2060%20*%2060%20*%201000)%3B%2F%2F%20Format%20the%20end%20date%20as%20YYYY-MM-DDconst%20endDate%20%3D%20endDateObj.toISOString().split('T')%5B0%5D%3Breturn%20endDate%3B%7D%3B%2F%2F%20Prompt%20for%20startDate%20and%20daysstartDate%20%3D%20prompt('Enter%20start%20date%20(YYYY-MM-DD)%3A'%2C%20'')%3Bdays%20%3D%20parseInt(prompt('Enter%20number%20of%20days%3A'%2C%20''))%3B%2F%2F%20Calc%20end%20date%20and%20log%20itendDate%20%3D%20findEndDate(startDate%2C%20days)%3Bconsole.log(%60End%20date%3A%20%24%7BendDate%7D%60)%7D)()