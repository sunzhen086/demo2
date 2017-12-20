<template>
	<div class="main">
		<box-base class="leftBox">
			<div slot="box-title">
				<p class="title">问题列表</p>
			</div>
			<div slot="box-extend" class="extend-height">
			</div>
			
			<div class="content">
				<el-table class="cma " :show-header=true :data="tableData" height="581"  @row-click="rowClick">
					<el-table-column  label="序号" align="center" :show-overflow-tooltip=true width="44">
						<template scope="scope">
							<div class="muti">{{scope.row.seq}}</div>
						</template>
					</el-table-column>
					
					<el-table-column  label="级别" align="center" :show-overflow-tooltip=true min-width="83">
						<template scope="scope">
							<div class="muti">{{scope.row.warnLevel}}</div>
						</template>
					</el-table-column>
					
					<el-table-column  label="类型" align="center" :show-overflow-tooltip=true min-width="82">
						<template scope="scope">
							<div class="muti">{{scope.row.warnType}}</div>
						</template>
					</el-table-column>
					
					<el-table-column  label="问题描述" header-align="center" align="left" min-width="110">
						<template scope="scope">
							<div class="muti">
								<wapContent :content=scope.row.warnDesc></wapContent>
							</div>
						</template>
					</el-table-column>
					
					<el-table-column  label="对应策略" header-align="center" align="left" min-width="245">
						<template scope="scope">
							<div class="muti">
								<wapContent :content=scope.row.warnReply></wapContent>
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
	import wapContent from '../../warncenterset/common/wapcontent.vue';
	
	export default {
		props:{
			tableData:Array
		},
		data() {
			return {
			}
		},
		components: {
			boxBase,
			wapContent
		},
		methods: {
			rowClick: function (row){
				this.$emit("clickRow",row);
			}
		},
		mounted() {
			this.$store.commit('setTopNavStatus', 'extended');
			this.$store.commit('setLeftNavStatus', 'warncenter');
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		font-size: 0.14rem;
		color:#fff;
		height: 100%;
		margin-left: 0rem;
		/*padding-left:0.15rem;
		padding-top: 0.15rem;*/
		.content{
			margin-top:0.1rem;
		}
	}
</style>