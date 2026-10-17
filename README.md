# solana-next-template

A minimal Next.js starter with a **Connect Wallet** button for Solana. Click it, pick Phantom or Solflare, and the app connects and shows the shortened address with a Disconnect button.

- Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- Official Solana [wallet-adapter](https://github.com/anza-xyz/wallet-adapter) (react, react-ui) with the Phantom and Solflare adapters
- Wallets that aren't installed show an install link in the modal
- The wallet reconnects automatically after a page reload
- One page, one `Providers` component, one `ConnectButton` component

## Use this template

Click **Use this template** at the top of the repo on GitHub, or from the terminal:

```bash
gh repo create my-app --template switch-afk/solana-next-template --public --clone
```

## Run it

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## RPC endpoint

By default the app uses the public Solana mainnet endpoint, which is rate limited and not meant for production. To use your own RPC, copy the example env file and set the URL:

```bash
cp .env.example .env.local
```

On Windows PowerShell: `Copy-Item .env.example .env.local`

```
NEXT_PUBLIC_SOLANA_RPC=https://your-rpc-provider.example/?api-key=YOUR_KEY
```

> **Warning:** variables starting with `NEXT_PUBLIC_` are bundled into the browser build and are visible to anyone who opens your site. Never put a secret key here. Use a key that is restricted to your domain in your RPC provider's dashboard.

## How it works

| File | Purpose |
| --- | --- |
| `app/Providers.tsx` | Wallet-adapter providers: RPC connection, Phantom and Solflare adapters, auto-reconnect, connect modal |
| `app/ConnectButton.tsx` | Connect button, shortened address and disconnect |
| `app/page.tsx` | The single page |
| `app/layout.tsx` | Root layout that wraps the app in `Providers` |

To change the wallets, edit the `wallets` array in `app/Providers.tsx`. Other wallets that are installed in the browser and support the Wallet Standard (Backpack, Trust and others) also appear in the modal automatically.

## CI

GitHub Actions runs `npm run lint` and `npm run build` on Node 20 and 22 for every push to `main` and every pull request.

## License

[MIT](LICENSE)