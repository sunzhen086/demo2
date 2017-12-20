<template>
	<div ref="tableChart" class="tableChart">
		<el-table class="cma-extend" :show-header=false :data="tableData"  >
			<el-table-column align="right" :show-overflow-tooltip=true width="122">
				<template scope="scope">
					<div class="muti">
						{{scope.row.key1}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  align="left" :show-overflow-tooltip=true width="180">
				<template scope="scope">
					<div class="muti">
						<a href="javascript:void(0)" v-if="scope.row.key1 == '市局'" v-on:click="jumpToCom">{{scope.row.value1}}</a>
						<label v-if="scope.row.key1 != '市局'">{{scope.row.value1}}</label>
					</div>
				</template>
			</el-table-column>
			<el-table-column   align="right" :show-overflow-tooltip=true width="122">
				<template scope="scope">
					<div class="muti">
						{{scope.row.key2}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  align="left" :show-overflow-tooltip=true width="180">
				<template scope="scope">
					<div class="muti">
						{{scope.row.value2}}
					</div>
				</template>
			</el-table-column>
			<el-table-column  align="right" :show-overflow-tooltip=true width="122">
				<template scope="scope">
					<div class="muti">
						{{scope.row.key3}}
					</div>
				</template>
			</el-table-column>
			<el-table-column align="left" :show-overflow-tooltip=true width="180">
				<template scope="scope">
					<div class="muti">
						{{scope.row.value3}}
					</div>
				</template>
			</el-table-column>
			</el-table>
	</div>
	
</template>


<script>

	import echarts from 'echarts';
	import boxBase from 'components/box/box-base.vue';
	export default {
		props: {
			tableData: Array //这样可以指定传入的类型，如果类型不对，会警告
		},
		methods:{
			jumpToCom: function (){
				this.$router.push('/extended/comwiki');
			}
		}
	}
</script>

<style lang="scss" scoped>
	a {
		text-decoration: underline;
	}
	
	.tableChart{
		width: 100%;
		height: 100%;
		.muti{
			font-size: 14px;
			margin-left: -12px;
			margin-right: -12px;
		}
		
	}
</style>