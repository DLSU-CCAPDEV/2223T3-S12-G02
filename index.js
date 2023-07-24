const dotenv = require(`dotenv`);
const express = require(`express`);
const bodyParser = require(`body-parser`);
const hbs = require(`hbs`);
const session = require('express-session');
const routes = require('./routes/routes.js');
const db = require(`./models/db.js`);
const MongoDBStore = require('connect-mongodb-session')(session);

// Set-up Express
const app = express();

// Set-up DotEnv
dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

// connect to database
db.connect();

// store for session
const store = new MongoDBStore({
    uri: 'mongodb+srv://aianfuentespina:AojZtvwgYY0QOS91@cluster0.45z065t.mongodb.net/?retryWrites=true&w=majority', // Your MongoDB connection URI
    collection: 'sessions', // Collection name to store sessions
});

// setup sessions system
app.use(
    session({
        secret: 'Your_Secret_Key',
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie: { maxAge: 60 * 60 * 1000 }, // Session duration in milliseconds (e.g., 1 hour)
    })
);

// Set handlebars as view engine
app.set(`view engine`, `hbs`);

// Use this to call session variables using
// {{session.VARIABLE}} in handlebars
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

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