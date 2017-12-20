<template>
	<div class="page">
		<!--<leftnav :tabDatas=tabDatas></leftnav>-->
		
		<div class="content" >
			<router-view></router-view>
		</div>
		<!--<ul :class="{show: this.leftNavShow === true,hidden: this.leftNavShow === false}" @mouseleave = "menuOnLeave">

			<li v-on:click="itemClick('/extended/complexeval','tab1')" :class="{active: this.currentTab==='tab1'}">
				<span class="icon icon1"></span>
				<span class="text">综合评价</span>
			</li>
			<li v-on:click="itemClick('/extended/warncenter','tab2')" :class="{active: this.currentTab==='tab2'}">
				<span class="icon icon2"></span>
				<span class="text">预警中心</span>
			</li>
			<li v-on:click="itemClick('/extended/datawiki','tab3')" :class="{active: this.currentTab==='tab3'}">
				<span class="icon icon3"></span>
				<span class="text">数据百科</span>
			</li>
			<li v-on:click="itemClick('/extended/statisticalindex','tab3')" :class="{active: this.currentTab==='tab3'}">
				<span class="icon icon3"></span>
				<span class="text">统计指标</span>
			</li>
			
			<div :class="{hidden: this.leftNavShow === true,show: this.leftNavShow === false}" class="menu-handler" @mouseenter = "menuHandlerHover">
				<i class="fa fa-angle-double-left" aria-hidden="true"></i>
			</div>
		</ul>
		<div class="content" >
			<router-view></router-view>
		</div>-->
	</div>
</template>

<script>
	import leftnav from '../../components/leftnav/left-nav.vue';

	export default {
		data() {
			return {
				tabDatas: [
					{
						tabNum: 'complexeval',
						tabUrl: '/extended/complexeval',
						tabIcon: 'zonghepingjia_1',
						tabName: '综合评价'
					},
					{
						tabNum: 'warncenter',
						tabUrl: '/extended/warncenter',
						tabIcon: 'yujingzhongxin_1',
						tabName: '预警中心'
					},
					{
						tabNum: 'datawiki',
						tabUrl: '/extended/datawiki',
						tabIcon: 'shujvbaike_1',
						tabName: '数据百科'
					},
					{
						tabNum: 'statisticalindex',
						tabUrl: '/extended/statisticalindex',
						tabIcon: 'tongjizhibiao_1',
						tabName: '统计指标'
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
