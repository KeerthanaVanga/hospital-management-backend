# Project Setup

This project uses **Cloudinary**, **MongoDB**, **Razorpay**, and **JWT authentication**.  
Follow the steps below to set up and run the application.

---

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
npm install
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

MONGODB_URI=your_mongodb_connection_string

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

JWT_SECRET=your_jwt_secret

PORT=4000

FRONTEND_URL=http://localhost:3000

npm run dev
npm start


PAYMENT_SUCCESS_URL=http://localhost:3000/payment-success
PAYMENT_FAILURE_URL=http://localhost:3000/payment-failure
