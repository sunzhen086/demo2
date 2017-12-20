<template>
	<div class="main">
		<leftMiddleBox class="leftBox" v-bind:boxData = boxData[0]></leftMiddleBox>
		<leftMiddleBox class="rightBox" v-bind:boxData = boxData[1]></leftMiddleBox>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import leftMiddleBox from './leftMiddleBox.vue';

	export default {
		data() {
			return {
				boxData:[
					{
			       		title:'按经营业态',
			       		pieChartData: {
			       			text:'',
			       			data:[
			       				{name:'食杂店',value:280},
			       				{name:'便利店',value:54},
			       				{name:'烟酒店',value:43},
			       				{name:'其他',value:10},
			       				{name:'娱乐服务',value:8},
			       				{name:'超市',value:4},
			       				{name:'商场',value:0}
			       			]
			       		}
			       	},
			       	{
			       		title:'按市场类型',
			       		pieChartData: {
			       			text:'',
			       			data:[
			       				{name:'城镇',value:308},
			       				{name:'乡村',value:91}
			       			]
			       		}
			       	}
			    ]
			}
			
		},
		methods:{
			
		},
		components: {
			boxBase,
			leftMiddleBox
		},
	}
</script>

<style lang="scss" scoped>
	@import "../../../../../styles/variables.scss";
	.main{
		height: 2.1rem;
		margin-top: $box-distince;
		
		.leftBox{
			margin-left: -0.14rem;
			float: left;
		}
		.rightBox{
			float: left;
			margin-left: 0.14rem;
		}
	}
	
</style>
