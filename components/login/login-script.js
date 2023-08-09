let loginForm = document.getElementById('login-form-template');
$('#body-content').hide();

$.validator.addMethod('strongpassword', function (value, element) {
    return this.optional(element) || /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(value);
}, 'Password must contain at least one lowercase letter,one uppercase letter,one digit,one special character and is at least eight characters long');

function loginUser(email, password) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(user);

    return (user.email === email && user.password === password);
}

$('#login-form-template').validate({
    rules: {
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            strongpassword: true,
        }
    },
    messages: {
        email: {
            required: 'Please Enter email',
            email: 'Please enter correct email',
        },
        password: {
            required: 'Please enter password',
        }
    }
});



loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    $('#login-btn').text('Invalid email or password');
    const email = document.querySelector('#input-email').value;
    const password = document.querySelector('#input-password').value;

    let isLogedIn = loginUser(email, password);

    if ((email) && (password)) {
        if (isLogedIn) {
            $('#login-form').hide();
            $('#body-content').show();
        } else {
            // alert('Invalid email or password');
                $('#error-msg').text('Invalid email or password');
        }
    }
});
