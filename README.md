# CommandCenter Enterprise MVP

Next.js + Supabase SaaS MVP for a facilities command center.

## What is included

- Next.js App Router
- Tailwind CSS
- Supabase client wiring
- MVP dashboard
- Client switching
- Work order board
- Asset repair/replace engine
- Vendor scorecards
- Proposal queue
- AI action center
- SaaS architecture tab
- Supabase SQL schema

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Supabase setup

1. Open Supabase project.
2. Go to SQL Editor.
3. Paste and run `supabase/schema.sql`.
4. Go to Project Settings > API.
5. Copy Project URL and anon public key.
6. Add them to `.env.local` locally or Vercel Environment Variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_public_key
```

## Vercel deploy

1. Push this folder to GitHub.
2. In Vercel, import the GitHub repository.
3. Framework should detect as Next.js.
4. Add the environment variables above.
5. Deploy.

## Important note

This is an MVP foundation. The current app uses seed/demo data in the UI so it deploys immediately. The Supabase schema is included and ready for wiring live CRUD operations in the next build phase.
