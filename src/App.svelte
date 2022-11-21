<script>
  import { Router, link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import How from "./routes/How.svelte";

  import hwguildLogo from "./assets/hwguild.svg";

  export let url = "cookie-cutter/";
</script>

<main>
  <div>
    <a href="/cookie-cutter/" use:link>
      <img src={hwguildLogo} class="logo" alt="HW guild Logo" />
    </a>
  </div>
  
  <Router url="{url}">
    <div>
      <Route path="/cookie-cutter/how" component="{How}" />
      <Route path="/cookie-cutter/"><Home /></Route>
    </div>
  </Router>
  
</main>

<style>
  .logo {
      height: 18em;
      padding: 1.5em;
      will-change: filter;
  }
</style>


