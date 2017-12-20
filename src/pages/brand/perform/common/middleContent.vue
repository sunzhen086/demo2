<template>
		<div>
			<div class="left-part1">
				<div class="img"></div>
			</div>
			<div class="middle-part1">
				<p class="middle-part1-top">
					<number-format :format=format :strValue='allData.zxiaoliang'></number-format>
					<span class='unitClass'>{{allData.unit}}</span>
					
				</p>
				<p class="middle-part1-middle">
					<label class="labInfo1">{{allData.detailName}}</label>
					<label class="labInfo2">同比增长率</label>
				</p>
				<p class="middle-part1-bottom">
					<label class="labInfo1">
						<span :class="{'red':this.allData.rankType == '-1','green':this.allData.rankType == '1' }">
							<i :class="{'fa fa-arrow-down':this.allData.rankType == '-1','fa fa-arrow-up':this.allData.rankType == '1' }" aria-hidden="true"></i>
							<number-format :format=format :strValue='allData.xiaoliang'></number-format>
							<span class='unitClass'>{{allData.unit}}</span>
						</span>
					</label>
					<label class="labInfo2">
						<span :class="{'red':this.allData.rankType == '-1','green':this.allData.rankType == '1' }">
							<i :class="{'fa fa-arrow-down':this.allData.rankType == '-1','fa fa-arrow-up':this.allData.rankType == '1' }" aria-hidden="true"></i>
							<numberFormat format="small-decimal" :strValue=allData.tbrate></numberFormat>%
						</span>
					</label>
					
				</p>
			</div>
			<div class="right-part1">
				<bar-chart :chartData=allData.chartData1></bar-chart>
			</div>
			<div class="left-part2">
				<fillChart :chart-data="allData.fillChart[0]"></fillChart>
			</div>
			<div class="middle-part2">
				<table class="table-class">
					<tr >
						<td align="right"><label >本期占比</label></td>
						<td align="left">
							<label >
								<span :class="{'red':this.allData.rankType1 == '-1','green':this.allData.rankType1 == '1' }">
									<numberFormat format="small-decimal" :strValue=allData.zlrate></numberFormat>%
								</span>
							</label>
						</td>
					</tr>
					<tr >
						<td align="right"><label >同期占比</label></td>
						<td align="left">
							<label >
								<span :class="{'red':this.allData.rankType1 == '-1','green':this.allData.rankType1 == '1' }">
									<i :class="{'fa fa-arrow-down':this.allData.rankType1 == '-1','fa fa-arrow-up':this.allData.rankType1 == '1' }" aria-hidden="true"></i>
										<numberFormat format="small-decimal" :strValue=allData.tqrate></numberFormat>%
								</span>
							</label>
						</td>
					</tr>
				</table>
			</div>
			<div class="right-part2">
				<line-chart :chartData=allData.chartData2></line-chart>
			</div>
		</div>	
</template>


<script>

	import echarts from 'echarts';
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import barChart from './barChart.vue';
	import lineChart from './lineChart.vue';
	import fillChart from './fillChart.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';

	export default {
		props: {
			allData: Object
		},
		components: {
			boxBase,
			tabBase,
			barChart,
			fillChart,
			lineChart,
			numberFormat
		
		},
		data() {
			return {
				format:'to-thousand'
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">

@import '../../../../styles/variables.scss';
	
		.red{
			color: $red;
		}
		.green{
			color: $green;
		}
		.orange{
			color: $orange;
		}
		.left-part1{
			width: 0.66rem;
			height:0.65rem;
			background-size:0.66rem 0.65rem;
			float: left;
			margin-top: 0.6rem;
			margin-left: 0.2rem;
			background-image: url(../../../../static/img/brand/perform/brand.png);
		}
		.middle-part1{
			width: 1.8rem;
			float:left;
			margin-left: 0.2rem;
			margin-top: 0.4rem;
			.middle-part1-top{
				font-size: 0.3rem;
				margin-bottom: 0.4rem;
				.unitClass{
					font-size: 0.2rem;
				}
			}
			.middle-part1-middle{
				margin-bottom:0.15rem ;
				font-size: 0.16rem;
				color:#2edbff;
				.labInfo1{
				}
				.labInfo2{
					margin-left: 0.2rem;
				}
			}
			.middle-part1-bottom{
				font-size: 0.15rem;
				.labInfo1{
					.unitClass{
						font-size: 0.13rem;
					}
				}
				.labInfo2{
					margin-left: 0.1rem;
					
				}
				
			}
		}
		.right-part1{
			width: 8.7rem;
			float:left;
			margin-left: 0.5rem;
			margin-top: 0.1rem;
		}
		.left-part2{
			width: 1.5rem;
			height:1.35rem;
			float:left;
			margin-top: 0.3rem;
		}
		.middle-part2{
			width: 1.8rem;
			float:left;
			margin-top: 0.55rem;
			
			.table-class{
				font-size: 0.16rem;
				color:#2edbff;
				td{
					padding: 0.1rem;
				}
				
			}
			
		}
		.right-part2{
			width: 8.7rem;
			float:left;
			margin-left: 0.1rem;
			margin-top: 0.05rem;
		}

	
</style>

