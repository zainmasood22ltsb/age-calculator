function calculateAge() {
    // Get birthdate from the input field
    var birthdate = document.getElementById("birthdate").value;
    
    if (birthdate === "") {
        alert("Please enter your birthdate.");
        return;
    }
    
    // Convert birthdate into a Date object
    var birthDateObj = new Date(birthdate);
    var today = new Date();

    // Calculate age
    var age = today.getFullYear() - birthDateObj.getFullYear();
    var monthDifference = today.getMonth() - birthDateObj.getMonth();

    // Adjust age if the birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }

    // Display the calculated age
    document.getElementById("age").textContent = age;
}