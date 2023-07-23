const dotenv = require(`dotenv`);
const express = require(`express`);
const bodyParser = require(`body-parser`);
const hbs = require(`hbs`);
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

// Set handlebars as view engine
app.set(`view engine`, `hbs`);

hbs.registerPartials(__dirname + '/views/partials');

// Set-up public folder and routes
app.use(express.static(`public`));
app.use(bodyParser.urlencoded( {extended: false} ))
app.use(`/`, routes);

// Server response for confirmation
app.listen(port, hostname, function() {
    console.log(`Server running at: `);
    console.log(`http://` + hostname + `:` + port);
});