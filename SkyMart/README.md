# SkyMart

SkyMart is a responsive e-commerce storefront built with React, Vite, Tailwind CSS, and React Router. It provides a complete client-side shopping flow: local account registration and sign-in, product discovery, filtering and sorting, product details, a cart drawer, and demo checkout feedback.

> This repository is a front-end demonstration. It does not include a backend, real payment processing, server-side authentication, inventory management, or an order API.

## Features

- Local registration, sign-in, sign-out, guest-route, and protected-route flows
- A seeded catalog of 50 products across electronics, clothing, furniture, home, sports, and accessories
- Product search across product names, prices, ratings, and categories
- Category filtering and sorting by price or rating
- Product detail pages with descriptions, ratings, and feature lists
- Cart drawer with quantity controls, subtotal calculation, cart clearing, and demo checkout
- Toast-style feedback for cart and account actions
- Client-side routing with a custom not-found page
- SPA rewrite configuration for Vercel deployments

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Build tooling | Vite 7 |
| Styling | Tailwind CSS 4 |
| Routing | React Router 8 |
| Forms | React Hook Form |
| Icons | Lucide React |
| Animation library | GSAP |
| Linting | ESLint 9 |

## Prerequisites

Install [Node.js](https://nodejs.org/) 20.19+ or 22.12+ before running the project. npm is included with Node.js.

## Getting Started

1. Clone the repository and open it in a terminal.

   ```bash
   git clone <repository-url>
   cd SkyMart
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Start the development server.

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite, normally `http://localhost:5173`.

5. Create an account on `/register`, then sign in to access the storefront.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot module replacement. |
| `npm run build` | Produces an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally after `npm run build`. |
| `npm run lint` | Runs ESLint across the project. |

## Application Routes

| Route | Access | Purpose |
| --- | --- | --- |
| `/login` | Guest only | Sign in with a locally registered account. |
| `/register` | Guest only | Create a local account. |
| `/` | Signed in | Redirects to `/home`. |
| `/home` | Signed in | Storefront home page. |
| `/products` | Signed in | Product catalog, filtering, and sorting. |
| `/products/:id` | Signed in | Individual product details. |
| `/about` | Signed in | About page. |
| `*` | Signed in | Not-found page for unrecognized paths. |

## How It Works

### Authentication

SkyMart uses `localStorage` for a demonstration-only account flow. Registered users are stored under `sm_users`, and the current signed-in user is stored under `sm_user`. The protected-route wrapper redirects signed-out visitors to `/login`; the guest-route wrapper redirects signed-in visitors away from the login and registration pages.

Do not use this implementation for production authentication: passwords are stored in the browser and there is no server-side verification, hashing, session management, or authorization.

### Catalog and Filtering

The product catalog is seeded in `src/context/MyContext.jsx`, then shared across the application through React Context. The catalog view supports:

- Text search
- Category selection
- Price ascending and descending sort
- Highest-rated and lowest-rated sort

### Cart and Checkout

The cart is managed in the same context and opens as a drawer over the page. Users can add products, adjust quantities, remove products by reducing the quantity to zero, clear the cart, and use a demo checkout action. Demo checkout clears the cart and displays a notification; it does not create an order or charge a payment method.

## Project Structure

```text
SkyMart/
|- public/                 # Static favicon and browser-side helper assets
|- src/
|  |- assets/              # Bundled application assets
|  |- components/          # Shared UI, cart, navbar, product, and footer components
|  |- context/             # Shared product, cart, filter, and account state
|  |- pages/               # Route-level pages
|  |- routes/              # Application, guest, and protected routing
|  |- App.jsx              # Authenticated application shell
|  |- main.jsx             # React and router entry point
|  `- index.css            # Tailwind import and global theme styles
|- vite.config.js          # Vite, React, and Tailwind configuration
|- vercel.json             # SPA routing rewrite for Vercel
`- package.json            # Scripts and dependencies
```

## State and Browser Storage

`MyContext` is the central client-side state provider. It owns:

- The seeded product catalog
- Cart visibility and cart items
- Search, category, and sort values
- Toast notification state
- Registered users and the current user

The current implementation uses browser storage for demo state. Clearing site data in the browser resets local accounts and any persisted cart data. This behavior is local to each browser and device.

## Deployment

The project can be deployed to any static hosting provider that supports single-page applications.

For Vercel, `vercel.json` rewrites all paths to `index.html`, allowing direct navigation to client-side routes such as `/products/1`.

```bash
npm run build
```

Deploy the generated `dist/` directory, or connect the repository to Vercel and use its standard Vite build settings.

## Production Considerations

Before using SkyMart beyond a prototype, add:

- A backend and database for products, users, carts, and orders
- Secure authentication with password hashing, sessions or tokens, and server-side authorization
- A payment provider and server-side checkout validation
- Consistent cart persistence associated with authenticated users
- Server-side validation, error handling, loading states, and inventory controls
- Automated tests for account, cart, search, sort, and checkout flows
- Accessibility, responsive-layout, and cross-browser testing

## License

No license file is currently included. Add a license before distributing or accepting external contributions.
