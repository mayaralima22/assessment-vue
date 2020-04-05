<template>
  <div>
    <!-- <AddTask /> -->
    <h1>Boardgames</h1>
    <div class="boardgames">
      <div class="boardgame" v-for="boardgame in allBoardgames" :key="boardgame.gameId">
        {{boardgame.name}}
        <!-- <router-link tag="a" :to="{ name: 'boardgame-details', params: { id: boardgame.gameId } }"></router-link> -->
        <!-- <md-button v-on:click="deleteTask(boardgame.id)">
          <md-icon>delete</md-icon>
        </md-button>-->
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
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import AddTask from "./AddTask.vue";
export default {
  name: "BoardgamesPage",
  //   components: { AddTask },
  methods: {
    ...mapActions(["getBoardgames"]),
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

.img {
  width: 50%;
  height: 50%;
}
</style>
