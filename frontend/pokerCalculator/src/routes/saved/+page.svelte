<script>
  import { game } from "../../stores.js";
</script>

<div class="saved">
  <h2>View saved games here</h2>
  <h2>Game Name: {$game.name}</h2>
  <h2>Game Location: {$game.location}</h2>
  <h2>Game Date: {$game.time}</h2>
</div>

<style>
  .saved {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
