
# Threadtalk
Thread Talk is a web forum where users can post short discussion threads and other users can comment on said threads.

## Features

 - Deployed in [threadtalk.onrender.com](https://threadtalk.onrender.com)
 - Express app with MongoDB for database management
 - User registration and login
 - User details editing
 - User post history under profile tab
 - Hashed passwords using bcrypt
 - Posts with voting system
 - Comments with voting system
 - Search system that can search for post title, content, or author

## Developers
 - Coo, Hans
- Flaminiano, Peter
- Fuentespina, Aian
- Srivastava, Naman</li>

## Dependencies

 - bcrypt
 - body-parser
 - connect-mongodb-session
 - dotenv
 - express-session
 - express-validator
 - express
 - hbs
 - mongodb
 - mongoose
 - node
 - supervisor

## Set-up and Operation
To set-up the web app in local host simply complete the following steps:

 - Download the source files and extract to any folder
 - Open a command line or terminal on the root of the folder
 - Run `npm install` on the command line
 - Wait for dependencies to download and install
 - On the command line, input either:
	 - `node index.js` or
	 - `npx supervisor index.js`
 - Open any web browser
 - Enter `localhost:9090` to the address bar
	 - Note: If this does not work, try `127.0.0.1:9090`.
 - By now the web app should have started on your browser.

To access online, simply click on the following link
[threadtalk.onrender.com](https://threadtalk.onrender.com)

## FAQ

 - The website is not loading.
	 - If on local host, check the command line. Supervisor tends to crash, and restart when running.
 - I lost my password.
	 - Unfortunately, due to one-way hashing using bcrypt, it is impossible to retrieve your password. We can delete your account and allow you to re-register under the same username,  provided that username hasn't been taken.
