<template>
	<box-base class="leftBox">
		<div slot="box-title">
			<p class="title">{{tableData.name}}排名</p>
		</div>
		<div slot="box-extend">
			<tab-base :option=paneOption @tab-click="tabClick" class="tabClass"></tab-base>	
			<div @click="showRank" class="tableBtn Btn" v-bind:class="{'active':dialogVisible}"></div>
		</div>
		<div class="content">
			<div class="extend-class">
				前三名：<span class="green">{{tableData.firstNum[0]}}、{{tableData.firstNum[1]}}、{{tableData.firstNum[2]}}</span>
				&nbsp;&nbsp;
				后三名：<span class="red">{{tableData.lastNum[0]}}、{{tableData.lastNum[1]}}、{{tableData.lastNum[2]}}</span>
			</div>
			<tablePart :tableData="tableData"></tablePart>
		</div>
		
		<el-dialog v-model="dialogVisible" size="full" class="cma" title="排名明细"
			:before-close="handleClose">
			<tablePart :tableData="dialogTableData"></tablePart>
		</el-dialog>
	</box-base>
</template>

<script>
	import $ from 'static/js/jquery-vendor';
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import tablePart from './tablePart.vue';
	export default {
		data() {
			return {
				dialogVisible:false,
				tableData:{
					tableNumber:'1',
					name:'全省',
					firstNum:['西安','杨凌','榆林'],
					lastNum:['宝鸡','咸阳','渭南'],
					data:[
		                {city: '西安',num: 1,score:95.6,lastNum:2,changeNum:1},
		                {city: '杨凌',num: 2,score:94.3,lastNum:3,changeNum:1},
		                {city: '榆林',num: 3,score:92.4,lastNum:1,changeNum:-2},
		                {city: '铜川',num: 4,score:89.3,lastNum:5,changeNum:1},
		                {city: '汉中',num: 5,score:86.4,lastNum:7,changeNum:2},
		                {city: '安康',num: 6,score:84.5,lastNum:10,changeNum:4},
		                {city: '商洛',num: 7,score:82.1,lastNum:4,changeNum:-3},
		                {city: '延安',num: 8,score:80.2,lastNum:6,changeNum:-2},
		                {city: '宝鸡',num: 9,score:79.3,lastNum:11,changeNum:2},
		                {city: '咸阳',num: 10,score:78.3,lastNum:8,changeNum:-2},
		                {city: '渭南',num: 11,score:73.4,lastNum:9,changeNum:-2},
					]
				},
				tableData0:{
					tableNumber:'1',
					name:'全省',
					firstNum:['西安','杨凌','榆林'],
					lastNum:['宝鸡','咸阳','渭南'],
					data:[
		                {city: '西安',num: 1,score:95.6,lastNum:2,changeNum:1},
		                {city: '杨凌',num: 2,score:94.3,lastNum:3,changeNum:1},
		                {city: '榆林',num: 3,score:92.4,lastNum:1,changeNum:-2},
		                {city: '铜川',num: 4,score:89.3,lastNum:5,changeNum:1},
		                {city: '汉中',num: 5,score:86.4,lastNum:7,changeNum:2},
		                {city: '安康',num: 6,score:84.5,lastNum:10,changeNum:4},
		                {city: '商洛',num: 7,score:82.1,lastNum:4,changeNum:-3},
		                {city: '延安',num: 8,score:80.2,lastNum:6,changeNum:-2},
		                {city: '宝鸡',num: 9,score:79.3,lastNum:11,changeNum:2},
		                {city: '咸阳',num: 10,score:78.3,lastNum:8,changeNum:-2},
		                {city: '渭南',num: 11,score:73.4,lastNum:9,changeNum:-2},
					]
				},
				tableData1:{
					tableNumber:'1',
					name:'区县',
					firstNum:['安康镇坪','宝鸡千阳','宝鸡太白'],
					lastNum:['宝鸡陇县','汉中洋县','宝鸡陈仓'],
					data:[
		                {city:'安康镇坪',num:1,score:96.8,lastNum:3,changeNum:2},
						{city:'宝鸡千阳',num:2,score:96.3,lastNum:1,changeNum:-1},
						{city:'宝鸡太白',num:3,score:96.1,lastNum:2,changeNum:-1},
						{city:'汉中佛坪',num:4,score:95.3,lastNum:7,changeNum:3},
						{city:'延安延长',num:5,score:94.6,lastNum:4,changeNum:-1},
						{city:'西安高新',num:6,score:91.9,lastNum:6,changeNum:0},
						{city:'宝鸡岐山',num:7,score:89.6,lastNum:9,changeNum:2},
						{city:'延安宜川',num:8,score:88.4,lastNum:11,changeNum:3},
						{city:'汉中汉台',num:9,score:87.8,lastNum:5,changeNum:-4},
						{city:'西安雁塔',num:10,score:87.1,lastNum:8,changeNum:-2},
						{city:'咸阳武功',num:11,score:86.3,lastNum:10,changeNum:-1},
						{city:'西安未央',num:12,score:86.1,lastNum:15,changeNum:3},
						{city:'宝鸡陇县',num:13,score:85.6,lastNum:12,changeNum:-1},
						{city:'汉中洋县',num:14,score:82.8,lastNum:13,changeNum:-1},
						{city:'宝鸡陈仓',num:15,score:79.5,lastNum:14,changeNum:-1},
					]
				},
				dialogTableData:{
					tableNumber:'11',
					data:[
		                {num: '',city1: '省局' ,sum20171:'1450949',sum20161:'1539380',percent1:-5.74,city2: '总计' ,sum20172:'3846824',sum20162:'4152240',percent2:-7.36,city3: '总计' ,sum20173:'2.65',sum20163:'2.70',percent3:-1.71,city4:'总计',plan:'1460000',percent4:99.38},
		                {num: '1',city1: '西安' ,sum20171:'417255',sum20161:'432158',percent1:-3.45,city2: '杨凌' ,sum20172:'26724',sum20162:'27053',percent2:-1.21,city3: '杨凌' ,sum20173:'2.86',sum20163:'2.76',percent3:3.6,city4: '西安' ,plan:'410000',percent4:101.77},
		                {num: '2',city1: '宝鸡' ,sum20171:'129719',sum20161:'135847',percent1:-4.51,city2: '西安' ,sum20172:'1268482',sum20162:'1300400',percent2:-2.45,city3: '西安' ,sum20173:'3.04',sum20163:'3.01',percent3:1.03,city4: '宝鸡' ,plan:'129000',percent4:100.56},
		                {num: '3',city1: '杨凌' ,sum20171:'9347',sum20161:'9803',percent1:-4.64,city2: '汉中' ,sum20172:'294160',sum20162:'311373',percent2:-5.53,city3: '汉中' ,sum20173:'2.58',sum20163:'2.60',percent3:-0.79,city4: '杨凌' ,plan:'9300',percent4:100.51},
		                {num: '4',city1: '汉中' ,sum20171:'113988',sum20161:'119704',percent1:-4.77,city2: '安康' ,sum20172:'214412',sum20162:'230949',percent2:-7.16,city3: '渭南' ,sum20173:'2.26',sum20163:'2.29',percent3:-1.43,city4: '汉中' ,plan:'113800',percent4:100.17},
		                {num: '5',city1: '商洛' ,sum20171:'67701',sum20161:'71116',percent1:-4.8,city2: '铜川' ,sum20172:'86413',sum20162:'94147',percent2:-8.22,city3: '安康' ,sum20173:'2.67',sum20163:'2.71',percent3:-1.49,city4: '商洛' ,plan:'67700',percent4:100},
		                {num: '6',city1: '铜川' ,sum20171:'32120',sum20161:'33900',percent1:-5.25,city2: '宝鸡' ,sum20172:'320032',sum20162:'351027',percent2:-8.83,city3: '铜川' ,sum20173:'2.69',sum20163:'2.78',percent3:-3.13,city4: '延安' ,plan:'105300',percent4:99.24},
		                {num: '7',city1: '安康' ,sum20171:'80393',sum20161:'85302',percent1:-5.75,city2: '咸阳' ,sum20172:'415283',sum20162:'458124',percent2:-9.35,city3: '咸阳' ,sum20173:'2.34',sum20163:'2.42',percent3:-3.22,city4: '铜川' ,plan:'32400',percent4:99.14},
		                {num: '8',city1: '延安' ,sum20171:'104501',sum20161:'111200',percent1:-6.02,city2: '商洛' ,sum20172:'155915',sum20162:'172437',percent2:-9.58,city3: '宝鸡' ,sum20173:'2.47',sum20163:'2.58',percent3:-4.52,city4: '咸阳' ,plan:'179000',percent4:98.97},
		                {num: '9',city1: '咸阳' ,sum20171:'177154',sum20161:'189142',percent1:-6.34,city2: '延安' ,sum20172:'266508',sum20162:'299486',percent2:-11.01,city3: '榆林' ,sum20173:'2.81',sum20163:'2.95',percent3:-4.68,city4: '安康' ,plan:'81900',percent4:98.16},
		                {num: '10',city1: '榆林' ,sum20171:'143257',sum20161:'156201',percent1:-8.29,city2: '渭南' ,sum20172:'396557',sum20162:'446992',percent2:-11.28,city3: '商洛' ,sum20173:'2.30',sum20163:'2.42',percent3:-5.02,city4: '榆林' ,plan:'147000',percent4:97.45},
		                {num: '11',city1: '渭南' ,sum20171:'175515',sum20161:'195007',percent1:-10,city2: '榆林' ,sum20172:'402339',sum20162:'460252',percent2:-12.58,city3: '延安' ,sum20173:'2.55',sum20163:'2.69',percent3:-5.31,city4: '渭南' ,plan:'184600',percent4:95.08},
		                
					]
				},
				paneOption: {
					data:[
						{
							key: 'tableData0',
							text: '地市排名'
						},
						{
							key: 'tableData1',
							text: '区县排名'
						}
					],
					activePane:'tableData0'
				},
			}
		},
		components: {
			boxBase,
			tabBase,
			tablePart
		},
		methods: {
			showRank:function(event){
				this.dialogVisible = true;
			},
			handleClose:function(done){
				$(".leftBox .tableBtn").removeClass("active");
				done();
			},
			tabClick:function(curTab){
				this.tableData = this[curTab];
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.leftBox {
		padding-top:0.1rem;
		padding-bottom:0.15rem;
		.title{
			float: left;
		}
		.tabClass{
			float: left;
		}
		.rankBtn{
			padding: 0.02rem 0.06rem;
		}
		.Btn{
			float:right;
			margin-right: 0rem;
			width: 33px;
			height: 28px;
			cursor: pointer;
			margin-left: 1.6rem;
		}
		.tableBtn{
			background: url(../../../../static/img/extended/complexeval/tableBtn.png);
		}
		.tableBtn:hover{
			background: url(../../../../static/img/extended/complexeval/tableBtnHover.png);
		}
		.tableBtn.active{
			background: url(../../../../static/img/extended/complexeval/tableBtnHover.png);
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
		.content{
			.extend-tab{
				width: 5rem;
				margin-left: 2rem;
				overflow: hidden;
			}
			.extend-class{
				float: left;
				font-size:0.16rem;
				font-weight: bolder;
				margin-top: 0.20rem;
				margin-bottom: 0.25rem;
				margin-left: 0.02rem;
			}
		}
	}
</style>