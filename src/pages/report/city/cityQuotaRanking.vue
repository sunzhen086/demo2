<template>
	<div class="main cma">
		<div class="topBar">
			<top></top>
		</div>
		<div class="middle">
			<box-base>
				<div slot="box-title">
					<p class="title">地市相关指标排名</p>
				</div>
				<div slot="box-extend">
					<tab-base :option=data.paneOption @tab-click="tabClick"></tab-base>
				</div>
				
				<div class="content">
					<template v-if="data.paneOption.activePane === 'table2'">
						<cityQuotaRankingTable :tableData=data.tableData[1]></cityQuotaRankingTable>
					</template>
					<template v-else-if="data.paneOption.activePane === 'table3'">
						<cityQuotaRankingTable :tableData=data.tableData[2]></cityQuotaRankingTable>
					</template>
					<template v-else-if="data.paneOption.activePane === 'table4'">
						<cityQuotaRankingTable :tableData=data.tableData[3]></cityQuotaRankingTable>
					</template>
					<template v-else>
						<cityQuotaRankingTable :tableData=data.tableData[0]></cityQuotaRankingTable>
					</template>
					
				</div>
			</box-base>
		</div>
		
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import top from './common/top.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import cityQuotaRankingTable from './common/cityQuotaRankingTable.vue';
	
	export default {
		components: {
			boxBase,
			top,
			tabBase,
			cityQuotaRankingTable
		},
		methods:{
			tabClick: function(key) {
				this.data.paneOption.activePane = key;
			},
		},
		created() {
			console.log("activePane="+this.$route.query.activePane);
			if(this.$route.query.activePane == undefined){
				this.data.paneOption.activePane = "table1";
			}else{
				this.data.paneOption.activePane = this.$route.query.activePane;
			}
			
		},
		mounted() {
			this.$store.commit('setTopNavStatus', 'overview');
			this.$store.commit('setLeftNavStatus', 'province');
		},
		data() {
			return {
				data:{
					paneOption:{
						data:[
							{
								key: 'table1',
								text: '卷烟销量'
							},
							{
								key: 'table2',
								text: '销售收入'
							},
							{
								key: 'table3',
								text: '单箱均价'
							},
							{
								key: 'table4',
								text: '年度计划完成进度'
							}
						],
						activePane: 'table1'
					},
//					activePane: "table4",
					tableData:[
						{
							key: 'table1',
							unit: '单位：箱',
							tableHeader:[
								{name:'排名',id:'column1'},
								{name:'单位',id:'column2'},
								{name:'累计（箱）',id:'column3'},
								{name:'同期（箱）',id:'column4'},
								{name:'同比（%）',id:'column5'}
							],
							tableDatas:[
								{column1:'',column2:'全国',column3:'46992000',column4:'49490100',column5:'-5.62'},
								{column1:'',column2:'总计',column3:'371706',column4:'460415',column5:'-19.27'},
								{column1:'1',column2:'西安',column3:'105173',column4:'111886',column5:'-6'},
								{column1:'2',column2:'杨凌',column3:'2449',column4:'2661',column5:'-7.97'},
								{column1:'3',column2:'汉中',column3:'33440',column4:'38918',column5:'-14.08'},
								{column1:'4',column2:'商洛',column3:'20122',column4:'23964',column5:'-16.03'},
								{column1:'5',column2:'榆林',column3:'36643',column4:'45344',column5:'-19.19'},
								{column1:'6',column2:'延安',column3:'24756',column4:'32415',column5:'-23.63'},
								{column1:'7',column2:'宝鸡',column3:'33820',column4:'45058',column5:'-24.94'},
								{column1:'8',column2:'安康',column3:'22008',column4:'29909',column5:'-26.42'},
								{column1:'9',column2:'咸阳',column3:'43940',column4:'60367',column5:'-27.21'},
								{column1:'10',column2:'铜川',column3:'8656',column4:'12254',column5:'-29.36'},
								{column1:'11',column2:'渭南',column3:'40699',column4:'57639',column5:'-29.39'}
							]
						},
						{
							key: 'table2',
							unit: '单位：万元',
							tableHeader:[
								{name:'排名',id:'column1'},
								{name:'单位',id:'column2'},
								{name:'累计（万元）',id:'column3'},
								{name:'同期（万元）',id:'column4'},
								{name:'同比（%）',id:'column5'}
							],
							tableDatas:[
								{column1:'',column2:'全国',column3:'137055000',column4:'142236900',column5:'-3.64'},
								{column1:'',column2:'总计',column3:'994200',column4:'1285648',column5:'-22.67'},
								{column1:'1',column2:'杨凌',column3:'7057',column4:'7769',column5:'-9.16'},
								{column1:'2',column2:'西安',column3:'314158',column4:'359516',column5:'-12.62'},
								{column1:'3',column2:'汉中',column3:'86309',column4:'99210',column5:'-13'},
								{column1:'4',column2:'商洛',column3:'46729',column4:'58370',column5:'-19.94'},
								{column1:'5',column2:'安康',column3:'68069',column4:'86114',column5:'-20.95'},
								{column1:'6',column2:'宝鸡',column3:'82148',column4:'113396',column5:'-27.56'},
								{column1:'7',column2:'榆林',column3:'102009',column4:'140945',column5:'-27.62'},
								{column1:'8',column2:'咸阳',column3:'105903',column4:'151825',column5:'-30.25'},
								{column1:'9',column2:'渭南',column3:'96102',column4:'139344',column5:'-31.03'},
								{column1:'10',column2:'延安',column3:'64049',column4:'93391',column5:'-31.42'},
								{column1:'11',column2:'铜川',column3:'21672',column4:'35769',column5:'-39.41'}
							]
						},
						{
							key: 'table3',
							unit: '单位：万元',
							tableHeader:[
								{name:'排名',id:'column1'},
								{name:'单位',id:'column2'},
								{name:'累计（万元）',id:'column3'},
								{name:'同期（万元）',id:'column4'},
								{name:'同比（%）',id:'column5'}
							],
							tableDatas:[
								{column1:'',column2:'全国',column3:'2.92',column4:'2.86',column5:'2.09'},
								{column1:'',column2:'总计',column3:'2.67',column4:'2.79',column5:'-4.22'},
								{column1:'1',column2:'安康',column3:'3.09',column4:'2.88',column5:'7.42'},
								{column1:'2',column2:'汉中',column3:'2.58',column4:'2.55',column5:'1.25'},
								{column1:'3',column2:'杨凌',column3:'2.88',column4:'2.92',column5:'-1.32'},
								{column1:'4',column2:'渭南',column3:'2.36',column4:'2.42',column5:'-2.32'},
								{column1:'5',column2:'宝鸡',column3:'2.43',column4:'2.52',column5:'-3.48'},
								{column1:'6',column2:'咸阳',column3:'2.41',column4:'2.52',column5:'-4.17'},
								{column1:'7',column2:'商洛',column3:'2.32',column4:'2.44',column5:'-4.67'},
								{column1:'8',column2:'西安',column3:'2.99',column4:'3.21',column5:'-7.04'},
								{column1:'9',column2:'延安',column3:'2.59',column4:'2.88',column5:'-10.2'},
								{column1:'10',column2:'榆林',column3:'2.78',column4:'3.11',column5:'-10.44'},
								{column1:'11',column2:'铜川',column3:'2.5',column4:'2.92',column5:'-14.22'}
							]
						},
						{
							key: 'table4',
							unit: '单位：箱',
							tableHeader:[
								{name:'排名',id:'column1'},
								{name:'单位',id:'column2'},
								{name:'年计划（箱）',id:'column3'},
								{name:'进度（%）',id:'column4'},
								{name:'实际完成（箱）',id:'column5'}
							],
							tableDatas:[
								{column1:'',column2:'总计',column3:'1542000',column4:'24.11',column5:'371776'},
								{column1:'1',column2:'商洛',column3:'71500',column4:'28.14',column5:'20120'},
								{column1:'2',column2:'汉中',column3:'120200',column4:'27.82',column5:'33440'},
								{column1:'3',column2:'安康',column3:'86500',column4:'25.44',column5:'22006'},
								{column1:'4',column2:'铜川',column3:'34200',column4:'25.31',column5:'8656'},
								{column1:'5',column2:'杨凌',column3:'9800',column4:'24.99',column5:'2449'},
								{column1:'6',column2:'宝鸡',column3:'136300',column4:'24.81',column5:'33816'},
								{column1:'7',column2:'西安',column3:'433000',column4:'24.29',column5:'105176'},
								{column1:'8',column2:'榆林',column3:'155300',column4:'23.59',column5:'36635'},
								{column1:'9',column2:'咸阳',column3:'189000',column4:'23.25',column5:'43943'},
								{column1:'10',column2:'延安',column3:'111200',column4:'22.26',column5:'24753'},
								{column1:'11',column2:'渭南',column3:'195000',column4:'20.87',column5:'40697'}
							]
						}
					]
				}
			}
		}
	}

</script>

<style lang="scss" scoped>
	@import "../../../styles/variables.scss";
	
	.main{
		height: 6.7rem;
		color: white;
		
		.topBar{
			height: 0.55rem;
			margin-left: $box-distince;
		}
		
		.middle{
			margin-top: $box-distince;
			margin-left: $box-distince;
			
			.content{
				float: right;
				margin-top: 0.1rem;
				width: 12.36rem;
			}
		}
		
	}
	
</style>