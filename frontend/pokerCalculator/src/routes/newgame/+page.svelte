<script>
  import { game } from "../../stores.js";
  import DateInput from "./DateInput.svelte";
  let date = new Date();
  function submit() {
    $game.time = date;
  }
</script>

<div class="create">
  <h2>Create a new game here</h2>
  <form class="content" on:submit={submit} action="/saved">
    <label>
      Name:
      <input type="text" bind:value={$game.name} required />
    </label>
    <label>
      Location:
      <input type="text" bind:value={$game.location} />
    </label>
    <div class="dateInput">
      Date:
      <DateInput bind:date />
    </div>
    <label>
      Description:
      <textarea rows="3" bind:value={$game.description} />
    </label>
    <button type="submit" class="submitButton" disabled={$game.name == null}
      >Save</button
    >
  </form>
</div>

<style>
  .create {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
  }
  .content {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 90%;
    height: 90vh;
  }
  label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px;
    width: 100%;
  }
  .dateInput {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 10px;
  }
  textarea {
    width: 63%;
  }
  .submitButton {
    width: 100%;
    height: 30px;
    margin-top: auto;
  }
</style>
