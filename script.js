document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            checkLoginInputs();
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', e => {
            e.preventDefault();
            checkRegisterInputs();
        });
    }

    function checkLoginInputs() {
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value.trim();

        if (username === '') {
            setErrorFor('login-username', 'Username cannot be blank');
        } else {
            setSuccessFor('login-username');
        }

        if (password === '') {
            setErrorFor('login-password', 'Password cannot be blank');
        } else {
            setSuccessFor('login-password');
        }

        const user = getUserByUsername(username);
        if (user && user.password === password) {
            alert('Login successful!');
        } else {
            setErrorFor('login-password', 'Invalid username or password');
        }
    }

    function checkRegisterInputs() {
        const fullName = document.getElementById('fullName').value.trim();
        const age = document.getElementById('age').value.trim();
        const email = document.getElementById('email').value.trim();
        const gender = document.getElementById('gender').value;
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const password = document.getElementById('password').value.trim();
        const checkPassword = document.getElementById('checkPassword').value.trim();

        if (fullName === '') {
            setErrorFor('fullName', 'Full Name cannot be blank');
        } else {
            setSuccessFor('fullName');
        }

        if (age === '' || isNaN(age) || age <= 0) {
            setErrorFor('age', 'Please enter a valid age');
        } else {
            setSuccessFor('age');
        }

        if (email === '') {
            setErrorFor('email', 'Email cannot be blank');
        } else if (!isEmail(email)) {
            setErrorFor('email', 'Not a valid email');
        } else {
            setSuccessFor('email');
        }

        if (gender === 'default') {
            setErrorFor('gender', 'Please select a gender');
        } else {
            setSuccessFor('gender');
        }

        if (phoneNumber === '' || isNaN(phoneNumber)) {
            setErrorFor('phoneNumber', 'Please enter a valid phone number');
        } else {
            setSuccessFor('phoneNumber');
        }

        if (password === '') {
            setErrorFor('password', 'Password cannot be blank');
        } else {
            setSuccessFor('password');
        }

        if (checkPassword === '') {
            setErrorFor('checkPassword', 'Password check cannot be blank');
        } else if (password !== checkPassword) {
            setErrorFor('checkPassword', 'Passwords do not match');
        } else {
            setSuccessFor('checkPassword');
        }

        if (getUserByEmail(email)) {
            setErrorFor('email', 'Email is already registered');
        } else if (getUserByUsername(fullName)) {
            setErrorFor('fullName', 'Username is already taken');
        } else {
            addUser({ username: fullName, email: email, password: password });
            alert('Registration successful!');
        }
    }

    function setErrorFor(inputId, message) {
        const formControl = document.getElementById(inputId).parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-group error';
        small.innerText = message;
    }

    function setSuccessFor(inputId) {
        const formControl = document.getElementById(inputId).parentElement;
        formControl.className = 'form-group success';
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/.test(email);
    }
});
