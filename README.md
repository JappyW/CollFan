## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Assumptions and decisions:
- account and diamond pages should be protected, so no unauthorized used can access them
- using server components over client components
- $ balance and diamond balance should be saved in local storage separately for each user
- user should be able to sign up with name, email and password
- displayed balance on the diamonds page to prevent unnecessary reloads in other components
- used custom hook for interacting with localStorage
- leveraged next.js' page groups to modify the layouts for protected pages
- used ShadCN (TailwindCSS) library for some of the components
- used AI to generate the markup for Landing Page

## Future improvements
- better color scheme on Landing page
- better validation and handling for forms, preferably using zod/yup
- cart system for purchasing diamonds
- more info on the creator and game pages
