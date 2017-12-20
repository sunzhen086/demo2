<template>
	<div>
		<box-base class="main">
			<div slot="box-title">
				<p>{{boxData.title}}</p>
			</div>
			
			<div class="content">
				<div class="lb-top">
					<div class="lb-top-left">
						<big><numberFormat format="small-decimal" :strValue=boxData.content></numberFormat></big>
					</div>
					<div class="lb-top-right">
						<span>环比</span>
						<div v-if="boxData.huanBiFlag === '0'" class="lb-top-right-content green">
							<i class="fa fa-arrow-up" aria-hidden="true"></i>
							<span>{{boxData.huanBiData}}{{boxData.unit}}</span>
						</div>
						<div v-else-if="boxData.huanBiFlag === '1'" class="lb-top-right-content red">
							<i class="fa fa-arrow-down" aria-hidden="true"></i>
							<span>{{boxData.huanBiData}} {{boxData.unit}}</span>
						</div>
						<div v-else class="lb-top-right-content red">
							<i class="fa fa-arrow-down" aria-hidden="true"></i>
							<span>{{boxData.huanBiData}}{{boxData.unit}}</span>
						</div>
					</div>
				</div>
				<div class="lb-middle">
				</div>
				<div class="lb-bottom">
					<leftBoxChart v-bind:chartData = "boxData.chartData" :unit="boxData.unit"></leftBoxChart>
				</div>
			</div>
		</box-base>
		
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import leftBoxChart from './leftBoxChart.vue';
	import numberFormat from 'components/numberformat/number-format.vue';

	export default {
		props: {
			boxData: Object
		
		},
		data() {
			return {
				
			}
			
		},
		mounted() {
			
		},
		components: {
			boxBase,
			leftBoxChart,
			numberFormat
		},
		methods:{
			
		}
	
	}
	
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	
	.main{
		height: 1.98rem;
		color: #2edbff;
		
		.content{
			.lb-top{
				margin-top: 0.2rem;
				text-align: center;
				font-size: 0.26rem;
				
				.lb-top-left{
					float: left;
				}
				
				.lb-top-right{
					float: right;
					color: #2edbff;
					font-size: 0.16rem;
					margin-top: 0.12rem;
					margin-right: 0.04rem;
					
					.lb-top-right-content{
						float:right;
						margin-left: 0.1rem;
					}
					.green{
							color: $green;
					}
					.red{
						color: $red;
					}
				}
			}
			
			.lb-middle{
				height: 0.39rem;
			}
			
			.lb-bottom{
				
			}
		}
	}
</style>