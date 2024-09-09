# MediBook - Backend

MediBook Backend is the server-side component of the MediBook web application. This Node.js and Express.js API handles user authentication, appointments, and prescriptions, integrating with MongoDB for data storage.

## Features

- *User Authentication & Authorization*: JWT and bcrypt are used for secure user access.
- *Appointment Management*: APIs for creating, viewing, updating, and deleting appointments.
- *Prescription Management*: APIs for managing medical prescriptions.
- *RESTful API*: CRUD operations for appointments, prescriptions, and user profiles.

## Installation

1. Clone the repository:
  ```
   bash
   git clone https://github.com/pradeep1302/mern-task-app-backend.git
   ```

2. Navigate to the project directory:
  ```
   bash
   cd medibook-backend
   ```

3. Install dependencies:
  ```
   bash
   npm install
   ```

4. Set up environment variables:

   - Create a .env file in the root directory and add the following variables:
    ```
     bash
     MONGO_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

5. Run the server:
  ```
   bash
   npm start
   ```

6. The server will be running on http://localhost:5000.

## API Endpoints

- *User Authentication*:
  - POST /api/auth/signup: Register a new user
  - POST /api/auth/login: Login a user

- *Appointments*:
  - GET /api/appointments: Get all appointments
  - POST /api/appointments: Create a new appointment
  - PUT /api/appointments/:id: Update an existing appointment
  - DELETE /api/appointments/:id: Delete an appointment

- *Prescriptions*:
  - GET /api/prescriptions: Get all prescriptions
  - POST /api/prescriptions: Create a new prescription
  - PUT /api/prescriptions/:id: Update an existing prescription
  - DELETE /api/prescriptions/:id: Delete a prescription

## Technologies Used

- *Node.js*: JavaScript runtime for building the backend.
- *Express.js*: Web framework for creating the RESTful API.
- *MongoDB*: NoSQL database for storing user data, appointments, and prescriptions.
- *Mongoose*: ODM for MongoDB, used for data modeling and validation.
- *JWT*: For secure authentication.
- *bcrypt*: For password hashing and security.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
