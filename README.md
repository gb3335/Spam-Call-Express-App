# Spam Call Express App

This is a REST API built with Express.js for a mobile app that allows users to register, mark phone numbers as spam, and search for people by name or phone number in a global database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download Node.js from the official website. npm is included with Node.js.

### Installing

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.
4. Create a `.env` file in the root of your project and add your database connection string as `DB_CONNECTION_STRING`.

### Running the Application

To start the application, run `npm start` in the terminal. The application will start on `localhost:3000`.

### Running the Database Population Script

To populate the database with random, sample data, run `npm run populateDB` in the terminal.

## API Endpoints

The API has the following endpoints:

- `POST /users/register`: Register a new user.
- `POST /users/login`: Log in a user.
- `GET /users/profile`: View the profile of the logged-in user.
- `POST /spam/mark`: Mark a phone number as spam.
- `GET /spam/search/name`: Search for a person by name in the global database.
- `GET /spam/search/phone`: Search for a person by phone number in the global database.

## Built With

- [Express.js](https://expressjs.com/) - The web framework used
- [Sequelize](https://sequelize.org/) - The ORM used for the relational database
- [MySQL](https://www.mysql.com/) - The relational database
- [REST API](https://restfulapi.net/) - The architectural style used for the API
- [JWT](https://jwt.io/) - The authentication method used
- [bcrypt](https://www.npmjs.com/package/bcrypt) - The password hashing function used
- [dotenv](https://www.npmjs.com/package/dotenv) - The module used to load environment variables from a `.env` file
- [nodemon](https://www.npmjs.com/package/nodemon) - The tool used to automatically restart the server when changes are made
- [faker](https://www.npmjs.com/package/faker) - The module used to generate random, sample data
- [Postman](https://www.postman.com/) - The tool used to test the API
- [Visual Studio Code](https://code.visualstudio.com/) - The code editor used

## Authors

- Giriraj Parihar - [gb3335](https://github.com/gb3335)

## License

This project is licensed under the MIT License.
