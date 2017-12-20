<template>
    <box-base class="middleMap">
		<div slot="box-title">
			<p class="title">全国各省{{name}}情况</p>
		</div>
		<div slot="box-extend">
			<tab-base :option=paneOption @tab-click="tabClick" class="tabClass"></tab-base>	
			
			<el-popover popper-class="cma" ref="topRightPopover" placement="left-start" width="560" trigger="hover" >
				<div v-html="tipContent"></div>
			</el-popover>
			<div id="infoDiv">
				<info-circle v-popover:topRightPopover></info-circle>
			</div>
			
			<div class="changeBtn">
				<link-btn  @on-click="linkClick"></link-btn>
				<!--<div @click="showTable" class="tableBtn Btn" v-bind:class="{'active':tableShow}"></div>-->
			</div>
		</div>

		<div class="content" >
			<div class="note">
				<span class="green">{{changeData[0]}}</span>家单位{{name}}增长，
				<span class="red">{{changeData[1]}}</span>家单位{{name}}下降<br /><br />
				陕西：{{name}}下降<span class="red"><numberFormat format="small-decimal" :numValue=changeData[2]></numberFormat> </span>%，排名<span class="orange">{{changeData[3]}}</span>，较上月前进<span class="orange">{{changeData[4]}}</span>名
			</div>
			<div class="chinaMap" ref="chinaMap">
				
			</div>
		</div>
	</box-base>
