<template>
	<div class="note">
		<span class="green strong">{{increaseUnitCount}}</span>家单位{{measureName}}同比增长，
		<span class="red strong">{{decreaseUnitCount}}</span>家单位{{measureName}}同比下降

		<br /><br /> 陕西：{{measureName}}
		<span v-if="provinceSameRate < 0">下降</span>
		<span v-else-if="provinceSameRate > 0">上升</span>
		<span v-else>持平</span>

		<span class="strong" v-bind:class="{red:provinceSameRate < 0, green:provinceSameRate > 0, orange:provinceSameRate == 0}">
			<number-format format="small-decimal" :numValue=provinceSameRate></number-format> 
		</span> %， 排名<span class="orange strong">{{provinceRank}}</span>， 较上月
		<template v-if="provinceSameRankRise > 0">
			前进<span class="green strong">{{provinceSameRankRise}}</span>名
		</template>

		<template v-else-if="provinceSameRankRise < 0">
			后退<span class="red strong">{{provinceSameRankRise * -1}}</span>名
		</template>

		<template v-else>
			排名没有变化
		</template>
	</div>
</template>

<script>
	import numberFormat from 'components/numberformat/number-format.vue';
	import axios from "utils/axios";
	import EventBus from '../eventBus';
	export default {
		data() {
			return {
				queryKey:"saleQty",
				increaseUnitCount: 0, //同比增加的单位数
				decreaseUnitCount: 0, //同比下降的单位数
				provinceSameRate: 0, //本省同比增减幅度
				provinceRank: 0, //本省本期的排名
				provinceSameRankRise: 0 //本省排名的同比增减数
			}
		},
		computed: {
			measureName: function() {
				var temp = {
					saleQty: "卷烟销售",
					saleAmt: "销售收入",
					avePrice: "单箱均价"
				};
				return temp[this.queryKey];
			}
		},
		methods: {
			getData: function() {
				var self = this;
				self.showLoading();
				axios.get('/overviewnation/getInfoBoxData', {
						params: {
							queryKey: self.queryKey
						}
					})
					.then(function(resp) {
						var result = resp.data.result;
						
						self.increaseUnitCount = result.increaseUnitCount;
						self.decreaseUnitCount = result.decreaseUnitCount;
						self.provinceSameRate = result.provinceSameRate;
						self.provinceRank = result.provinceRank;
						self.provinceSameRankRise = result.provinceSameRankRise;
						
						self.closeLoading();
					})
					.catch(function(err) {
						self.closeLoading();
						console.log(err);
					})
			}
		},
		created(){
			var self = this;
			EventBus.$on("measureChanged",function(measureKey){
				self.queryKey = measureKey;
				self.getData();
			})
		},
		mounted() {
			this.getData();
		},
		components: {
			numberFormat
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../styles/variables.scss';
	.note {
		background-color: rgb(36, 62, 136);
		margin-left: 0.1rem;
		font-size: 0.14rem;
		line-height: 0.2rem;
		padding: 0.15rem;
		color: #fff;
		.strong {
			font-size: 0.2rem;
			font-weight: bold;
			margin: 0 0.05rem 0 0.01rem;
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
</style>