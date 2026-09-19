# Connection examples

- `generic-oauth.json` uses the hosted endpoint and lets a compatible client discover OAuth.
- `generic-bearer.json` uses a personal MCP key supplied through `CALVEN_MCP_KEY`.

Client configuration vocabularies differ. Some use `http` instead of `streamable-http`, and some provide a settings UI instead of JSON. Preserve the endpoint and authentication boundary when translating an example.

Never replace the environment-variable placeholder with a real credential in a tracked file.
