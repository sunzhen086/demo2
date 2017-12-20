<template>
	<box-base class="rightBox">
		<div slot="box-title">
			<p class="title">全国{{tableData.name}}排名</p>
		</div>
		<div class="content">
			<el-table class="cma item-table" :data="tableData.data" height='auto'>
				<el-table-column label="名次" type="index" align="center" width='80'>
				</el-table-column>
				<el-table-column label="省市" prop="name" align="center" width='80'>
				</el-table-column>
				<el-table-column label="同比" align='left'>
					<template scope="scope">
						<div class="muti">
							<multi-content :rate=scope.row.value ></multi-content>
						</div>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</box-base>
</template>

<script>
	import multiContent from 'components/multicontent/multicontent-extend.vue';
	import boxBase from 'components/box/box-base.vue';
	export default {
		props:{
			tableData:Object
		},
		data() {
			return{
				
			}
		},
		components: {
			multiContent,
			boxBase
		},
		methods:{
			formatter:function(row, column) {
		    	return row.value + "%";
		    },
		}
	}
</script>

<style lang="scss" scoped>
	.rightBox{
		height: 6.2rem;
		.content{
			margin-top:0.2rem;
			.item-table{
				height: 5.6rem;
				.muti {
					margin-left:0rem;
					.multicontent{
						.main-content{
							
						}
					} 
				}
			}
		}
	}
</style>