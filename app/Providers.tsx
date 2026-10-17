"use client";

import { type ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";

import "@solana/wallet-adapter-react-ui/styles.css";

const RPC_URLS = {
  "mainnet-beta": "https://api.mainnet-beta.solana.com",
  devnet: "https://api.devnet.solana.com",
  testnet: "https://api.testnet.solana.com",
} as const;

type Network = keyof typeof RPC_URLS;

// Optional NEXT_PUBLIC_SOLANA_NETWORK: mainnet-beta (default), devnet or testnet.
const requested = process.env.NEXT_PUBLIC_SOLANA_NETWORK;
const networks = Object.keys(RPC_URLS) as Network[];
const network = networks.find((n) => n === requested) ?? "mainnet-beta";

// NEXT_PUBLIC_ values are bundled into the browser build and visible to
// everyone. Only put a domain-restricted RPC key here.
const ENDPOINT = process.env.NEXT_PUBLIC_SOLANA_RPC || RPC_URLS[network];

const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ConnectionProvider endpoint={ENDPOINT}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
