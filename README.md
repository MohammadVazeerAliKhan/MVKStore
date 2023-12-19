# MVKStore eCommerce Platform

> eCommerce platform built with the MERN stack & Redux.
> ![Capture](https://github.com/MohammadVazeerAliKhan/MVKStore/assets/119596941/c597e650-7586-4b3d-9926-f0b3a574c864)
![Capture2](https://github.com/MohammadVazeerAliKhan/MVKStore/assets/119596941/9e19dced-78b1-4792-9305-0b9b3f35f333)


It is a full-featured shopping cart with PayPal & credit/debit payments.

Check the website at https://mvkstore.onrender.com

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `.env.example` file to `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

