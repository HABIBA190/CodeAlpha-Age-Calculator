document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the date of birth from the input field
    let dob = document.getElementById("dob").value;
  
    if (dob) {
      // Get today's date
      let today = new Date();
  
      // Convert the date of birth into a Date object
      let birthDate = new Date(dob);
        // Calculate the age by comparing today's date with the birth date
        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();
    
        // If the current month is earlier than the birth month or it's the same month but the day is earlier
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
    
        // Display the result
        document.getElementById("ageResult").textContent = `Your age is: ${age} years old.`;
      } else {
        // Show an error message if no date is provided
        document.getElementById("ageResult").textContent = "Please enter a valid date of birth.";
      }
  });