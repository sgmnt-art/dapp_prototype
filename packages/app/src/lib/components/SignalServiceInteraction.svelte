<script lang="ts">
  // imports
  import { readContract, prepareWriteContract, writeContract, getAccount } from "@wagmi/core";
  import { signalServiceConfig, taikoL2Config } from "$lib/generated";
  import { ethers } from "ethers";
  import { sepolia } from "@wagmi/core/chains";
  import { taiko } from "$lib/domain/chain";
  import { providers } from "$lib/stores";
  import { RLP } from "ethers/lib/utils";
  import type { BlockHeader } from "$lib/domain/sepoliaBlock";

  // variables
  let signalToSend = "";
  let signalToVerify = "";
  let isSignalReceivedMessage = "false";

  // functions
  async function sendSignal() {
    const config = await prepareWriteContract({
      address: signalServiceConfig.address[sepolia.id],
      abi: signalServiceConfig.abi,
      functionName: "sendSignal",
      args: [ethers.utils.formatBytes32String(signalToSend) as `0x${string}`], // TODO
      chainId: sepolia.id,
    });
    await writeContract(config);
  }

  async function isSignalReceived() {
    isSignalReceivedMessage = "Checking...";
    const signalSenderAddress = getAccount().address;

    // 1. get the latest synced header of the other chain
    const latestSyncedHeaderHash = await readContract({
      address: taikoL2Config.address[taiko.id],
      abi: taikoL2Config.abi,
      functionName: "getLatestSyncedHeader",
      chainId: taiko.id,
    });

    const block = await $providers[sepolia.id].send("eth_getBlockByHash", [
      latestSyncedHeaderHash,
      false,
    ]);

    const blockHeader: BlockHeader = {
      parentHash: block.parentHash,
      ommersHash: block.sha3Uncles,
      beneficiary: block.miner,
      stateRoot: block.stateRoot,
      transactionsRoot: block.transactionsRoot,
      receiptsRoot: block.receiptsRoot,
      logsBloom: block.logsBloom
        .toString()
        .substring(2)
        .match(/.{1,64}/g)
        .map((s: string) => "0x" + s),
      difficulty: block.difficulty,
      height: block.number,
      gasLimit: block.gasLimit,
      gasUsed: block.gasUsed,
      timestamp: block.timestamp,
      extraData: block.extraData,
      mixHash: block.mixHash,
      nonce: block.nonce,
      baseFeePerGas: block.baseFeePerGas ? parseInt(block.baseFeePerGas) : 0,
      withdrawalsRoot: block.withdrawalsRoot,
    };

    // 2. get the merkle proof for the signal at the specified synced block hash
    let proof = await $providers[sepolia.id].send("eth_getProof", [
      signalServiceConfig.address[sepolia.id],
      [
        ethers.utils.keccak256(
          ethers.utils.solidityPack(
            ["address", "bytes32"],
            [signalSenderAddress, ethers.utils.formatBytes32String(signalToVerify)]
          )
        ),
      ],
      block.hash,
    ]);

    // 3. encode the account proof and storage proof
    const encodedProof = ethers.utils.defaultAbiCoder.encode(
      ["bytes", "bytes"],
      [RLP.encode(proof.accountProof), RLP.encode(proof.storageProof[0].proof)]
    );

    // 4. return the signal proof
    let signalProof = ethers.utils.defaultAbiCoder.encode(
      [
        "tuple(tuple(bytes32 parentHash, bytes32 ommersHash, address beneficiary, bytes32 stateRoot, bytes32 transactionsRoot, bytes32 receiptsRoot, bytes32[8] logsBloom, uint256 difficulty, uint128 height, uint64 gasLimit, uint64 gasUsed, uint64 timestamp, bytes extraData, bytes32 mixHash, uint64 nonce, uint256 baseFeePerGas, bytes32 withdrawalsRoot) header, bytes proof)",
      ],
      [{ header: blockHeader, proof: encodedProof }]
    );

    // 5. verify signal proof
    isSignalReceivedMessage = (await readContract({
      address: signalServiceConfig.address[taiko.id],
      abi: signalServiceConfig.abi,
      functionName: "isSignalReceived",
      args: [
        ethers.BigNumber.from(sepolia.id),
        signalSenderAddress as `0x${string}`,
        ethers.utils.formatBytes32String(signalToVerify) as `0x${string}`,
        signalProof as `0x${string}`,
      ],
      chainId: taiko.id,
    }))
      ? "true"
      : "false";
  }
</script>

<ol class="list-inside list-decimal">
  <li>
    <strong><u>Connect your wallet (to Sepolia) and make sure you have some SepETH </u></strong>(<a
      href="https://sepolia-faucet.pk910.de/"
      target="_blank"
      rel="noreferrer">Faucet ↗</a
    >)
  </li>
  <li>Enter a message, and click "Send signal"</li>
  <li>Wait about ~5 mins (currently configured L2 block derivation time)</li>
  <li>Enter a message, and click "Is signal received" to verify this signal on Taiko</li>
</ol>
<a
  href="https://taiko.xyz/docs/concepts/bridging"
  target="_blank"
  rel="noreferrer"
  class="mt-2 italic">Read more about bridging at taiko.xyz ↗</a
>

<div
  class="my-6 flex w-full flex-col space-y-2 divide-y rounded border-2 border-solid bg-white p-6"
>
  <form>
    <div>Enter a signal to store on Sepolia:</div>
    <div class="align-center flex flex-grow justify-between pt-2">
      <input
        type="text"
        placeholder="A signal..."
        bind:value={signalToSend}
        class="mr-2 flex-grow p-1"
      />
      <button type="submit" on:click={sendSignal} class="rounded-sm bg-black p-2 px-6 text-white"
        >Send Signal</button
      >
    </div>
  </form>
  <form class="pt-2">
    <div>Enter a signal to check is received on Taiko:</div>
    <div class="align-center flex flex-grow justify-between pt-2">
      <input
        type="text"
        placeholder="A signal..."
        bind:value={signalToVerify}
        class="mr-2 flex-grow p-1"
      />
      <button
        type="submit"
        value="Is signal received"
        on:click={isSignalReceived}
        class="rounded-sm bg-black p-2 px-6 text-white">Signal Received?</button
      >
    </div>
    <div>Is signal received: <strong>{isSignalReceivedMessage}</strong></div>
  </form>
</div>
