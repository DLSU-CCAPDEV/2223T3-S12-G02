const dotenv = require(`dotenv`);
const express = require(`express`);
const bodyParser = require(`body-parser`);
const hbs = require(`hbs`);
const session = require('express-session');
const routes = require('./routes/routes.js');
const db = require(`./models/db.js`);

// Set-up Express
const app = express();

// Set-up DotEnv
dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

// connect to database
db.connect();

// setup sessions system
app.use(
    session({
        secret: 'Your_Secret_Key',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 60 * 60 * 1000 }, // Session duration in milliseconds (e.g., 1 hour)
    })
);

// Set handlebars as view engine
app.set(`view engine`, `hbs`);

hbs.registerPartials(__dirname + '/views/partials');

// HBS helper
// if equals
hbs.registerHelper('ifeq', function (a, b, options) {
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
});
hbs.registerHelper('ifnoteq', function (a, b, options) {
    if (a != b) { return options.fn(this); }
    return options.inverse(this);
});

// Set-up public folder and routes
app.use(express.static(`public`));
app.use(bodyParser.urlencoded( {extended: false} ))
app.use(`/`, routes);

// Server response for confirmation
app.listen(port, hostname, function() {
    console.log(`Server running at: `);
    console.log(`http://` + hostname + `:` + port);
});