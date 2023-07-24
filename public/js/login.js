$(document).ready(function () {

    $('#loginbtn').click(function () {
        var userName = validator.trim($('#username').val());
        var userpass = validator.trim($('#userpass').val());

        $.post('/userLogin', { userName: userName }, '')

    });
});

