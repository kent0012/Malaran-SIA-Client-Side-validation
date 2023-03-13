const form = document.getElementById('form');
const name = document.getElementById('name');
const lname = document.getElementById('lname');
const birthday = document.getElementById('birthday');
const email = document.getElementById('email');
const password = document.getElementById('tel');
const tel = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const lnameValue = lname.value.trim();
    const birthdayValue = birthday.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const telValue = tel.value.trim();
    const password2Value = password2.value.trim();

    if(nameValue === '') {
        setError(name, 'This field is required');
    } else {
        setSuccess(name);
    }
     if(lnameValue === '') {
        setError(lname, 'This field is required');
    } else {
        setSuccess(lname);
    }
    if(birthdayValue === '') {
        setError(birthday, 'This field is required');
    } else {
        setSuccess(birthday);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, ' This field is required');
    } else if (passwordValue.length < 11 ) {
        setError(password, 'Number must be at least 11 character.')
    } else {
        setSuccess(password);
    }
     if(telValue === '') {
        setError(tel, 'Password is required');
    } else if (telValue.length < 8 ) {
        setError(tel, 'Password must be at least 8 character.')
    } else {
        setSuccess(tel);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
