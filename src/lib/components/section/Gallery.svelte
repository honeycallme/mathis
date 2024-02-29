<script lang="ts">
    import Double from "../element/Double.svelte";

    export let data: any[] = [];
</script>

<main class="w-full h-full min-h-[100dvh]">

    <div class="mt-8">
        {#each data as project, i}
            <Double {project} reversed={i % 2 == 1} />
        {/each}
    </div>

</main>
