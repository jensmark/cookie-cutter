<script>
  let fileVar;
  let loading = false;
  let errorText = undefined;

  let backendUrl = import.meta.env.VITE_BACKEND_URL;

  function submitForm() {
    event.preventDefault();

    const file = fileVar[0];
    const formdata = new FormData();
    formdata.append("file", file);

    loading = true;
    errorText = undefined;
    fetch(`${backendUrl}/generator/cutter`, {
      method: "POST",
      body: formdata,
    })
      .then((res) => {
        if (res.status == 200) {
          return res.blob();
        }
        return res.text().then((error) => {
          throw new Error(error);
        });
      })
      .then((data) => {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(data);
        a.download =
          file.name.substring(0, file.name.lastIndexOf(".")) + ".stl";
        a.click();
      })
      .catch((error) => {
        console.error(error);
        errorText = "Klarte dessverre ikke lage pepperkakeform av det bildet!";
      })
      .finally(() => {
        loading = false;
      });
  }
</script>

{#if errorText}
  <p>{errorText}</p>
{/if}

{#if !loading}
  <form on:submit={submitForm}>
    <input type="file" bind:files={fileVar} accept="image/*" />
    <input type="submit" />
  </form>
{:else}
  <p>Lager pepperkakeform ...</p>
{/if}
