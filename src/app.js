import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';
import routes from './routes';
import './style.scss';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import utils from 'utils/utils';
import { Loading } from 'element-ui';

Vue.use(VueRouter);
Vue.use(ElementUI)

/**
 *    全局获取随机数方法
 */
Vue.prototype.random = function(min, max, scale) {
  scale = scale == undefined ? 0 : scale;
  var ret = (Math.random() * (max - min) + min).toFixed(scale)
  return Number(ret);
}

/**
 * 全屏loading方法
 */
Vue.prototype.showLoading = function(options){
	var options = options || {};
	options.text = options.text || "加载中";
	options.customClass = "cma";
	let instance = Loading.service(options);
	this.$store.commit('addLoadingQueue');
	this.$store.commit('setLoadingInstance',instance);
}

/**
 * 关闭全屏loading
 */
Vue.prototype.closeLoading = function(options){
	this.$store.commit('subtractLoadingQueue');
	if(this.$store.state.app.loading.queue === 0){
		let instance = this.$store.state.app.loading.instance;
		if(instance){
			instance.close();
		}
	}
}


export const router = new VueRouter({
  routes,
  mode: 'hash',
  linkActiveClass: 'active'
});


//登录相关，打开后要开启后端服务，不然跑不起来
//router.beforeEach((to, from, next) => {
//	if(to.path == "/login"){
//		next();
//	}else{
//		let cmaUser = utils.getStore("cma-user");
//		if(cmaUser == null){
//			next({path: '/login'});
//		}else{
//			next();
//		}
//	}
//});



new Vue({
  render: h => h(App),
  router,
  store
})
.$mount('#app');


