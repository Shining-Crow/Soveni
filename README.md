# Soveni website

Public marketing site for Soveni, built with **Next.js (App Router) + Prisma + Supabase Postgres + Tailwind CSS v4**, following *Soveni Website Development Plan v2.2*.

## Getting started

```bash
npm install
cp .env.example .env      # fill in your Supabase connection strings
npm run db:push           # create tables in Supabase
npm run db:seed           # load the eight services, FAQs and site settings
npm run dev
```

Without a `DATABASE_URL`, the site still runs using the bundled content in `src/content/defaults.ts`. Only the enquiry form needs a database.

### Supabase setup

1. Create a project (choose the London region `eu-west-2`).
2. Under **Project Settings → Database → Connection string**, copy:
   - the **Transaction pooler** URL (port 6543) into `DATABASE_URL` (keep `?pgbouncer=true&connection_limit=1`);
   - the **Session / direct** URL (port 5432) into `DIRECT_URL`.
3. Supabase exposes tables through its Data API, so enable **Row Level Security** on every table with no policies. Prisma connects as the `postgres` role and bypasses RLS, and anonymous API access stays blocked:

   ```sql
   alter table "Service" enable row level security;
   alter table "CaseStudy" enable row level security;
   alter table "Faq" enable row level security;
   alter table "SiteSetting" enable row level security;
   alter table "Enquiry" enable row level security;
   ```

## Content management

Use Supabase's Table Editor or `npm run db:studio` to edit content:

| Table | Purpose |
| --- | --- |
| `Service` | The eight service pages (copy, inclusions, process, exclusions). |
| `Faq` | Service FAQs (`serviceId` set) and homepage FAQs (`showOnHome = true`). |
| `CaseStudy` | Shown **only** when both `clientPermission` and `published` are true. "Our Work" is hidden from the navigation and returns 404 until then. |
| `SiteSetting` | `contactEmail`, `contactPhone`, `companyName` and `companyLocation`. Leave a value empty to hide it. |
| `Enquiry` | Form submissions. |

Pages revalidate every 5 minutes, so content edits appear without a redeploy.

## Enquiry form

- Server action in `src/app/contact/actions.ts`, with Zod validation in `src/lib/enquiry.ts`.
- Anti-spam: a honeypot field, a minimum fill time, and a rate limit of 3 submissions per 15 minutes per hashed IP.
- Optional email notifications through Resend. Set `RESEND_API_KEY`, `ENQUIRY_NOTIFY_FROM` and `ENQUIRY_NOTIFY_TO`.

## Before launch (Plan §14)

- Supply the approved logo. `src/components/Logo.tsx` is a text placeholder.
- Confirm the accent colour. The champagne tokens are in `src/app/globals.css`.
- Verify the contact details and add them to `SiteSetting`.
- Have the legal pages reviewed and remove the draft banners.
- Replace `public/images/hero-sculpture.jpg` with the full-resolution render. The current file is cut from the design mockup.
- Add case studies only with client permission.
