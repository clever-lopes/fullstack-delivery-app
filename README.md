# Delivery App

An ordering app for a beverage distributor. Customers place orders, sellers move them through their statuses, and the customer confirms the delivery.

This repository holds two versions, and only the first one is complete.

## 2022 version: team project at Trybe

Snapshot: [`0dddb13`](https://github.com/clever-lopes/fullstack-delivery-app/tree/0dddb13)

- **API:** Node.js, Express, Sequelize and MySQL, with JWT login and role-based routes for customers and sellers.
- **Orders:** the seller moves a sale to `PREPARANDO` and then `EM TRÂNSITO`, and the customer marks it `ENTREGUE`.
- **Front end:** React, with login, registration, product list and order details.

Built by a team of five. I wrote about 30% of the code, almost all of it on the API.

## Rewrite in progress (solo, TypeScript)

The `main` branch is a rewrite I started alone in January 2025 and have not finished:

- Turborepo monorepo with `apps/back-end` and `apps/front-end`
- API on Fastify, Zod and Prisma with PostgreSQL
- Front end on Next.js and Tailwind CSS

Done so far: login and customer registration. Products and sales still live in the old code and are not wired into the new API yet.

## Running the rewrite

Needs Node 18+ and a PostgreSQL database.

```bash
npm install
cd apps/back-end
export DATABASE_URL="postgresql://user:password@localhost:5432/delivery"
npx prisma migrate dev
npx prisma db seed
cd ../..
npm run dev
```

The API listens on port 3001 and the front end on Next.js's default port, 3000.