</template>
<script>
	import echarts from 'echarts';
	import chinaJson from 'static/js/json/china.json';
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import infoCircle from 'components/infocircle/info-circle.vue';
	import linkBtn from 'components/detailbutton/link-button.vue';
	import numberFormat from 'components/numberformat/number-format.vue';
	
	export default {
		props: {
    		
		},
		data() {
			return {
				tableShow:false,
				chartData:{},
				chartData0:{
					name:'卷烟销售同比',
					text:'卷烟销售同比',
					unit:'%',
					pieces:[5,0,-5,-10],
					sum:[2,4,8,11,8],
					changeData:[6,27,19.27,32,1],
					data:[
						{name: '西藏',value: 7.43,cur:1.88,last:1.75 },
						{name: '黑龙江',value: 7.09,cur:28.23,last:26.36},
						{name: '甘肃',value: 1.9,cur:32.71,last:32.1 },
						{name: '江苏',value: 1.23,cur:82.45,last:81.45 },
						{name: '云南',value: 1.12,cur:55.76,last:55.14 },
						{name: '深圳',value: 0.48,cur:14.58,last:14.51 },
						{name: '浙江',value: -0.29,cur:69.55,last:69.75 },
						{name: '贵州',value: -0.5,cur:56.21,last:56.49 },
						{name: '青海',value: -1.37,cur:6.48,last:6.57 },
						{name: '上海',value: -2.16,cur:21.28,last:21.75 },
						{name: '新疆',value: -2.57,cur:14.78,last:15.17 },
						{name: '广东',value: -4.12,cur:88.72,last:92.53 },
						{name: '四川',value: -4.41,cur:68.46,last:71.62 },
						{name: '湖南',value: -4.76,cur:78.18,last:82.09 },
						{name: '吉林',value: -5.62,cur:21.84,last:23.14 },
						{name: '内蒙古',value: -5.84,cur:27.91,last:29.64 },
						{name: '大连',value: -6.3,cur:6.39,last:6.82 },
						{name: '宁夏',value: -6.63,cur:6.76,last:7.24 },
						{name: '福建',value: -6.65,cur:44.76,last:47.95 },
						{name: '海南',value: -6.84,cur:11.99,last:12.87 },
						{name: '北京',value: -6.99,cur:20.49,last:22.03 },
						{name: '重庆',value: -8.16,cur:29.94,last:32.60},
						{name: '广西',value: -9.12,cur:42.56,last:46.83 },
						{name: '江西',value: -9.67,cur:36.51,last:40.42 },
						{name: '河南',value: -9.92,cur:88.22,last:97.93 },
						{name: '安徽',value: -11.05,cur:52.25,last:58.74 },
						{name: '山东',value: -11.28,cur:80.65,last:90.90 },
						{name: '辽宁',value: -12.37,cur:32.66,last:37.27 },
						{name: '河北',value: -12.8,cur:61.6,last:70.64 },
						{name: '湖北',value: -13.55,cur:54.76,last:63.34 },
						{name: '天津',value: -17.08,cur:12.77,last:15.40 },
						{name: '陕西',value: -19.27,cur:37.17,last:46.04 },
						{name: '山西',value: -19.48,cur:34.43,last:42.76 },
						/*{name: '香港'},
						{name: '澳门'},
						{name: '台湾'},
						{name: '南海诸岛'}*/
					]
				},
				chartData1:{
					name:'销售收入同比',
					text:'销售收入同比',
					unit:'%',
					pieces:[5,0,-5,-10],
					sum:[5,4,10,5,9],
					changeData:[9,24,22.67,32,1],
					data:[
						{name: '西藏',value: 11.84,cur:8.22,last:7.35 },
						{name: '上海',value: 8.43,cur:92.76,last:85.55 },
						{name: '江苏',value: 7.88,cur:322.4,last:298.85 },
						{name: '浙江',value: 6.2,cur:344.52,last:324.41 },
						{name: '深圳',value: 5.7,cur:54.53,last:51.59 },
						{name: '新疆',value: 2.79,cur:41.21,last:40.09 },
						{name: '甘肃',value: 2.56,cur:83.82,last:81.73 },
						{name: '福建',value: 0.53,cur:151.14,last:150.35 },
						{name: '云南',value: 0.07,cur:163.44,last:163.33 },
						{name: '海南',value: -0.32,cur:43.21,last:43.35 },
						{name: '湖南',value: -0.35,cur:235.59,last:236.41 },
						{name: '贵州',value: -0.46,cur:161.31,last:162.06 },
						{name: '黑龙江',value: -1.35,cur:65.07,last:65.96 },
						{name: '四川',value: -2.07,cur:225.75,last:230.52 },
						{name: '广东',value: -2.9,cur:269.68,last:277.73 },
						{name: '江西',value: -3.66,cur:131.96,last:136.98 },
						{name: '重庆',value: -4.21,cur:94.96,last:99.13 },
						{name: '青海',value: -4.31,cur:17.53,last:18.32 },
						{name: '广西',value: -4.99,cur:117.21,last:123.36 },
						{name: '河南',value: -5.52,cur:258.18,last:273.25 },
						{name: '湖北',value: -6.17,cur:210.3,last:224.12 },
						{name: '安徽',value: -6.21,cur:186.08,last:198.4 },
						{name: '内蒙古',value: -9.52,cur:72.12,last:79.71 },
						{name: '吉林',value: -9.82,cur:50.03,last:55.48 },
						{name: '宁夏',value: -10.81,cur:19.3,last:21.64 },
						{name: '河北',value: -11.66,cur:143.49,last:162.43 },
						{name: '北京',value: -12.63,cur:65.88,last:75.4 },
						{name: '辽宁',value: -14.77,cur:82.84,last:97.2 },
						{name: '大连',value: -16.73,cur:17.72,last:21.28 },
						{name: '天津',value: -20.04,cur:36.02,last:45.05 },
						{name: '山东',value: -20.33,cur:221.87,last:278.5 },
						{name: '陕西',value: -22.67,cur:99.42,last:128.56 },
						{name: '山西',value: -26.82,cur:92.41,last:126.27 },
						/*{name: '香港'},
						{name: '澳门'},
						{name: '台湾'},
						{name: '南海诸岛'}*/
					]
				},
				chartData2:{
					name:'单箱均价同比',
					text:'单箱均价同比',
					unit:'%',
					pieces:[5,0,-5,-10],
					sum:[11,9,8,3,2],
					changeData:[20,13,4.3,26,2],
					data:[
						{name: '上海',value: 10.94, cur:4.36,last:3.93 },
						{name: '湖北',value: 8.47, cur:3.84,last:3.54 },
						{name: '福建',value: 7.64, cur:3.38,last:3.14 },
						{name: '海南',value: 6.82, cur:3.6,last:3.37 },
						{name: '江苏',value: 6.54, cur:3.91,last:3.67 },
						{name: '江西',value: 6.49, cur:3.61,last:3.39 },
						{name: '浙江',value: 6.45, cur:4.95,last:4.65 },
						{name: '新疆',value: 5.68, cur:2.79,last:2.64 },
						{name: '深圳',value: 5.35, cur:3.74,last:3.55 },
						{name: '安徽',value: 5.33, cur:3.56,last:3.38 },
						{name: '河南',value: 5.02, cur:2.93,last:2.79 },
						{name: '广西',value: 4.56, cur:2.75,last:2.63 },
						{name: '湖南',value: 4.51, cur:3.01,last:2.88 },
						{name: '重庆',value: 4.28, cur:3.17,last:3.04 },
						{name: '西藏',value: 3.56, cur:4.36,last:4.21 },
						{name: '四川',value: 2.48, cur:3.30,last:3.22 },
						{name: '广东',value: 1.33, cur:3.04,last:3.00 },
						{name: '河北',value: 1.3, cur:2.33,last:2.30 },
						{name: '甘肃',value: 0.39, cur:2.56,last:2.55 },
						{name: '贵州',value: 0, cur:2.87,last:2.87 },
						{name: '云南',value: -1.01, cur:2.93,last:2.96 },
						{name: '辽宁',value: -2.68, cur:2.54,last:2.61 },
						{name: '青海',value: -3.23, cur:2.70,last:2.79 },
						{name: '天津',value: -3.75, cur:2.82,last:2.93 },
						{name: '内蒙古',value: -4.09, cur:2.58,last:2.69 },
						{name: '陕西',value: -4.3, cur:2.67,last:2.79 },
						{name: '宁夏',value: -4.35, cur:2.86,last:2.99 },
						{name: '吉林',value: -4.58, cur:2.29,last:2.40 },
						{name: '北京',value: -5.85, cur:3.22,last:3.42 },
						{name: '黑龙江',value: -7.6, cur:2.31,last:2.50 },
						{name: '山西',value: -9.15, cur:2.68,last:2.95 },
						{name: '山东',value: -10.13, cur:2.75,last:3.06 },
						{name: '大连',value: -11.22, cur:2.77,last:3.12 },
						/*{name: '香港'},
						{name: '澳门'},
						{name: '台湾'},
						{name: '南海诸岛'}*/
					]
				},
				changeData:[6,27,19.27,32,1],
				MapColor: ['rgb(195,231,247)','rgb(86,185,224)', 'rgb(65,143,205)','rgb(59,84,166)','rgb(27,70,172)'],
				paneOption: {
					data:[
						{
							key: 'chartData0',
							text: '卷烟销量'
						},
						{
							key: 'chartData1',
							text: '销售收入'
						},
						{
							key: 'chartData2',
							text: '单箱均价'
						},
					],
					activePane:'chartData0'
				},
				name:'卷烟销售同比',
				curTab:'chartData0',
				tipContent:"<div style='text-indent:2em'> （一）卷烟销量同比保持增长，增幅较4月末有所提升" +
						"1-5月份，全国卷烟销量2072.04万箱，同比增加24.47万箱，增长1.27%，销量增幅较1-4月提高0.71个百分点。" + 
						"陕西省销量58.31万箱，同比降低0.01万箱，同比降幅0.18%，销量增幅较1-4月增加0.01个百分点" +
						"5月份，全国卷烟销量387.42万箱，同比增加16.27万箱，增长4.38%；陕西省销量11.15万箱，同比增加0.76万箱，增长7.32%</div>" +
						
						"<div style='text-indent:2em'>    （二）单箱结构同环比保持增长" +
						"1-5月份，全国卷烟单箱结构为31661元/箱，同比增加1182元/箱，增长3.88%，增幅比去年同期高0.67个百分点，" + 
						"但较1-4月下降0.09个百分点。陕西省单箱结构为28742元/箱，同比增加1061元/箱，增长5.97%，较1-4月下降0.03个百分点。" +
						"分价类来看一、二类烟销量同比增幅较大，其中一类烟销量505.03万箱，同比增加30.81万箱，增长6.5%，对结构提升的贡献度达76.22%</div>" +
						
						"<div style='text-indent:2em'> （三）销售收入保持增长，增幅有所扩大" +
						"1-5月，全国共实现卷烟销售收入6560.19亿元，同比增加319.48亿元，增长5.12%，增幅较1-4月增加0.65个百分点；" + 
						"陕西省167.22亿元，增长9.37亿元，增长5.94%，增幅较1-4月增加0.76个百分点。" +
						"5月份，全国实现卷烟销售收入1140.08亿元，同比增加87.40亿元，增长8.30%；环比增加108.12亿元，增长10.48%；" + 
						"陕西省31.41亿元，增长2.68亿，增长9.33%，环比增加.3.13亿元，增长11.05%</div>"
			}
		},
		components: {
			boxBase,
			tabBase,
			infoCircle,
			linkBtn,
			numberFormat
		},
		methods:{
			linkClick:function() {
				this.$router.push({ path: '/overview/nationsale' });
			},
			showTable:function(){
				var transformData = {
					data:this[this.curTab]
				}
				/*var className = event.target.className;
				if(className.indexOf('active') >= 0){
					className = className.replace("active",'');
					transformData.active = false;
				}else{
					className = className + ' active';
					transformData.active = true;
				}
				event.target.className = className;*/
				if(this.tableShow){
					transformData.active = false;
					this.tableShow = false;
				}else{
					transformData.active = true;
					this.tableShow = true;
				}
				this.$emit('show-table',transformData);
			},
			tabClick:function(curTab){
				this.name = this[curTab]['name'];
				this.changeData = this[curTab]['changeData'];
				this.curTab = curTab;
				//this.drawMap(curTab);
			},
			drawMap : function(curTab){
				var $this = this;
				$this.chartData = this[curTab];
				var option = {
					animation:false,
				    tooltip:{
				    	show:true,
						trigger:'item',
						//formatter:'{b} <br/> {a}：{c}' + $this.chartData.unit
						formatter:function(param){
							var str = ''
							if(param.value || param.value == 0){
								if(param.name){
//									str += param.name + '<br/>' ;
									str += '<big style="font-weight: bold;color:#2edbff">' + param.name + '</big><br/>' ;
								}
								if(param.data.cur && param.data.last){
									if(param.seriesName == "卷烟销售同比"){
										str += '本期卷烟销售：' + param.data.cur;
										str += "万箱<br/>";
									}else if(param.seriesName == "销售收入同比"){
										str += '本期销售收入：' + param.data.cur;
										str += "亿元<br/>";
									}else{
										str += '本期单箱均价：' + param.data.cur;
										str += "万元<br/>";
									}
									if(param.seriesName == "卷烟销售同比"){
										str += '同期卷烟销售：' + param.data.last;
										str += "万箱<br/>";
									}else if(param.seriesName == "销售收入同比"){
										str += '同期销售收入：' + param.data.last;
										str += "亿元<br/>";
									}else{
										str += '同期单箱均价：' + param.data.last;
										str += "万元<br/>";
									}
								}
								if(param.seriesName){
									str += param.seriesName 
								}
								str += '：' + param.value + $this.chartData.unit;
							}
							return str;
						}
					},
					visualMap: {
						type: 'piecewise', 
						left: '0%',
						top:'68%',
						showLabel:true,
						text:[this.chartData.text],
						calculable: true,
						splitNumber:5,
						pieces: [
							{min: this.chartData.pieces[0]},
						    {min: this.chartData.pieces[1], max: this.chartData.pieces[0]},
						    {min: this.chartData.pieces[2], max: this.chartData.pieces[1]},
						    {min: this.chartData.pieces[3], max: this.chartData.pieces[2]},
						    {max: this.chartData.pieces[3]},
						],
						inverse:false,
						inRange: {
							symbol:'rect',
							color: this.MapColor
						},
						itemWidth:30,
						itemHeight:20,
						textStyle:{
							color:"#ffffff"
						},
						orient:'vertical',
						formatter:function(value1,value2){
							var str = '';
							if(value1==$this.chartData.pieces[0]){
								str = value1 + $this.chartData.unit + '以上 ( ' + $this.chartData.sum[0] + '家单位 )';
							}else if(value1==$this.chartData.pieces[1]){
								str = '[' + value1 + $this.chartData.unit + ' , ' + value2 + $this.chartData.unit + ' ) ( ' + $this.chartData.sum[1] + '家单位 )';
							}else if(value1==$this.chartData.pieces[2]){
								str = '[' + value1 + $this.chartData.unit + ' , ' + value2 + $this.chartData.unit + ' ) ( ' + $this.chartData.sum[2] + '家单位 )';
							}else if(value1==$this.chartData.pieces[3]){
								str = '[' + value1 + $this.chartData.unit + ' , ' + value2 + $this.chartData.unit + ' ) ( ' + $this.chartData.sum[3] + '家单位 )';
							}else if(value2==$this.chartData.pieces[3]){
								str =  value2 + $this.chartData.unit + '以下 ( ' + $this.chartData.sum[4] + '家单位 )';
							}
							return str; // 范围标签显示内容。
						}
					},
				    series: [
				        {
				        	name:this.chartData.name,
				            type: 'map',
				            mapType: 'china',
				            roam: false,
				            aspectScale:0.8,
				            label: {
				                normal: {
				                    show: false
				                },
				                emphasis: {
				                    show: false
				                }
				            },
				            itemStyle: {
								normal: {
									borderColor:'rgba(0,0,0,0.5)',
									borderWidth: 1,
									areaColor: '#389BB7',
								},
								emphasis: {
									areaColor: '',
									borderWidth: 0,
									borderColor:'#fff',
									shadowColor: 'rgba(0, 0, 0, 0.5)',
    								shadowBlur: 20,
									shadowOffsetX:1,
									shadowOffsetY:1
								}
							},
				            data:this.chartData.data,
				            layoutCenter:['52%', '52%'],
				            layoutSize:580
				        }
				    ]
				};
				echarts.registerMap('china', chinaJson);
		        let chart = this.chart = echarts.getInstanceByDom(this.$refs.chinaMap) || echarts.init(this.$refs.chinaMap);
		        chart.setOption(option);
		        chart.on('click', function (param) {
					if(param.name == '陕西'){
						 $this.$router.push({ path: '/overview/province' })
					}
				});
			}
		},
		mounted() {
			this.drawMap('chartData0');
		},
		watch:{
			curTab:function(val, oldVal){
				var transformData = {
					data:this[val]
				}
				this.$emit('show-table',transformData);
				this.drawMap(val);
			}
		},
		beforeDestroy(){
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.middleMap{
		background: none;
		border-top: none;
		/*margin-top: 0.04rem;*/
	}
	.title{
		
	}
	.tabClass{
		float: left;
		margin-right: 0.8rem;
	}
	.changeBtn{
		/*position:absolute;
		z-index:1;
		right:0.05rem;*/
		float: left;
		.Btn{
			float:right;
			margin-right: 0rem;
			width: 0.33rem;
			height: 0.28rem;
			cursor: pointer;
		}
		.tableBtn{
			background: url(../../../../static/img/cust/distribute/tableBtn.png);
		}
		.tableBtn:hover{
			background: url(../../../../static/img/cust/distribute/tableBtnHover.png);
		}
		.tableBtn.active{
			background: url(../../../../static/img/cust/distribute/tableBtnHover.png);
		}
	}
	.content{
		position:relative;
		margin-top: 0.1rem;
		height: 5.61rem;
		.chinaMap{
			position:absolute;
			width: 6rem;
			height: 5.4rem;
			top:0.20rem;
		}
		.note{
			background-color: rgb(36,62,136);
			margin-left: 0.1rem;
			font-size: 0.14rem;
			line-height: 0.2rem;
			padding:0.15rem;
			position:absolute;
			span{
				font-size: 0.2rem;
				font-weight: bold;
				margin: 0 0.05rem 0 0.01rem;
			}
			.red{
				color: $red;
			}
			.green{
				color: $green;
			}
			.orange{
				color: $orange;
			}
		}
	}
	
	.item-select{
		width: 1rem;
	}
	#infoDiv{
		float:left;
		padding-top:0.06rem;
		padding-right:0.06rem;
	}
	
</style>