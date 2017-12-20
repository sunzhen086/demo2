<template>
	<div>
		<box-base class="main">
			<div class="top-tab">
				<tab-base :option="paneOption" @tab-click="tabClick"></tab-base>
				<link-btn class="topRightMenu" @on-click=""></link-btn>
			</div>
			<div class="content">
				<div class="leftTop">
					{{companyData[0].leftTopInfo11}}
					<span>{{companyData[0].leftTopInfo21}}</span>{{companyData[0].leftTopInfo22}}
				</div>
				
				<div class="middleMapChart">
					<middleMapChart :chartData="companyData[0]"></middleMapChart>
				</div>
				<div class="middleLineBarChart">
					<middleLineBarChart v-bind:chartData = "companyData[0].lineBarChartData" :yAxisName="companyData[0].unit"></middleLineBarChart>
				</div>
			</div>
		</box-base>
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import linkBtn from 'components/detailbutton/link-button.vue';
	import middleMapChart from './middleMapChart.vue';
	import middleLineBarChart from './middleLineBarChart.vue';

	export default {
		props: {
			companyData: Array
		
		},
		data() {
			return {
				
			}
			
		},
		components: {
			boxBase,
			tabBase,
			linkBtn,
			middleMapChart,
			middleLineBarChart
		},
		methods:{
			tabClick:function(curTab){
				
			}
			
		},
		computed: {
			paneOption: function(){
				var self = this;
				var data = [];
				for(var i = 0 ;i< self.companyData.length; i++){
					data.push({
						key: "index"+i,
						text: self.companyData[i].title
					});
				}
				return {
					data: data,
					activePane: data[0].key
				};
			}
		}
	}

</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	
	.main{
		height: 6.14rem;
		color: #2edbff;
		
		.top-tab{
			height:0.26rem;
			
			.topRightMenu {
				float: right;
			}
		}
		.content{
			.leftTop{
				margin-top: 0.1rem;
				width: 1.8rem;
				height: 0.45rem;
				padding: 0.15rem;
				line-height: 0.2rem;
				text-align: center;
				font-size: 0.14rem;
				background-color: rgb(36,62,136);
				
				span{
					font-size: 0.2rem;
					font-weight: bold;
					margin: 0 0.05rem 0 0.01rem;
					color: $orange;
				}
			
			}
			
			.middleMapChart{
				width: 4.6rem;
				height: 3.6rem;
				margin-top: -0.9rem;
			}
			
			.middleLineBarChart{
				width: 4.6rem;
				height: 2.6rem;
			}
		}
	}
</style>