<template>
	<box-base class="tableDiv">
		<div slot="box-title">
			<p class="title">品牌（规格）投放</p>
		</div>
		<div slot="box-extend">
			<tab-base :option=paneOption @tab-click="tabClick" class="item-tab"></tab-base>	
			<el-input
			  placeholder="请输入品牌"
			  icon="search"
			  v-model="input1"
			  class="item-input cma"
			  size = 'small'
			  :on-icon-click="handleIconClick"
			>
			</el-input>
		</div>
		<div class="content">
			<el-table :data="tableData" class="item-tables cma" height='auto' row-class-name='rowClass'>
		    	<el-table-column prop="col1" label="品牌(规格)" width="125" 
		    		:show-overflow-tooltip=showOverFlow>
					<template scope="scope">
						<table-link @on-click="doSome(scope.row.col1)" class="linkBtn">
							{{scope.row.col1}}
						</table-link>
			    	</template>
		    	</el-table-column>
		    	<el-table-column prop="col2" label="市场状态" width="100"></el-table-column>
		    	<el-table-column prop="col3" label='投放量' width="85" label-class-name="lastWeek"></el-table-column>
		    	<el-table-column prop="col4" label="订购量" width="85"></el-table-column>
		    	<el-table-column prop="col5" label="货源使用率" width="120"></el-table-column>
		    	<el-table-column prop="col6" label="投放量" width="85" label-class-name="thisWeek"></el-table-column>
		    	<el-table-column prop="col7" label="期末库存" width="100"></el-table-column>
		    	<el-table-column prop="col8" label="投放方式" ></el-table-column>
		    </el-table>
		</div>
		
		
		<el-dialog v-model="dialogVisible" size="large" class="cma" top='1%' :title="dialogTitle">
			<dialogChart :dialog-title='dialogTitle'></dialogChart>
		</el-dialog>
	</box-base>
</template>

