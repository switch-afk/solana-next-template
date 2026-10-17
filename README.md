# solana-next-template

Next.js (App Router, TypeScript, Tailwind) starter with a Connect Wallet button for Solana.

Click **Connect Wallet**, pick a wallet from the modal, and the app connects and shows the shortened address with a Disconnect button. The wallet reconnects after a page reload.

## Use this template

Click **Use this template** at the top of the repo on GitHub, or from the terminal:

```bash
gh repo create my-app --template switch-afk/solana-next-template --public --clone
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fswitch-afk%2Fsolana-next-template)

## Run it

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts: `npm run build`, `npm run start`, `npm run lint`, `npm run format`.

## Network and RPC

The app connects to Solana mainnet by default. To use devnet or testnet, copy the example env file and set the network:

```bash
cp .env.example .env.local
```

On Windows PowerShell: `Copy-Item .env.example .env.local`

```
NEXT_PUBLIC_SOLANA_NETWORK=devnet
```

Valid values are `mainnet-beta` (default), `devnet` and `testnet`. Restart the dev server after changing env values.

Each network uses its public RPC endpoint unless you set your own. The public endpoints are rate limited and not meant for production. To use your own RPC, set a URL for the same network:

```
NEXT_PUBLIC_SOLANA_RPC=https://your-rpc-provider.example/?api-key=YOUR_KEY
```

> **Warning:** variables starting with `NEXT_PUBLIC_` are bundled into the browser build and are visible to anyone who opens your site. Never put a secret key here. Use a key that is restricted to your domain in your RPC provider's dashboard.

## Files

| File                    | Purpose                                                                     |
| ----------------------- | --------------------------------------------------------------------------- |
| `app/Providers.tsx`     | Wallet providers: network and RPC connection, auto-reconnect, connect modal |
| `app/ConnectButton.tsx` | Connect button, shortened address and disconnect                            |
| `app/page.tsx`          | The single page                                                             |

Wallets that support the Wallet Standard and are installed in the browser appear in the modal automatically.

## License

[MIT](LICENSE.md)
