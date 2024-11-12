# Authentication

Authentication is the process of verifying the identity of a user. This is important for securing your server and protecting your data.

Pulsar provides a simple way to add authentication to your server using a pre-built middleware.

It uses [Auth.js](https://authjs.dev).

## Setup

- Be sure to set `AUTH_SECRET` in your environment variables.
- The `AUTH_BASE_PATH` environment variable can be used to set the base path for the Auth.js routes. The default is `/api/auth`.

## Example

```typescript
import { start, router, authMiddleware, githubAuthProvider, text, getSession } from "@pulsar-http/core";

const routes = [
    router.get("/", async ({ request }) => {
        const session = await getSession(request);
        return text(`Hello, ${session?.user?.name ?? 'guest'}!`);
    }),
];

const auth = authMiddleware({
    providers: [
        githubAuthProvider({
            clientId: "YOUR_CLIENT_ID",
            clientSecret: "YOUR_CLIENT_SECRET"
        }),
    ]
});

start({
    routes,
    middlewares: [auth],
});
```

In this example:
- The `getSession` function is used to get the session data for the current request.
- The `auth` middleware is added to the server, which will handle authentication for the GitHub provider.

If you access the /api/auth/signin route and sign in with GitHub, the user's name will be displayed on the page.

### Route protection

You can protect routes by creating a higher-order handler that checks if the user is authenticated.

```typescript
import { getSession, error, type RouterHandler } from "@pulsar-http/core";

export const withAuth = <Body>(handler: RouterHandler<Body>): RouterHandler<Body> => {
    return async (...params) => {
        const session = await getSession(params[0]);

        if (!session?.user) {
            return error(401, 'You must be logged in to access this resource');
        }

        return handler(...params);
    };
};
```

You can then use this function to protect routes.

```typescript
import { start, router, authMiddleware, githubAuthProvider, text, getSession } from "@pulsar-http/core";
import { withAuth } from "./wrappers/withAuth";

const handler = async ({ request }) => {
    const session = await getSession(request);
    return text(`Hello, ${session?.user?.name}!`);
};

const routes = [
    router.get("/", withAuth(handler)),
];
```

## Summary
- Authentication is the process of verifying the identity of a user.
- Pulsar provides a simple way to use authentication using the `authMiddleware` middleware based on [Auth.js](https://authjs.dev).
- You can use the `getSession` function to get the session data for the current request.
- There is plenty of providers available, such as GitHub, Google, Facebook, and more.