<script>
	import $ from 'static/js/jquery-vendor';
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import tableLink from 'components/tablelink/table-link.vue';
	import dialogChart from './dialogChart.vue';
	export default {
		props: {
			curCity: String
		},
		watch: {
			curCity: function() {
				this.initTable();
			}
		},
		data() {
			return {
				showOverFlow:true,
				paneOption: {
					data:[
						{
							key: 'tableData0',
							text: '新品货源'
						},
						{
							key: 'tableData1',
							text: '紧俏货源'
						},
						{
							key: 'tableData2',
							text: '完全满足'
						},
						{
							key: 'tableData3',
							text: '均衡满足'
						}
					],
					activePane:'tableData0'
				},
				input1:'',
				tableData:[],
				tableData0: {
					'西安': [
						{col1: '猴王（金）',col2: '紧',col3:'81,110',col4:'54,000',col5:'66.58%',col6:'82,472',col7:'56,420',col8:'按档位投放'}, 
						{col1: '好猫（盛世）',col2: '紧',col3:'81,352',col4:'54,854',col5:'67.43%',col6:'82,860',col7:'56,900',col8:'按档位投放'}, 
						{col1: '好猫（炫蓝）',col2: '紧',col3:'82,786',col4:'50,215',col5:'60.66%',col6:'75,820',col7:'58,210',col8:'按档位投放'}, 
						{col1: '好猫（吉祥）',col2: '稍紧',col3:'81,423',col4:'54,728',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（如意）',col2: '稍紧',col3:'81,538',col4:'54,786',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按需投放'}, 
						{col1: '好猫（磨砂猴王）',col2: '稍紧',col3:'75,285',col4:'34,158',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按需投放'}, 
						{col1: '好猫（金延安）',col2: '正常',col3:'51,846',col4:'38,158',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按需投放'}, 
						{col1: '好猫（步步高）',col2: '正常',col3:'62,315',col4:'45,185',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按需投放'}, 
						{col1: '好猫（天赋）',col2: '正常',col3:'78,189',col4:'61,581',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（长乐）',col2: '正常',col3:'62,185',col4:'43,518',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（细支长乐）',col2: '正常',col3:'34,518',col4:'21,548',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（招财进宝）',col2: '正常',col3:'79,215',col4:'73,818',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（细支天赋）',col2: '正常',col3:'95,128',col4:'84,515',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（招财猫1600）',col2: '正常',col3:'48,351',col4:'31,251',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '延安（细支1935）',col2: '正常',col3:'91,158',col4:'65,481',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（细支招财猫）',col2: '正常',col3:'76,215',col4:'35,481',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '延安（软）',col2: '正常',col3:'31,518',col4:'24,815',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '延安（1935）',col2: '正常',col3:'21,480',col4:'15,218',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '延安（红韵）',col2: '正常',col3:'94,218',col4:'84,218',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '延安（硬）',col2: '正常',col3:'64,218',col4:'58,181',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '延安（五星）',col2: '正常',col3:'34,815',col4:'32,188',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
					],
					'榆林': [
						{col1: '猴王（金）',col2: '紧',col3:'92,185',col4:'62,185',col5:'67.46%',col6:'88,275',col7:'76,821',col8:'按档位投放'}, 
						{col1: '好猫（盛世）',col2: '紧',col3:'85,158',col4:'45,581',col5:'53.53%',col6:'72,185',col7:'66,230',col8:'按档位投放'}, 
						{col1: '好猫（炫蓝）',col2: '紧',col3:'52,512',col4:'48,218',col5:'91.82%',col6:'67,871',col7:'43,251',col8:'按档位投放'}, 
						{col1: '好猫（吉祥）',col2: '稍紧',col3:'82,548',col4:'35,184',col5:'48.52%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（如意）',col2: '稍紧',col3:'84,575',col4:'60,842',col5:'70.25%',col6:'82,220',col7:'56,230',col8:'按需投放'}, 
						{col1: '好猫（磨砂猴王）',col2: '稍紧',col3:'76,518',col4:'58,842',col5:'84.25%',col6:'82,220',col7:'56,230',col8:'按需投放'}, 
						{col1: '好猫（金延安）',col2: '正常',col3:'65,184',col4:'58,248',col5:'92.52%',col6:'82,220',col7:'56,230',col8:'按需投放'}, 
						{col1: '好猫（步步高）',col2: '正常',col3:'54,284',col4:'48,245',col5:'90.57%',col6:'82,220',col7:'56,230',col8:'按需投放'}, 
						{col1: '好猫（天赋）',col2: '正常',col3:'78,351',col4:'61,581',col5:'89.52%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（长乐）',col2: '正常',col3:'63,248',col4:'53,518',col5:'91.42%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（细支长乐）',col2: '正常',col3:'48,125',col4:'31,588',col5:'88.52%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（招财进宝）',col2: '正常',col3:'48,287',col4:'38,254',col5:'89.25%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（细支天赋）',col2: '正常',col3:'54,248',col4:'43,248',col5:'93.21%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（招财猫1600）',col2: '正常',col3:'58,201',col4:'37,815',col5:'73.05%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '延安（细支1935）',col2: '正常',col3:'76,152',col4:'59,354',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '好猫（细支招财猫）',col2: '正常',col3:'68,482',col4:'35,481',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '延安（软）',col2: '正常',col3:'31,518',col4:'24,815',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '延安（1935）',col2: '正常',col3:'21,480',col4:'15,218',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '延安（红韵）',col2: '正常',col3:'94,218',col4:'84,218',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '延安（硬）',col2: '正常',col3:'64,218',col4:'58,181',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
						{col1: '延安（五星）',col2: '正常',col3:'34,815',col4:'32,188',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'按档位投放'}, 
					]
				},
		        tableData1:[
		        	{col1: '猴王（金1）',col2: '紧',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（盛世）',col2: '紧',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（炫蓝）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（吉祥）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（如意）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（磨砂猴王）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（金延安）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（步步高）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（天赋）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（长乐）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（细支长乐）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（招财进宝）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（细支天赋）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（招财猫1600）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（细支1935）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（细支招财猫）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（软）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（1935）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（红韵）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（硬）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（五星）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
		        ],
		        tableData2:[
		        	{col1: '猴王（金2）',col2: '紧',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（盛世）',col2: '紧',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（炫蓝）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（吉祥）',col2: '紧',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（如意）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（磨砂猴王）',col2: '紧',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（金延安）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（步步高）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（天赋）',col2: '紧',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（长乐）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（细支长乐）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（招财进宝）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（细支天赋）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（招财猫1600）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（细支1935）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（细支招财猫）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（软）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（1935）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（红韵）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（硬）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（五星）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
		        ],
		        tableData3:[
		        	{col1: '猴王（金3）',col2: '紧',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（盛世）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（炫蓝）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（吉祥）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（如意）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（磨砂猴王）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（金延安）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（步步高）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（天赋）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（长乐）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（细支长乐）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（招财进宝）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（细支天赋）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（招财猫1600）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（细支1935）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '好猫（细支招财猫）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（软）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（1935）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（红韵）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（硬）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
					{col1: '延安（五星）',col2: '正常',col3:'81,110',col4:'54,000',col5:'66.57%',col6:'82,220',col7:'56,230',col8:'方式'}, 
		        ],
		        dialogVisible: false,
		        dialogTitle:''
			}
		},
		components: {
			boxBase,
			tabBase,
			tableLink,
			dialogChart
		},
		methods:{
			initTable:function(){
				this.tableData = this.tableData0[this.curCity];
				var $this = this;
				$(".item-input").bind("keydown",function(e){
				    // 兼容FF和IE和Opera    
					var theEvent = e || window.event;    
					var code = theEvent.keyCode || theEvent.which || theEvent.charCode;    
					if (code == 13) {    
				    	//回车执行查询
			           	$this.handleIconClick();
			        }    
				});
			},
			tabClick:function(curTab){
				if(curTab == "tableData0"){
					this.tableData = this.tableData0[this.curCity];
				}else{
					this.tableData = this[curTab];
				}
			},
			doSome:function(name){
				this.dialogVisible = true;
				this.dialogTitle = name+'货源数据分析';
			},
			rowClick:function(row, event, column){
				this.dialogVisible = true;
				this.dialogTitle = row.col1 +'货源数据分析';
			},
			handleIconClick:function(ev){
				var filterWord = this.input1;
				if(filterWord == '' || filterWord == undefined){
					$('.rowClass').show();
				}else{
					$('.rowClass').hide();
					$('.linkBtn span:contains("' + filterWord + '")').parent().parent().parent().parent().parent().show();
				}
			}
		},
		mounted() {
			this.initTable();
		}
	}
</script>

<style lang="scss">
	@import "../../../../styles/variables.scss";
	.dialogTitle{
		
	}
	.tableDiv{
		margin-top: $box-distince;
		.item-tab{
			margin-right: 1.3rem;
		}
		.item-input{
			width: 1.3rem;
		}
		.content{
			padding: 0.1rem;
			padding-bottom: 0.05rem;
			.rowClass td{
				height: 0.35rem;
			}
			.item-tables{
				width: 8.11rem;
				/*height:1.8rem;*/
				height:3.51rem;
				.is-leaf.lastWeek{
					background: url(../../../../static/img/market/strategy/lastWeek.png) no-repeat #0b1948 !important;
					text-align: right;
				}
				.cell.lastWeek{
					background:none !important;
					padding-right: 0.13rem;
				}
				.is-leaf.thisWeek{
					background: url(../../../../static/img/market/strategy/thisWeek.png) no-repeat #0b1948 !important;
					text-align: right;
				}
				.cell.thisWeek{
					background:none !important;
					padding-right: 0.13rem;
				}
				.dialogClass{
					width: 8.5rem;
				}
				.linkBtn span{
					width: 1rem;
					white-space:nowrap;
					overflow:hidden;
					text-overflow: ellipsis;
					display: block;
					text-align: left;
					position: relative;
					.fa{
						position: absolute;
						right: 0rem;
					}
				}
			}
		}
	}
</style>