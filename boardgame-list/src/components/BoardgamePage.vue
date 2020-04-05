<template>
  <div>
    <!-- <AddBoardgame /> -->
    <h1>Boardgames</h1>
    <router-link tag="a" :to="{ name: 'addboardgame' }">
      <md-button v-on:click="addBoardgame()" class="md-raised md-primary">Adicionar novo jogo</md-button>
    </router-link>
    <div class="boardgames">
      <div class="boardgame" v-for="boardgame in allBoardgames" :key="boardgame.gameId">
        {{boardgame.name}}
        <div class="img">
          <img :src="boardgame.image" />
        </div>
        <div>
          <span>Mínimo de jogadores:</span>
          {{ boardgame.minPlayers }}
        </div>
        <div>
          <span>Máximo de Jogarores:</span>
          {{ boardgame.maxPlayers }}
        </div>
        <div>
          <span>Duração em minutos:</span>
          {{ boardgame.playingTime }}
        </div>
        <router-link
          tag="a"
          :to="{ name: 'boardgame-details', params: { gameId: boardgame.gameId } }"
        >
          <md-button>
            <md-icon>description</md-icon>
          </md-button>
        </router-link>
        <md-button v-on:click="deleteBoardgame(boardgame.gameId)">
          <md-icon>delete</md-icon>
        </md-button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import AddBoardgame from "./AddBoardgame.vue";
export default {
  name: "BoardgamesPage",
  //   components: {  },
  methods: {
    ...mapActions(["getBoardgames", "deleteBoardgame", "addBoardgame"]),
    viewDetails() {}
  },
  computed: mapGetters(["allBoardgames"]),
  created() {
    this.getBoardgames();
  }
};
</script>

<style>
.boardgames {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
}

.boardgame {
  border: 1px solid #ccc;
  background: #4689fa;
  color: #ffffff;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>
