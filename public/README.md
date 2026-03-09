# Static Campaign Landing Pages

All static campaign landing pages (such as `/theroadto`) are served directly from this `/public` directory.

## Why?
PlantiPower's core Next.js application uses intense middleware for localization and routing that can sometimes intercept or break non-standard sub-applications. 

To guarantee that important marketing campaigns **never break** regardless of routing, middleware, or server-side changes to the main app, campaign sites are built statically (e.g. `next build` with `output: "export"`) and their output artifacts are copied directly into `/public`. 

## Safeguards
1. **Middleware Exclusion:** `src/middleware.ts` is explicitly configured to ignore `/public` and everything hitting `/theroadto`.
2. **Build Checks:** `scripts/check-static-pages.js` runs automatically before builds and will intentionally fail the deployment if `public/theroadto/index.html` is missing.

If you are updating a landing page, build it in its respective repository and ensure the output is copied here.
