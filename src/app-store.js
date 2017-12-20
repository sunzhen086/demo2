const appStore = {
	state: {
		nav: {
			top: 'overview',
			left: 'nation'
		},
		loading:{
			instance:null,
			queue:0
		}
	},
	mutations: {
	    setTopNavStatus(state, data) {
	      state.nav.top = data;
	    },
	    setLeftNavStatus(state, data) {
	      state.nav.left = data;
	    },
	    addLoadingQueue(state, data){
	      state.loading.queue ++ ;
	    },
	    subtractLoadingQueue(state, data){
	      state.loading.queue -- ;
	    },
	    setLoadingInstance(state, data){
	      state.loading.instance = data;
	    }
	}
}

export default appStore;