<script>
    import Grid from "gridjs-svelte";

    const data = [
        {
            id: 1,
            first_name: "Obidiah",
            last_name: "Culver",
            email: "oculver0@themeforest.net",
        },
        {
            id: 2,
            first_name: "Lori",
            last_name: "Adamiak",
            email: "ladamiak1@opensource.org",
        },
        {
            id: 3,
            first_name: "Gabrila",
            last_name: "Findlow",
            email: "gfindlow2@ucsd.edu",
        },
        {
            id: 4,
            first_name: "Katya",
            last_name: "Wallage",
            email: "kwallage3@privacy.gov.au",
        },
        {
            id: 5,
            first_name: "Freemon",
            last_name: "Washtell",
            email: "fwashtell4@google.com",
        },
        {
            id: 6,
            first_name: "Ruthi",
            last_name: "Meneux",
            email: "rmeneux5@boston.com",
        },
        {
            id: 7,
            first_name: "Kimberlyn",
            last_name: "Roff",
            email: "kroff6@nsw.gov.au",
        },
        {
            id: 8,
            first_name: "Nanon",
            last_name: "Proback",
            email: "nproback7@mysql.com",
        },
        {
            id: 9,
            first_name: "Jerald",
            last_name: "Jovanovic",
            email: "jjovanovic8@howstuffworks.com",
        },
        {
            id: 10,
            first_name: "Jervis",
            last_name: "Obell",
            email: "jobell9@sciencedirect.com",
        },
    ];
</script>

<Grid search sort pagination={{ enabled: true, limit: 5 }} {data} />

<style global>
    @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
</style>
