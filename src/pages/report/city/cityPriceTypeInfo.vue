<template>
	<div class="main cma">
		<div class="topBar">
			<top></top>
		</div>
		<div class="middle">
			<box-base>
				<div slot="box-title">
					<p class="title">地市各价类销售统计</p>
				</div>
				<div slot="box-extend">
					<span>{{data.tableData[0].unit}}</span>
				</div>
				<div class="content">
					<cityPriceTypeTable :tableData=data.tableData[0]></cityPriceTypeTable>
				</div>
			</box-base>
		</div>
		
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import top from './common/top.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import cityPriceTypeTable from './common/cityPriceTypeTable.vue';
	
	export default {
		components: {
			boxBase,
			top,
			tabBase,
			cityPriceTypeTable
		},
		methods:{
			tabClick: function(key) {
				this.data.activePane = key;
			},
		},
		mounted() {
			this.$store.commit('setTopNavStatus', 'overview');
			this.$store.commit('setLeftNavStatus', 'province');
//			console.log("activePane="+this.$route.query.activePane);
//			this.data.activePane = this.$route.query.activePane;
//			console.log("activePane="+this.data.activePane);
		},
		data() {
			return {
				data:{
					tableData:[
						{
							key: 'table1',
							unit: '单位：万箱、亿元、万元',
							tableDatas:[
								{city:'全国',saleAmt:'1491.3',saleAmtLast:'1805.82',saleAmtRate:'-21.09',boxPrice:'2.92',boxPriceLast:'2.78',boxPriceRate:'2.98',saleQtyAll:'631.89',saleQtyAllLast:'782.68',saleQtyAllRate:'-27.59',saleQtyOne:'107.61',saleQtyOneLast:'161.67',saleQtyOneRate:'-17.46',saleQtyTwo:'65.45',saleQtyTwoLast:'75.48',saleQtyTwoRate:'-23.89',saleQtyThree:'199.41',saleQtyThreeLast:'274.38',saleQtyThreeRate:'-14.61',saleQtyFour:'237.32',saleQtyFourLast:'244.12',saleQtyFourRate:'-47.09',saleQtyFive:'21.93',saleQtyFiveLast:'27.2',saleQtyFiveRate:'-13.51'},
								{city:'合计',saleAmt:'99.42',saleAmtLast:'128.56',saleAmtRate:'-22.67',boxPrice:'2.67',boxPriceLast:'2.79',boxPriceRate:'-4.21',saleQtyAll:'37.17',saleQtyAllLast:'46.04',saleQtyAllRate:'-19.27',saleQtyOne:'6.33',saleQtyOneLast:'9.51',saleQtyOneRate:'-33.38',saleQtyTwo:'3.85',saleQtyTwoLast:'4.44',saleQtyTwoRate:'-13.17',saleQtyThree:'11.73',saleQtyThreeLast:'16.14',saleQtyThreeRate:'-27.33',saleQtyFour:'13.96',saleQtyFourLast:'14.36',saleQtyFourRate:'-2.77',saleQtyFive:'1.29',saleQtyFiveLast:'1.6',saleQtyFiveRate:'-19.03'},
								{city:'西安',saleAmt:'31.42',saleAmtLast:'35.95',saleAmtRate:'-12.62',boxPrice:'2.99',boxPriceLast:'3.21',boxPriceRate:'-7.04',saleQtyAll:'10.52',saleQtyAllLast:'11.19',saleQtyAllRate:'-6',saleQtyOne:'2.21',saleQtyOneLast:'2.91',saleQtyOneRate:'-24.03',saleQtyTwo:'1.33',saleQtyTwoLast:'1.45',saleQtyTwoRate:'-8.12',saleQtyThree:'3.78',saleQtyThreeLast:'4.32',saleQtyThreeRate:'-12.64',saleQtyFour:'3.19',saleQtyFourLast:'2.38',saleQtyFourRate:'34.11',saleQtyFive:'0',saleQtyFiveLast:'0.12',saleQtyFiveRate:'-99.25'},
								{city:'铜川',saleAmt:'2.17',saleAmtLast:'3.58',saleAmtRate:'-39.41',boxPrice:'2.5',boxPriceLast:'2.92',boxPriceRate:'-14.22',saleQtyAll:'0.87',saleQtyAllLast:'1.23',saleQtyAllRate:'-29.36',saleQtyOne:'0.12',saleQtyOneLast:'0.27',saleQtyOneRate:'-55.13',saleQtyTwo:'0.04',saleQtyTwoLast:'0.06',saleQtyTwoRate:'-37.85',saleQtyThree:'0.32',saleQtyThreeLast:'0.5',saleQtyThreeRate:'-35.8',saleQtyFour:'0.33',saleQtyFourLast:'0.37',saleQtyFourRate:'-11.74',saleQtyFive:'0.06',saleQtyFiveLast:'0.03',saleQtyFiveRate:'121.79'},
								{city:'宝鸡',saleAmt:'8.21',saleAmtLast:'11.34',saleAmtRate:'-27.56',boxPrice:'2.43',boxPriceLast:'2.52',boxPriceRate:'-3.48',saleQtyAll:'3.38',saleQtyAllLast:'4.51',saleQtyAllRate:'-24.94',saleQtyOne:'0.44',saleQtyOneLast:'0.61',saleQtyOneRate:'-27.86',saleQtyTwo:'0.18',saleQtyTwoLast:'0.32',saleQtyTwoRate:'-44.41',saleQtyThree:'1.3',saleQtyThreeLast:'2.07',saleQtyThreeRate:'-37.31',saleQtyFour:'1.47',saleQtyFourLast:'1.4',saleQtyFourRate:'4.5',saleQtyFive:'0',saleQtyFiveLast:'0.1',saleQtyFiveRate:'-100'},
								{city:'咸阳',saleAmt:'10.59',saleAmtLast:'15.18',saleAmtRate:'-30.25',boxPrice:'2.41',boxPriceLast:'2.52',boxPriceRate:'-4.17',saleQtyAll:'4.39',saleQtyAllLast:'6.04',saleQtyAllRate:'-27.21',saleQtyOne:'0.57',saleQtyOneLast:'0.96',saleQtyOneRate:'-40.87',saleQtyTwo:'0.29',saleQtyTwoLast:'0.41',saleQtyTwoRate:'-29.02',saleQtyThree:'1.56',saleQtyThreeLast:'2.51',saleQtyThreeRate:'-37.79',saleQtyFour:'1.86',saleQtyFourLast:'1.91',saleQtyFourRate:'-2.58',saleQtyFive:'0.11',saleQtyFiveLast:'0.24',saleQtyFiveRate:'-54.2'},
								{city:'渭南',saleAmt:'9.61',saleAmtLast:'13.93',saleAmtRate:'-31.03',boxPrice:'2.36',boxPriceLast:'2.42',boxPriceRate:'-2.32',saleQtyAll:'4.07',saleQtyAllLast:'5.76',saleQtyAllRate:'-29.39',saleQtyOne:'0.53',saleQtyOneLast:'0.83',saleQtyOneRate:'-35.83',saleQtyTwo:'0.21',saleQtyTwoLast:'0.28',saleQtyTwoRate:'-24.9',saleQtyThree:'1.44',saleQtyThreeLast:'2.41',saleQtyThreeRate:'-40.12',saleQtyFour:'1.74',saleQtyFourLast:'2.17',saleQtyFourRate:'-19.94',saleQtyFive:'0.15',saleQtyFiveLast:'0.08',saleQtyFiveRate:'88.47'},
								{city:'汉中',saleAmt:'8.63',saleAmtLast:'9.92',saleAmtRate:'-13',boxPrice:'2.58',boxPriceLast:'2.55',boxPriceRate:'1.25',saleQtyAll:'3.34',saleQtyAllLast:'3.89',saleQtyAllRate:'-14.08',saleQtyOne:'0.56',saleQtyOneLast:'0.75',saleQtyOneRate:'-24.82',saleQtyTwo:'0.46',saleQtyTwoLast:'0.33',saleQtyTwoRate:'39.46',saleQtyThree:'0.78',saleQtyThreeLast:'1.19',saleQtyThreeRate:'-34.53',saleQtyFour:'1.37',saleQtyFourLast:'1.46',saleQtyFourRate:'-5.9',saleQtyFive:'0.18',saleQtyFiveLast:'0.18',saleQtyFiveRate:'2.28'},
								{city:'安康',saleAmt:'6.81',saleAmtLast:'8.61',saleAmtRate:'-20.95',boxPrice:'3.09',boxPriceLast:'2.88',boxPriceRate:'7.42',saleQtyAll:'2.2',saleQtyAllLast:'2.99',saleQtyAllRate:'-26.42',saleQtyOne:'0.57',saleQtyOneLast:'0.85',saleQtyOneRate:'-32.29',saleQtyTwo:'0.28',saleQtyTwoLast:'0.3',saleQtyTwoRate:'-6.42',saleQtyThree:'0.56',saleQtyThreeLast:'0.65',saleQtyThreeRate:'-13.33',saleQtyFour:'0.68',saleQtyFourLast:'1.13',saleQtyFourRate:'-39.79',saleQtyFive:'0.1',saleQtyFiveLast:'0.07',saleQtyFiveRate:'57.89'},
								{city:'商洛',saleAmt:'4.67',saleAmtLast:'5.84',saleAmtRate:'-19.95',boxPrice:'2.32',boxPriceLast:'2.44',boxPriceRate:'-4.67',saleQtyAll:'2.01',saleQtyAllLast:'2.4',saleQtyAllRate:'-16.03',saleQtyOne:'0.26',saleQtyOneLast:'0.38',saleQtyOneRate:'-29.41',saleQtyTwo:'0.09',saleQtyTwoLast:'0.11',saleQtyTwoRate:'-20.29',saleQtyThree:'0.59',saleQtyThreeLast:'0.73',saleQtyThreeRate:'-20.04',saleQtyFour:'0.88',saleQtyFourLast:'1.09',saleQtyFourRate:'-19.25',saleQtyFive:'0.19',saleQtyFiveLast:'0.08',saleQtyFiveRate:'136.82'},
								{city:'延安',saleAmt:'6.4',saleAmtLast:'9.34',saleAmtRate:'-31.42',boxPrice:'2.59',boxPriceLast:'2.88',boxPriceRate:'-10.2',saleQtyAll:'2.48',saleQtyAllLast:'3.24',saleQtyAllRate:'-23.63',saleQtyOne:'0.35',saleQtyOneLast:'0.72',saleQtyOneRate:'-51.03',saleQtyTwo:'0.62',saleQtyTwoLast:'0.8',saleQtyTwoRate:'-23.03',saleQtyThree:'0.3',saleQtyThreeLast:'0.48',saleQtyThreeRate:'-36.31',saleQtyFour:'0.96',saleQtyFourLast:'0.97',saleQtyFourRate:'-0.41',saleQtyFive:'0.24',saleQtyFiveLast:'0.28',saleQtyFiveRate:'-13.85'},
								{city:'榆林',saleAmt:'10.2',saleAmtLast:'14.09',saleAmtRate:'-27.63',boxPrice:'2.78',boxPriceLast:'3.11',boxPriceRate:'-10.44',saleQtyAll:'3.66',saleQtyAllLast:'4.53',saleQtyAllRate:'-19.19',saleQtyOne:'0.66',saleQtyOneLast:'1.19',saleQtyOneRate:'-44.05',saleQtyTwo:'0.35',saleQtyTwoLast:'0.36',saleQtyTwoRate:'-3.86',saleQtyThree:'1.04',saleQtyThreeLast:'1.21',saleQtyThreeRate:'-14.54',saleQtyFour:'1.37',saleQtyFourLast:'1.37',saleQtyFourRate:'0.4',saleQtyFive:'0.25',saleQtyFiveLast:'0.41',saleQtyFiveRate:'-39.82'}
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