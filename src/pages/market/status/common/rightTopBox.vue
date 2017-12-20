<template>
	<div>
		<box-base class="main">
			<div slot="box-title" class="title">
				<div class="topLeft">
					<span>{{boxData.title}}</span>
				</div>
				
			</div>
			<div slot="box-extend" class="topRight">
				<el-popover popper-class="cma" ref="topRightPopover" placement="left-start" width="360" trigger="hover" >
					{{boxData.info}}
				</el-popover>
				
				<info-circle v-popover:topRightPopover></info-circle>
			</div>
			
			<div class="content">
				<el-table class="cma elTable" style="width:100%" :data="boxData.tableData" height="254">
			        <el-table-column width="106" :prop="boxData.tableHeader[0].id" :label="boxData.tableHeader[0].name" 
			        	align='center' header-align='center'>
			        	<template scope="scope">
			        		<table-link @on-click="showLineChart(scope.$index)">
			        			{{scope.row.priceType}}
			        		</table-link>
					        <!--<el-button type="primary" size="small" @click="showLineChart(scope.$index)">{{scope.row.priceType}}</el-button>-->
					    </template>
			        </el-table-column>
			        	
					<el-table-column width="100" :prop="boxData.tableHeader[1].id" :label="boxData.tableHeader[1].name" 
						align='center' header-align='center'></el-table-column>
					<el-table-column width="75" :prop="boxData.tableHeader[2].id" :label="boxData.tableHeader[2].name" 
						align='center' header-align='center'></el-table-column>
					<el-table-column :prop="boxData.tableHeader[3].id" :label="boxData.tableHeader[3].name" 
						align='center' header-align='center'>
						<template scope="scope">
							<div class="multiContent">
								<multiContent :rate=scope.row.huanBiValue*1 :percentFlag=-1></multiContent>
							</div>
						</template>
					</el-table-column>
				</el-table>
			</div>
			
		</box-base>
		
		<el-dialog :title="boxData.tableData[0].lineChartData[0]" :visible.sync="lineChartVisible" class="cma line-chart" size="large">
			<rightLineChart v-bind:chartData = "boxData.tableData[0].lineChartData"></rightLineChart>
		</el-dialog>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import rightLineChart from './rightLineChart.vue';
	import multiContent from 'components/multicontent/multicontent-extend.vue';
	import infoCircle from 'components/infocircle/info-circle.vue';
	import tableLink from 'components/tablelink/table-link.vue';

	export default {
		props: {
			boxData: Object
		
		},
		data() {
			return {
				lineChartVisible:false
			}
			
		},
		mounted() {
			
		},
		components: {
			boxBase,
			rightLineChart,
			multiContent,
			infoCircle,
			tableLink
		},
		methods:{
			showLineChart: function(index){
				this.lineChartVisible = true;
			}
		}
	
	}
	
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	
	.main{
		height: 2.99rem;
		color: #2edbff;
		
		.title{	
			width: 4.2rem;
			
		}
		
		.topRight{
			float: right;
			margin-top: -0.14rem;
			color: #2edbff;
			
			.popover-css{
				font-size: 0.16rem;
			}
		}
		
		.content{
			
			.elTable {
				margin-top: 0.1rem;
				margin-left: 0rem;
				
				.multiContent {
					margin-left: 0.24rem;
				}
			}
		}
	}
	
	.line-chart{
		/*margin-left: 1rem;
		width: 12rem;*/
		/*height: 4rem;*/
	}
</style>