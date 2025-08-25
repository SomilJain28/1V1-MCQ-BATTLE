# 1v1 MCQ Battle Platform

A real-time, full-stack web application where users can manage and compete in multiple-choice question battles. This project was built with a Django REST Framework backend and a React frontend.

## Table of Contents

- [Overview](#overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Setup and Installation](#-setup-and-installation)
- [API Endpoints](#-api-endpoints)
- [Future Work](#-future-work)

## Overview

The 1v1 MCQ Battle Platform is a comprehensive web application designed to allow users to engage in real-time quiz competitions. The application features a secure authentication system and a complete content management system for creating and managing the multiple-choice questions that power the battles. The backend is a robust API built with Django, while the frontend is a dynamic and responsive Single Page Application (SPA) built with React and Vite.

## ✨ Features

- **Secure User Authentication:** Users can sign up, log in, and log out with a persistent session managed by JWT and cookies.
- **Full MCQ Management (CRUD):** Authenticated users have full control to create, read, update, and delete multiple-choice questions.
- **Protected Routes:** The MCQ management dashboard is secured and only accessible to logged-in users.
- **Dynamic UI:** The interface, built with Ant Design and styled with Tailwind CSS, is clean, responsive, and updates dynamically based on user authentication status.
- **API Integration:** A centralized Axios instance with interceptors automatically handles authentication tokens for secure communication with the backend.
- **User-Friendly Notifications:** Real-time feedback for actions like login success or errors is provided using React Toastify.

## 🛠️ Tech Stack

### Backend

- **Framework:** Django, Django REST Framework
- **Authentication:** djangorestframework-simplejwt (for JWT)
- **CORS:** django-cors-headers
- **Database:** SQLite3 (development)

### Frontend

- **Framework/Library:** React.js, Vite
- **UI Components:** Ant Design
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Routing:** React Router DOM
- **API Client:** Axios
- **Notifications:** React Toastify
- **Cookie Management:** React Cookie

## 🚀 Setup and Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Python (3.8+) and Pip
- Node.js (v20.19+) and npm

### Backend Setup

1.  **Clone the repository:**

    ```sh
    git clone [https://github.com/SomilJain28/1V1-MCQ-BATTLE.git]
    cd 1V1-MCQ-BATTLE
    ```

2.  **Navigate to the backend directory:**

    ```sh
    cd backend
    ```

3.  **Create and activate a virtual environment:**

    ```sh
    # For macOS/Linux
    python3 -m venv venv
    source venv/bin/activate

    # For Windows
    python -m venv venv
    .\venv\Scripts\activate
    ```

4.  **Install Python dependencies:**
    _(Note: Create a `requirements.txt` file first by running `pip freeze > requirements.txt` in your activated venv after installing all packages.)_

    ```sh
    pip install -r requirements.txt
    ```

5.  **Run database migrations:**

    ```sh
    python manage.py migrate
    ```

6.  **Create an admin user:**

    ```sh
    python manage.py createsuperuser
    ```

7.  **Start the Django server:**
    ```sh
    python manage.py runserver
    ```
    The backend will be running at `http://127.0.0.1:8000`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    _(Open a new terminal window for this)_

    ```sh
    cd ../mcq-battle
    ```

2.  **Install Node.js dependencies:**

    ```sh
    npm install
    ```

3.  **Create an environment file:**
    Create a file named `.env` in the `mcq-battle` root directory and add the backend API URL:

    ```
    VITE_BASE_API_URL=[http://127.0.0.1:8000](http://127.0.0.1:8000)
    ```

4.  **Start the Vite development server:**
    ```sh
    npm run dev
    ```
    The frontend will be running at `http://localhost:5173`.

## 🌐 API Endpoints

The following API endpoints have been implemented:

| Endpoint          | Method   | Description                     | Authentication |
| ----------------- | -------- | ------------------------------- | -------------- |
| `/register`       | `POST`   | Creates a new user.             | None           |
| `/login`          | `POST`   | Logs in a user, returns tokens. | None           |
| `/mcqs`           | `GET`    | Retrieves a list of all MCQs.   | Required       |
| `/mcqs`           | `POST`   | Creates a new MCQ.              | Required       |
| `/mcqs/<uuid:pk>` | `GET`    | Retrieves a single MCQ by ID.   | Required       |
| `/mcqs/<uuid:pk>` | `PUT`    | Updates an existing MCQ.        | Required       |
| `/mcqs/<uuid:pk>` | `DELETE` | Deletes an MCQ.                 | Required       |

## 🔮 Future Work

- [ ] **Game Lobby System:** Implement backend models and frontend UI for a game lobby where users can create or join battle rooms.
- [ ] **Real-Time Gameplay:** Integrate Pusher for WebSocket communication to deliver questions and score updates in real-time during a battle.
- [ ] **Leaderboard:** Create a leaderboard to display top-scoring players.
