# Routing

## Basic Routing
Define routes using HTTP methods like GET, POST, etc.

```typescript
import { router, json, start } from "@pulsar-http/core";

const { get } = router;

start({
    port: 3000,
    routes: [
        get('/', async () => json({ message: "Welcome to Pulsar!" }))
    ]
});
```

## Route with Parameters
Define routes with parameters. Use `params` to access them.

```typescript
import { router, json, start } from "@pulsar-http/core";

const { get } = router;

start({
    port: 3000,
    routes: [
        get('/:name', async (request, params) => {
            return json({ message: `Hello, ${params.name}` });
        })
    ]
});
```

Example: `/John` will respond with `Hello, John`.

## Route Groups
Group related routes under a common prefix.

```typescript
import { router, file, start } from "@pulsar-http/core";

const { get, post } = router;

start({
    port: 3000,
    routes: [
        get('/', async () => file("/public/hello-world.html")),
        {
            path: "/api/v1",
            routes: [
                get('/users', handleGetUsers),
                post('/users', handleCreateUser),
                get('/users/:id', handleGetUser)
            ]
        }
    ]
});
```

All `/api/v1` routes share the prefix.

## Summary

- Routes are defined using the `router` object.
- Use `get()`, `post()`, etc. to define routes for different HTTP methods.
- Use handler second argument's `params` to access route parameters.
- You can group related routes under a common prefix.
