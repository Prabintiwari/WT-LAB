

function validateForm() {

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('pass').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;

    if (name === "") {
      alert("Name must be filled out");
      return false;
    }
  

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      alert("Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.");
      return false;
    }
  

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    if (country === "") {
      alert("Please select a country");
      return false;
    }
  
 
    return true;
  }
  