$(document).ready(function () {
    function checkFilled() {

        var username = validator.trim($('#username').val());
        var userEmail = validator.trim($('#email').val());
        var userpass = validator.trim($('#userpass').val());

        /*
            checks if the trimmed values are not empty 
        */

        var usernameEmpty = validator.isEmpty(username);
        var emailEmpty = validator.isEmpty(userEmail);
        var userpassEmpty = validator.isEmpty(userpass);

        return !usernameEmpty && !emailEmpty && !userpassEmpty;
    }
    function isValidUsername(field, callback) {

        var userName = validator.trim($('#username').val());
        var isValidLength = validator.isLength(userName, { min: 1 });

        if (isValidLength) {
            $.get('/getCheckUsername', { userName: userName }, function (result) {
                if (result.userName == userName) {

                    if (field.is($('#username')))
                        $('#usernameErr').text('Username is already taken.');
                    return callback(false);

                }

                else {
                    if (field.is($('#username')))
                        $('#usernameErr').text('');
                    return callback(true);

                }

            });
        }

        else {

            if (field.is($('#username')))
                $('#usernameErr').text('Username should not be empty');
            return callback(false);
        }
    }
    function isUniqueEmail(field, callback) {

        var email = validator.trim($('#email').val());
        var isValidLength = validator.isLength(email, { min: 1 });
        var isValidFormat = /@/.test(email);

        if (isValidLength && isValidFormat) {
            $.get('/getCheckEmail', { email: email }, function (result) {

                if (result.email == email) {
                    if (field.is($('#email')))
                        $('#emailErr').text('Email is already in use.');
                    return callback(false);
                }

                else {
                    if (field.is($('#email')))
                        $('#emailErr').text('');
                    return callback(true);
                }
            });
        }
        if (!isValidFormat) {
            if (field.is($('#email')))
                $('#emailErr').text('Email is not valid');
        }

        else if (!isValidLength) {
            if (field.is($('#email')))
                $('#emailErr').text('Email should not be empty');
            return callback(true);
        }

    }


    function isValidPassword(field) {

        var validPassword = false;

        var password = validator.trim($('#userpass').val());
        var confirmPass = validator.trim($('#confirmpass').val())
        var isValidLength = validator.isLength(password, { min: 8 });

        if (isValidLength && password == confirmPass) {
            if (field.is($('#userpass'))) {
                $('#passwordErr').text('');
                $('#conPasswordErr').text('');
            }
            validPassword = true;
        }

        if (password != confirmPass) {
            if (field.is($('#userpass')))
                $('#conPasswordErr').text("Password doesn't match");
        }

        if (!isValidLength) {
            if (field.is($('#userpass')))
                $('#passwordErr').text('Passwords should contain at least 8 characters.');
        }
        return validPassword;
    }

    function validateField(field, fieldName, error) {

        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if (empty) {
            field.prop('value', '');
            error.text(fieldName + ' should not be empty.');
        }

        else
            error.text('');

        var filled = checkFilled();

        var validPassword = isValidPassword(field);

        isValidUsername(field, function (validUsername) {
            isUniqueEmail(field, function (validEmail) {
                console.log(validUsername);
                if (filled && validPassword && validEmail && validUsername) {
                    $('#submit').prop('disabled', false);
                }

                else {
                    $('#submit').prop('disabled', true);
                }
            })
        })
    }
    $('#username').keyup(function () {
        validateField($('#username'), 'Username', $('#usernameErr'));
    });
    $('#email').keyup(function () {
        validateField($('#email'), 'E-mail', $('#emailErr'));
    });
    $('#userpass').keyup(function () {
        validateField($('#userpass'), 'Password', $('#passwordErr'));
    });
    $('#confirmpass').keyup(function () {
        validateField($('#userpass'), 'Password', $('#conPasswordErr'));
    });
});