<template>
	<div class="main cma">
		<top></top>
		<div class="main-body">
		  	<box-base class="box">
				<div slot="box-title">
					<p class="title">行业销售情况</p>
				</div>
				<div slot="box-extend">
					<tab-base :option=paneOption @tab-click="tabClick" ></tab-base>	
				</div>
				
				<div class="content" >
					<div class="unit">
						<p>单位：万箱、亿元、万元</p>
					</div>
					<el-table border class="cma-report item-table" :data="tableDataNation" height='auto'>
						<el-table-column sortable label="排名" prop="rank" align="center" >
						</el-table-column>
						<el-table-column label="地区" prop="name" align="center" >
						</el-table-column>
						<el-table-column label="卷烟销量" align='center'>
							<el-table-column sortable label="累计" prop="qty" align='center'></el-table-column>
							<el-table-column sortable label="同期" prop="qtyLast" align='center'></el-table-column>
							<el-table-column sortable label="同比" prop="qtyRate" align='center'>
								<template scope="scope">
									<div class="muti">
										<multi-content-extend :rate=scope.row.qtyRate ></multi-content-extend>
									</div>
								</template>
							</el-table-column>
						</el-table-column>
						<el-table-column label="销售收入" align='center'>
							<el-table-column sortable label="累计" prop="eom" align='center'></el-table-column>
							<el-table-column sortable label="同期" prop="eomLast" align='center'></el-table-column>
							<el-table-column sortable label="同比" prop="eomRate" align='center'>
								<template scope="scope">
									<div class="muti">
										<multi-content-extend :rate=scope.row.eomRate ></multi-content-extend>
									</div>
								</template>
							</el-table-column>
						</el-table-column>
						<el-table-column label="单箱均价" align='center'>
							<el-table-column sortable label="累计" prop="boxprice" align='center'></el-table-column>
							<el-table-column sortable label="同期" prop="boxpriceLast" align='center'></el-table-column>
							<el-table-column sortable label="同比" prop="boxpriceRate" align='center'>
								<template scope="scope">
									<div class="muti">
										<multi-content-extend :rate=scope.row.boxpriceRate ></multi-content-extend>
									</div>
								</template>
							</el-table-column>
						</el-table-column>
					</el-table>
				</div>
			</box-base>
		</div>
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import multiContentExtend from 'components/multicontent/multicontent-extend.vue';
	import top from './top.vue';

	
	export default {
		data() {
			return {
				paneOption: {
					data:[
						{
							key: 'chartData0',
							text: '全国'
						},
						{
							key: 'chartData1',
							text: '重点城市'
						}
					],
					activePane:'chartData0'
				},
				curTab:'chartData0',
				
			}
		},
		components: {
			boxBase,
			tabBase,
			multiContentExtend,
			top
		},
		methods:{
			tabClick:function(curTab){
				//this.name = this[curTab]['name'];
				//this.changeData = this[curTab]['changeData'];
				this.curTab = curTab;
				
				
			},
			tableDataGen(cur) {
				
				console.log("curTab= " + cur);
				var self = this;
				var tableDataArr = [];
				
				if("chartData0" == cur) {//全国
					var nationArr = ["北京","天津","河北","山西","内蒙古","辽宁","吉林","黑龙江","上海","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","重庆","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆", "大连", "深圳"];
					tableDataArr.push({
						rank: '',
						name: '总计',
						qty: 1323,
						qtyLast: 1420,
						qtyRate: -6.83,
						eom: 4180,
						eomLast: 4384,
						eomRate: -4.66,
						boxprice: 3.16,
						boxpriceLast: 3.09,
						boxpriceRate: 2.27
					});
					for (var i=0; i < nationArr.length; i++) {
						tableDataArr.push({
							rank: (i+1),
							name: nationArr[i],
							qty: self.random(1, 89, 2),
							qtyLast: self.random(1, 98, 2),
							qtyRate: self.random(-20, 8, 2),
							eom: self.random(8, 270, 2),
							eomLast: self.random(8, 280, 2),
							eomRate: self.random(-27, 12, 2),
							boxprice: self.random(2, 5, 2),
							boxpriceLast: self.random(2, 5, 2),
							boxpriceRate: self.random(-12, 3, 2)
						});
					}
				} else {
					var cityArr = ["北京","天津","石家庄","太原","呼和浩特","沈阳","大连","长春","哈尔滨","南京","杭州","宁波","合肥","福州","厦门","南昌","济南","青岛","郑州","武汉","长沙","广州","深圳","南宁","海口","重庆","成都","贵阳","昆明","拉萨","西安","兰州","西宁","银川","乌鲁木齐","上海"];
				
					tableDataArr.push({
						rank: '',
						name: '总计',
						qty: 1323,
						qtyLast: 1420,
						qtyRate: -6.83,
						eom: 4180,
						eomLast: 4384,
						eomRate: -4.66,
						boxprice: 3.16,
						boxpriceLast: 3.09,
						boxpriceRate: 2.27
					});
							
					for (var i=0; i < cityArr.length; i++) {
						tableDataArr.push({
							rank: (i+1),
							name: cityArr[i],
							qty: self.random(1, 89, 2),
							qtyLast: self.random(1, 98, 2),
							qtyRate: self.random(-20, 8, 2),
							eom: self.random(8, 270, 2),
							eomLast: self.random(8, 280, 2),
							eomRate: self.random(-27, 12, 2),
							boxprice: self.random(2, 5, 2),
							boxpriceLast: self.random(2, 5, 2),
							boxpriceRate: self.random(-12, 3, 2)
						});
					}
				}
				return tableDataArr;
			}
		},
		computed:{
			tableDataNation:function(){
				return this.tableDataGen(this.curTab);
			}
		},
		
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'overview');
			this.$store.commit('setLeftNavStatus', 'nation');
		}
	}

</script>

<style lang="scss" scoped>
	@import "../../../styles/variables.scss";
	.main{
		font-size: 0.14rem;
		color:#fff;
		height: 100%;
		padding-left:$box-distince;
		.left{
			float: left;
		}
		.main-body{
			overflow:hidden;
			
			.box {
				.content {
					margin-top: 0.1rem;
					
					.unit {
						float: right;
						margin-bottom: 0.03rem;
					}
				}
			}
		}
	}
	
</style>