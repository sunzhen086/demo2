<template>
	<box-base class="pic-box">
		<div slot="box-title">
			<p class="title">社会存销比</p>
		</div>
		<div>
			<p class="number">{{chartData.value}}
				<span>
					<label class="title">环比</label>
					<i :class="{'fa fa-arrow-down':this.chartData.lastInc < 0,'fa fa-arrow-up':this.chartData.lastInc > 0 }" aria-hidden="true">
						<label>{{chartData.lastInc}}</label>
					</i>
				</span>
			</p>
		</div>

		<div class="content">
			<line-chart :chartData=chartData></line-chart>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';

	import lineChart from './tool/lineChart.vue';

	export default {
		props: {
			city: {
				type: String
			}
		},
		data() {
			return {
				chartData: {}
			}

		},
		components: {
			boxBase,
			lineChart
		},
		computed: {
			search() {
				return this.$store.state.markStatusCity.search;
			}
		},
		methods: {
			getChartData:function(){
				var cityName = this.search.city.name;
				return {
					value: 2.12,
					lastInc: 0.25,
					min: 2,
					max: 3,
					'date': ['1月', '2月', '3月', '4月', '5月'],
					'proData': {
						datas: [
							2.43, 2.21, 2.49, 2.21, 2.74, 2.74
						],
						name: '全省'
					},
					'cityData': {
						datas: [
							2.36, 2.19, 2.21, 2.36, 2.62, 2.54
						],
						name:  cityName
					}
				}
			}
		},
		watch:{
			search:{
				handler: function (val) {
					this.chartData = this.getChartData(val);
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