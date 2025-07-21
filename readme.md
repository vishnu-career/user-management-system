# 🧑‍💼 User Management System

A full-stack web application to manage candidate records with add, edit, delete, and view functionality — built using **React**, **Node.js**, and **MySQL**.

---

## 🚀 Features

- ➕ Add New Candidates
- 📝 Edit Existing Records
- ❌ Delete with Confirmation
- 🔍 View All Candidates in a Table
- ✅ Validations for Name, Email & Phone
- 🖼️ Professional UI (Form & Table)
- 🔁 Responsive & Mobile Friendly

---

## 🧰 Tech Stack

- **Frontend**: React.js, Bootstrap 5, React Icons
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Others**: Axios, dotenv

---

## 🗂️ Folder Structure

user-management/
├── client/ # React Frontend
├── server/ # Node + Express Backend
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1️⃣ Clone this repository

```bash
git clone https://github.com/vishnu-career/user-management-system.git
cd user-management-system
2️⃣ Setup Backend
bash
Copy
Edit
cd server
npm install
✅ Create a .env file in the server/ folder with:

ini
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=user_management
PORT=5000
💡 Make sure you have a MySQL database named user_management created.

3️⃣ Run Backend
bash
Copy
Edit
node server.js
Server will run at: http://localhost:5000

4️⃣ Setup Frontend
bash
Copy
Edit
cd ../client
npm install
5️⃣ Run Frontend
bash
Copy
Edit
npm start
React app will run at: http://localhost:3000
```
