This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About This Project
This project is the [template center](https://template.teable.io) that teable is currently running, and because it is so simple, it is suitable for a novice demo

### What This Project Contains

- **Teable API Integration**: Practical examples of how to make API requests, filter data, and establish field mappings with Teable.
- **Data Storage**: All data is stored within a Teable base, accessible via API.
- **Simplified Codebase**: The [core request code](src/app/api.ts) is concise, spanning just a few dozen lines, and is straightforward to understand with detailed comments provided in the code.

### Pages

The site comprises two main pages:
- **[Home Page](src/app/page.tsx)**: The central hub of the template site.
- **[Detail Page](src/app/t/[slug]/page.tsx)**: Individual detail pages for each template.

## Getting Started

To get started with this project:
1. Clone the repository to your local machine.
2. Ensure you have Node.js installed to run the project locally.
3. Install the dependencies with `pnpm install`.

### Environment Setup

To run this project locally, you need to configure environment variables critical for connecting to Teable's API. Follow these steps to set up your environment:

#### AUTH_TOKEN

Create a personal access token at [Teable Personal Access Tokens](https://app.teable.cn/setting/personal-access-token). Ensure you grant the necessary permissions for the token to interact with your Teable data.

#### TABLE_ID and VIEW_ID

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

#### FIELD ID MAP
Check out [src/app/api.ts](src/app/api.ts) you will see this map and you should replace it to your own
Click on the gear ⚙️ in the top right corner of the table and you will see the id of all the fields
```code
/**
 * A mapping of field names to their respective ID in Teable.
 * This ensures robustness in the application as it allows access to record data
 * via field IDs rather than names, which can change in the Teable UI without affecting the application.
 * **if you want to use it, you might to change the fieldIdMap to your own fieldIdMap**
 *
 */
export const fieldIdMap = {
  name: "fldjLW98cEIM1HPs725",
  description: "fldYehDZnQa2zOIwYTW",
  baseId: "flduDv4n46lFjjTtg53",
  cover: "fldGvaTfxIt7BANmhAE",
  recommend: "fldt47H4rjXaB2RYADb",
  tags: "fldJT5IwA5AmhRFDjL0",
  shortCut: "fldAyyj9nmgt5WPdyEE",
  inSiteAddress: "fldXLcku2BHJ3paX4lN",
  doc: "fldF6wHXFqhXIYpzr4R",
};

```

### Running the Project
Start the development server with `pnpm start`.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
