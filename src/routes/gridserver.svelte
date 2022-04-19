<script>
    import Grid from "gridjs-svelte";

    const columns = [
        {
            name: "Nombre",
        },
        {
            name: "Nick",
            sort: false,
        },
        {
            name: "Email",
            sort: false,
        },
    ];
</script>

<Grid
    {columns}
    search
    sort
    pagination={{ enabled: true, limit: 5 }}
    server={{
        url: "https://swapi.dev/api/films/",
        then: (data) =>
            data.results.map((user) => {
                return [user.title, user.director, user.producer];
            }),
    }}
/>

<style global>
    @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
</style>
