
## **E-Commerce Website Project**

A full-stack eCommerce application built with the **MERN stack** that includes features for both administrators and users. It provides a seamless shopping experience with payment integrations and a robust admin panel for product management.

---

## **Features**

### **Main Web (Customer Side)**
- **Product Listing**: View products with detailed information and categories.
- **Add to Cart**: Seamlessly add products to the cart and manage quantities.
- **Checkout**: Complete orders with **Stripe** and **Razorpay** payment options.
- **User Authentication**: Secure user login and registration with encrypted passwords.
- **Search Products**: Search and filter products easily.
- **Responsive Design**: Tailwind CSS ensures an optimized layout for all devices.

### **Admin Panel**
- **Product Management**: Add, update, and delete products with image uploads.
- **Order Management**: View and manage customer orders.

### **Backend**
- **Secure REST APIs**: Built with **Express.js** and protected with JWT authentication.
- **Database Management**: Use MongoDB for storing products, users, and orders.
- **File Uploads**: Images are uploaded to **Cloudinary** with **Multer**.
- **Payment Integration**: Online payments handled through **Razorpay** and **Stripe**.

---

## **Tech Stack & Libraries**

### **Frontend (React)**
| Library           | Description                                            |
|-------------------|--------------------------------------------------------|
| **React Router**  | Manage routes for seamless navigation.                 |
| **React Toastify**| Provide notifications for user actions.               |
| **Tailwind CSS**  | Utility-first framework for styling.                   |
| **Axios**         | Make HTTP requests to the backend.                     |

### **Backend (Node.js & Express)**
| Library           | Description                                            |
|-------------------|--------------------------------------------------------|
| **CORS**          | Connect frontend with backend securely.               |
| **Dotenv**        | Manage environment variables.                         |
| **Express**       | Framework to create REST APIs.                        |
| **Mongoose**      | Manage MongoDB database schemas and operations.       |
| **JSON Web Token**| User authentication and authorization.                |
| **Multer**        | Handle file uploads for images.                       |
| **Cloudinary**    | Store and manage uploaded images.                     |
| **Nodemon**       | Restart the server automatically during development.  |
| **Razorpay**      | Integrate online payments.                            |
| **Stripe**        | Alternative payment gateway for transactions.         |
| **Bcrypt**        | Encrypt and securely store user passwords.            |
| **Validator**     | Validate incoming user and form data.                 |
| **Axios**         | Connect backend APIs from the frontend.               |

---

## **Project Structure**

### **1. Main Web Frontend**

The customer-facing frontend allows product browsing, cart management, and checkout.

```bash
frontend/
├── src/
│   ├── components/
│   │   ├── BestSeller.jsx
│   │   ├── CartTotal.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LatestCollection.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsletterBox.jsx
│   │   ├── OurPolicy.jsx
│   │   ├── ProductItem.jsx
│   │   ├── RelatedProducts.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Skeleton.jsx
│   │   ├── Title.jsx
│   ├── context/
│   │   ├── LoadingContext.jsx
│   │   └── ShopContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Collection.jsx
│   │   ├── Contact.jsx
│   │   └── Home.jsx
│   │   └── Login.jsx
│   │   └── NotFoundPage.jsx
│   │   └── Orders.jsx
│   │   └── PlaceOrder.jsx
│   │   └── Product.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── public/
├── .env
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

### **2. Admin Frontend**

The admin panel allows for efficient management of products and orders.

```bash
admin/
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   ├── pages/
│   │   ├── Add.jsx
│   │   ├── List.jsx
│   │   ├── Orders.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

### **3. Backend**

The backend includes REST APIs for user authentication, product management, and payment processing.

```bash
backend/
├── config/
│   ├── cloudinary.js
│   └── mongodb.js
├── controllers/
│   ├── cartController.js
│   ├── orderController.js
│   ├── productController.js
│   └── userController.js
├── middleware/
│   ├── adminAuth.js
│   ├── auth.js
│   └── multer.js
├── models/
│   ├── orderModel.js
│   ├── productModel.js
│   └── userModel.js
├── routes/
│   ├── cartRoute.js
│   ├── orderRoutes.js
│   ├── productRoute.js
│   └── userRoute.js
├── server.js
├── .env
├── package.json
└── package-lock.json
```

---

## **Setup Instructions**

### **Backend**
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   CLOUDINARY_URL=your_cloudinary_url
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY=your_razorpay_key
   STRIPE_KEY=your_stripe_key
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

---

### **Frontend (Main Web & Admin)**
1. Navigate to the desired directory (`frontend` or `admin`):
   ```bash
   cd frontend
   cd admin
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---
