import axios from 'axios';
import { v4 as uuid } from 'uuid';


const state = {
    boardgames: []
};
const getters = {
    allBoardgames: state => state.boardgames,
    boardgameById: (state) => (gameId) => (state.boardgames.filter(t => t.gameId === gameId))[0],
};
const actions = {
    getBoardgames({ commit }) {
        axios.get("http://bgg-json.azurewebsites.net/collection/edwalter"
        ).then((response) => {
            commit('setBoardgames', response.data.filter((bg, i) => i % 5 === 0));
        });
    },
    addBoardgame({ commit }, { name, image, minPlayers, maxPlayers, playingTime }) {
        const newBG = {
            gameId: uuid(),
            name,
            image,
            minPlayers: parseInt(minPlayers),
            maxPlayers: parseInt(maxPlayers),
            playingTime: parseInt(playingTime),
        };
        commit('pushBoardgame', newBG);
    },
    deleteBoardgame({ commit }, gameId) {
        commit('removeBoardgames', gameId);
    },
    updateBoardgame({ commit }, updatedBoardgame) {
        commit("updateBoardgame", updatedBoardgame);
    }
};

const mutations = {
    setBoardgames: (state, boardgames) => (state.boardgames = boardgames),
    pushBoardgame: (state, boardgame) => state.boardgames.unshift(boardgame),
    removeBoardgames: (state, gameId) =>
        (state.boardgames = state.boardgames.filter(boardgame => boardgame.gameId !== gameId)),
    updateBoardgame: (state, updatedBoardgame) => {
        const index = state.boardgames.findIndex(boardgame => boardgame.gameId === updatedBoardgame.gameId);
        if (index !== -1) {
            return state.boardgames.splice(index, 1, updatedBoardgame);
        }
    }
};

export default {
    state,
    actions,
    getters,
    mutations
};
