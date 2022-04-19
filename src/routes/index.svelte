<script>
    import { onMount } from "svelte";
    let Carousel;

    onMount(async () => {
        const module = await import("svelte-carousel");
        Carousel = module.default;
    });
    let imagenes = [
        {
            image: "https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275_960_720.jpg",
        },
        {
            image: "https://cdn.pixabay.com/photo/2021/09/12/07/58/banner-6617553_960_720.jpg",
        },
        {
            image: "https://cdn.pixabay.com/photo/2017/10/03/17/53/nature-2813487_960_720.jpg",
        },
    ];
</script>

<svelte:component this={Carousel} autoplay autoplayDuration={2000}>
    {#each imagenes as item}
        <img src={item.image} alt="imagen" />
    {/each}
</svelte:component>
