# ChatPulse

## Overview

ChatPulse is a real-time chat room application designed to provide seamless and instantaneous communication between users. The app features a modern, intuitive interface with real-time chat functionalities akin to popular messaging platforms. It is built using React for the frontend, Node.js and Express for the backend, and MongoDB for data management. Real-time interactions are powered by Pusher, ensuring smooth and immediate message delivery.

## Features

- **Real-Time Messaging**: Instantaneous chat functionality powered by Pusher.
- **User Authentication**: Secure account management with MongoDB.
- **Responsive UI**: Stylish and responsive interface using React and CSS.
- **Scalable Architecture**: Backend services deployed on Heroku and frontend on Firebase.

## Technologies Used

- **Frontend**:
  - React
  - CSS
  - Firebase (Deployment)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (Database)
  - Pusher (Real-Time Communication)
  - Heroku (Deployment)

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- Node.js
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/chatpulse.git
   cd chatpulse
   ```

2. **Install dependencies for both client and server**:

   ```bash
   # For the backend
   cd backend
   npm install

   # For the frontend
   cd ../frontend
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the `backend` directory and add the following:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   PUSHER_APP_ID=your_pusher_app_id
   PUSHER_KEY=your_pusher_key
   PUSHER_SECRET=your_pusher_secret
   PUSHER_CLUSTER=your_pusher_cluster
   ```

4. **Run the application**:

   ```bash
   # Start the backend server
   cd backend
   npm start

   # Start the frontend development server
   cd ../frontend
   npm start
   ```

   The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Project Structure

```plaintext
chatpulse/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── .env
├── README.md
└── package.json
```

## Usage

- **Starting a Chat**: Sign up or log in to start chatting with other users in real-time.
- **Managing Account**: Users can update their profile information and manage their account settings.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to [Pusher](https://pusher.com/) for their real-time messaging services.
- Special thanks to the open-source community for their invaluable contributions.
