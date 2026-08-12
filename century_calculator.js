function popCurrentDate(){
    const current_date_node = document.getElementById("current_date");
    const today = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    // Destructure the format components to custom rearrange them
    const [{ value: month }, , { value: day }, , { value: year }] = formatter.formatToParts(today);
    const formattedDate = `${year}-${month}-${day}`;

    console.log(formattedDate);
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

// function toggle_SD_FDN_Error(){
//     const start_date_fdn_node = document.getElementById("start_date_fdn");
//     const start_date_fdn_error_node = document.getElementById("start_date_fdn_error");

//     if (!start_date_fdn_node.validity.valid) {
//         start_date_fdn_error_node.textContent = "Invalid date format. Please use YYYY-MM-DD.";
//     } else {
//         start_date_fdn_error_node.textContent = "";
//     }
// }

// function toggle_CD_FDN_Error(){
//     const current_date_node = document.getElementById("current_date");
//     const current_date_error_node = document.getElementById("current_date_error");

//     if (!current_date_node.validity.valid) {
//         current_date_error_node.textContent = "Invalid date format. Please use YYYY-MM-DD.";
//     } else {
//         current_date_error_node.textContent = "";
//     }
// }


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

