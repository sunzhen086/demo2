<template>
   
	<div class="content" >
			<div class="topDetail">
				<p class="title">全省订货实时情况</p>
				<div class="liquidDiv liquid1">
					<div class="head">
						<numberFormat :format=format :strValue='detailChartData[0]'></numberFormat> 
					</div>
					<div class="row ">订单数（笔）</div>
				</div>
				<div class="liquidDiv liquid2">
					<div class="head">
						{{detailChartData[1]}}
					</div>
					<div class="row">订货完成率</div>
				</div>
				<div class="liquidDiv liquid3">
					<div class="head ">
						<numberFormat format="small-decimal" :strValue='detailChartData[2]'></numberFormat> 
					</div>
					<div class="row ">订单量（箱）</div>
				</div>
				<div class="liquidDiv liquid3">
					<div class="head">
						<numberFormat format="small-decimal" :strValue='detailChartData[3]'></numberFormat> 
					</div>
					<div class="row">单条值（元）</div>
				</div>
				<div class="liquidDiv1 liquid3">
					<div class="head">
						{{detailChartData[4]}}
					</div>
					<div class="row">电子结算率</div>
				</div>
				
				<realTimeBar-chart class="liquidChart" :chartData=chartData></realTimeBar-chart>
			</div>
		
			<div class="bottomDetail">
				<p class="title">各地市订货实时情况</p>
				<realTimeShowTable></realTimeShowTable>
			</div>
			
		</div>

</template>
<script>
	import echarts from 'echarts';
	
	import boxBase from 'components/box/box-base.vue';
	import realTimeBarChart from './tool/realTimeBarChart.vue';
	import realTimeShowTable from './tool/realTimeShowTable.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';

	
	export default {
		props: {
    		
		},
		
		data(){
			return {
				format:'to-thousand',
				detailChartData:['21874','98%','4156.80','143.78','96%'
				],
				chartData: {
						
				}
			}
		},
		components: {
			boxBase,
			realTimeBarChart,
			realTimeShowTable,
			numberFormat
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.content{
		position:relative;
		//margin-top: 0.1rem;
		height: 5.60rem;
		.title{
			color: #FFFFFF;
			margin-bottom: 0.1rem;
		}
		.topDetail{
			overflow:hidden;
		}
		.middleDetail{
			height: 3.1rem;
		}
		.bottomDetail{
			height: 2.2rem;
		}
		.liquidDiv{
			width: 17%;
			float: left;
			overflow: hidden;
			margin-top: 0.1rem;
			position:relative;
			padding:0 0.1rem;
			.head{
				font-size: 0.16rem;
				text-align: center;
				margin-top: 0.1rem;
				color: #FFFFFF;
			}
			.row{
				font-size: 0.16rem;
				text-align: center;
				margin-top: 0.3rem;
				color:rgb(7,222,155);
			}
			&::after{
				content:"";
				position:absolute;
				height:70%;
				top:15%;
				right:0;
				border-left:1px solid #ccc;
			}
			
		}
		.liquid1{
			//margin-left: 2.45rem;
		}
		.liquid3{
			float: left;
			overflow: hidden;
			margin-top: 0.1rem;
			position:relative;
			padding:0 0.1rem;
			.head{
				font-size: 0.16rem;
				text-align: center;
				margin-top: 0.1rem;
				color: #FFFFFF;
			}
			.row{
				font-size: 0.16rem;
				text-align: center;
				margin-top: 0.3rem;
				color:rgb(7,222,155);
			}
		}
		.liquidChart{
			width:100%;
			float:left;
			height:2rem;
			margin-left: 0.15rem;
			margin-top: 0.1rem;
		}
		.unit{
	        font-size: 0.12rem;
	        color: #2edbff;
   		 }
	}	
	
	
</style>