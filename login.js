document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signUpBtn = document.getElementById('signUpBtn');
    const signInBtn = document.getElementById('signInBtn');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    signUpBtn.addEventListener('click', () => {
        // Perform any sign-up logic here
        window.location.href = 'index.html';
    });

    signInBtn.addEventListener('click', () => {
        // Perform any sign-in logic here
        window.location.href = 'index.html';
    });
});