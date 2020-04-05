<template>
  <div>
    <h2>{{ boardgameById(gameId).name }}</h2>
    <p>{{ boardgameById(gameId).image }}</p>
    <p>{{ boardgameById(gameId).minPlayers }}</p>
    <p>{{ boardgameById(gameId).maxPlayers }}</p>
    <p>{{ boardgameById(gameId).playingTime }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DetailPage",
  data: function() {
    return {
      gameId: this.$route.params.gameId
    };
  },
  computed: mapGetters(["boardgameById"])
};
</script>

<style scoped>
</style>
