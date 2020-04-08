<template>
  <div class="edit-page">
    <md-card class="md-layout-item md-size-50 md-xsmall-size-100 md-small-size-75">
      <md-card-header>
        <div class="md-title">Editar Jogo</div>
      </md-card-header>
      <md-divider></md-divider>
      <md-card-content>
        <form novalidate @submit.prevent="saveBoardgame">
          <md-field>
            <label for="edit-boardgame-title">Nome</label>
            <md-input
              type="text"
              name="edit-boardgame-title"
              id="edit-boardgame-title"
              v-model="name"
            />
          </md-field>
          <md-field>
            <label for="edit-boardgame-image">Link da imagem</label>
            <md-input
              type="text"
              name="edit-boardgame-image"
              id="edit-boardgame-image"
              v-model="image"
            />
          </md-field>
          <md-field>
            <label for="edit-boardgame-minplayers">Mínimo de Jogadores</label>
            <md-input
              type="text"
              name="edit-boardgame-minplayers"
              id="edit-boardgame-minplayers"
              v-model="minPlayers"
            />
          </md-field>
          <md-field>
            <label for="edit-boardgame-maxplayers">Máximo de Jogadores</label>
            <md-input
              type="text"
              name="edit-boardgame-maxplayers"
              id="edit-boardgame-maxplayers"
              v-model="maxPlayers"
            />
          </md-field>
          <md-field>
            <label for="edit-boardgame-playingtime">Tempo de duração em minutos</label>
            <md-input
              type="text"
              name="edit-boardgame-playingtime"
              id="edit-boardgame-playingtime"
              v-model="playingTime"
            />
          </md-field>
          <div class="buttons">
            <md-button type="submit" class="md-raised md-primary">Salvar</md-button>
            <router-link
              tag="button"
              class="md-button md-raised md-accent"
              :to="{ name: 'boardgame-details', params: { gameId: gameId } }"
            >Cancelar</router-link>
          </div>
        </form>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EditBoardgamePage",
  data: function() {
    return {
      gameId: this.$route.params.gameId,
      name: "",
      image: "",
      minPlayers: 0,
      maxPlayers: 0,
      playingTime: 0
    };
  },
  computed: mapGetters(["boardgameById"]),
  methods: {
    ...mapActions(["updateBoardgame"]),
    saveBoardgame() {
      this.updateBoardgame({
        gameId: this.gameId,
        name: this.name,
        image: this.image,
        minPlayers: this.minPlayers,
        maxPlayers: this.maxPlayers,
        playingTime: this.playingTime
      });
      this.$router.push({
        name: "boardgame-details",
        params: { gameId: this.gameId, edited: true }
      });
    }
  },
  created() {
    this.gameId = this.boardgameById(this.gameId).gameId;
    this.name = this.boardgameById(this.gameId).name;
    this.image = this.boardgameById(this.gameId).image;
    this.minPlayers = this.boardgameById(this.gameId).minPlayers;
    this.maxPlayers = this.boardgameById(this.gameId).maxPlayers;
    this.playingTime = this.boardgameById(this.gameId).playingTime;
  }
};
</script>

<style scoped>
.completed {
  display: flex;
  align-items: center;
}

.completed label {
  font-size: 16px;
  color: #777;
  margin-right: 12px;
}

.edit-page {
  display: flex;
  justify-content: center;
}

.illustration {
  margin: 32px 12.5%;
  width: 75%;
}

.buttons {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
