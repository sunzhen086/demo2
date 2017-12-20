<template>
	<div class="main cma">
		<div class="topBar">
			<top></top>
		</div>
		<div class="middle">
			<box-base>
				<div slot="box-title">
					<p class="title">地市各类别销售情况</p>
				</div>
				<div slot="box-extend">
					<tab-base :option=data.paneOption @tab-click="tabClick"></tab-base>
				</div>
				
				<div class="content">
					<template v-if="data.paneOption.activePane === 'table2'">
						<cityTypeTable :tableData=data.tableData[1]></cityTypeTable>
					</template>
					<template v-else-if="data.paneOption.activePane === 'table3'">
						<cityTypeOtherTable :tableData=data.tableData[2]></cityTypeOtherTable>
					</template>
					<template v-else>
						<cityTypeTable :tableData=data.tableData[0]></cityTypeTable>
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
	import cityTypeTable from './common/cityTypeTable.vue';
	import cityTypeOtherTable from './common/cityTypeOtherTable.vue';
	
	export default {
		components: {
			boxBase,
			top,
			tabBase,
			cityTypeTable,
			cityTypeOtherTable
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
								text: '重点品牌'
							},
							{
								key: 'table2',
								text: '地产烟'
							},
							{
								key: 'table3',
								text: '其他类别'
							}
						],
						activePane: 'table1'
					},
