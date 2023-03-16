<script lang="ts">
  // imports
  import { readContract, prepareWriteContract, writeContract } from "@wagmi/core";
  import { fooABI, fooAddress } from "$lib/generated";
  import { foundry } from "@wagmi/core/chains";

  // variables
  let inputMessage = "";
  let messageFromContract = "";

  // functions
  async function readMessage() {
    const data = await readContract({
      address: fooAddress[foundry.id],
      abi: fooABI,
      functionName: "myString",
    });
    messageFromContract = data;
  }

  async function writeMessage() {
    const config = await prepareWriteContract({
      address: fooAddress[foundry.id],
      abi: fooABI,
      functionName: "setMyString",
      args: [inputMessage],
    });
    await writeContract(config);
    readMessage();
  }
</script>

<div
  class="my-6 flex w-full flex-col space-y-2 divide-y rounded border-2 border-solid bg-white p-6"
>
  <div class="flex flex-grow items-center justify-between">
    <p class="align-middle">Message from contract: {messageFromContract}</p>
    <button on:click={readMessage} class="rounded-sm bg-black p-2 px-6 text-white"
      >Read Message</button
    >
  </div>
  <div>
    <div class="align-center flex flex-grow justify-between pt-2">
      <input
        type="text"
        placeholder="Enter some text..."
        bind:value={inputMessage}
        class="mr-2 flex-grow p-1"
      />
      <button
        type="submit"
        value="Write"
        class="rounded-sm bg-black p-2 px-6 text-white"
        on:click={writeMessage}>Write Message</button
      >
    </div>
  </div>
</div>
