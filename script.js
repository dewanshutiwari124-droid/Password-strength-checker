function checkPassword() {
    let password = document.getElementById("password").value;
    let strengthText = document.getElementById("strength-text");
    let strengthFill = document.getElementById("strength-fill");

    let strength = 0;

    if (password.length > 5) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[@$!%*?&]/)) strength++;

    if (strength === 0) {
        strengthText.innerHTML = "";
        strengthFill.style.width = "0%";
    } 
    else if (strength === 1) {
        strengthText.innerHTML = "Weak ❌";
        strengthFill.style.width = "25%";
        strengthFill.style.background = "red";
    } 
    else if (strength === 2) {
        strengthText.innerHTML = "Medium ⚠️";
        strengthFill.style.width = "50%";
        strengthFill.style.background = "orange";
    } 
    else if (strength === 3) {
        strengthText.innerHTML = "Strong 💪";
        strengthFill.style.width = "75%";
        strengthFill.style.background = "yellow";
    } 
    else {
        strengthText.innerHTML = "Very Strong 🔥";
        strengthFill.style.width = "100%";
        strengthFill.style.background = "green";
    }
}