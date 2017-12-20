<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">5&nbsp;/</span><span class="title2">陕西销量排名</span>
			
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
				options: [{"label":"陕西销量明细","value":"01"}],
				chartData:{
					xLineData: ['贵州\n中烟', '中烟\n实业', '河南\n中烟', '四川\n中烟', '河北\n中烟','陕西\n中烟','云南\n中烟',
								'安徽\n中烟','广东\n中烟','江苏\n中烟','湖南\n中烟','上海\n烟草','重庆\n中烟','浙江\n中烟'],
					'qtySoldData': {
						name: '销量',
						type:'bar',
						color: ['rgb(9,88,253)'],
						data: [
							652.43, 622.21, 583.49, 564.21, 521.74,482.98,453.32,426.43, 331.21, 274.49, 221.21, 201.74,182.98,132.32
						]
					},
					'tbData': {
						name: '同比增减',
						type:'line',
						color: ['rgb(7,222,155)'],
						data: [
							2.43, 9.21, 3.49, 4.21, 5.74,1.98,5.32,7.43, 1.21, 4.49, 1.21, 1.74,2.98,2.32
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
		.content{
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