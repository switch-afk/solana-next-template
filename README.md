# solana-next-template

Next.js (App Router, TypeScript, Tailwind) starter with a Connect Wallet button for Solana.

Click **Connect Wallet**, pick a wallet from the modal, and the app connects and shows the shortened address with a Disconnect button. The wallet reconnects after a page reload.

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

## Files

| File | Purpose |
| --- | --- |
| `app/Providers.tsx` | Wallet providers: RPC connection, auto-reconnect, connect modal |
| `app/ConnectButton.tsx` | Connect button, shortened address and disconnect |
| `app/page.tsx` | The single page |

Wallets that support the Wallet Standard and are installed in the browser appear in the modal automatically.

## License

[MIT](LICENSE.md)