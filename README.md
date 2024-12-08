# Hono on Cloudflare Workers Example

This is a simple example of using Hono framework with Cloudflare Workers.

## Features

- TypeScript support
- Environment variables
- JSON API endpoint
- Logging middleware
- Pretty JSON responses

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Deploy to Cloudflare Workers:
   ```bash
   npm run deploy
   ```

## API Endpoints

- `GET /`: Returns a simple text greeting
- `GET /api/info`: Returns JSON with current timestamp and environment variable

## Environment Variables

Environment variables are configured in `wrangler.toml`:

- Production: Set in the `[vars]` section
- Development: Set in the `[env.development]` section