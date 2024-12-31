# TaskManager 📝
TaskManager is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). 
It provides an intuitive platform for users to efficiently manage their daily tasks, prioritize activities, and stay organized.

## Key Features 🚀
User Authentication: Secure registration and login functionality with JWT authentication.

CRUD Operations: Create, read, update, and delete tasks with ease.

Task Prioritization: Categorize tasks by priority levels (High, Medium, Low).

Search & Filter: Quickly search and filter tasks by name.

Responsive Design: Fully responsive UI for a seamless experience across devices.


## Tech Stack 🛠️
Frontend: React.js with React Router for navigation and Axios for API integration.

Backend: Node.js and Express.js for RESTful APIs.

Database: MongoDB for storing task data.

Styling:  Bootstrap for modern and responsive UI.

Authentication: JSON Web Tokens (JWT) for secure access control.


## System Architecture 🌐


+--------------------+         +----------------------+
|    User Interface  |         |     REST API         |
| (React.js Frontend) |         |  (Node.js & Express) |
+--------------------+         +----------------------+
           |                               |
           |          HTTP Requests        |
           v                               v
+---------------------------------------------------+
|                  MongoDB Database                 |
|   (Stores tasks, user information, and metadata)  |
+---------------------------------------------------+


Frontend (React.js): The user interacts with the application through a responsive and dynamic interface. User actions (e.g., creating, updating, or deleting tasks) trigger API calls.

Backend (Node.js & Express): REST APIs handle incoming HTTP requests, process data, and interact with the database.

Database (MongoDB): Stores user details, task data, and application metadata securely and efficiently.
