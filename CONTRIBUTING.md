# Contributing

This repository accepts improvements to public documentation, connection examples, compatibility evidence, manifests, and portable workflow skills.

The hosted server implementation is maintained privately. Use a GitHub issue to report a public contract mismatch. Follow [SECURITY.md](SECURITY.md) for vulnerabilities or suspected credential exposure.

## Before opening a pull request

1. Keep every endpoint set to `https://api.calven.ai/mcp`.
2. Use placeholders for credentials. Never include a real `cmcp_` key or OAuth token.
3. Update the tool catalog when a documented production tool changes.
4. Record the exact client and version for compatibility changes.
5. Run:

   ```sh
   node scripts/validate.mjs
   ```

6. Explain what you tested and what remains unverified.

## Skills

Each skill lives at `skills/<name>/SKILL.md` and needs valid YAML frontmatter with `name` and `description`. Keep instructions focused on decisions an agent would not reliably infer. Do not copy server prompts or private product instructions into a public skill.

## Changes maintained elsewhere

Changes to server behavior, authentication, permissions, production deployment, or the application UI belong in Calven's private product repository. Open an issue here if public documentation no longer matches production.
