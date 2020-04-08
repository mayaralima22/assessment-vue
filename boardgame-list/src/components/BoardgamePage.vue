<template>
  <div>
    <div class="top">
      <span class="md-display-1">Boardgames</span>
      <router-link tag="a" :to="{ name: 'addboardgame' }">
        <md-button class="md-raised md-primary">Adicionar Jogo</md-button>
      </router-link>
    </div>
    <div class="boardgames">
      <div class="boardgame" v-for="boardgame in allBoardgames" :key="boardgame.gameId">
        <span class="md-title">{{boardgame.name}}</span>
        <div class="cover">
          <img :src="boardgame.image" />
        </div>
        <router-link
          tag="a"
          :to="{ name: 'boardgame-details', params: { gameId: boardgame.gameId } }"
        >
          <md-button class="md-primary md-raised">Detalhar</md-button>
        </router-link>
        <md-button
          class="md-accent md-raised"
          v-on:click="deleteBoardgame(boardgame.gameId)"
        >Remover</md-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "BoardgamesPage",
  methods: {
    ...mapActions(["deleteBoardgame"]),
    viewDetails() {}
  },
  computed: mapGetters(["allBoardgames"])
};
</script>

<style lang="scss" scoped>
.boardgames {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
}

.boardgame {
  border: 1px solid #333;
  color: #333;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.cover {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
}
</style>
