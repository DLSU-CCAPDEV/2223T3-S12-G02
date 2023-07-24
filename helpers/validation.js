const { check } = require('express-validator');

const validation = {
    registerValidation: function () {

        var validation = [

            check('username', 'Username should not be empty.').notEmpty(),

            check('email', 'Email Address should not be empty.').notEmpty(),

            check('userpass', 'Passwords should contain at least 8 characters.')
                .isLength({ min: 8 }),
        ];

        return validation;
    }
}
module.exports = validation;