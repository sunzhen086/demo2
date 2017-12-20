<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">5&nbsp;/</span><span class="title2">配送信息</span>
		    
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
		
		<div style="margin-left:0.15rem; margin-bottom: 0.05rem; font-size:0.16rem;line-height: 0.3rem;">
			零售户所在配送线路：{{lineName}}
			<br/>
			同配送线路的零售户依次为：
				<span v-for="cust in sameLineCusts">
					<a href="javascript:void(0)"  v-on:click="jumpToCust(cust.custId)">
						{{cust.custName}}
					</a>、
				</span>
				<a href="javascript:void(0)" v-on:click="jumpToCust(0)">
					龙龙商店
				</a>
			<br/>
			2017年4月1日到5月31日配送信息
		</div>
		
		<div class="content">
			<p class="detail"></p>
			<el-table class="cma"  :show-header=true :border=false :data="tableData5" >
			<el-table-column   label="序号" align="center" :show-overflow-tooltip=true width="62">
				<template scope="scope">
					<div class="muti">
						{{scope.row.seq}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="配送日期" align="center" :show-overflow-tooltip=true width="111">
				<template scope="scope">
					<div class="muti">
						{{scope.row.dispatchDate}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="到达时间" align="center" :show-overflow-tooltip=true width="111">
				<template scope="scope">
					<div class="muti">
						{{scope.row.reachDate}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  label="送货数量（条）" align="center" :show-overflow-tooltip=true width="111">
					<template scope="scope">
					<div class="muti">
						{{scope.row.dispatchNum}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="送货金额（元）" align="center" :show-overflow-tooltip=true width="111">
				<template scope="scope">
					<div class="muti">
						{{scope.row.dispatchAmt}}
					</div>
				</template>
			</el-table-column>
			<el-table-column label="配送商品" align="center" :show-overflow-tooltip=true width="400">
				<template scope="scope">
					<div class="muti">
						{{scope.row.dispatchItems}}
					</div>
				</template>
			</el-table-column>
		</el-table>
		</div>
		
	
	</box-base>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	
	export default {
		data() {
			return {
				options: [{"label":"配送明细","value":"01"}],
				lineName: "线路三",
				sameLineCusts: [{custId:"1",custName:"宁宁商店"},
								{custId:"2",custName:"小艳门市部"},
								{custId:"3",custName:"潇丽商店"},
								{custId:"4",custName:"兰和商店"},
								{custId:"5",custName:"百货门市"},
								{custId:"6",custName:"综合商店"}
								],
				showHeader: true,
				tableData5: [{
					seq: '1',
					dispatchDate: '20170526',
					reachDate: '20170526',
					dispatchNum: '100',
					dispatchAmt: '15200',
					dispatchItems: '芙蓉王、利群、云烟、白沙、黄鹤楼'
				},{
					seq: '2',
					dispatchDate: '20170509',
					reachDate: '20170509',
					dispatchNum: '90',
					dispatchAmt: '16020',
					dispatchItems: '芙蓉王、利群、云烟、白沙、黄鹤楼'
				},{
					seq: '3',
					dispatchDate: '20170423',
					reachDate: '20170423',
					dispatchNum: '70',
					dispatchAmt: '10360',
					dispatchItems: '南京、中华、云烟、白沙、黄鹤楼'
				},{
					seq: '4',
					dispatchDate: '20170418',
					reachDate: '20170418',
					dispatchNum: '90',
					dispatchAmt: '14940',
					dispatchItems: '芙蓉王、利群、云烟、白沙、黄鹤楼'
				},{
					seq: '5',
					dispatchDate: '20170402',
					reachDate: '20170402',
					dispatchNum: '75',
					dispatchAmt: '11625',
					dispatchItems: '泰山、玉溪、云烟、白沙、黄鹤楼'
				}],
				selectValue: ''
			}
		},
		methods:{
			jumpToCust:function (custId){
				this.$router.push('/extended/custwiki');
			}
		},
		components: {
			boxBase
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		width: 9.5rem;
		margin-bottom: 0.13rem;
		
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
		/*.cma .el-select.cma .el-input .el-input__inner {
			background-color: #4ed4f8 !important;
		}*/
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