# Contact Manager App

A Contact Manager application built with Node.js, Express, MongoDB, and JWT authentication for managing your contacts.

## Features

- User authentication using JWT (JSON Web Tokens).
- Create, Read, Update, and Delete (CRUD) operations for managing contacts.
- Secure and scalable backend using Node.js and Express.
- Data storage and retrieval using MongoDB.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SamuelNoel7/contact-manager.git
   cd mycontacts-backend/
   ```

2. Install dependencies:

   ```bash
   npm install bcrypt express mongoose express-async-handler jsonwebtoken
   ```

3. Configure environment variables:

   Create a `.env` file in the project root and add the following configuration:

   ```
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   ACCESS_TOKEN_SECRET=your_secret_key
   ```

   Replace `your_mongodb_uri` with your MongoDB connection URI and `your_secret_key` with your preferred JWT secret.

4. Start the application:

   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5001`.
   Please refer the package.json for other ways to run the app.

## Usage

- Register or log in using your credentials.
- Add, view, update, or delete contacts.
- Each user has access only to their own contacts.

## API Endpoints
- **GET /api/user/current**: To view current user's profile.
- **POST /api/user/register**: Register a new user.
- **POST /api/user/login**: Log in with existing user credentials to obtain a JWT token.
- **GET /api/contacts**: Get a list of all contacts.
- **GET /api/contacts/:id**: Get a specific contact by ID.
- **POST /api/contacts**: Create a new contact.
- **PUT /api/contacts/:id**: Update an existing contact by ID.
- **DELETE /api/contacts/:id**: Delete a contact by ID.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Mongoose (MongoDB ODM)

## Contributing

Contributions are welcome! Please feel free to open a new issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.


