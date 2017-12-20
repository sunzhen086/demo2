<template>
	<div class="tablePanel">
		<el-table id="ELTableTitle" class="cma row-height-35" :show-header=showHeader :data="tableTitle" height="35">
			<el-table-column prop="unit" label="工业" width="100" align='center' header-align='center'></el-table-column>
			<el-table-column prop="onway" label="在途量" align='center' header-align='center'></el-table-column>
			<el-table-column prop="cities" label="地市数" align='center' header-align='center'></el-table-column>
		</el-table>
		<div name="table" v-for="(data, index) in tableData" @mouseenter="stopTimer" @mouseleave="autoChangeTables">
			<el-table :id="'eltableInVend'+index" :class="{active:index==curTable}" class="cma ELTable row-height-35" :show-header=false :data="data" height="141">
				<el-table-column prop="unit" label="工业" width="100" align='center' header-align='center'>
					<template scope="scope">
			        		<table-link @on-click="showPopTable(scope.row.unit)">
			        			{{scope.row.unit}}
			        		</table-link>
					    </template>
				</el-table-column>
				<el-table-column prop="onway" label="在途量" align='center' header-align='center'></el-table-column>
				<el-table-column prop="cities" label="地市数" align='center' header-align='center'></el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
	import tableLink from 'components/tablelink/table-link.vue';
	
	export default {
		data() {
			return {
				showHeader: true,
				tableTitle: [],
				tableData: [
					[{
						unit: '浙江中烟',
						onway: '50',
						cities: '6',
					},{
						unit: '陕西中烟',
						onway: '45',
						cities: '3',
					},{
						unit: '云南中烟',
						onway: '40',
						cities: '5',
					},{
						unit: '山东中烟',
						onway: '30',
						cities: '2',
					}],
					[{
						unit: '四川中烟',
						onway: '25',
						cities: '7',
					},{
						unit: '吉林中烟',
						onway: '15',
						cities: '4',
					},{
						unit: '福建中烟',
						onway: '10',
						cities: '5'
					},{
						unit: '广西中烟',
						onway: '5',
						cities: '2'
					}]
				],
				curTable: 0,
				preId: 'eltableInVend'
			}
		},
		components: {
			tableLink
		},
		methods: {
			autoChangeTables: function() {
				var that = this;
				var tablesNum = that.tableData.length;
				var timer = that.timer = setInterval(function() {
					if(that.curTable == tablesNum-1) {
						that.curTable = 0;
					} else {
						that.curTable++;
					}
				}, 3000);
			},
			stopTimer: function() {
				clearInterval(this.timer);
			},
			showPopTable: function(unit) {
				this.$emit('showPopTable',unit);
			}
		},
		mounted() {
			this.autoChangeTables();
		},
		beforeDestroy() {
			clearInterval(this.timer);
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.tablePanel {
		width: 3rem;
		height: 1.76rem;
		
		.ELTable {
			position: absolute;
			z-index: 0;
			opacity: 0;
			transition: all 0.5s linear;
		}
		.active {
			z-index: 1;
			opacity: 1;
		}
	}
</style>