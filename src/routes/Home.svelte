<script>
    import { Link } from "svelte-routing";
    import Upload from "../lib/Upload.svelte";
</script>

<main>
    <h1>Lag din egen pepperkakeform</h1>

    <div class="card">
        <Upload />
    </div>

    <h3><Link to="how">Hvordan funker dette?</Link></h3>
</main>

