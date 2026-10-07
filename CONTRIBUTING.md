# Contributing

This repository accepts improvements to public documentation, connection examples, compatibility evidence, manifests, and portable workflow skills.

The hosted server implementation is maintained privately. Use a GitHub issue to report a public contract mismatch. Follow [SECURITY.md](SECURITY.md) for vulnerabilities or suspected credential exposure.

## Before opening a pull request

1. Keep every endpoint set to `https://api.calven.ai/mcp`.
2. Use placeholders for credentials. Never include a real `cmcp_` key or OAuth token.
3. Update the tool catalog when a documented production tool changes.
4. Record the exact client and version for compatibility changes.
5. With Node.js 22 or later, install the pinned dev dependencies and run the validator:

   ```sh
   npm ci
   npm run validate
   ```

   `npm run validate` downloads the manifest JSON Schemas. Use `npm run validate:offline` to run every other check without network access. See [conformance](docs/conformance.md) for what the validator checks.

6. Explain what you tested and what remains unverified.

## Skills

Each skill lives at `skills/<name>/SKILL.md` and needs valid YAML frontmatter with `name` and `description`, following the [Agent Skills specification](https://agentskills.io/specification): `name` is 1–64 lowercase letters, digits, and single hyphens and matches the directory; `description` is 1–1024 characters. Keep instructions focused on decisions an agent would not reliably infer. Do not copy server prompts or private product instructions into a public skill.

## Changes maintained elsewhere

Changes to server behavior, authentication, permissions, production deployment, or the application UI belong in Calven's private product repository. Open an issue here if public documentation no longer matches production.
