const dotenv = require(`dotenv`);
const express = require(`express`);
const bodyParser = require(`body-parser`);
const routes = require('./routes/routes.js');

// Set-up Express
const app = express();

// Set-up DotEnv
dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

// Set handlebars as view engine
app.set(`view engine`, `hbs`);

// Set-up public folder and routes
app.use(express.static(`public`));
app.use(bodyParser.urlencoded( {extended: false} ))
app.use(`/`, routes);

// Server response for confirmation
app.listen(port, hostname, function() {
    console.log(`Server running at: `);
    console.log(`http://` + hostname + `:` + port);
});