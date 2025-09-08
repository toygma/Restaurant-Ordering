# 🍽️ Lezzet Bahçesi Restaurant Platform

**Lezzet Bahçesi** is a modern platform for ordering delicious meals with ease and managing restaurant operations efficiently. It offers a seamless experience for customers and powerful tools for administrators.

## ✨ Features

- **User Panel**: Intuitive interface for browsing menus and placing orders.
- **Admin Panel**: Robust dashboard for menu management, order tracking, and user administration.
- **Modern Design**: Sleek UI built with **Ant Design**.
- **Node.js Backend**: Fast and secure server with **Node.js**, **Express**, and **Socket.IO**.
- **Real-Time Updates**: Real-time order tracking with **Socket.IO**.
- **Docker Support**: Easy deployment with **Docker**.
- **Secure Payments**: Integrated with **Iyzico** for reliable payments.

## 🛠️ Technologies Used

| Layer         | Technologies                          |
|---------------|---------------------------------------|
| **Frontend**  | React, Ant Design                     |
| **Backend**   | Node.js, Express, Socket.IO           |
| **Database**  | MongoDB                               |
| **Container** | Docker                                |
| **Payment**   | Iyzico                                |

## 🎯 Goal

**Lezzet Bahçesi** aims to simplify meal ordering for users and streamline restaurant management for owners.

## 🔗 Links

- **Live Demo**: [restaurant-ordering-687q.onrender.com](https://restaurant-ordering-687q.onrender.com)
- **YouTube Video**: [Demo Video](https://www.youtube.com/watch?v=S5UQe3KUgBk)
- **GitHub Repository**: [utkbkts/LezzetBahcesi](https://github.com/utkbkts/LezzetBahcesi)

## ⚙️ Setup Instructions

### Prerequisites
- **Node.js** and **npm** installed.
- **Docker** (optional, for containerized deployment).
- **MongoDB** instance (local or cloud-based).
- Valid **Iyzico** API keys for payments.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/utkbkts/LezzetBahcesi.git
   ```
2. **Navigate to Frontend Directory**:
 ```bash
   cd LezzetBahcesi/frontend
   ```
3. **Install Dependencies**:
 ```bash
   npm install
   ```
4. **Run the Project**:
 ```bash
   npm run dev
   ```

**Backend Configuration**
**Create a .env file in the backend directory with the following:**
 ```bash
JWT_SECRET=""
MONGODB_URI=""
PORT=5000
JWT_EXPIRES_TIME=""
COOKIE_EXPIRES_TIME=""
FRONTEND_URL=""
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
IYZIPAY_API_KEY=""
IYZIPAY_SECRET_KEY=""
ALPHABET=""
USER=""
APP_PASSWORD=""
SMTP_FROM_EMAIL=""
SMTP_FROM_NAME=""
```
**Replace placeholders with your configuration details.**
**Running with Docker**

 ```bash
Build Docker Images (from project root):
bashdocker compose build
 ```

 ```bash
Run Docker Containers:
bashdocker compose up -d
 ```


📝 Notes

Ensure all .env variables are set to avoid runtime errors.
MongoDB must be running and accessible for local development.
Iyzico requires valid API keys for payment processing.

🙌 Contributing
Contributions are welcome! Feel free to submit issues or pull requests on the GitHub repository.
📧 Contact
For questions or feedback, reach out via GitHub Issues.

⭐ If you like Lezzet Bahçesi, please give the repo a star!
