# CommandCenter V2.13.2 — Vercel URL Fix

This package is prepared specifically so Vercel creates a live deployment URL.

## Critical GitHub rule

After unzipping, your GitHub repository root must show these files directly:

- package.json
- index.html
- vercel.json
- src/
- scripts/

Do **not** upload a folder that contains another folder with these files inside it.

## Vercel import settings

When importing the GitHub repo into Vercel:

- Framework Preset: Other
- Root Directory: `./`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

If Vercel asks for environment variables, skip them for now. The app opens in demo mode without Supabase keys.

## If Vercel still does not create a URL

Open the Vercel deployment log and look for one of these:

- Root Directory wrong
- No package.json found
- Build command failed
- Output directory dist not found

The most common issue is that GitHub has the files inside an extra folder layer instead of at the repo root.


## V2.14 Update
- Added Preventive Maintenance Planner page.
- Added PM-to-Work-Order conversion workflow.
- Repaired repo structure so `src/app.js`, `src/styles.css`, and `src/env.js` are the deployed source of truth.


V2.14.1 hotfix: preserves root-only Vercel-safe deployment and restores/backfills SLA, Locations, Heat Map seed data if a previous broken build emptied localStorage or cloud-loaded blank tables.


## V2.15 Brand Upgrade
- Updated primary brand to **CC CommandCenter**.
- Added market promise: **Run your portfolio with AI.**
- Removed the small deploy badge from the visible interface.
- Preserved the V2.14.1 data guard so SLA, Locations, Heat Map, and demo modules remain populated.
- Kept the deploy-safe root-only zip structure for GitHub/Vercel upload.

## V2.15.4 Hot Patch — Map + Asset Work Order Drilldown
- Restored / hardened Real USA Portfolio Map with clickable risk pins.
- Pin click opens the location drawer with open work orders, assets, proposals, SLA details, spend, and coordinates.
- Asset rows are now clickable.
- Clicking an asset opens a location work-order cockpit showing:
  - work orders directly attached to that asset
  - all work orders attached to the asset's location
  - related assets at the same location
- Every listed work order remains clickable into the full work-order modal.

## V2.16.34 Heat Map Syntax-Safe Fix
- Added final self-contained Portfolio Heat Map renderer to app.js.
- Uses existing location latitude/longitude and workOrders linked by location ID.
- Pin number equals attached work-order count.
- Pin click uses existing openSiteDrawer(locationId).
- Removed Leaflet script/link from index.html so the heat map does not depend on CDN loading.
- Verified with `node --check app.js` and `npm run build`.
