import Vue from 'vue';
import VueRouter from 'vue-router';
import BoardgamePage from './components/BoardgamePage';
import AddBoardgame from './components/AddBoardgame';
import DetailPage from './components/DetailPage';



Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: BoardgamePage
		}, {
			path: '/add-boardgame',
			name: 'addboardgame',
			component: AddBoardgame
		}, {
			path: '/boardgames',
			name: 'boardgames',
			component: BoardgamePage
		},
		{
			path: '/boardgame-details/:gameId',
			name: 'boardgame-details',
			component: DetailPage
		}
	]
});
