<script>
  import hwguildLogo from "./assets/hwguild.svg";
  import Upload from "./lib/Upload.svelte";
</script>

<main>
  <div>
    <img src={hwguildLogo} class="logo" alt="Svelte Logo" />
  </div>
  <h1>Lag din egen pepperkakeform</h1>

  <div class="card">
    <Upload/>
  </div>
</main>

<style>
  .logo {
    height: 18em;
    padding: 1.5em;
    will-change: filter;
  }
</style>
