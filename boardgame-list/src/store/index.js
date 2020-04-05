import Vuex from "vuex";
import Vue from "vue";
import boardgame from "./modules/boardgame";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        boardgame,
    }
});