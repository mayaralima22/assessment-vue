<template>
  <div class="add-boardgame">
    <md-card class="md-layout-item md-size-50 md-xsmall-size-100 md-small-size-75">
      <md-card-header>
        <router-link tag="button" class="md-button top-buttons" :to="{ name: 'boardgames' }">
          <md-icon>arrow_back</md-icon>
        </router-link>
      </md-card-header>
      <md-divider></md-divider>
      <md-card-content>
        <h2 class="md-title">Adicionar novo boardgame</h2>
        <form @submit.prevent="createBoardgame">
          <md-field>
            <label>Nome</label>
            <md-input v-model="newName" required></md-input>
          </md-field>
          <md-field>
            <label>Link da imagem</label>
            <md-input type="url" pattern="https?://.+" v-model="newImage" required></md-input>
          </md-field>
          <md-field>
            <label>Mínimo de jogadores</label>
            <md-input type="number" v-model="newMinPlayers" required></md-input>
          </md-field>
          <md-field>
            <label>Máximo de jogadores</label>
            <md-input type="number" v-model="newMaxPlayers" required></md-input>
          </md-field>
          <md-field>
            <label>Tempo de partida em minutos</label>
            <md-input type="number" v-model="newPlayingTime" required></md-input>
          </md-field>
          <md-button type="submit" class="md-raised md-primary">Adicionar jogo</md-button>
        </form>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddBoardgame",
  data: () => ({
    newName: "",
    newImage: "",
    newMinPlayers: 0,
    newMaxPlayers: 0,
    newPlayingTime: 0
  }),
  methods: {
    ...mapActions(["addBoardgame"]),

    createBoardgame() {
      this.addBoardgame({
        name: this.newName,
        image: this.newImage,
        minPlayers: this.newMinPlayers,
        maxPlayers: this.newMaxPlayers,
        playingTime: this.newPlayingTime
      });
      this.newName = "";
      this.newImage = "";
      this.newMinPlayers = 0;
      this.newMaxPlayers = 0;
      this.newPlayingTime = 0;
    }
  }
};
</script>

<style scoped>
.add-boardgame {
  display: flex;
  justify-content: center;
}

.add-boardgame .md-field {
  width: 400px;
}

.md-card-content {
  padding: 24px 32px;
}

.top-buttons.md-button {
  width: 40px;
  min-width: 40px;
  border-radius: 50%;
}
</style>
