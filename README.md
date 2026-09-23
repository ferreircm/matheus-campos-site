# Matheus Campos — personal site

Single-page site for Matheus Campos, licensed life insurance agent (EN / ES / PT).

Originally built in Lovable; now hosted on Vercel with GitHub auto-deploy — every push to `main` goes live.

## Development

```sh
npm install
npm run dev
```

## Built with

- TanStack Start (Nitro, `vercel` preset — see `vite.config.ts`)
- TypeScript, React, Tailwind CSS

## Notes

- Photos live in `public/images/`.
- The contact form posts to Web3Forms; set `WEB3FORMS_ACCESS_KEY` in `src/routes/index.tsx`.
