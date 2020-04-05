import axios from 'axios';

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
    // addTask({ commit }, newName, newMinPlayers, newMaxPlayers) {
    //     const response = {
    //         userId: 1,
    //         gameId: uuid(),
    //         name: newName,
    //         image: newImage,
    //         minPlayers: newMinPlayers,
    //         maxPlayers: newMaxPlayers
    //     };
    //     commit('pushBoardgame', response);
    // },
    // deleteTask({ commit }, id) {
    //     commit('removeBoardgame', id);
    // },
    // updateTask({ commit }, updatedBoardgame) {
    //     commit("updateBoardgame", updatedBoardgame);
    // }
};

const mutations = {
    setBoardgames: (state, boardgames) => (state.boardgames = boardgames),
    pushBoardgames: (state, boardgame) => state.boardgames.unshift(boardgame),
    // removeBoardgames: (state, gameId) =>
    //     (state.boardgames = state.boardgames.filter(boardgame => boardgame.id !== id)),
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
