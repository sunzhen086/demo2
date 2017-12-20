<template>
	<box-base class="pic-box">
		<div slot="box-title">
			<p class="title">社会库存</p>
		</div>
		<div>
			<p class="number">{{chartData.value}} <span class="unit">{{chartData.unitName}}</span>
				<span>
					<label class="title">环比</label>
					<i :class="{'fa fa-arrow-down':this.chartData.lastInc < 0,'fa fa-arrow-up':this.chartData.lastInc > 0 }" aria-hidden="true">
						<label>{{chartData.lastInc}}</label>
					</i>
				</span>
			</p>
		</div>

		<div class="content">
			<bar-chart :chartData=chartData></bar-chart>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';

	import barChart from './tool/barChart.vue';

	export default {
		props: {
			city: {
				type: Object
			}
		},
		data() {
			return {
				chartData: {}
			}

		},
		components: {
			boxBase,
			barChart
		},
		methods: {
			getChartData: function() {
				var cityName = this.search.city.name;
				return {
					value: 11.60,
					lastInc: -1.25,
					unitName: '万箱',
					'date': ['1月', '2月', '3月', '4月', '5月'],
					'proData': {
						datas: [
							14.31, 12.12, 24.91, 22.12, 22.43 //堆积图中，该值=全省-西安
						],
						name: '全省'
					},
					'cityData': {
						datas: [
							6.61, 8.92, 6.13, 5.64, 9.21
						],
						name: cityName
					}
				}
			}
		},
		computed: {
			search() {
				return this.$store.state.markStatusCity.search;
			}
		},
		watch: {
			search: {
				handler: function(val, oldVal) {
					this.chartData = this.getChartData();
				},
				deep: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../../styles/variables.scss";
	.pic-box {
		width: 4.05rem;
		height: 2rem;
		float: left;
		margin-left: $box-distince;
	}
	
	.content {
		height: 1.6rem;
		margin-top: -0.2rem;
	}
	
	.fa-arrow-up {
		color: $green;
	}
	
	.fa-arrow-down {
		color: $red;
	}
	
	.number {
		font-size: 0.2rem;
		padding-top: 0.1rem;
		.unit {
			font-size: 0.14rem;
			margin-left: 0.02rem;
		}
		span {
			color: #2edbff;
			font-size: 0.14rem;
			margin-left: 0.2rem;
			.title {
				padding-right: 0.1rem;
			}
			i {
				label {
					padding-left: 5px;
				}
			}
		}
	}
</style>