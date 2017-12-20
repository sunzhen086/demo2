<template>
	<div>
		<box-base class="main">
			<div slot="box-title" class="title">
				<div class="topLeft">
					<span>{{boxData.title}}</span>
				</div>
				
				<div class="topRight" v-if="boxData.rightTopFlag">
					<!--<i class="fa fa-info-circle" aria-hidden="true" v-popover:popover4></i>-->
					<el-popover popper-class="cma" ref="topRightPopover" placement="left-start" width="360" trigger="hover" >
						<span style="font-size:16px">{{boxData.info}}</span>
					</el-popover>
					<el-button class="fa fa-info-circle" size="mini" v-popover:topRightPopover></el-button>
					
				</div>
			</div>
			
			<div class="content">
				<el-table class="cma elTable" style="width:100%" :data="boxData.tableData" height="260">
			        <el-table-column width="116" :prop="boxData.tableHeader[0].id" :label="boxData.tableHeader[0].name" 
			        	align='center' header-align='center'>
			        	<template scope="scope">
					        <el-button type="primary" size="small" @click="showLineChart(scope.$index)">{{scope.row.typeName}}</el-button>
					    </template>
			        </el-table-column>
			        	
					<el-table-column width="100" :prop="boxData.tableHeader[1].id" :label="boxData.tableHeader[1].name" 
						align='center' header-align='center'></el-table-column>
					<el-table-column width="140" :prop="boxData.tableHeader[2].id" :label="boxData.tableHeader[2].name" 
						align='center' header-align='center'></el-table-column>
					<el-table-column width="100" :prop="boxData.tableHeader[3].id" :label="boxData.tableHeader[3].name" 
						align='center' header-align='center'></el-table-column>
				</el-table>
			</div>
			
		</box-base>
		
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';

	export default {
		props: {
			boxData: Object
		
		},
		data() {
			return {
				
			}
			
		},
		mounted() {
			
		},
		components: {
			boxBase
		},
		methods:{
			showLineChart: function(index){
				alert("点击"+index);
			}
		}
	
	}
	
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	
	.main{
		height: 3.05rem;
		color: #2edbff;
		
		.title{	
			width: 4.32rem;
					
			.topLeft{
				float: left;
			}
			
			.topRight{
				float: right;
				color: #2edbff;
				font-size: 0.14rem;
				
			}
		}
		
		.content{
			
			.elTable {
				margin-top: 0.1rem;
				margin-left: 0rem;
			}
		}
	}
</style>