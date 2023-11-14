function generatePassword() {
    const lengthInput = document.getElementById("length");
    const uppercaseCheckbox = document.getElementById("uppercase");
    const lowercaseCheckbox = document.getElementById("lowercase");
    const numbersCheckbox = document.getElementById("numbers");
    const specialCheckbox = document.getElementById("special");
    const passwordDisplay = document.getElementById("password-display");
  
    const length = parseInt(lengthInput.value);
  
    if (!isNaN(length) && length > 0) {
      let charset = "";
      
      if (uppercaseCheckbox.checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (lowercaseCheckbox.checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
      }
      if (numbersCheckbox.checked) {
        charset += "0123456789";
      }
      if (specialCheckbox.checked) {
        charset += "!@#$%^&*()_-+=";
      }
  
      if (charset === "") {
        passwordDisplay.textContent = "Please select at least one option for inclusion.";
        return;
      }
  
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
  
      passwordDisplay.textContent = `Generated Password: ${password}`;
      localStorage.setItem("generatedPassword", password);
    } else {
      passwordDisplay.textContent = "Please enter a valid positive number for password length.";
    }
  }
  
  function copyToClipboard() {
    const passwordDisplay = document.getElementById("password-display");
    const passwordText = passwordDisplay.textContent.split(": ")[1].trim();
  
    navigator.clipboard.writeText(passwordText)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch(err => {
        console.error('Unable to copy text to clipboard', err);
      });
  }
  