Food Delivery App
A full-stack food ordering application that allows users to browse different shops, filter menus by categories, and manage a real-time shopping cart. Built with a focus on performance, type safety, and a seamless mobile-first user experience.

Features
Shop Selection: Browse a variety of registered food vendors/shops.
Dynamic Menu: Real-time menu updates based on the selected shop using TanStack Query.
Smart Filtering: Filter products by categories (Burgers, Drinks, Desserts).
Advanced Sorting: Sort items by Name (A-Z, Z-A) and Price (Low to High, High to Low).
Persistent Cart: Manage orders with a centralized store using Zustand, ensuring the cart state is preserved.
Type Safety: End-to-end typing with TypeScript and schema validation with Zod.
Responsive Design: Fully optimized for mobile, tablet, and desktop views using Tailwind CSS.

Tech Stack
Frontend
Framework: Next.js (App Router)

State Management: Zustand (for Cart & Global UI state)
Data Fetching: TanStack Query (React Query) + Axios
Forms & Validation: React Hook Form + Zod
Styling: Tailwind CSS

Backend
Runtime: Node.js
Framework: Express.js
Database: MongoDB
API Design: REST API
