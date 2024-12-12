function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    // Validate the form fields
    if (!name || !email || !phone || !dob || !gender || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Store the data in localStorage
    const userData = { name, email, phone, dob, gender, message };
    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect to the display page
    window.location.href = "display.html";
}
