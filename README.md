                            skygoal
                  
User Authentication API
This is a simple user authentication API built with Node.js, Express.js, MongoDB, and JWT (JSON Web Tokens).

Features:
User Registration: Allows users to register by providing a username, email, password, and gender. Passwords are securely hashed before being stored in the database.
User Login: Users can log in using their username and password. Upon successful login, a JWT token is generated and sent back to the client for authentication in subsequent requests.
Get User Details: Authorized users can retrieve a list of all registered users.
Setup

Clone the repository:
git clone <repository_url>

Install dependencies:
npm istall

Set up environment variables:Create a .env file in the root directory and add the following:
MONGODB_URI=mongodb://localhost:27017/skygoal
SECRET_KEY=kusuma

Start the server:
node app.js

Endpoints

POST /:Register with Username,Password,Email,Gender.

POST /login: Login with username and password.

GET /get: Get details of all users (requires authentication).
Headers
Authorization: Bearer <token>




Sure! Here's a simplified README file for your application:

User Authentication API
This is a simple user authentication API built with Node.js, Express.js, MongoDB, and JWT (JSON Web Tokens).

Features
User Registration: Allows users to register by providing a username, email, password, and gender. Passwords are securely hashed before being stored in the database.
User Login: Users can log in using their username and password. Upon successful login, a JWT token is generated and sent back to the client for authentication in subsequent requests.
Get User Details: Authorized users can retrieve a list of all registered users.
Setup
Clone the repository:
bash
Copy code
git clone <repository_url>
Install dependencies:
bash
Copy code
npm install
Set up environment variables:Create a .env file in the root directory and add the following:
plaintext
Copy code
MONGODB_URI=mongodb://localhost:27017/skygoal
SECRET_KEY=kusuma
MONGODB_URI: MongoDB connection string.
SECRET_KEY: Secret key used for JWT token generation and verification.
Start the server:
bash
Copy code
npm start
Endpoints
POST /: Register a new user.
Request body:
json
Copy code
{
  "Username": "example",
  "Email": "example@example.com",
  "Password": "password123",
  "Gender": "male"
}
POST /login: Login with username and password.
Request body:
json
Copy code
{
  "Username": "example",
  "Password": "password123"
}
GET /get: Get details of all users (requires authentication).
Headers:
Authorization: Bearer <token>


Technologies Used:
Node.js
Express.js
MongoDB
JWT (JSON Web Tokens)
bcrypt (Password hashing)

Author:
Kusuma Latha

contact:
kusumalathayele@gmail.com
