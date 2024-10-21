function registerUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username === "" || email === "" || password === "") {
        alert("Please fill all fields");
    } else {
        // Check if the username already exists
        if (localStorage.getItem(username)) {
            alert("Username already exists. Try a different one.");
        } else {
            // Store user details in localStorage
            const user = {
                username: username,
                email: email,
                password: password
            };
            localStorage.setItem(username, JSON.stringify(user));
            alert("Registration successful. You can now log in.");
            window.location.href = './index.html'; // Redirect to login page
        }
    }
}


function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = JSON.parse(localStorage.getItem(username));
    
    if (user && user.password === password) {
        // Store logged-in user details in session storage
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = './dashboard.html'; // Redirect to user dashboard
    } else {
        alert("Invalid username or password.");
    }
}




window.onload = function() {
    const loggedkey = localStorage.getItem("loggedkey");
    document.getElementById('welcomeuser').innerHTML = `<i class="fa-solid fa-user fa-fade"></i> Welcome ${loggedkey}`;
  }
  
