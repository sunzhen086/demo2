<template>
	<tab-base :option=paneOption @tab-click="tabClick" class="tabClass"></tab-base>	
</template>

<script>
	import tabBase from 'components/tab/tab-base.vue';
	import EventBus from '../eventBus';
	export default {
		data() {
			return {
				paneOption: {
					data: [{
						key: 'saleQty',
						text: '卷烟销量'
					}, {
						key: 'saleAmt',
						text: '销售收入'
					}, {
						key: 'avePrice',
						text: '单箱均价'
					}, ],
					activePane: 'saleQty'
				}
				
			}
		},
		methods:{
			tabClick:function(currentPaneKey){
				EventBus.$emit("measureChanged",currentPaneKey);
			}
		},
		components: {
			tabBase
		}
	}
</script>
<style lang="scss" scoped>
</style>