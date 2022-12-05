<script>
    export let active
    export let number
</script>

{#if active}
    <div class="dot w-20 h-20 active bg-cyan text-white rounded-full text-center flex place-content-center place-items-center">
        <p class="text-xl">{number}</p>
    </div>
{:else}
    <div class="dot w-20 h-20  text-black rounded-full text-center flex justify-center place-items-center">
        <p class="text-xl">{number}</p>
    </div>
{/if}