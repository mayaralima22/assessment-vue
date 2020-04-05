import axios from 'axios';
import { v4 as uuid } from 'uuid';


const state = {
    boardgames: []
};
const getters = {
    allBoardgames: state => state.boardgames,
    boardgamesById: (state) => (gameId) => (state.boardgames.filter(t => t.gameId === gameId))[0],
};
const actions = {
    getBoardgames({ commit }) {
        axios.get("http://bgg-json.azurewebsites.net/collection/edwalter"
        ).then((response) => {
            commit('setBoardgames', response.data.filter((bg, i) => i % 5 === 0));
        });
    },
    addBoardgame({ commit }, newName, newImage, newMinPlayers, newMaxPlayers, newPlayingTime) {
        const response = {
            gameId: uuid(),
            name: newName,
            image: newImage,
            minPlayers: newMinPlayers,
            maxPlayers: newMaxPlayers,
            playingTime: newPlayingTime,
        };
        commit('pushBoardgames', response);
    },
    deleteBoardgame({ commit }, gameId) {
        commit('removeBoardgames', gameId);
    },
    // updateTask({ commit }, updatedBoardgame) {
    //     commit("updateBoardgame", updatedBoardgame);
    // }
};

const mutations = {
    setBoardgames: (state, boardgames) => (state.boardgames = boardgames),
    pushBoardgames: (state, boardgames) => state.boardgames.unshift(boardgames),
    removeBoardgames: (state, gameId) =>
        (state.boardgames = state.boardgames.filter(boardgame => boardgame.gameId !== gameId)),
    // updateBoardgame: (state, updatedTask) => {
    //     const index = state.boardgames.findIndex(boardgame => boardgame.id === updatedTask.id);

    //     if (index !== -1) {
    //         state.boardgames.splice(index, 1, updatedTask);
    //     }
    // }
};

export default {
    state,
    actions,
    getters,
    mutations
};
