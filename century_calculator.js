
// End date variables
var start_date_fed = '',
    number_of_days = 0,
    // Day number variables
    start_date_fdn = '',
    current_date = '',
    // day_number = 0;

// Create an error message node for invalid date format for the start date on the 
const error_text_sd_fed_node = document.createTextNode("Invalid date format. Please use YYYY-MM-DD.");
    error_text_node.style.color = "red";
    error_text_node.id = "start_date_fed_error"; // Set an ID for the error message

const error_text_nod_node = document.createTextNode("Invalid number of days. Please enter a valid number.");
    error_text_node.style.color = "red";
    error_text_node.id = "number_of_days_error"; // Set an ID for the error message

const error_text_sd_fdn_node = document.createTextNode("Invalid date format. Please use YYYY-MM-DD.");
    error_text_node.style.color = "red";
    error_text_node.id = "start_date_fdn_error"; // Set an ID for the error message

const error_text_cd_node = document.createTextNode("Invalid date format. Please use YYYY-MM-DD.");
    error_text_node.style.color = "red";
    error_text_node.id = "current_date_error"; // Set an ID for the error message

function validateFEDStartDate(){
    var sd_fed = document.getElementById('start_date_fed').value; // Get the start date from the input field


    // Check if the start date is a valid date format, i.e. YYYY-MM-DD
    if (!/^\d{4}-\d{2}-\d{2}$/.test(sd_fed)) {
        // Display error message above the input field
        document.getElementById('start_date_fed').parentNode.insertBefore(
            error_text_node,
            document.getElementById('start_date_fed')
        );
    } else {
        // Remove error message if it exists
        var existingError = document.getElementById('start_date_fed_error');
        if (existingError) {
            existingError.remove();
        }
        // Conver the start date string to a Date object
        start_date_fed = sd_fed;
    }  
}

function validateFEDNumberOfDays(){
    var n_o_d = document.getElementById('number_of_days').value; // Get the current date from the input field
    
    // Check if the number of days is a valid number
    if (isNaN(n_o_d) || n_o_d < 0) {
        // Display error message above the input field
        document.getElementById('number_of_days').parentNode.insertBefore(
            error_text_nod_node,
            document.getElementById('number_of_days')
        );
    } else {
        // Remove error message if it exists
        var existingError = document.getElementById('number_of_days_error');
        if (existingError) {
            existingError.remove();
        }
        // Convert the number of days string to an integer
        number_of_days = parseInt(n_o_d);
    }    
}

function validateFDNStartDate(){
    var sd_fdn = document.getElementById('start_date_fdn').value; // Get the start date from the input field
    
    // Check if the start date is a valid date format, i.e. YYYY-MM-DD
    if (!/^\d{4}-\d{2}-\d{2}$/.test(sd_fdn)) {
        // Display error message above the input field
        document.getElementById('start_date_fdn').parentNode.insertBefore(
            error_text_node,
            document.getElementById('start_date_fdn')
        );
    } else {
        // Remove error message if it exists
        var existingError = document.getElementById('start_date_fdn_error');
        if (existingError) {
            existingError.remove();
        }
        // Conver the start date string to a Date object
        start_date_fdn = sd_fdn;
    }
}

function validateFDNCurrentDate(){
    var c_d = document.getElementById('current_date').value; // Get the current date from the input field
    
    // Check if the start date is a valid date format, i.e. YYYY-MM-DD
    if (!/^\d{4}-\d{2}-\d{2}$/.test(c_d)) {
        // Display error message above the input field
        document.getElementById('current_date').parentNode.insertBefore(
            error_text_cd_node,
            document.getElementById('current_date')
        );
    } else {
        // Remove error message if it exists
        var existingError = document.getElementById('current_date_error');
        if (existingError) {
            existingError.remove();
        }
        // Convert the current date string to a Date object
        current_date = new Date(c_d);
    }
}



function findEndDate() {
    var startDateObj = new Date(start_date_fed);

    // Calculate the end date
    const endDateObj = new Date(startDateObj.getTime() + number_of_days * 24 * 60 * 60 * 1000);

    // Format the end date as YYYY-MM-DD
    const endDate = endDateObj.toISOString().split('T')[0];

    // Set the innerHTML of the span with id "end_date" to the calculated end date
    document.getElementById("end_date").innerHTML = end_date;
}


function findWhatDayImOn() {

    // Calculate the difference in milliseconds
    var differenceInMilliseconds = current_date - start_date_fdn;

    // Convert milliseconds to days
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const differenceInDays = differenceInMilliseconds / millisecondsPerDay;

    day_number = Math.floor(differenceInDays) + 1; // Add 1 to include the start date
}

// startDate = prompt('Enter start date (YYYY-MM-DD):', '');
// days = parseInt(prompt('Enter number of days:', ''));

// endDate = findEndDate(startDate, days);
// console.log(`End date: ${endDate}`);




// This code as a bookmarklet.
//javascript:(function()%7Bfunction%20findEndDate(startDate%2C%20days)%20%7B%2F%2F%20Parse%20the%20start%20dateconst%20startDateObj%20%3D%20new%20Date(startDate)%3B%2F%2F%20Calculate%20the%20end%20dateconst%20endDateObj%20%3D%20new%20Date(startDateObj.getTime()%20%2B%20days%20*%2024%20*%2060%20*%2060%20*%201000)%3B%2F%2F%20Format%20the%20end%20date%20as%20YYYY-MM-DDconst%20endDate%20%3D%20endDateObj.toISOString().split('T')%5B0%5D%3Breturn%20endDate%3B%7D%3B%2F%2F%20Prompt%20for%20startDate%20and%20daysstartDate%20%3D%20prompt('Enter%20start%20date%20(YYYY-MM-DD)%3A'%2C%20'')%3Bdays%20%3D%20parseInt(prompt('Enter%20number%20of%20days%3A'%2C%20''))%3B%2F%2F%20Calc%20end%20date%20and%20log%20itendDate%20%3D%20findEndDate(startDate%2C%20days)%3Bconsole.log(%60End%20date%3A%20%24%7BendDate%7D%60)%7D)()