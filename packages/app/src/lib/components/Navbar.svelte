<script lang="ts">
  import { page } from "$app/stores";
</script>

<header>
  <nav
    class="fixed z-50 flex h-16 w-full justify-between bg-neutral-100 bg-opacity-50 p-3 italic tracking-wide backdrop-blur-3xl dark:bg-black"
  >
    <ul class="flex space-x-4">
      <li class="ml-2 mr-4 flex items-center">
        <a href="/"
          ><img src="/img/sgmnt-black-240.png" alt="sgmnt logo" class="h-6 object-cover" /></a
        >
      </li>
      <li class:font-bold={$page.url.pathname.includes("gallery")} class="text- flex items-center">
        <a href="/gallery">Gallery</a>
      </li>
      <li class:font-bold={$page.url.pathname.includes("development")} class="flex items-center">
        <a href="/development">Development</a>
      </li>
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
