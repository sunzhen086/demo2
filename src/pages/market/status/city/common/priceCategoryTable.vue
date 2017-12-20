<template>
	<div>
		<el-table ref="table" class="cma elTable" :data="tableData" highlight-current-row @row-click="rowOnClick" height="320" style="width: 96%">
			<el-table-column label="价类" align='center' header-align='center'>
				<template scope="scope">
					<table-link>
						<slot>{{scope.row.index}}</slot>
					</table-link>
				</template>
			</el-table-column>
			<el-table-column prop="value" label="价格指数" align='center' header-align='center'></el-table-column>
			<el-table-column label="环比增减" align='center' header-align='center'>
				<template scope="scope">
					<div v-if="scope.row.lastInc  > 0" class="green">
						<i class="fa fa-arrow-up"></i>
						<span style="margin-left: 10px">{{ scope.row.lastInc }}</span>
					</div>
					<div v-else-if="scope.row.lastInc  < 0" class="red">
						<i class="fa fa-arrow-down"></i>
						<span style="margin-left: 5px">{{ scope.row.lastInc }}</span>
					</div>
					<div v-else>
						<span style="margin-left: 5px">{{ scope.row.lastInc }}</span>
					</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>

	import tableLink from 'components/tablelink/table-link.vue';
	
	export default {
		data() {
				return {
					tableData: [{
						index: '第一品类',
						value: 96.59,
						lastInc: 0.28
					}, {
						index: '第二品类',
						value: 95.23,
						lastInc: -0.24
					}, {
						index: '第三品类',
						value: 95.24,
						lastInc: 0.12
					}, {
						index: '第四品类',
						value: 96.12,
						lastInc: 0.23
					}, {
						index: '第五品类',
						value: 95.23,
						lastInc: 0.25
					}, {
						index: '第六品类',
						value: 95.23,
						lastInc: 0.25
					}, {
						index: '第七品类',
						value: 95.23,
						lastInc: 0.25
					}, {
						index: '第八品类',
						value: 95.23,
						lastInc: 0.25
					}, {
						index: '第九品类',
						value: 95.23,
						lastInc: 0.25
					}, {
						index: '第十品类',
						value: 95.23,
						lastInc: 0.25
					}, {
						index: '第十一品类',
						value: 95.23,
						lastInc: 0.25
					}, {
						index: '第十二品类',
						value: 95.23,
						lastInc: 0.25
					}, {
						index: '雪茄烟品类',
						value: 95.23,
						lastInc: 0.25
					}, {
						index: '罚没烟品类',
						value: 95.23,
						lastInc: 0.25
					}, {
						index: '进口烟品类',
						value: 95.23,
						lastInc: 0.25
					}]
				}

			},
			components: {
				tableLink
			},
			methods: {
				rowOnClick: function(row) {
					this.$emit("table-row-select", row.index);
				}
			},
			mounted() {
				if(this.tableData.length > 0) {
					this.$refs.table.setCurrentRow(this.tableData[0]);
					this.$emit("table-row-select", this.tableData[0].index);
				}
			}
	}
</script>
<style lang="scss" scoped>
	@import "../../../../../styles/variables.scss";
	.green {
		color: $green;
	}
	
	.red {
		color: $red;
	}
</style>