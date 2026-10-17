import ConnectButton from "./ConnectButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">
        Solana Next Template
      </h1>
      <p className="max-w-md text-zinc-500">
        Connect a wallet to get started.
      </p>
      <ConnectButton />
    </main>
  );
}