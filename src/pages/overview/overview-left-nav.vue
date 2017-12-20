<template>
	<div class="page">
		<leftnav :tabDatas=tabDatas></leftnav>
		<div class="content" >
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import leftnav from 'components/leftnav/left-nav.vue';
	
	export default {
		data() {
			return {
				currentTab:"nation",
				tabDatas: [
					{
						tabNum: 'nation',
						tabUrl: '/overview/nation',
						tabIcon: 'quanguo_1',
						tabName: '全国'
					},
					{
						tabNum: 'province',
						tabUrl: '/overview/province',
						tabIcon: 'quansheng_1',
						tabName: '全省'
					},
					{
						tabNum: 'city',
						tabUrl: '/overview/city',
						tabIcon: 'dishi_1',
						tabName: '地市'
					},
					{
						tabNum: 'vend',
						tabUrl: '/overview/vend',
						tabIcon: 'gongye_1',
						tabName: '工业'
					},
					{
						tabNum: 'keybrand',
						tabUrl: '/overview/keybrand',
						tabIcon: 'zhongdianpinpai_1',
						tabName: '重点品牌'
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