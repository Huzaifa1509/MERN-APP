# MERN-APP

This is a full-stack MERN (MongoDB, Express, React, Node.js) application with separate backend and frontend folders. The project demonstrates a product management system with basic CRUD operations.

## Project Structure

```plaintext
MERN-APP/
├── MERN STACK APP 01/
│   ├── backend/       # Node.js & Express backend
│   └── frontend/      # React frontend
```

### Backend

The backend folder contains the Express API that handles product management, connecting to MongoDB for data storage.

### Frontend

The frontend folder contains a React app for interacting with the API, allowing users to view, create, update, and delete products.

## Features

- **Backend**: REST API with CRUD operations
- **Frontend**: React-based UI for managing products
- **Database**: MongoDB for data storage
- **CORS Support**: Cross-Origin Resource Sharing to connect frontend and backend

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB (local or MongoDB Atlas for cloud storage)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Huzaifa1509/MERN-APP.git
   ```

2. **Navigate to the backend folder:**

   ```bash
   cd MERN-APP/MERN STACK APP 01/backend
   ```

3. **Install backend dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `backend` folder:

   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

5. **Start the backend server:**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

6. **Navigate to the frontend folder:**

   Open a new terminal window and go to the frontend directory:

   ```bash
   cd MERN-APP/MERN STACK APP 01/frontend
   ```

7. **Install frontend dependencies:**

   ```bash
   npm install
   ```

8. **Run the frontend app:**

   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

### CORS Configuration

To allow communication between the frontend and backend, CORS has been enabled on the backend server for `http://localhost:3000`.

## API Endpoints (Backend)

These are the main routes available:

| Method | Endpoint              | Description                    |
|--------|------------------------|--------------------------------|
| GET    | `/api/products`       | Get all products               |
| GET    | `/api/products/:id`   | Get product by ID              |
| POST   | `/api/products`       | Create a new product           |
| PUT    | `/api/products/:id`   | Update a product by ID         |
| DELETE | `/api/products/:id`   | Delete a product by ID         |

### Example Product Object

```json
{
  "_id": "product_id",
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "stock": 50
}
```

## Usage

1. **Add Products**: Use the frontend to add new products by entering details like name, description, price, and stock.
2. **View Products**: See a list of all products stored in MongoDB.
3. **Edit and Delete Products**: Update or delete products as needed.

## Acknowledgments

Built with:

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React
- **CORS**: Configured for local development

## License

This project is licensed under the MIT License.
