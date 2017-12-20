<template>
	<box-base class="sale-trend-box">
		<div slot="box-title">
			<p class="title">重点品牌销量走势</p>
		</div>
		<div slot="box-extend">
			<link-btn  @on-click="tableShowHide"></link-btn> 
		</div>

		<div class="content">
			<div class="tip" >
				{{chartData.period}} 销量<span class="orange"><numberFormat format="small-decimal" :numValue=chartData.saleQty></numberFormat></span>万箱
				（同比
					<i :class="{'fa fa-arrow-down':chartData.sameIncRate< 0,'fa fa-arrow-up':chartData.sameIncRate > 0 }" aria-hidden="true">
						<label>{{chartData.sameIncRate}}</label>
					</i>
				%），
				市场份额<span class="orange"><numberFormat format="small-decimal" :numValue=chartData.saleRate></numberFormat></span>%
				（同比
					<i :class="{'fa fa-arrow-down':chartData.saleRateInc< 0,'fa fa-arrow-up':chartData.saleRateInc > 0 }" aria-hidden="true">
						<label>{{chartData.saleRateInc}}</label>
					</i>
				个百分点）
			</div>
			<div class="trendPic">
				<stack-line-chart :chartData=chartData></stack-line-chart>
			</div>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import stackLineChart from './stackLineChart.vue';
	import linkBtn from 'components/detailbutton/link-button.vue';
	import numberFormat from 'components/numberformat/number-format.vue';

	export default {

		data() {
			return {
				chartData:{
					period: '2017年1-5月',
					saleQty: 38.42,
					sameIncRate: 4.31,
					saleRate: 66.19,
					saleRateInc: 2.69,
					periodArr:['201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609', '201610', '201611', '201612', '201701', '201702', '201703', '201704', '201705'],
					saleUpArr:[null,null,7.04,null,null,null,null,null,null,null,8.29,7.73,11.96,5.07,7.10,,7.34],
					saleDownArr:[11.12,4.42,,7.04,7.21,7.82,6.40,8.12,8.77,7.12,null,null,null,null,null,6.96,null],
					saleRateArr:[57.33,67.42,62.84,66.74,70.02,69.27,62.22,62.79,63.39,62.20,61.74,55.75,68.97,60.84,63.09,69.22,66.28],
					unitName:'万箱',
					qtyScale:[0,20],
					rateScale:[0,70]
				}
			}
		},
		components: {
			boxBase,
			stackLineChart,
			linkBtn,
			numberFormat
		},
		methods: {
			tableShowHide:function(){
			}
		}

	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.sale-trend-box {
		height: 3.1rem;
		.content{
			padding-top: 0.1rem;
			.tip {
				margin-left: 0.1rem;
				margin-right: 0.1rem;
				background-color: rgb(36, 62, 136);
				padding: 0.1rem;
				span {
					font-size: 0.18rem;
					font-weight: bold;
					padding:0 0.05rem;
				}
				.red {
					color: $red;
				}
				.green {
					color: $green;
				}
				.orange {
					color: $orange;
				}
			}
			.trendPic{
				margin: 0.1rem;
				height:2.25rem;
			}
		}
	}
	
	.fa-arrow-up {
		color: $green;
	}
	
	.fa-arrow-down {
		color: $red;
	}

</style>