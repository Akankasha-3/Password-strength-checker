// Get references to the password input field and power point element
let password = document.getElementById("password"); 
let power = document.getElementById("power-point"); 

// Add an event listener for the input event on the password field
password.oninput = function () { 
    // Remove spaces from the input value
    password.value = password.value.replace(/\s+/g, '');

    // Initialize the strength point counter
    let point = 0; 
    let value = password.value; 

    // Define the width and color arrays for the power point element
    let widthPower = 
        ["1%", "25%", "50%", "75%", "100%"]; 
    let colorPower = 
        ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"]; 

    // Check if the password length is at least 6 characters
    if (value.length >= 6) { 
        // Define an array of regular expressions to test different character types
        let arrayTest = 
            [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/]; 

        // Increment the point counter for each matching character type
        arrayTest.forEach((item) => { 
            if (item.test(value)) { 
                point += 1; 
            } 
        }); 
    } 

    // Update the width and background color of the power point element based on the points
    power.style.width = widthPower[point]; 
    power.style.backgroundColor = colorPower[point]; 
};