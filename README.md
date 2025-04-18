# ChatApp
A modern, responsive Realtime Chat Application built with React and Firebase, enabling users to connect, chat, and share messages instantly. It features real-time messaging, emoji support, user authentication, and an intuitive chat UI.

![Screenshot 2025-04-18 153221](https://github.com/user-attachments/assets/0b8b1d89-950d-4a8e-b3dc-f3b7c3dadfaa)
---

## 🚀 Features

- 🔐 **Firebase Authentication + Firestore Sync**  
  Sign up and log in with email and password. User data is synced in Firestore after authentication.

- 💬 **Real-time Messaging (Text Only)**  
  Message anyone in real time with live updates via Firestore.

- 🧠 **Global State Management with Zustand**  
  Auth state, user data, and chat selections are handled globally using Zustand.

- 🔍 **Smart Search & Filter**  
  Find users or chats instantly with optimized React search filtering.

- 🚫 **Block / Unblock Users**  
  Toggle user access to chats by blocking or unblocking in real time.

---

## 🛠️ Tech Stack

- **React.js** – Frontend library  
- **Firebase**
  - Authentication – Secure login/signup
  - Firestore – Real-time NoSQL database
- **Zustand** – Lightweight React state management
- **Tailwind CSS** – Utility-first styling
- **React Toastify** – For clean and simple notifications
- **React Emoji Picker** – Adds emoji support in messages
- **React Icons** – Rich icon library
- **Vite** – Fast bundler and dev environment

---
## 📋 Sections

- **🔐 Login & Signup**  
  Firebase Authentication using email and password with real-time form validation.

- **🏠 Home / Chat Dashboard**  
  Displays recent conversations, search bar, and active chats using Zustand store.

- **🔎 User Search**  
  Search for other users from Firestore and start a new chat.

- **💬 Chat Window**  
  Real-time messaging with auto-scroll and emoji support using `react-emoji-picker`.

- **⚙️ Block / Unblock Feature**  
  Manage user permissions by blocking/unblocking users directly from the chat.

- **🔔 Notifications**  
  Toast notifications for user actions and system feedback using `react-toastify`.

- **👤 Add New User**  
  Allows adding a user to start new chats (post-authentication).

- **🌐 Responsive UI**  
  Fully responsive design using Tailwind CSS and glassmorphic styles for chat interface.
---
## 📦 Getting Started

### ⚙️ Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Firebase project (with Authentication + Firestore enabled)

### 📥 Installation

Clone the repository:

```bash
git clone https://github.com/saanvibsl-3106/ChatApp.git
cd ChatApp

npm run dev
# or
yarn dev

http://localhost:5173
---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- **Firebase** – For providing authentication and real-time database services.
- **Zustand** – A simple state management tool for React used in this app.
- **React** – A popular library for building user interfaces.
- **Tailwind CSS** – A utility-first CSS framework for styling the app quickly.
- **React Toastify** – For displaying toast notifications to users in real-time.
- **React Emoji Picker** – Allows the inclusion of emojis in chat messages.
- **React Icons** – Used for enriching UI with beautiful icons.
- **Inspiration** – From modern chat UI/UX designs and real-time messaging apps.
