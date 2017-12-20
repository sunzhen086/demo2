<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">6&nbsp;/</span><span class="title2">竞争力分析</span>
		    
		    <span class="reportSpan cma">
			    <el-select v-model="selectValue" placeholder="相关分析" 
					size="small"
					class="left cma mid-item item-select" popper-class="cma-select">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</span>
		    <!--<span class="reportSpan">
			    <el-dropdown>
				  <span class="el-dropdown-link dropdownSpan">
				    相关分析<i class="el-icon-caret-bottom el-icon--right"></i>
				  </span>
				  <el-dropdown-menu slot="dropdown">
				    	<el-dropdown-item>近期购进对比</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
			</span>-->
		</div>
		
		<div style="margin-left:0.15rem; margin-bottom: 0.15rem; font-size:0.16rem;line-height: 0.3rem;">
			<span class="numSpan">同档位</span>零售户50户，本零售户年累计订购量排名<span class="numSpan">8</span>
			<br/>
			与该零售户订购量相近的零售为：
				<span v-for="cust in sameLineCusts">
					<a href="javascript:void(0)"  v-on:click="jumpToCust(cust.custId)">
						{{cust.custName}}
					</a>、
				</span>
				西安市长安区中惠商店……
			<br/>
			
			<span class="numSpan">同客户经理</span>管辖零售户50户，本零售户年累计订购量排名<span class="numSpan">8</span>
			<br/>
			与该零售户订购量相近的零售为：
				<span v-for="cust in sameSlsmanCusts">
					<a href="javascript:void(0)"  v-on:click="jumpToCust(cust.custId)">
						{{cust.custName}}
					</a>、
				</span>
				西安市长安区中惠商店……
			<br/>
			
			<span class="numSpan">同片区</span>零售户50户，本零售户年累计订购量排名<span class="numSpan">8</span>
			<br/>
			与该零售户订购量相近的零售为：
				<span v-for="cust in sameAreaCusts">
					<a href="javascript:void(0)"  v-on:click="jumpToCust(cust.custId)">
						{{cust.custName}}
					</a>、
				</span>
				西安市长安区中惠商店……
		</div>
		
		<bar-chart></bar-chart>
		
	</box-base>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import echarts from 'echarts';
	import barChart from './barChart.vue';
	
	export default {
		data() {
			return {
				options: [{"label":"近期购进对比","value":"01"}],
				lineName: "线路三",
				sameLineCusts: [{custId:"1",custName:"宁宁商店"},
								{custId:"2",custName:"小艳门市部"},
								{custId:"3",custName:"潇丽商店"},
								{custId:"4",custName:"兰和商店"},
								{custId:"5",custName:"百货门市"},
								{custId:"6",custName:"综合商店"}
								],
				sameSlsmanCusts: [{custId:"1",custName:"宁宁商店"},
								{custId:"2",custName:"小艳门市部"},
								{custId:"3",custName:"潇丽商店"},
								{custId:"4",custName:"兰和商店"},
								{custId:"5",custName:"百货门市"},
								{custId:"6",custName:"综合商店"}
								],
				sameAreaCusts: [{custId:"1",custName:"宁宁商店"},
								{custId:"2",custName:"小艳门市部"},
								{custId:"3",custName:"潇丽商店"},
								{custId:"4",custName:"兰和商店"},
								{custId:"5",custName:"百货门市"},
								{custId:"6",custName:"综合商店"}
								],
				selectValue: ''
			}
		},
		methods:{
			jumpToCust:function (custId){
				this.$router.push('/extended/custwiki');
			}
		},
		components: {
			boxBase,
			barChart
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		width: 9.5rem;
		margin-bottom: 0.13rem;
		
		.keyInfo {
			font-weight: 700;
			font-size: 0.17rem;
		}
		a {
			text-decoration: underline;
		}
		
		.reportSpan {
			float: right;
			margin-right:0.15rem;
			padding-top:0.02rem;
			color:black;
		}
		.dropdownSpan {
			color: #4ed4f8 ;
			font-size:16px;
		}
		.el-dropdown-menu .el-dropdown-menu__item{
			background-color: #4ed4f8 !important;
		}
		.title1{
			color: #2edbff;
			font-size: 30px;
		}
		.title2{
			margin-left: 10px ;
			color: #2edbff;
			font-size: 18px;
		}
		.detail{
			margin-top: 0.1rem;
			margin-left: 0.15rem ;
			margin-bottom: 0.2rem;
			font-size: 14px;
		}
		.content{
			border: 1px #4169E1 solid;
			margin-left: 0.13rem;
			margin-bottom: 0.2rem;
			margin-right: 0.13rem;
			
			.muti{
				font-size: 14px;
				margin-left: -12px;
				margin-right: -12px;
			}
		}
	}
	
	.numSpan{
		color: rgb(254,149,2);
		font-size: 0.2rem;
		font-weight: bold;
	}	
	
</style>