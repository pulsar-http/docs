# WebSocket

WebSocket is a communication protocol that provides full-duplex communication channels over a single TCP connection.

It is used in web applications to provide real-time communication between a client and a server.

Pulsar provides a way to create WebSocket endpoints using the `websocket` option in the `start` function.

It extends the Bun's WebSocket implementation and can be used paired with the authentication middleware.

## Example

Create a file called `server.ts` and add the following code.

```typescript
import githubAuthProvider from '@auth/core/providers/github';
import { start, router, json, authMiddleware, getSession, type Session } from "@pulsar-http/core";

const routes = [
    router.get("/", async () => {
        return json({ message: "Hello, world!" });
    }),
];

start<Session | null>({
    routes,
    middlewares: [
        authMiddleware({
            providers: [
                githubAuthProvider({
                    clientId: "YOUR_CLIENT_ID",
                    clientSecret: "YOUR_SECRET"
                }),
            ]
        }),
    ],
    // WebSocket is exposed on the `/ws` path
    websocket: {
        open(ws) {
            ws.send('Welcome to the chat!');

            ws.subscribe('chat');
            ws.publish('chat', `${ws.data?.user?.name ?? 'Someone'} joined the chat!`);
        },
        message(ws, message) {
            const user = ws.data?.user?.name ?? 'Someone';
            const text = `${user}: ${message}`;

            // Send to the current user
            ws.send(text);

            // Send to all other users
            ws.publish('chat', text);
        },
        close(ws) {
            ws.publish('chat', `${ws.data?.user?.name ?? 'Someone'} left the chat!`);
        },
        options: {
            canUpgrade: async (req) => {
                // OPTIONAL: Only allow authenticated users to connect to the websocket
                const session = await getSession(req);
                return !!session?.user;
            },
            upgrade: async (req) => {
                // Pass the user data to the websocket connection
                const session = await getSession(req);
                return {
                    data: session
                }
            }
        }
    }
});
```

You can then use your favorite WebSocket client to connect to the server but please note that it is only available on the `/ws` path.

## Summary
- WebSocket is a communication protocol that provides full-duplex communication channels over a single TCP connection.
- Pulsar provides a way to create WebSocket endpoints using the `websocket` option in the `start` function.
- The WebSocket is exposed on the `/ws` path.
- It extends the Bun's WebSocket implementation and can be used paired with the authentication middleware.
