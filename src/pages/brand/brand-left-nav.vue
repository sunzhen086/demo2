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
						tabNum: 'perform',
						tabUrl: '/brand/perform',
						tabIcon: 'pinpaibiaoxian_1',
						tabName: '品牌表现'
					},
					{
						tabNum: 'constitute',
						tabUrl: '/brand/constitute',
						tabIcon: 'pinpaifenbu_1',
						tabName: '品牌分布'
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