#  Event Management Application

## 1. Project Overview
Bellcorp Event Management is a full-stack web application that allows users to browse events, register for them, and manage their registrations in a personalized dashboard. It demonstrates authentication, database relationships, and dynamic event handling.

---

## 2. Features
- User registration and login with JWT authentication.
- Browse and search events by name.
- Register for events with seat capacity check.
- Dashboard showing all registered events.
- Responsive and polished UI with React.js.
- Passwords securely hashed with bcryptjs.

---

## 3. Technologies Used
- **Frontend:** React.js, Context API, CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JSON Web Token (JWT), bcryptjs
- **Deployment:** (Optional) Vercel for frontend, Render/Railway for backend

---

## 4. Project Structure

```bash
root/
├── server/
│   ├── models/        # Mongoose Schemas (User, Event, Registration)
│   ├── routes/        # API routes (auth, events, registrations)
│   ├── middleware/    # JWT protection
│   ├── .env           # Environment variables (Mongo URI, JWT secret)
│   └── server.js      # Entry point
├── client/
│   ├── src/
│   │   ├── components/ # Navbar, EventCard
│   │   ├── pages/      # Login, Register, Events, Dashboard
│   │   ├── context/    # AuthContext for user state
│   │   └── App.js      # Routes
│   └── package.json
└── README.md
```

---

## 5. Getting Started

### Backend
1. Navigate to the `server/` folder:
```bash
cd server
```
2. Install dependencies:
```bash
npm install
```
3. Create a .env file with your MongoDB URI and JWT secret:
```bash
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_secret_key>
PORT=5000
```
4. (Optional) Seed the database with initial events:
```bash
node seed.js
```
5. Start the server:
```bash
node server.js
```
---

### Frontend
1. Navigate to the client/ folder:
```bash
cd client
```
2. Install dependencies:
```bash
npm install
```
3. Start the frontend:
```bash
npm start
```
4. Open http://localhost:3000 in your browser.

---

## 6. Notes

- The first page after login/registration is the Events page.
- Only logged-in users can register for events.
- Users cannot register for the same event twice.

---

## Author

Srija Vallala
