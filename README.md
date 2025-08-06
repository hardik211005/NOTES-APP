# 📝 Notes App

This is a **full-stack Notes App** built with React, Node.js, Express, and MongoDB. It supports user authentication, a public home page, and a protected notes space for creating and viewing personal notes.

---

## ✨ Features

✅ **User Authentication** – Register and log in with a username, email, and password.  
✅ **Home Page** – Public landing page accessible to everyone.  
✅ **Protected Notes Page** – Accessible only to authenticated users, allowing them to create and view their own notes.

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/hardik211005/NOTES-APP.git
cd NOTES-APP

2️⃣ Install dependencies
For the frontend:
cd frontend
npm install


For the backend:
cd backend
npm install


3️⃣ Configure environment variables
Create a .env file inside the backend/ directory with the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


4️⃣ Start the development servers
In one terminal (for the backend):

cd backend
npm run dev


In another terminal (for the frontend):

cd frontend
npm run dev


🛡 Authentication
After a successful login, a JWT token is stored in localStorage.

The /notes page is protected: it can only be accessed when logged in.

API requests include the token in the Authorization header as a Bearer token.
