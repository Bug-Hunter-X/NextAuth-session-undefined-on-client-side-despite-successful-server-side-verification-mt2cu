# NextAuth Client-Side Session Issue

This repository demonstrates a common issue encountered when using NextAuth.js for authentication within a Next.js application.  The problem arises when attempting to access the user's session on the client-side, where the session object is unexpectedly undefined even after successful server-side verification. This leads to UI inconsistencies and conditional rendering problems.

## Problem Description

The `unstable_getServerSession` function is used in a component to fetch the user's session data. However, even when the API route successfully authenticates and returns session data, the client-side rendering consistently shows `session` as undefined.

## Solution

The solution involves leveraging the `getSession` function from the NextAuth package and adapting the component's logic to efficiently handle both client-side and server-side rendering scenarios.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe the inconsistent behavior of the component, where the login status is not correctly reflected on initial load.