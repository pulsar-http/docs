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

All types of pulsar are available [in the `types.ts` file in the `src` directory of the repository](https://github.com/jvnm-dev/pulsar-http/blob/master/src/types.ts).

This is useful for understanding what can be used in the `start()` function for example.

:::