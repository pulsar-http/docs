# Middleware

Middleware allows you to add functions that modify requests and responses. It can be used for tasks like logging, authentication, or request validation.

## Type definition

A middleware function takes the request (`req`) and a `next` function that continues to the next step.

```typescript
export type Middleware = (
    req: Request,
    next: () => Promise<Response>,
) => Promise<Response>;
```

## Example

Create a file called `server.ts` and add the following code.

```typescript
import { start, router, json, log } from "pulsar-http";

const { get } = router;

const routes = [
    get('/', async () => json({ message: "Hello, World!" })),
];

// Define middleware functions
const middlewares = [
    async (req, next) => {
        // Log request method, URL, and response status
        const response = await next();
        log(`${req.method} ${req.url} - ${response.status}`);
        return response;
    },
];

// Start the server with middleware
start({
    port: 3000,
    routes,
    middlewares,
});
```

## Summary
- Middleware functions modify requests/responses.
- They execute in the order defined.
- Use them for common tasks like logging, authentication, etc.