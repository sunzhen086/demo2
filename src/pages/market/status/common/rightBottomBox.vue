<template>
	<div>
		<box-base class="main">
			<div slot="box-title" class="title">
				<div class="topLeft">
					<span>{{boxData.title}}</span>
				</div>
			</div>
			
			<div class="content">
				<el-table class="cma elTable" style="width:100%" :data="boxData.tableData" height="260">
			        <el-table-column width="120" :prop="boxData.tableHeader[0].id" :label="boxData.tableHeader[0].name" 
			        	align='center' header-align='center'></el-table-column>
			        	
					<el-table-column width="95" :prop="boxData.tableHeader[1].id" :label="boxData.tableHeader[1].name" 
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
		
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import multiContent from 'components/multicontent/multicontent-extend.vue';

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
			boxBase,
			multiContent
		},
		methods:{
			
		}
	
	}
	
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	
	.main{
		height: 3.05rem;
		color: #2edbff;
		margin-top: 0.1rem;
		
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
				
				.multiContent {
					margin-left: 0.22rem;
				}
			}
		}
	}
</style>