# Responses

Pulsar provides helper functions to create responses with different content types. These functions make it easy to handle common response types like JSON, files, HTML, text, redirects, and streams.


### File

Send a file as a response with the correct content type.

```typescript
import { file } from "@pulsar-http/core";

export const handler = async () => {
    return await file("/path/to/your/file.txt");
};
```

### JSON

Send JSON data with the appropriate headers.

```typescript
import { json } from "@pulsar-http/core";

export const handler = async () => {
    return json({ message: "Hello, World!" });
};
```

### Error

Send an error response with a status code and optional message.

```typescript
import { error } from "@pulsar-http/core";

export const handler = async () => {
    return error(404, "Not Found");
};
```

### Text

Send a plain text response.

```typescript
import { text } from "@pulsar-http/core";

export const handler = async () => {
    return text("Hello, this is a plain text response.");
};
```

### HTML

Send HTML content with the appropriate headers.

```typescript
import { html } from "@pulsar-http/core";

export const handler = async () => {
    return html("<h1>Hello, World!</h1>");
};
```

### Redirect

Redirect the client to a different URL.

```typescript
import { redirect } from "@pulsar-http/core";

export const handler = async () => {
    return redirect("https://example.com");
};
```

### Stream

Stream data to the client.

```typescript
import { stream } from "@pulsar-http/core";

export const handler = async () => {
    const generator = async function* () {
        yield "Chunk 1";
        yield "Chunk 2";
        yield "Chunk 3";
    };
    return stream(generator());
};
```

### Summary
- Use `file()` to serve files.
- Use `json()` to return JSON data.
- Use `error()` to send error responses.
- Use `text()` to return plain text data.
- Use `html()` to send HTML content.
- Use `redirect()` to perform URL redirections.
- Use `stream()` to stream data to the client.