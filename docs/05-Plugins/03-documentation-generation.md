# Documentation generation

Pulsar provides a simple way to generate documentation for your API using Swagger.

It is generated at runtime and can be accessed at `/swagger` when enabled.

If you use body validation with Zod, the documentation will also include the schema for the request body.

## Example

All you need to do is to use the swagger middleware and the documentation will be generated automatically.

```typescript
import { start, router, json, swaggerMiddleware } from "@pulsar-http/core";
import { z } from "zod";

const userSchema = z.object({
    name: z.string(),
    age: z.number(),
});

const routes = [
    router.get("/", async () => json({ message: "Hello, world!" })),
    router.post('/users', async ({ body }) => json({
        message: "User created",
        user: body,
    }), userSchema),
];

start({
    routes,
    middlewares: [swaggerMiddleware(routes)],
});
```

In this example:
- The `swaggerMiddleware` middleware is used to generate the documentation.
- The `userSchema` object is used to validate the request body and will be included in the documentation.

If you access the /swagger route, you will see the documentation for the API.

## Summary
- Use the `swaggerMiddleware` middleware to generate documentation.
- The documentation will include the schema for the request body if you use Zod for body validation.
- The documentation is generated at runtime and can be accessed at `/swagger`.
