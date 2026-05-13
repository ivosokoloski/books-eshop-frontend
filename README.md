# Bookshop Application

[🔗 Go to Backend Repository (Spring Boot)](https://github.com/ivosokoloski/books-eshop-backend)

**Bookshop Application** is a professional full-stack web application designed for managing an online bookstore. The project focuses on integrating a **Spring Boot REST API** with a **React (TypeScript)** frontend, utilizing modern security methods and data management patterns.

---

### 📌 Description
The application provides a complete system for managing a book catalog through a sophisticated user interface. The primary objective is to demonstrate secure communication between an independent frontend and a backend system using token-based authentication and structured API calls.

### 🧱 Architecture
The project is built using a **Decoupled Architecture**:
* **Backend (Spring Boot):** A REST API that executes business logic and manages the database.
* **Frontend (React & TypeScript):** A Single Page Application (SPA) utilizing strict typing for stable data interaction and predictable state management.
* **Communication:** Data exchange in JSON format via strictly defined REST endpoints.

### ⚙️ Functionalities
* **Full CRUD System** – Create, Read, Update, and Delete books in real-time.
* **Token-based Authentication** – Secure user login with token generation and server-side validation.
* **Inventory Management** – Automatic updates of book availability and stock status.
* **Typed API Client** – Leveraging TypeScript interfaces to map responses from Spring Boot controllers, ensuring type safety across the network layer.
* **Advanced Filtering** – Dynamic filtering through titles, authors, and categories.

### 🔐 Security (Spring Security)
The security layer is implemented to protect private routes and sensitive operations:
* **JWT / Token Security** – Every protected resource is secured via token validation within the request headers.
* **Authentication & Authorization** – Access control for CRUD operations (e.g., only authorized administrators can modify or delete records).
* **CORS Configuration** – Configured to allow secure cross-origin communication between the React frontend and Spring Boot backend.

### 🛠 Technologies Used
* **Java / Spring Boot** (Backend Framework)
* **Spring Security** (Security Layer)
* **React.js** (Frontend Library)
* **TypeScript** (Programming Language)
* **PostgreSQL** (Relational Database)
* **Spring Data JPA** (ORM)
* **Axios** (HTTP Client)

### 🎨 Design Concept
* **Cyber-Minimalist Aesthetic** – Dark mode with neon accents and modern "glassmorphism" effects.
* **Responsive Layout** – Fully optimized display for all device types and screen sizes.
* **Interactive UI** – Dynamic components with instant feedback for user actions.

### 🎯 Project Goal
The core focus of the **Bookshop Application** is mastering the connection between React and Spring Boot via secure REST endpoints. The project highlights the necessity of **Token Authentication** in modern web development and the advantages of using **TypeScript** to eliminate runtime errors during full-stack integration.
