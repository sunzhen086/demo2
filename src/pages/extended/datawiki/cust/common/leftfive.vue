<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">4&nbsp;/</span><span class="title2">订货统计</span>
		    
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
				    	<el-dropdown-item>配送明细</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
			</span>-->
		</div>
		
		<div style="height: 0.15rem;margin-bottom: 0.2rem; margin-left:0.15rem; font-size:0.16rem;">
			截止到2017年5月31日，年累计订货数量 <span class="numSpan">603</span> 条，
			订货金额 <span class="numSpan">96,969</span> 元
		</div>
		
		<div class="content">
			<p class="detail"></p>
			<el-table class="cma"  :show-header=true :border=false :data="tableData5" >
			<el-table-column   label="序号" align="center" :show-overflow-tooltip=true >
				<template scope="scope">
					<div class="muti">
						{{scope.row.seq}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="订货日期" align="center" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti">
						{{scope.row.bornDate}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="订货方式" align="center" :show-overflow-tooltip=true>
				<template scope="scope">
					<div class="muti">
						{{scope.row.orderWay}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="规格个数" align="center" :show-overflow-tooltip=true>
					<template scope="scope">
					<div class="muti">
						{{scope.row.itemCount}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="订货数量(条)" align="center" :show-overflow-tooltip=true  >
				<template scope="scope">
					<div class="muti">
						{{scope.row.qtySum}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="订货金额(元)" align="center" :show-overflow-tooltip=true >
				<template scope="scope">
					<div class="muti">
						{{scope.row.amtSum}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="单条值(元)"align="center" :show-overflow-tooltip=true  >
				<template scope="scope">
					<div class="muti">
						{{scope.row.avgAmt}}
					</div>
				</template>
			</el-table-column>
			</el-table>
		</div>
		
		<bar-chart></bar-chart>
	
	</box-base>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import echarts from 'echarts';
	import barChart from './barChartFive.vue';
	import numberFormat from 'components/numberFormat/number-format.vue';
	
	export default {
		data() {
			return {
				format: 'to-thousand',
				options: [{"label":"订货明细","value":"01"}],
				tableData5: [{
					seq: '1',
					bornDate: '20170525',
					orderWay: '网订',
					itemCount: '30',
					qtySum: '100',
					amtSum: '15200',
					avgAmt: '152'
				},{
					seq: '2',
					bornDate: '20170408',
					orderWay: '网订',
					itemCount: '32',
					qtySum: '90',
					amtSum: '16020',
					avgAmt: '178'
				},{
					seq: '3',
					bornDate: '20170322',
					orderWay: '网订',
					itemCount: '25',
					qtySum: '70',
					amtSum: '10360',
					avgAmt: '148'
				},{
					seq: '4',
					bornDate: '20170304',
					orderWay: '网订',
					itemCount: '32',
					qtySum: '90',
					amtSum: '14940',
					avgAmt: '166'
				},{
					seq: '5',
					bornDate: '20170225',
					orderWay: '网订',
					itemCount: '32',
					qtySum: '75',
					amtSum: '11625',
					avgAmt: '155'
				},{
					seq: '6',
					bornDate: '20170208',
					orderWay: '网订',
					itemCount: '32',
					qtySum: '88',
					amtSum: '14784',
					avgAmt: '168'
				},{
					seq: '7',
					bornDate: '20170109',
					orderWay: '网订',
					itemCount: '32',
					qtySum: '90',
					amtSum: '14040',
					avgAmt: '156'
				}],
				selectValue: ''
			}
		},
		components: {
			boxBase,
			barChart,
			numberFormat
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		width: 9.5rem;
		margin-bottom: 0.13rem;

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