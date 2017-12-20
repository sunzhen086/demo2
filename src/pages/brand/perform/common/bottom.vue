<template>
	<div>
		<box-base class="main">
			<div class="top">
				<tab-base :option=data.paneOption @tab-click="tabClick"></tab-base>
				<div class="topRight">
					<template v-if="data.tableType == 'table2'">
						<span>{{data.tableData[1].unit}}</span>
					</template>
					<template v-else-if="data.tableType === 'table3'">
						<span>{{data.tableData[2].unit}}</span>
					</template>
					<template v-else>
						<span>{{data.tableData[0].unit}}</span>
					</template>
				</div>
			</div>
			<div class="content">
				<template v-if="data.tableType == 'table2'">
					<bottomTable class="bottomTable" :tableData=data.tableData[1]></bottomTable>
				</template>
				<template v-else-if="data.tableType === 'table3'">
					<bottomTable class="bottomTable" :tableData=data.tableData[2]></bottomTable>
				</template>
				<template v-else>
					<bottomTable class="bottomTable" :tableData=data.tableData[0]></bottomTable>
				</template>
				
			</div>
		</box-base>
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import bottomTable from './bottomTable.vue';

	export default {
		components: {
			boxBase,
			tabBase,
			bottomTable
		},
		methods:{
			tabClick: function(key) {
				this.data.tableType = key;
			},
		},
		data() {
			return {
				data:{
					paneOption:{
						data:[
							{
								key: 'table1',
								text: '新品前10规格'
							},
							{
								key: 'table2',
								text: '三类以上增加前10'
							},
							{
								key: 'table3',
								text: '三类以上减少前10'
							}
						],
						activePane: 'table1'
					},
					tableType: "table1",
					tableData:[
						{
							key: 'table1',
							unit: '单位：箱、万元',
							tableHeader:[
								{name:'指标',id:'index'},
								{name:'红旗渠（软红）',id:'brand1'},
								{name:'红旗渠（雪茄）',id:'brand2'},
								{name:'石狮（平安）',id:'brand3'},
								{name:'好猫（招财进宝）',id:'brand4'},
								{name:'黄果树（软）',id:'brand5'},
								{name:'红金龙（硬喜）',id:'brand6'},
								{name:'娇子（软阳光）',id:'brand7'},
								{name:'红三环（渡江）',id:'brand8'},
								{name:'好猫（招财猫1600）',id:'brand9'},
								{name:'娇子（格调细支）',id:'brand10'}
							],
							tableDatas:[
								{
									index: '销量',
									brand1: '5937',
									brand2: '1938',
									brand3: '1259',
									brand4: '1237',
									brand5: '1126',
									brand6: '1033',
									brand7: '1023',
									brand8: '561',
									brand9: '391',
									brand10: '323'
								},
								{
									index: '销量占比',
									brand1: '32',
									brand2: '10',
									brand3: '7',
									brand4: '7',
									brand5: '6',
									brand6: '6',
									brand7: '6',
									brand8: '3',
									brand9: '2',
									brand10: '2'
								},
								{
									index: '销额',
									brand1: '3540',
									brand2: '2156',
									brand3: '1401',
									brand4: '1903',
									brand5: '537',
									brand6: '616',
									brand7: '2252',
									brand8: '335',
									brand9: '1544',
									brand10: '1046'
								},
								{
									index: '销额占比',
									brand1: '9',
									brand2: '6',
									brand3: '4',
									brand4: '5',
									brand5: '1',
									brand6: '2',
									brand7: '6',
									brand8: '1',
									brand9: '4',
									brand10: '3'
								}
							]
						},
						{
							key: 'table2',
							unit: '单位：箱',
							tableHeader:[
								{name:'指标',id:'index'},
								{name:'延安（软）',id:'brand1'},
								{name:'兰州（软盒黄）',id:'brand2'},
								{name:'好猫（细支长乐）',id:'brand3'},
								{name:'哈德门（精品）',id:'brand4'},
								{name:'南京（炫赫门）',id:'brand5'},
								{name:'黄鹤楼（硬天下名楼）',id:'brand6'},
								{name:'南京（雨花石）',id:'brand7'},
								{name:'长白山（777）',id:'brand8'},
								{name:'娇子（X）',id:'brand9'},
								{name:'玉溪（硬）',id:'brand10'}
							],
							tableDatas:[
								{
									index: '本期销量',
									brand1: '33735',
									brand2: '4641',
									brand3: '3259',
									brand4: '3918',
									brand5: '1391',
									brand6: '1994',
									brand7: '1004',
									brand8: '340',
									brand9: '1894',
									brand10: '300'
								},
								{
									index: '同期销量',
									brand1: '12084',
									brand2: '2606',
									brand3: '1474',
									brand4: '2244',
									brand5: '108',
									brand6: '1401',
									brand7: '637',
									brand8: '3',
									brand9: '1568',
									brand10: '71'
								},
								{
									index: '增加',
									brand1: '21650',
									brand2: '2035',
									brand3: '1785',
									brand4: '1674',
									brand5: '1283',
									brand6: '593',
									brand7: '368',
									brand8: '338',
									brand9: '326',
									brand10: '230'
								},
								{
									index: '同比',
									brand1: '179.16',
									brand2: '78.12',
									brand3: '121.06',
									brand4: '74.58',
									brand5: '1184.45',
									brand6: '42.28',
									brand7: '57.73',
									brand8: '12888.93',
									brand9: '20.76',
									brand10: '325.91'
								}
							]
						},
						{
							key: 'table3',
							unit: '单位：箱',
							tableHeader:[
								{name:'指标',id:'index'},
								{name:'好猫（磨砂猴王）',id:'brand1'},
								{name:'猴王（金）',id:'brand2'},
								{name:'芙蓉王（硬）',id:'brand3'},
								{name:'延安（硬红）',id:'brand4'},
								{name:'白沙（精品二代）',id:'brand5'},
								{name:'中华（硬）',id:'brand6'},
								{name:'黄果树（长征）',id:'brand7'},
								{name:'猴王（软红）',id:'brand8'},
								{name:'中华（软）',id:'brand9'},
								{name:'兰州（硬珍品）',id:'brand10'}
							],
							tableDatas:[
								{
									index: '本期销量',
									brand1: '63107',
									brand2: '83334',
									brand3: '29281',
									brand4: '4308',
									brand5: '9160',
									brand6: '5144',
									brand7: '2627',
									brand8: '289',
									brand9: '4435',
									brand10: '3096'
								},
								{
									index: '同期销量',
									brand1: '95810',
									brand2: '104574',
									brand3: '45270',
									brand4: '14830',
									brand5: '17427',
									brand6: '9878',
									brand7: '6441',
									brand8: '4039',
									brand9: '7857',
									brand10: '6286'
								},
								{
									index: '减少',
									brand1: '32704',
									brand2: '21240',
									brand3: '15989',
									brand4: '10522',
									brand5: '8267',
									brand6: '4734',
									brand7: '3814',
									brand8: '3749',
									brand9: '3423',
									brand10: '3190'
								},
								{
									index: '同比',
									brand1: '-34.13',
									brand2: '-20.31',
									brand3: '-35.32',
									brand4: '-70.95',
									brand5: '-47.44',
									brand6: '-47.92',
									brand7: '-59.21',
									brand8: '-92.83',
									brand9: '-43.56',
									brand10: '-50.75'
								}
							]
						}
					]
				}
			}
			
		}
	}

</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";

	.main{
		height: 2rem;
		/*width: 12.5rem;*/
		margin-top: $box-distince;
		
		.top {
			.topRight{
				float: right;
				margin-right: $box-distince;
				margin-top: 0.04rem;
			}
		}
		
		.content{
			float: right;
			margin-top: 0.05rem;
			width: 12.36rem;
		}
		
	}
</style>