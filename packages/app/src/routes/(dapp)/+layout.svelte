<script lang="ts">
  import "$lib/assets/styles/app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import { taiko } from "$lib/domain/chain";
  import { ethereumClient, wagmiClient, web3Modal, providers } from "$lib/stores";
  import { configureChains, createClient } from "@wagmi/core";
  import { sepolia, foundry } from "@wagmi/core/chains";
  import { EthereumClient, w3mConnectors } from "@web3modal/ethereum";
  import { Web3Modal } from "@web3modal/html";
  import { ethers } from "ethers";
  import { jsonRpcProvider } from "@wagmi/core/providers/jsonRpc";

  const projectId = import.meta.env.VITE_WEB3MODAL_PROJECT_ID;

  $providers = {
    [sepolia.id]: new ethers.providers.JsonRpcProvider("https://rpc.sepolia.org"),
    [taiko.id]: new ethers.providers.JsonRpcProvider("https://l2rpc.hackathon.taiko.xyz"),
    [foundry.id]: new ethers.providers.JsonRpcProvider("http://localhost:8545"),
  };
  const { chains, provider } = configureChains(
    [sepolia, taiko, foundry],
    [
      jsonRpcProvider({
        rpc: (chain) => ({ http: $providers[chain.id].connection.url }),
      }),
    ]
  );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  $wagmiClient = createClient({
    autoConnect: true,
    connectors: w3mConnectors({ chains, version: 1, projectId }),
    provider,
  });
  $ethereumClient = new EthereumClient($wagmiClient, chains);
  $web3Modal = new Web3Modal(
    {
      projectId,
      defaultChain: sepolia,
      themeVariables: {
        "--w3m-font-family": "Roboto, sans-serif",
        "--w3m-accent-color": "#000000",
        "--w3m-background-border-radius": "4px",
        "--w3m-container-border-radius": "4px",
        "--w3m-background-color": "#000000",
        "--w3m-background-image-url": "/img/w3m-banner.png",
        "--w3m-logo-image-url": "/img/sgmnt_white.png",
      },
    },
    $ethereumClient
  );
</script>

<div class="flex h-full flex-col">
  <Navbar />
  <div class="container mx-auto flex-grow">
    <slot />
  </div>
</div>
