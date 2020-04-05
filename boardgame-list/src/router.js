import Vue from 'vue';
import VueRouter from 'vue-router';
import BoardgamePage from './components/BoardgamePage';



Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: BoardgamePage
		},
	]
});
