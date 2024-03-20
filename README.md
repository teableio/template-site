This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

# Teable Template Site

Welcome to the official repository of the Teable Template Site, a live demonstration and functional blueprint for building applications with Teable. This repository hosts the actual code running at [template.teable.io](https://template.teable.io), serving as a Template Center for Teable users.

## About This Project

This project isn't just a showcase; it's a fully operational codebase that provides a Template Center service for Teable. It demonstrates how to leverage Teable's API to create a dynamic website with just basic knowledge of React and HTML.

### What This Project Contains

- **Teable API Integration**: Practical examples of how to make API requests, filter data, and establish field mappings with Teable.
- **Data Storage**: All data is stored within a Teable base, accessible via API.
- **Simplified Codebase**: The [core request code](src/app/api.ts) is concise, spanning just a few dozen lines, and is straightforward to understand with detailed comments provided in the code.

### Pages

The site comprises two main pages:
- **[Home Page](src/app/page.tsx)**: The central hub of the template site.
- **[Detail Page](src/app/t/[slug]/page.tsx)**: Individual detail pages for each template.

### Deployment
This site is deployed on Vercel using their free tier service. It showcases how efficiently a Teable-based project can be deployed and scaled on a modern cloud platform.

## Getting Started

To get started with this project:
1. Clone the repository to your local machine.
2. Ensure you have Node.js installed to run the project locally.
3. Install the dependencies with `pnpm install`.

### Environment Setup

To run this project locally, you need to configure environment variables critical for connecting to Teable's API. Follow these steps to set up your environment:

**AUTH_TOKEN**

Create a personal access token at [Teable Personal Access Tokens](https://app.teable.cn/setting/personal-access-token). Ensure you grant the necessary permissions for the token to interact with your Teable data.

**TABLE_ID** and **VIEW_ID**

visit [Template Management](https://template.teable.io/t/recS2CiVjWak6EQ7vG7) template, and use it in your space.

Then, enter the table copy the table id and view id.
> Navigate to your table within the Teable interface. In the URL, `tbl` followed by a series of characters indicates the `TABLE_ID`, and `viw` followed by characters represents the `VIEW_ID`. For example, in the URL `https://app.teable.io/base/bsecK4OyHBpinO4vvGR/tblvKxQjv7cEy43xxjB/viwLbdUyL9DQOprYlb2`, the `TABLE_ID` is `tblvKxQjv7cEy43xxjB` and the `VIEW_ID` is `viwLbdUyL9DQOprYlb2`.


1. In the project's root directory, find the `.env.example` file.
2. Copy `.env.example` and rename the copy to `.env.local`.
3. Open `.env.local` and fill in the values for the following environment variables:
```sh
AUTH_TOKEN=your-auth-token
TABLE_ID=the-table-id
VIEW_ID=the-view-id
```

Start the development server with `pnpm start`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
