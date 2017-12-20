<template>
	<div>
		<box-base class="main">
			<div slot="box-title">
				<p>{{boxData.title}}</p>
			</div>
			<div slot="box-extend">
				<p>
					<i class="fa" :class="boxData.rightUpIcon" aria-hidden="true" v-on:click="showMonthChart"></i>
				</p>
			</div>
			
			<div class="content">
				<p>
					<div class="m-middle">
						<big><numberFormat format="small-decimal" :strValue=boxData.content></numberFormat></big>
						<small>{{boxData.subContent}}</small>
					</div>
				</p>
				<p class="m-bottom-title">
					<small class="m-left-bottom-title">{{boxData.subTitleLeft}}</small>
					<small class="m-right-bottom-title">{{boxData.subTitleRight}}</small>
				</p>
				<div class="m-bottom-content">
					<div class="big"><numberFormat format="small-decimal" :strValue=boxData.subContentLeft></numberFormat></div>
					<div v-if="boxData.subContentFlag === '0'" class="m-right-bottom-content green">
						<i class="fa fa-arrow-up" aria-hidden="true"></i>
						<small>{{boxData.subContentRight}}</small>
					</div>
					<div v-else-if="boxData.subContentFlag === '1'" class="m-right-bottom-content red">
						<i class="fa fa-arrow-down" aria-hidden="true"></i>
						<small>{{boxData.subContentRight}}</small>
					</div>
					<div v-else class="m-right-bottom-content red">
						<i class="fa fa-arrow-down" aria-hidden="true"></i>
						<small>{{boxData.subContentRight}}</small>
					</div>
				</div>
			</div>
		</box-base>
		
		<el-dialog :title="boxData.title" :visible.sync="monthChartVisible" class="cma line-bar-chart" size="large">
			<lineBarChart v-bind:chartData = "boxData.monthChartData" :chartRuler = "boxData.subContent"></lineBarChart>
		</el-dialog>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import lineBarChart from './lineBarChart.vue';
	import numberFormat from 'components/numberformat/number-format.vue';
	
	export default {
		props: {
    		boxData: Object 
		},
		data() {
			return {
				monthChartVisible: false
			}
			
		},
		components: {
			boxBase,
			lineBarChart,
			numberFormat
		},
		methods:{
			showMonthChart:function(event){
				this.monthChartVisible = true;
			}
		}
	};
	
	
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.main{
		width: 2.41rem;
		font-size: 0.14rem;
		color: #2edbff;
		height: 1.58rem;
		
		.fa {
			cursor: pointer;
		}
		
		.content {
			width: 2.41rem;
			margin-top: 0.2rem;
			
			.m-middle{
				margin-top: 0.1rem;
				text-align: center;
				font-size: 0.3rem;
				small{
					font-size: 0.14rem;
				};
			}
			.m-bottom-title{
				margin-top: 0.18rem;
				color: #2edbff;
				.m-left-bottom-title{
					font-size: 0.14rem;
				}
				.m-right-bottom-title{
					font-size: 0.14rem;
					float: right;
					margin-right: 0.18rem;
				}
			}
			.m-bottom-content{
				margin-top: 0.14rem;
				.big{
					float: left;
					font-size: 0.18rem;
				}
				.m-right-bottom-content{
					float: right;
					font-size: 0.16rem;
					margin-right: 0.18rem;
					margin-top: 0.03rem;
				}
				.green{
					color: $green;
				}
				.red{
					color: $red;
				}
			}
			
		}
		
	}
	.line-bar-chart{
		width: 100%;
	}
	
</style>