# Example: Hello world!

### Code 

This example shows how to create a simple HTTP server with Pulsar that returns a JSON response.

```typescript title="index.ts"
import { start, router, json } from "@pulsar-http/core";

const { get } = router;

start({
    port: 3000,
    routes: [get("/", async () => json({ message: "Hello, World!" }))],
});
```

### Summary

- The server can be started with `start()`.
- `start()` takes an object with the server configuration.
- Routes are defined using the `router` object.
- Use `get()` to define a route for the `GET` method.
- Use `json()` to return a JSON response.

:::info

API reference is available [here](https://pulsar-http.github.io/docs/api/index.html).

:::