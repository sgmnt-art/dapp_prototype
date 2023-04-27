<script lang="ts">
  import { dev } from "$app/environment";
  import { page } from "$app/stores";
  import Logo from "$lib/assets/Logo.svelte";
</script>

<header>
  <nav
    class="fixed z-50 flex h-16 w-full justify-between bg-neutral-100 bg-opacity-50 p-3 italic tracking-wide backdrop-blur-3xl dark:bg-neutral-900 dark:bg-opacity-50"
  >
    <ul class="flex space-x-4">
      <li class="ml-2 mr-4 flex items-center">
        <a href="/">
          <div class="w-20">
            <Logo />
          </div>
        </a>
      </li>
      <li class:font-bold={$page.url.pathname.includes("mint")} class="text- flex items-center">
        <a href="/mint">Mint</a>
      </li>
      <li class:font-bold={$page.url.pathname.includes("marketplace")} class="text- flex items-center">
        <a href="/marketplace">Marketplace</a>
      </li>
      <li class:font-bold={$page.url.pathname.includes("segments")} class="flex items-center">
        <a href="/my-segments">My Collection</a>
      </li>
      <li class:font-bold={$page.url.pathname.includes("about")} class="flex items-center">
        <a href="/about">About</a>
      </li>
      {#if dev}
        <li class:font-bold={$page.url.pathname.includes("development")} class="flex items-center">
          <a href="/development">Development</a>
        </li>
      {/if}
    </ul>
    <ul class="flex space-x-4">
      <li>
        <w3m-network-switch />
      </li>
      <li>
        <w3m-core-button balance="show" icon="hide" />
      </li>
    </ul>
  </nav>
</header>

<div class="h-16 shrink-0">
  <!-- This is here just to fill the space the fixed navbar should fill -->
</div>
