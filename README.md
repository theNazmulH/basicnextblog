This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



## Task 1: Project Setup


Create a new Next.js project using the latest version (Next.js 13).


 


## Task 2: Create Pages


Create three pages: Home, Blog, and Post.


In the Home page, display a welcome message and provide a link to the Blog page.


In the Blog page, display a list of blog post titles. Clicking on a title should navigate to the respective Post page.


 


## Task 3: Data and Routing


Create a data folder in your project and add a blogData.json file.


Populate blogData.json with an array of at least 3 blog post objects. Each object should have properties like id, title, content, and date.


Implement routing so that clicking on a blog post title on the Blog page takes you to the corresponding Post page.


In the Post page, display the blog post title, content, and date.


 


## Task 4: Styling


Use CSS modules to style your components. Create a separate CSS module for each component/page.


Style the navigation links, blog post list, and individual blog post page for a visually appealing design.


 


## Task 5: Deploy


Deploy your Next.js app using a platform of your choice (Vercel, Netlify, etc.).


Ensure that the deployed app works correctly, including routing and fetching data from blogData.json.