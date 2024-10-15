# Rate Limiter

Rate limiting helps control how many requests a client can make within a specific time.

This prevents abuse and protects your server.

## Example

```typescript
import { start, router, json, rateLimitMiddleware } from "@pulsar-http/core";

const { get } = router;

const routes = [
    get('/', async () => json({ message: "Hello, World!" })),
];

// Define rate limiting middleware
const middlewares = [
    rateLimitMiddleware({
        windowMs: 60000, // Time window (1 minute)
        maxRequests: 100 // Max 100 requests per minute
    }),
];

// Start the server with rate limiting
start({
    port: 3000,
    routes,
    middlewares,
});

```

## Summary
- Rate limiting prevents excessive requests.
- Configure `windowMs` for the time window.
- Set `maxRequests` for allowed requests per window.