<template>
	<box-base class="pic-box">
		<div slot="box-title">
			<p class="title">价格指数</p>
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
		lineChart
	},
	methods: {
		getChartData:function(){
			var cityName = this.search.city.name;
			return {
				value: 98.12,
				lastInc: -1.25,
				min: 92,
				max: 98,
				'date': ['1月', '2月', '3月', '4月', '5月'],
				'proData': {
					datas: [
						95.45, 94.23, 93.26, 95.45, 94.68
					],
					name: '全省'
				},
				'cityData': {
					datas: [
						96.12, 94.23, 95.26, 94.56, 95.12
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
	watch:{
		search:{
			handler: function (val, oldVal) {
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
}</style>