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
						tabNum: 'status',
						tabUrl: '/market/status',
						tabIcon: 'shichangzhuangtai_1',
						tabName: '市场状态'
					},
					{
						tabNum: 'strategy',
						tabUrl: '/market/strategy',
						tabIcon: 'shichangcelue_1',
						tabName: '市场策略'
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