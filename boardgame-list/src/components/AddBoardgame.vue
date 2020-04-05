<template>
  <div class="add-boardgame">
    <md-field>
      <label>Nome</label>
      <md-input v-model="newName"></md-input>
    </md-field>
    <md-field>
      <label>Link da imagem</label>
      <md-input v-model="newImage"></md-input>
    </md-field>
    <md-field>
      <label>Mínimo de jogadores</label>
      <md-input v-model="newMinPlayers"></md-input>
    </md-field>
    <md-field>
      <label>Máximo de jogadores</label>
      <md-input v-model="newMaxPlayers"></md-input>
    </md-field>
    <md-field>
      <label>Tempo de partida em minutos</label>
      <md-input v-model="newPlayingTime"></md-input>
    </md-field>
    <md-button class="md-raised md-primary">Adicionar jogo</md-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddBoardgame",
  data: () => ({
    newName: "",
    newImage: "",
    newMinPlayers: "",
    newMaxPlayers: "",
    newPlayingTime: ""
  }),
  methods: {
    ...mapActions(["addBoardgame"]),

    createBoardgame() {
      this.addBoardgame(
        this.newName,
        this.newImage,
        this.newMinPlayers,
        this.newMaxPlayers,
        this.newPlayingTime
      );
      this.newName = "";
      this.newImage = "";
      this.newMinPlayers = "";
      this.newMaxPlayers = "";
      this.newPlayingTime = "";
    }
  }
};
</script>

<style scoped>
/* .add-task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
} */

.add-boardgame .md-field {
  width: 400px;
}
</style>
