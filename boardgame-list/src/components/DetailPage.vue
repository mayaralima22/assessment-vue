<template>
  <div class="details-page">
    <md-card class="md-layout-item md-size-50 md-xsmall-size-100 md-small-size-75">
      <md-card-header>
        <router-link tag="button" class="md-button top-buttons" :to="{ name: 'boardgames' }">
          <md-icon>arrow_back</md-icon>
        </router-link>
        <router-link tag="button" class="md-button top-buttons" :to="{ name: 'edit-boardgame' }">
          <md-icon>edit</md-icon>
        </router-link>
      </md-card-header>
      <md-divider></md-divider>
      <md-card-content>
        <h2 class="title">{{ boardgameById(gameId).name }}</h2>
        <div class="cover">
          <img v-bind:src="boardgameById(gameId).image" />
        </div>
        <p>Mínimo de jogadores: {{ boardgameById(gameId).minPlayers }} pessoas</p>
        <p>Máximo de jogadores: {{ boardgameById(gameId).maxPlayers }} pessoas</p>
        <p>Tempo de jogo: {{ boardgameById(gameId).playingTime }} minutos</p>
        <md-snackbar :md-active.sync="gameEdited">
          <span>O jogo foi editado com sucesso!</span>
          <md-button class="md-primary" @click="gameEdited = false">Fechar</md-button>
        </md-snackbar>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DetailPage",
  data: function() {
    return {
      gameId: this.$route.params.gameId,
      gameEdited: this.$route.params.edited == true
    };
  },
  computed: mapGetters(["boardgameById"])
};
</script>

<style scoped>
.md-card-content {
  padding: 12px 32px 24px;
}

.details-page {
  display: flex;
  justify-content: center;
}

.top-buttons.md-button {
  width: 40px;
  min-width: 40px;
  border-radius: 50%;
}

.md-card-header {
  display: flex;
  justify-content: space-between;
}

.cover {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 32px 0;
}

.cover img {
  max-width: 75%;
  max-height: 400px;
}
</style>
