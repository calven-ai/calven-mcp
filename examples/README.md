# Connection examples

Every client connects with OAuth: add `https://api.calven.ai/mcp` and sign in to Calven. See [authentication](../docs/authentication.md) and the per-client steps in the [README](../README.md#connect).

`generic-oauth.json` is illustrative. It shows the shape of a configuration, not a file any one client reads as is. Transport names vary by client: some use `http` instead of `streamable-http`, and some need no `type`. Prefer your client's settings UI or the README install buttons.

When translating the example, keep the endpoint unchanged.

Never add a credential or token to a tracked file.
