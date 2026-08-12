# Script Overrides

Use this section when your setup needs custom compatibility that is not already covered by normal public Bridge support.

## Where override code goes

Client side:

```text
fs_bridge/unlocked/client.lua
```

Server side:

```text
fs_bridge/unlocked/server.lua
```

## Pages

| Page | What it covers |
| --- | --- |
| [Client Overrides](./overrides/client) | Client-side manual compatibility overrides |
| [Server Overrides](./overrides/server) | Server-side manual compatibility overrides |

## When to use overrides

If your ambulance, inventory, clothing, keys, fuel, phone, or dispatch resource is not listed on [Supported](./supported):

1. Do not edit locked Bridge files for a normal setup
2. Paste only the needed override functions into the unlocked files above
3. Restart the server and re-test detection

Start with the client or server page that matches the side you need to customize.
