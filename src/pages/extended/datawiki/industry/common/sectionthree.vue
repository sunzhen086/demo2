<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">3&nbsp;/</span><span class="title2">行业销量排名</span>
			
			<span class="reportSpan cma">
			    <el-select v-model="selectValue" placeholder="相关分析" 
					size="small"
					class="left cma mid-item item-select" popper-class="cma-select">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</span>
		</div>
		
		<div style="height: 0.15rem;margin-bottom: 0.15rem; margin-left:0rem">
			<span class="title3">截止到2017年5月31日，陕西中烟年累计销量 <span class="numSpan">331.98</span> 万箱，
			工业排名第 <span class="numSpan">6</span>；
			同比增减 <span class="numSpan">1.98</span> %，
			工业排名第 <span class="numSpan">6</span></span>。
		</div>
		<div class="content">
			<bar-chart :chartData=chartData></bar-chart>
		</div>
	</box-base>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import echarts from 'echarts';
	import barChart from './chart.vue';
	
	export default {
		data() {
			return {
				options: [{"label":"行业销量明细","value":"01"}],
				chartData:{
					xLineData: ['贵州\n中烟', '中烟\n实业', '河南\n中烟', '四川\n中烟', '河北\n中烟','陕西\n中烟','云南\n中烟','安徽\n中烟','广东\n中烟','江苏\n中烟','湖南\n中烟','上海\n烟草','重庆\n中烟','浙江\n中烟'],
					'qtySoldData': {
						name: '销量',
						type:'bar',
						color: ['rgb(9,88,253)'],
						data: [
							622.43, 532.21, 483.49, 455.21, 421.74,331.98,315.32,296.43, 271.21, 254.49, 211.21, 181.74,162.98,102.32
						]
					},
					'tbData': {
						name: '同比增减',
						type:'line',
						color: ['rgb(7,222,155)'],
						data: [
							12.43, 2.21, 3.49, 24.21, 1.74,1.98,5.32,6.43, 1.21, 4.49, 1.21, 1.74,2.98,2.32
						]
					}
				}
			};
		},
		components: {
			boxBase,
			barChart
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		margin-bottom: 0.13rem;
		.title1{
			color: #2edbff;
			font-size: 30px;
		}
		.title2{
			margin-left: 10px ;
			color: #2edbff;
			font-size: 18px;
		}
		.title3{
			margin-left: 0.15rem ;
			color: #FFF;
			font-size: 16px;
		}
		.numSpan{
			color: rgb(254,149,2);
			font-size: 0.2rem;
			font-weight: bold;
		}
		.content{
			//width: 10.46rem;
			margin-left: 0.15rem;
			margin-bottom: 0.13rem;
			margin-right: 0.13rem;
		}
		.reportSpan {
			float: right;
			margin-right:0.15rem;
			padding-top:0.02rem;
			color:black;
		}
	}
		
	
</style>