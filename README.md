# E-Commerce Product Page (Full Stack)

This is a full-stack e-commerce product page application built using **React (Vite) + Tailwind CSS** for the frontend, and **Node.js + Express + MongoDB** for the backend. It features dynamic product variants, EMI plans, and a fully functional and responsive UI.

## Deployed Demo Link
- **Frontend App:** https://onefi-frontend.vercel.app
- **Backend API:** https://1-fi-ecommerce-backend.vercel.app

---

## 🛠 Tech Stack Used

### **Frontend**
- **React.js** (via Vite)
- **Tailwind CSS** (for responsive and custom styling)
- **React Router DOM** (for page navigation)
- **Lucide React** (for modern icons)

### **Backend**
- **Node.js & Express.js** (REST API architecture)
- **MongoDB & Mongoose** (Database and ODM)


---

## Setup and Run Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- A running [MongoDB](https://www.mongodb.com/atlas/database) instance/cluster

### 1. Clone the repository
```bash
git clone <your-github-repo-url>
cd <repo-name>
```

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Create a .env file and add your MongoDB connection string:
echo "DATABASE_URL=your_mongodb_connection_string_here" > .env
echo "NODE_ENV=development" >> .env
echo "PORT=3000" >> .env

# Run the DB seed script to populate products
node seed.js

# Start the Node/Express server
npm run dev
# Server will run at http://localhost:3000
```

### 3. Frontend Setup
```bash
# In a new terminal tab/window
cd frontend

# Install dependencies
npm install

# Create a .env file for the backend API URL:
echo "VITE_API_URL=http://localhost:3000/api" > .env

# Start the Vite development server
npm run dev
# Frontend will run at http://localhost:5173
```

---

## Database Schema Used (Mongoose)

### 1. `Product` Model
Represents the core product template.

| Field | Type | Description |
|---|---|---|
| `name` | String | Name of the product (e.g., 'Apple iPhone 17 Pro') |
| `slug` | String | Unique URL-friendly identifier |
| `brand` | String | Brand name |
| `category` | String | Product category ('Smart Phones') |
| `description` | String | Product description |
| `images` | Array | Array of image URLs for the product |
| `variants` | Array | Nested array of `VariantSchema` (below) |

### 2. `Variant` Schema (Subdocument nested in Product)
Represents a specific hardware variation (color, storage).

| Field | Type | Description |
|---|---|---|
| `variantSlug` | String | Unique identifier used for dynamic routing |
| `color` | String | Variant color ('Desert Titanium') |
| `ram` / `storage` | String | RAM and disk storage capacity |
| `finish` | String | Physical finish ('Matte', 'Polished') |
| `mrp` | Number | Original Maximum Retail Price |
| `price` | Number | Discounted selling price |
| `images` | Array | Variant-specific images |
| `stock` | Number | Current available inventory |
| `isDefault` | Boolean | Whether this is the default loaded variant |
| `emiPlans` | Array | Nested array of `EmiPlanSchema` configurations |

### 3. `EmiPlan` Schema (Subdocument nested in Variant)

| Field | Type | Description |
|---|---|---|
| `provider` | String | Bank name ('HDFC Bank', 'ICICI Bank') |
| `tenureMonths` | Number | Plan duration in months |
| `interestRate` | Number | Interest rate % |
| `monthlyAmount` | Number | Calculated EMI amount per month |
| `totalAmount` | Number | Total payable sum |
| `cashback` | Number | Valid cashback offers on this plan |
| `isRecommended`| Boolean | Highlights the plan as 'Recommended' |

---

## 🌱 Database Seed Data (`seed.js`)

The `seed.js` script clears out the `products` collection and automatically inserts initial data:
- **Products Seeding:**
  - `Apple iPhone 17 Pro` (Variants: Desert Titanium & Black Titanium, 256GB & 512GB)
  - `Samsung Galaxy S24 Ultra` (Variants: Titanium Black & Titanium Gray, 256GB & 512GB)
  - `Google Pixel 9 Pro` (Variants: Obsidian & Porcelain, 128GB & 256GB)
- **Dynamic EMI Seeding:** It automatically provisions No Cost EMI and Standard EMI plans from banks like HDFC, ICICI, and Bajaj Finance against every single spec variant.

To run the seed script:
```bash
cd backend
node seed.js
```

---

## API Endpoints and Example Responses

### 1. Get All Products
`GET /api/products`

Retrieves the entire catalog of products and their respective variants.

**Example Response:**
```json
[
  {
    "_id": "64bf1d2c943e...",
    "name": "Apple iPhone 17 Pro",
    "slug": "apple-iphone-17-pro",
    "brand": "Apple",
    "category": "Smart Phones",
    "variants": [
      {
        "variantSlug": "apple-iphone-17-pro-desert-titanium-256-gb-smart-phones",
        "color": "Desert Titanium",
        "price": 127400,
        "isDefault": true,
        "emiPlans": [...]
      }
    ]
  }
]
```

### 2. Get Single Product by Variant Slug
`GET /api/products/variants/:variantSlug`

Retrieves a specific product block, matching exactly to the requested `variantSlug`, alongside parsing out the exact active variant to feed into the frontend state.

**Example Request:**
`GET /api/products/variants/apple-iphone-17-pro-desert-titanium-256-gb-smart-phones`

**Example Response:**
```json
{
  "product": {
    "_id": "64bf1d2c...",
    "name": "Apple iPhone 17 Pro",
    "brand": "Apple",
    "variants": [ /* ... all variants ... */ ]
  },
  "activeVariant": {
    "variantSlug": "apple-iphone-17-pro-desert-titanium-256-gb-smart-phones",
    "color": "Desert Titanium",
    "storage": "256GB",
    "ram": "8GB",
    "mrp": 134900,
    "price": 127400,
    "images": [
      "https://rukminim1.flixcart.com/...jpeg"
    ],
    "stock": 20,
    "isDefault": true,
    "emiPlans": [
      {
        "provider": "HDFC Bank",
        "tenureMonths": 6,
        "interestRate": 0,
        "monthlyAmount": 21234,
        "totalAmount": 127404,
        "cashback": 2000,
        "isRecommended": true
      }
    ]
  }
}
```
