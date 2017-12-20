const markStatusCity = {
	state: {
		search:{
			city:{
				id:"西安市",
				name:"西安"
			},
			period:{
				value:"2017-05"
			}
		}
	},
	mutations: {
	    setMarketStatusCitySearch(state, data) {
	      state.search = data;
	    }
	}
}
export default markStatusCity;