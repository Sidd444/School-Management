
# School Management API

Backend API for managing school data, built with Node.js, Express.js, and MySQL.

## Features

*   **Add School:** Add new school records.
*   **List Schools:** Retrieve schools sorted by proximity to a user location.

## Technologies

*   Node.js, Express.js
*   MySQL

## API Endpoints

### 1. `POST /addSchool`

*   **Description:** Adds a new school.
*   **Body (JSON):**
    ```json
    {
        "name": "Oakwood High",
        "address": "123 Main Street, Anytown",
        "latitude": 34.0522,
        "longitude": -118.2437
    }
    ```

### 2. `GET /listSchools`

*   **Description:** Lists schools sorted by distance from user.
*   **Query Params:** `latitude`, `longitude`
*   **Example:** `GET /listSchools?latitude=34.0522&longitude=-118.2437`

## Live API Endpoint

[Backend Render API](https://school-management-hpeu.onrender.com)


## Postman Collection

[School Management PostMan Collection](https://github.com/Sidd444/School-Management/blob/main/School%20Management.postman_collection.json)

## Screenshots

### 1. Add School (Postman)

![screenshots/Screenshot 2026-05-01 201646.png]

### 2. List Schools (Postman)

![screenshots/Screenshot 2026-05-01 201732.png]

### 3. MySQL Table View

![screenshots/Screenshot 2026-05-01 201802.png]
