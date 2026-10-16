"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

function shorten(address: string) {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

const button =
  "rounded-lg px-5 py-2.5 text-sm font-medium transition-colors disabled:opacity-60";

export default function ConnectButton() {
  const { publicKey, connected, connecting, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  if (connected && publicKey) {
    return (
      <div className="flex items-center gap-3">
        <span className="rounded-lg border border-zinc-300 px-4 py-2.5 font-mono text-sm dark:border-zinc-700">
          {shorten(publicKey.toBase58())}
        </span>
        <button
          onClick={() => disconnect()}
          className={`${button} border border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900`}
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setVisible(true)}
      disabled={connecting}
      className={`${button} bg-foreground text-background hover:opacity-80`}
    >
      {connecting ? "Connecting..." : "Connect Wallet"}
    </button>
  );
}