# API Showcase

## Overview

The API Showcase project demonstrates a simple API interaction using a Django backend and a React frontend. It includes functionality for both retrieving and posting data through RESTful endpoints. This README provides details on how to set up, run, and test the project.

## Project Structure

- **Frontend**: Located in the `frontEnd` directory, built using React.
- **Backend**: Located in the `backBnd` directory, built using Django and Django REST Framework.

## Frontend

### Installation

1. Navigate to the `frontend` directory.
2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
4. The application will be available at http://localhost:5173.

## Components

- **HeroBanner**: Displays a welcome message.
- **Navbar**: Navigation bar with links to Home, About, and Contact.
- **HeroContainer**: Contains `PostCard` and `GetCard` components.
- **PostCard**: Allows users to submit data.
- **GetCard**: Fetches and displays data.

## Services

API calls are managed through the `apiService.js` file:

- **getData**: Fetches data from the API.
- **postData**: Posts data to the API.

## Backend

### Installation

1. Navigate to the `backend` directory.
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Running the Backend

1. Apply database migrations:
   ```bash
   python manage.py migrate
   ```
2. Start the development server:
   ```bash
   python manage.py runserver
   ```
3. The API will be available at http://localhost:8000.

## Endpoints

- **GET /api/data/**: Retrieves the latest data entry.
- **POST /api/data/create/**: Creates a new data entry.

## Testing

Tests for the backend are included in the `backend/api/tests.py` file:

- **test_post_data**: Checks successful data posting.
- **test_post_data_blank_field**: Validates error handling for blank fields.
- **test_get_data**: Verifies data retrieval functionality.
- **test_get_data_no_entries**: Ensures proper handling of no data available.
