import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//全局状态
import app from './app-store';
//市场状态地市
import markStatusCity from './pages/market/status/city/statusCityStore';

export default new Vuex.Store({
	modules: {
	app,
  	markStatusCity
    
  }
});