//					activePane: "table1",
					tableData:[
						{
							key: 'table1',
							unit: '单位：箱、万元',
							tableDatas:[
								{city:'全国',saleQty:'39320836',saleQtyRate:'-5.79',saleQtyPercent:'85.48%',saleAmt:'129811399.3',saleAmtRate:'-8.03',saleAmtPercent:'89.35%'},
								{city:'全省',saleQty:'1070979.888',saleQtyRate:'-8.63',saleQtyPercent:'79.02%',saleAmt:'3535664.466',saleAmtRate:'-4.54',saleAmtPercent:'91.04%'},
								{city:'西安',saleQty:'362789.142',saleQtyRate:'-1.34',saleQtyPercent:'86.95%',saleAmt:'1197689.85',saleAmtRate:'-1.78',saleAmtPercent:'94.42%'},
								{city:'铜川',saleQty:'21183.7424',saleQtyRate:'-16.55',saleQtyPercent:'65.95%',saleAmt:'73532.62',saleAmtRate:'-12.81',saleAmtPercent:'85.07%'},
								{city:'宝鸡',saleQty:'92109.4052',saleQtyRate:'-5.65',saleQtyPercent:'71.01%',saleAmt:'275381.64',saleAmtRate:'-10.56',saleAmtPercent:'86.06%'},
								{city:'咸阳',saleQty:'125828.7294',saleQtyRate:'-8.30',saleQtyPercent:'71.03%',saleAmt:'354470.86',saleAmtRate:'-11.04',saleAmtPercent:'85.36%'},
								{city:'渭南',saleQty:'119128.1936',saleQtyRate:'-12.29',saleQtyPercent:'67.87%',saleAmt:'331199.48',saleAmtRate:'-12.66',saleAmtPercent:'83.51%'},
								{city:'汉中',saleQty:'71821.6164',saleQtyRate:'-8.80',saleQtyPercent:'63.01%',saleAmt:'244788.78',saleAmtRate:'-7.27',saleAmtPercent:'83.21%'},
								{city:'安康',saleQty:'49989.0044',saleQtyRate:'-15.48',saleQtyPercent:'62.18%',saleAmt:'180683.42',saleAmtRate:'-10.50',saleAmtPercent:'84.28%'},
								{city:'商洛',saleQty:'39186.0624',saleQtyRate:'-23.64',saleQtyPercent:'57.88%',saleAmt:'125076.98',saleAmtRate:'-16.66',saleAmtPercent:'80.24%'},
								{city:'延安',saleQty:'79525.4556',saleQtyRate:'-14.12',saleQtyPercent:'76.10%',saleAmt:'238226.53',saleAmtRate:'-14.56',saleAmtPercent:'89.38%'},
								{city:'榆林',saleQty:'102726.8952',saleQtyRate:'-14.12',saleQtyPercent:'71.71%',saleAmt:'353897.62',saleAmtRate:'-15.25',saleAmtPercent:'87.97%'},
								{city:'杨凌',saleQty:'6690.6412',saleQtyRate:'-3.17',saleQtyPercent:'71.58%',saleAmt:'23567.57',saleAmtRate:'-0.84',saleAmtPercent:'88.39%'},
							]
						},
						{
							key: 'table2',
							unit: '单位：箱、万元',
							tableDatas:[
								{city:'全省',saleQty:'918198.596',saleQtyRate:'2.09',saleQtyPercent:'45.94%',saleAmt:'1727745.12',saleAmtRate:'5.87',saleAmtPercent:'36.08%'},
								{city:'西安',saleQty:'149302.356',saleQtyRate:'2.57',saleQtyPercent:'35.78%',saleAmt:'318513.33',saleAmtRate:'5.87',saleAmtPercent:'25.11%'},
								{city:'铜川',saleQty:'21490.884',saleQtyRate:'5.65',saleQtyPercent:'66.91%',saleAmt:'37784.4',saleAmtRate:'9.59',saleAmtPercent:'43.73%'},
								{city:'宝鸡',saleQty:'90084.112',saleQtyRate:'2.11',saleQtyPercent:'69.45%',saleAmt:'189260.6',saleAmtRate:'0.55',saleAmtPercent:'59.14%'},
								{city:'咸阳',saleQty:'109718.584',saleQtyRate:'-1.51',saleQtyPercent:'61.93%',saleAmt:'196193.76',saleAmtRate:'-1.77',saleAmtPercent:'47.24%'},
								{city:'渭南',saleQty:'116815.284',saleQtyRate:'-0.50',saleQtyPercent:'66.56%',saleAmt:'211746.99',saleAmtRate:'-1.40',saleAmtPercent:'53.40%'},
								{city:'汉中',saleQty:'52278.132',saleQtyRate:'2.41',saleQtyPercent:'45.86%',saleAmt:'70649.53',saleAmtRate:'3.76',saleAmtPercent:'24.02%'},
								{city:'安康',saleQty:'34630.392',saleQtyRate:'-2.38',saleQtyPercent:'43.08%',saleAmt:'48857.14',saleAmtRate:'2.73',saleAmtPercent:'22.79%'},
								{city:'商洛',saleQty:'43786.04',saleQtyRate:'0.05',saleQtyPercent:'64.68%',saleAmt:'74696.82',saleAmtRate:'5.95',saleAmtPercent:'47.91%'},
								{city:'延安',saleQty:'62298.196',saleQtyRate:'8.71',saleQtyPercent:'59.61%',saleAmt:'114670.37',saleAmtRate:'8.50',saleAmtPercent:'43.03%'},
								{city:'榆林',saleQty:'82210.688',saleQtyRate:'-7.56',saleQtyPercent:'57.39%',saleAmt:'135263.1',saleAmtRate:'-4.44',saleAmtPercent:'33.62%'},
								{city:'杨凌',saleQty:'6281.572',saleQtyRate:'-2.85',saleQtyPercent:'67.20%',saleAmt:'11595.75',saleAmtRate:'5.84',saleAmtPercent:'43.39%'},
							]
						},
						{
							key: 'table3',
							unit: '单位：箱',
							tableDatas:[
								{city:'全国',gjwQty:'217432',gjwQtyLast:'227933',gjwQtyRate:'-4.61',gdyQty:'2680334',gdyQtyLast:'2968713',gdyQtyRate:'-9.71',xzyQty:'1368500',xzyQtyLast:'709100',xzyQtyRate:'92.99',xjyQty:'21700',xjyQtyLast:'19339',xjyQtyRate:'12.21',djyyQty:'6527002',djyyQtyLast:'6965450',djyyQtyRate:'-6.29'},
								{city:'全省',gjwQty:'6139',gjwQtyLast:'8284',gjwQtyRate:'-25.9',gdyQty:'56986',gdyQtyLast:'69714',gdyQtyRate:'-18.26',xzyQty:'54862',xzyQtyLast:'25956',xzyQtyRate:'111.36',xjyQty:'1287',xjyQtyLast:'1312',xjyQtyRate:'-1.92',djyyQty:'140651',djyyQtyLast:'128074',djyyQtyRate:'9.82'},
								{city:'西安',gjwQty:'2552',gjwQtyLast:'3314',gjwQtyRate:'-22.99',gdyQty:'19259',gdyQtyLast:'22733',gdyQtyRate:'-15.28',xzyQty:'20120',xzyQtyLast:'7607',xzyQtyRate:'164.49',xjyQty:'483',xjyQtyLast:'341',xjyQtyRate:'41.56',djyyQty:'55262',djyyQtyLast:'48362',djyyQtyRate:'14.27'},
								{city:'铜川',gjwQty:'113',gjwQtyLast:'99',gjwQtyRate:'14.35',gdyQty:'1911',gdyQtyLast:'2311',gdyQtyRate:'-17.34',xzyQty:'917',xzyQtyLast:'384',xzyQtyRate:'138.98',xjyQty:'33',xjyQtyLast:'28',xjyQtyRate:'19.36',djyyQty:'1945',djyyQtyLast:'2046',djyyQtyRate:'-4.92'},
								{city:'宝鸡',gjwQty:'287',gjwQtyLast:'505',gjwQtyRate:'-43.14',gdyQty:'4114',gdyQtyLast:'5311',gdyQtyRate:'-22.53',xzyQty:'3937',xzyQtyLast:'1699',xzyQtyRate:'131.7',xjyQty:'122',xjyQtyLast:'121',xjyQtyRate:'1.62',djyyQty:'15899',djyyQtyLast:'15697',djyyQtyRate:'1.28'},
								{city:'咸阳',gjwQty:'364',gjwQtyLast:'435',gjwQtyRate:'-16.26',gdyQty:'4720',gdyQtyLast:'6297',gdyQtyRate:'-25.05',xzyQty:'3826',xzyQtyLast:'1351',xzyQtyRate:'183.15',xjyQty:'198',xjyQtyLast:'193',xjyQtyRate:'2.72',djyyQty:'16749',djyyQtyLast:'14797',djyyQtyRate:'13.19'},
								{city:'渭南',gjwQty:'264',gjwQtyLast:'365',gjwQtyRate:'-27.7',gdyQty:'4018',gdyQtyLast:'5100',gdyQtyRate:'-21.22',xzyQty:'4370',xzyQtyLast:'1877',xzyQtyRate:'132.78',xjyQty:'113',xjyQtyLast:'160',xjyQtyRate:'-28.89',djyyQty:'13522',djyyQtyLast:'12708',djyyQtyRate:'6.41'},
								{city:'汉中',gjwQty:'459',gjwQtyLast:'563',gjwQtyRate:'-18.5',gdyQty:'4986',gdyQtyLast:'5767',gdyQtyRate:'-13.55',xzyQty:'3388',xzyQtyLast:'834',xzyQtyRate:'306.21',xjyQty:'34',xjyQtyLast:'46',xjyQtyRate:'-25.43',djyyQty:'6150',djyyQtyLast:'5365',djyyQtyRate:'14.63'},
								{city:'安康',gjwQty:'347',gjwQtyLast:'273',gjwQtyRate:'27.07',gdyQty:'3386',gdyQtyLast:'3448',gdyQtyRate:'-1.82',xzyQty:'1398',xzyQtyLast:'319',xzyQtyRate:'337.82',xjyQty:'19',xjyQtyLast:'23',xjyQtyRate:'-20.23',djyyQty:'3120',djyyQtyLast:'2706',djyyQtyRate:'15.3'},
								{city:'商洛',gjwQty:'320',gjwQtyLast:'431',gjwQtyRate:'-25.82',gdyQty:'2195',gdyQtyLast:'3110',gdyQtyRate:'-29.43',xzyQty:'1189',xzyQtyLast:'495',xzyQtyRate:'140.2',xjyQty:'32',xjyQtyLast:'15',xjyQtyRate:'108.76',djyyQty:'2316',djyyQtyLast:'4137',djyyQtyRate:'-44.01'},
								{city:'延安',gjwQty:'326',gjwQtyLast:'392',gjwQtyRate:'-17',gdyQty:'3762',gdyQtyLast:'4619',gdyQtyRate:'-18.57',xzyQty:'4575',xzyQtyLast:'3136',xzyQtyRate:'45.87',xjyQty:'96',xjyQtyLast:'199',xjyQtyRate:'-51.86',djyyQty:'8967',djyyQtyLast:'8159',djyyQtyRate:'9.9'},
								{city:'榆林',gjwQty:'1038',gjwQtyLast:'1813',gjwQtyRate:'-42.75',gdyQty:'7983',gdyQtyLast:'10302',gdyQtyRate:'-22.51',xzyQty:'10850',xzyQtyLast:'8154',xzyQtyRate:'33.06',xjyQty:'149',xjyQtyLast:'176',xjyQtyRate:'-15.45',djyyQty:'15920',djyyQtyLast:'13322',djyyQtyRate:'19.5'},
								{city:'杨凌',gjwQty:'69',gjwQtyLast:'93',gjwQtyRate:'-25.94',gdyQty:'654',gdyQtyLast:'715',gdyQtyRate:'-8.65',xzyQty:'293',xzyQtyLast:'99',xzyQtyRate:'194.91',xjyQty:'7',xjyQtyLast:'10',xjyQtyRate:'-34.05',djyyQty:'801',djyyQtyLast:'775',djyyQtyRate:'3.36'}
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