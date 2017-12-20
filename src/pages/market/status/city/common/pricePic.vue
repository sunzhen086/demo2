<template>
	<box-base class="pic-box">
		<div class="box-header">
			<div class="box-title">
				<slot name="box-title">
					<p class="title">{{kind}}烟主销规格价格指数走势图</p>
				</slot>
			</div>
			<div class="box-extend">
				<slot name="box-extend">
					
					<el-popover popper-class="cma" ref="topRightPopover" placement="left-start" width="360" trigger="hover" >
						<span style="font-size:16px">{{chartData.info}}</span>
					</el-popover>
					<info-circle v-popover:topRightPopover></info-circle>
				</slot>
			</div>
		</div>
		<div class="content">
			<price-chart :chartData=chartData></price-chart>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import infoCircle from 'components/infocircle/info-circle.vue';

	import priceChart from './tool/priceChart.vue';

	export default {
		props: {
			type: {
				type: String,
				default: ""
			},
			kind: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				chartData: {}
			}

		},
		watch: {
			type: function(val, oldVal) {},
			kind: function(val, oldVal) {
				this.chartData = this.dataFactory(this.type, val);
			}
		},
		components: {
			boxBase,
			infoCircle,
			priceChart
		},
		computed:{
			search(){
				return this.$store.state.markStatusCity.search;
			}
		},
		methods: {
			dataFactory: function(type, kind) {
				var typeArr = [
					["一类", ["中华（软）", "中华（硬）", "芙蓉王（硬）"]],
					["二类", ["利群（新版）", "好猫（金延安）", "商品3"]],
					["三类", ["好猫（磨砂）", "云烟（紫）", "商品3"]],
					["四类", ["猴王（金）", "延安（软）", "兰州（软盒黄）"]],
					["五类", ["延安（硬）", "红旗渠（软红）", "商品3"]],
					["priceCategory", ["商品1", "商品2", "商品3"]],
				];
				var itemArr = [];

				if(type == "priceKind") {
					for(var i = 0; i < typeArr.length; i++) {
						if(kind == typeArr[i][0]) {
							itemArr = typeArr[i][1];
							break;
						}
					}
				} else {
					itemArr = typeArr[5][1];
				}

				var dateArr = ['201601', '201602', '201603', '201604', '201605', '201606', '201607', '201608', '201609', '201610', '201611', '201612', '201701', '201702', '201703', '201704', '201705'];
				var data0 = [];
				var data1 = [];
				var data2 = [];
				var data3 = [];
				for(var i = 0; i < dateArr.length; i++) {
					data0.push((Math.random() * 3 + 94.5).toFixed(2));
					data1.push((Math.random() * 3 + 94.5).toFixed(2));
					data2.push((Math.random() * 3 + 94.5).toFixed(2));
					data3.push((Math.random() * 3 + 94.5).toFixed(2));
				}
				var info = '从类别分析，一类烟降幅最大，二类烟降幅较缓。从主销规格分析，中华（软）、中华（硬）、好猫（磨砂）、延安（软）、延安（硬红）、兰州（黄盒软）等价格降幅较大；利群（新版）、云烟（紫）、好猫（金延安）、猴王（金）等价格降幅趋缓。';
				var data = {
					'date': dateArr,
					'min': 94,
					'max': 98,
					'info': info,
					'priceKind': {
						datas: data0,
						name: kind
					},
					'item1': {
						datas: data1,
						name: itemArr[0]
					},
					'item2': {
						datas: data2,
						name: itemArr[1]
					},
					'item3': {
						datas: data3,
						name: itemArr[2]
					}
				};
				return data;
			}
		}

	}
</script>

<style lang="scss" scoped>
	@import "../../../../../styles/variables.scss";
	.pic-box {
		width: 8.25rem;
		height: 4rem;
		float: left;
		margin-left: $box-distince;
	}
	
	.content {
		height: 3.5rem;
		margin-top: 0.2rem;
	}
</style>