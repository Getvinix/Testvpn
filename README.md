# Ubuntu VPN • ePro (Web / PWA UI)

A complete, responsive dark-mode VPN & SSH Tunneling client UI built with **React**, **Vite**, and **Tailwind CSS**.

## Features Included
- **SSH Settings Screen:** Payload, Enhanced, TLS, and SlowDNS mode selector, SSH Host/Port/Credentials, Payload & SNI Bug Host inputs, Remote Proxy settings, quick server switcher, and live terminal connection logs.
- **Servers Directory:** Searchable server list with protocol filters (`All`, `SSH`, `V2Ray`, `ePro`, `HTTP Custom`), `Free` vs `Premium` filter, live ping/load indicators, and VIP lock states.
- **Home Dashboard:** Animated connection button, session timer, and live download/upload bandwidth counters.
- **Premium Upgrade & M-Pesa Checkout:** Plan selector (`1 Week - 200 KES`, `1 Month - 500 KES`, `3 Months - 1200 KES`), M-Pesa (`+254`), Card, and PayPal checkout flow that unlocks VIP servers upon completion.

## Quick Start

```bash
npm install
npm run dev
```

## Deploy to GitHub / Vercel / Netlify
1. Upload all files in this folder to a new GitHub repository.
2. Import the repository into Vercel, Netlify, or GitHub Pages (`npm run build` outputs to `dist/`).
