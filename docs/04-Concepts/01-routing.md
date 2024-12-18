# Routing

## Basic Routing
Define routes using HTTP methods like GET, POST, etc.

```typescript
import { router, json, start } from "@pulsar-http/core";

const { get } = router;

start({
    routes: [
        get('/', async () => json({ message: "Welcome to Pulsar!" }))
    ]
});
```

## Route with Parameters
Define routes with parameters. Use `pathParams` to access them.

```typescript
import { router, json, start } from "@pulsar-http/core";

const { get } = router;

start({
    routes: [
        get('/:name', async ({ request, pathParams }) => {
            return json({ message: `Hello, ${pathParams.name}` });
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


## Route body validation + parsing

Pulsar uses [zod](https://npmjs.com/package/zod) for body validation and parsing.

You can pass a schema to a route to validate and parse the body automatically.

The body will then be available in the `body` argument of the handler.

:::warning

If you don't pass a schema to a route, the body will be available as usual in the `request` object.

:::

```typescript
import { router, json, start, type RouterHandler } from "@pulsar-http/core";
import zod from "zod";

const { post } = router;

const userSchema = zod.object({
    name: zod.string(),
    age: zod.number()
});

type User = zod.infer<typeof userSchema>;

const handleCreateUser: RouterHandler<User> = async ({ body }) => {
    return json({ message: `User ${body.name} created! The user is ${body.age} years old.` });
}

start({
    routes: [
        post('/users', handleCreateUser, { bodySchema: userSchema })
    ]
});
```

## Route response validation

As for the body, you can also validate the response of a route using a schema.

If the response doesn't match the schema, Pulsar will automatically return a 500 error describing the issue.

This is useful to ensure that your API is always returning the expected data.

## Example
```typescript
import { router, json, start, type RouterHandler } from "@pulsar-http/core";
import zod from "zod";

const { post } = router;

const userSchema = zod.object({
    name: zod.string(),
    age: zod.number()
});

const usersResponseSchema = zod.object({
    users: zod.array(userSchema)
}).strict();

type User = zod.infer<typeof userSchema>;

const handleCreateUser: RouterHandler<User> = async ({ body }) => {
    return json({ message: `User ${body.name} created! The user is ${body.age} years old.` });
}

start({
    routes: [
        get('/users', async () => json({ users: [/*fill with users*/] }), { responseSchema: usersResponseSchema }),
        post('/users', handleCreateUser, { bodySchema: userSchema })
    ]
});
```

## Summary

- Routes are defined using the `router` object.
- Use `get()`, `post()`, etc. to define routes for different HTTP methods.
- Handlers options allow you to access request, path parameters, body, etc.
- You can group related routes under a common prefix.
- You can validate and parse the body of a route using a schema.
- You can validate the response of a route using a schema.
