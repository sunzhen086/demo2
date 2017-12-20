<template>
	<div class="page">
		<leftnav :tabDatas=tabDatas></leftnav>
		<div class="content" >
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	
	import leftnav from '../../components/leftnav/left-nav.vue';
	
	export default {
		data() {
			return {
				tabDatas: [
					{
						tabNum: 'distribute',
						tabUrl: '/cust/distribute',
						tabIcon: 'kehufenbu_1',
						tabName: '客户分布'
					},
					{
						tabNum: 'profit',
						tabUrl: '/cust/profit',
						tabIcon: 'yinglifenxi_1',
						tabName: '盈利分析'
					}
				]
			}
		},
		components: {
			leftnav
		},
		methods:{
			
		}
	}
</script>
<style lang="scss" scoped>
		.content{
			margin-left:0.87rem;
		}
</style>