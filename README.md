# Product Management API

This is a Product Management API built with Node.js, Express, and MongoDB. It provides basic CRUD (Create, Read, Update, Delete) operations for managing products, with full frontend-backend integration via RESTful API endpoints.

## Features

- Create, Read, Update, Delete (CRUD) operations for products
- CORS support for frontend-backend communication
- MongoDB for data storage
- Frontend integration ready with React

## Technologies Used

- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Frontend:** React (integration ready)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/product-management-api.git
   ```

2. Navigate into the project directory:
   ```bash
   cd product-management-api
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

5. Start the server:
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

## API Endpoints

Here are the available endpoints:

### Product Routes

| Method | Endpoint              | Description                    |
|--------|------------------------|--------------------------------|
| GET    | `/api/products`       | Get all products               |
| GET    | `/api/products/:id`   | Get product by ID              |
| POST   | `/api/products`       | Create a new product           |
| PUT    | `/api/products/:id`   | Update a product by ID         |
| DELETE | `/api/products/:id`   | Delete a product by ID         |

### Example Product Object

Each product object has the following structure:

```json
{
  "_id": "product_id",
  "name": "Product Name",
  "description": "Product Description",
  "price": 100,
  "stock": 50
}
```

## Frontend Integration

- This API is designed to work with any frontend that can make HTTP requests. If you are using React, make sure to configure the base URL for your requests to point to `http://localhost:5000` (or your live server URL).
- Update the `CORS` origin in `index.js` to allow requests from your frontend.

## Error Handling

- All routes include basic error handling to handle common issues like invalid requests or missing products.

## Acknowledgments

- Built with Node.js, Express, and MongoDB for efficient backend management.
- CORS is enabled to facilitate seamless frontend-backend integration.

## License

This project is licensed under the MIT License.
