<template>
	<div class="tableClass cma">
		<el-table class="cma item-table table1 row-height-35" :data="tableData.data" height='auto' 
			row-class-name='rowClass' v-if='tableData.tableNumber=="1"'>
			<el-table-column label="单位" prop="city" align="center" width='120'>
				<!--<template scope="scope">
					<template v-if="scope.row.num == 1 || scope.row.num == 2 || scope.row.num == 3">
						<div class="green" >
							{{scope.row.city}}
						</div>
					</template>
					<template v-else-if="scope.row.num == 11 || scope.row.num == 10 || scope.row.num == 9">
						<div class="red">
							{{scope.row.city}}
						</div>
					</template>
					<template v-else>
						{{scope.row.city}}
					</template>
				</template>-->
			</el-table-column>
			<el-table-column label="排名" prop="num" align="center" width='100'>
			</el-table-column>
			<el-table-column label="综合得分" prop="score" align='center' width='120'>
			</el-table-column>
			<el-table-column label="上期排名" prop="lastNum" align='center' width='100'>
			</el-table-column>
			<el-table-column label="排名变化" align='center'>
				<template scope="scope">
					<div class="multi">
						<multi-content :rate=scope.row.changeNum :percentFlag=0></multi-content>
					</div>
				</template>
			</el-table-column>
		</el-table>
		
		<el-table class="cma1 item-table table11 row-height-35" :data="tableData.data" height='auto' 
			row-class-name='rowClass' v-if='tableData.tableNumber=="11"'>
			<el-table-column label="排名" prop="num" align="center" width='80'>
			</el-table-column>
			<el-table-column label="卷烟销量" align="center">
				<el-table-column label="单位" prop="city1" align="center" width='80'>
					<template scope="scope">
						<template v-if="scope.row.num == 1 || scope.row.num == 2 || scope.row.num == 3">
							<div class="green" >
								{{scope.row.city1}}
							</div>
						</template>
						<template v-else-if="scope.row.num == 11 || scope.row.num == 10 || scope.row.num == 9">
							<div class="red">
								{{scope.row.city1}}
							</div>
						</template>
						<template v-else>
							{{scope.row.city1}}
						</template>
					</template>
				</el-table-column>
				<el-table-column label="201701-06" prop="sum20171" align="center" width='120'>
					<el-table-column label="（箱）" prop="sum20171" align="center" width='120'>
						<template scope="scope">
							<number-format :format=format :strValue='scope.row.sum20171 '></number-format>
				    	</template>
					</el-table-column>
				</el-table-column>
				<el-table-column label="2016年累" prop="sum20161" align="center" width='120'>
					<el-table-column label="（箱）" prop="sum20161" align="center" width='120'>
						<template scope="scope">
							<number-format :format=format :strValue='scope.row.sum20161 '></number-format>
				    	</template>
					</el-table-column>
				</el-table-column>
				<el-table-column label="同比" prop="percent1" align="center" width='130'>
					<el-table-column label="（%）" prop="percent1" align="center" width='130'>
						<template scope="scope">
							<div class="multi">
								<multi-content :rate=scope.row.percent1 :percentFlag=0></multi-content>
							</div>
						</template>
					</el-table-column>
					<!--<el-table-column label="(%)" prop="percent1" align="center" width='130'>
					</el-table-column>-->
				</el-table-column>
			</el-table-column>
			<el-table-column label="销售收入" align="center">
				<el-table-column label="单位" prop="city2" align="center" width='80'>
					<template scope="scope">
						<template v-if="scope.row.num == 1 || scope.row.num == 2 || scope.row.num == 3">
							<div class="green" >
								{{scope.row.city2}}
							</div>
						</template>
						<template v-else-if="scope.row.num == 11 || scope.row.num == 10 || scope.row.num == 9">
							<div class="red">
								{{scope.row.city2}}
							</div>
						</template>
						<template v-else>
							{{scope.row.city2}}
						</template>
					</template>
				</el-table-column>
				<el-table-column label="201701-06" prop="sum20172" align="center" width='120'>
					<el-table-column label="（元）" prop="sum20172" align="center" width='120'>
						<template scope="scope">
							<number-format :format=format :strValue='scope.row.sum20172 '></number-format>
				    	</template>
					</el-table-column>
				</el-table-column>
				<el-table-column label="2016年累" prop="sum20162" align="center" width='120'>
					<el-table-column label="（元）" prop="sum20162" align="center" width='120'>
						<template scope="scope">
							<number-format :format=format :strValue='scope.row.sum20162 '></number-format>
				    	</template>
					</el-table-column>
				</el-table-column>
				<el-table-column label="同比" prop="percent2" align="center" width='130'>
					<el-table-column label="（%）" prop="percent2" align="center" width='130'>
						<template scope="scope">
							<div class="multi">
								<multi-content :rate=scope.row.percent2 :percentFlag=0></multi-content>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
			</el-table-column>
			<el-table-column label="单箱均价" align="center">
				<el-table-column label="单位" prop="city3" align="center" width='80'>
					<template scope="scope">
						<template v-if="scope.row.num == 1 || scope.row.num == 2 || scope.row.num == 3">
							<div class="green" >
								{{scope.row.city3}}
							</div>
						</template>
						<template v-else-if="scope.row.num == 11 || scope.row.num == 10 || scope.row.num == 9">
							<div class="red">
								{{scope.row.city3}}
							</div>
						</template>
						<template v-else>
							{{scope.row.city3}}
						</template>
					</template>
				</el-table-column>
				<el-table-column label="201701-06" prop="sum20173" align="center" width='120'>
					<el-table-column label="（万元）" prop="sum20173" align="center" width='120'>
					</el-table-column>
				</el-table-column>
				<el-table-column label="2016年累" prop="sum20163" align="center" width='120'>
					<el-table-column label="（万元）" prop="sum20163" align="center" width='120'>
					</el-table-column>
				</el-table-column>
				<el-table-column label="同比" prop="percent3" align="center" width='130'><br />
					<el-table-column label="（%）" prop="percent3" align="center" width='130'>
						<template scope="scope">
							<div class="multi">
								<multi-content :rate=scope.row.percent3 :percentFlag=0></multi-content>
							</div>
						</template>
					</el-table-column>
				</el-table-column>
			</el-table-column>
			<el-table-column label="年计划完成进度" align="center">
				<el-table-column label="单位" prop="city4" align="center" width='80'>
					<template scope="scope">
						<template v-if="scope.row.num == 1 || scope.row.num == 2 || scope.row.num == 3">
							<div class="green" >
								{{scope.row.city4}}
							</div>
						</template>
						<template v-else-if="scope.row.num == 11 || scope.row.num == 10 || scope.row.num == 9">
							<div class="red">
								{{scope.row.city4}}
							</div>
						</template>
						<template v-else>
							{{scope.row.city4}}
						</template>
					</template>
				</el-table-column>
				<el-table-column label="年计划" prop="plan" align="center" width='120'>
					<el-table-column label="（箱）" prop="plan" align="center" width='120'>
						<template scope="scope">
							<number-format :format=format :strValue='scope.row.plan'></number-format>
				    	</template>
					</el-table-column>
				</el-table-column>
				<el-table-column label="进度" prop="percent4" align="center" width='120' :formatter='formatter'>
					<el-table-column label="（%）" prop="percent4" align="center" width='120'>
					</el-table-column>
				</el-table-column>
			</el-table-column>
		</el-table>
		
		<el-table class="cma item-table table2 row-height-35" :data="tableData.data" height='auto' 
			row-class-name='rowClass' v-if='tableData.tableNumber=="2"'>
			<el-table-column label="指标项" prop="index" align="left">
			</el-table-column>
			<el-table-column label="得分" prop="score" align="center" width='100'>
			</el-table-column>
			<el-table-column label="指标值" prop="desired" align="center" width='100'>
			</el-table-column>
			<el-table-column label="标杆值" prop="target" align="center" width='100'>
			</el-table-column>
			<el-table-column label="权重" prop="weight" align="center" width='100'>
			</el-table-column>
		</el-table>
		
		<el-table class="cma item-table table21 row-height-35" :data="tableData.data" height='auto' 
			row-class-name='rowClass' v-if='tableData.tableNumber=="21"'>
			<el-table-column label="指标" prop="index" align="left" width='220'>
			</el-table-column>
			<el-table-column label="权重" prop="weight" align="center" width='100'>
			</el-table-column>
			<el-table-column label="规则标杆值" prop="rule" align="center" width='200'>
				<template scope="scope">
					<template v-if="scope.row.rule.value == '固定值' ">
						{{scope.row.rule.value}}：{{scope.row.rule.num}}
					</template>	
					<template v-else>
						{{scope.row.rule.value}}
					</template>	
				</template>	
				<!--<template scope="scope">
					<el-select v-model="scope.row.rule.value" placeholder="scope.row.rule.value" @change="hideInput(scope.row.rule.rowKey,scope.row.rule.value)"
						size="small" class="cma item-select select0" popper-class="cma-select" v-if="scope.row.rule.rowKey == 0">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
					<el-input v-model="scope.row.rule.num" class="cma item-input select0" placeholder="scope.row.rule.num" size="small" 
						v-if="scope.row.rule.rowKey == 0"></el-input>
					
					<el-select v-model="scope.row.rule.value" placeholder="scope.row.rule.value" @change="hideInput(scope.row.rule.rowKey,scope.row.rule.value)"
						size="small" class="cma item-select select1" popper-class="cma-select" v-if="scope.row.rule.rowKey == 1">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
					<el-input v-model="scope.row.rule.num" class="cma item-input select1" placeholder="scope.row.rule.num" size="small" 
						v-if="scope.row.rule.rowKey == 1"></el-input>
					
					<el-select v-model="scope.row.rule.value" placeholder="scope.row.rule.value" @change="hideInput(scope.row.rule.rowKey,scope.row.rule.value)"
						size="small" class="cma item-select select2" popper-class="cma-select" v-if="scope.row.rule.rowKey == 2">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
					<el-input v-model="scope.row.rule.num" class="cma item-input select2" placeholder="scope.row.rule.num" size="small" 
						v-if="scope.row.rule.rowKey == 2"></el-input>
					
					<el-select v-model="scope.row.rule.value" placeholder="scope.row.rule.value" @change="hideInput(scope.row.rule.rowKey,scope.row.rule.value)"
						size="small" class="cma item-select select3" popper-class="cma-select" v-if="scope.row.rule.rowKey == 3">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
					<el-input v-model="scope.row.rule.num" class="cma item-input select3" placeholder="scope.row.rule.num" size="small" 
						v-if="scope.row.rule.rowKey == 3"></el-input>
					
					<el-select v-model="scope.row.rule.value" placeholder="scope.row.rule.value" @change="hideInput(scope.row.rule.rowKey,scope.row.rule.value)"
						size="small" class="cma item-select select4" popper-class="cma-select" v-if="scope.row.rule.rowKey == 4">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
					<el-input v-model="scope.row.rule.num" class="cma item-input select4" placeholder="scope.row.rule.num" size="small" 
						v-if="scope.row.rule.rowKey == 4"></el-input>
					
					<el-select v-model="scope.row.rule.value" placeholder="scope.row.rule.value" @change="hideInput(scope.row.rule.rowKey,scope.row.rule.value)"
						size="small" class="cma item-select select5" popper-class="cma-select" v-if="scope.row.rule.rowKey == 5">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
					<el-input v-model="scope.row.rule.num" class="cma item-input select5" placeholder="scope.row.rule.num" size="small" 
						v-if="scope.row.rule.rowKey == 5"></el-input>
		    	</template>-->
			</el-table-column>
			<el-table-column label="规则描述" prop="desc" align="left">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import "static/css/extended/table.scss";
	import $ from 'static/js/jquery-vendor';
	import multiContent from 'components/multicontent/multicontent-extend.vue';
	import numberFormat from 'components/numberformat/number-format.vue'
	export default {
		props:{
			tableData:Object
		},
		data() {
			return{
				options:[
					{label: '全省最大值',value: '全省最大值'},
					{label: '固定值',value: '固定值'}
				],
				format:'to-thousand'
			}
		},
		components: {
			multiContent,
			numberFormat
		},
		methods:{
			formatter:function(row, column){
				return row.percent4 ;//+　"%";
			},
			hideInput:function(key,value){
				if(value=='固定值'){
					$(".item-select.select"+key).next('.item-input').show();
					$(".item-select.select"+key).css("width","1.1rem");
				}else{
					$(".item-select.select"+key).next('.item-input').hide();
					$(".item-select.select"+key).css("width","100%");
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.tableClass{
		.item-table{
			height: 2.5rem;
			.red {
				/*color: $red;*/
				background: #f22f01;
			}
			
			.green {
				/*color: $green;*/
				background: #0eb317;
			}
			
			.orange {
				color: $orange;
			}
			.rowClass td{
				height: 0.25rem;
			}
			.item-select{
				float: left;
			}
			.item-select.select4{
				width: 1.1rem;
			}
			.item-input{
				float: left;
				width: 0.45rem;
				margin-left: 0.1rem;
				display: none;
				input{
					height: 0.3rem;
				}
			}
			.item-input.select4{
				display:inline-block;
			}
		}
		.item-table.table1{
			height: 4.22rem;
			.multi{
				margin-left: 0.5rem;
			}
		}
		.item-table.table11{
			height: 5.37rem;
		}
		.item-table.table21{
			height: 2.5rem;
			width:12rem;
		}
	}
</style>