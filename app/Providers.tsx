"use client";

import { type ReactNode } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

import "@solana/wallet-adapter-react-ui/styles.css";

// NEXT_PUBLIC_ values are bundled into the browser build and visible to
// everyone. Only put a domain-restricted RPC key here.
const ENDPOINT =
  process.env.NEXT_PUBLIC_SOLANA_RPC || "https://api.mainnet-beta.solana.com";

// Wallets that support the Wallet Standard register themselves and show up in
// the modal automatically, so no adapters are needed.
const wallets: never[] = [];

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ConnectionProvider endpoint={ENDPOINT}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}