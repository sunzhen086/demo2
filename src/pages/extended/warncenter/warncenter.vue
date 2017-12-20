<template>
	<div class="main cma">
		<div class="main-top">
			<div class="title">
				<span class="icon"></span>
				<span class="span">预警中心</span>
			</div>
			<top></top>
		</div>
		<div class="main-body">
			<div class="left-part left">
				<left @show-table="showTable"></left>
			</div>
			<div class="right-part left">
				<right v-if="!tableShow"></right>
				<rightTable v-if="tableShow"></rightTable>
			</div>
		</div>
	</div>
</template>

<script>
	import top from './common/top.vue';
	import left from './common/left.vue';
	import right from './common/right.vue';
	import rightTable from './common/rightTable.vue';

	export default {
		data() {
			return {
				tableShow: false
			}

		},
		methods: {
			showTable: function(param) {
				this.tableShow = !this.tableShow;
			}
		},
		components: {
			top,
			left,
			right,
			rightTable
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'extended');
			this.$store.commit('setLeftNavStatus', 'warncenter');
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../styles/variables.scss";
	.main {
		margin-left: $box-distince;
		font-size: 0.14rem;
		color: white;
		height: 100%;
		overflow: hidden;
		margin-top: 0.01rem;
		
		.main-top {
			.title{
				float: left;
				overflow: hidden;
				
				.icon{
					float: left;
					width: 0.21rem;
					height: 0.21rem;
					margin-top: 0.22rem;
					background: url('../../../static/img/extended/warncenter/title.png')no-repeat;
				}
						
				.span{
					float: left;
					font-size: 0.18rem;
					color: #01e9f7;
					margin-top: 0.23rem;
					margin-left: 0.05rem;
					margin-right: 0.5rem;
				}
			}
			
		}
		
		.main-body {
			float: left;
			overflow: hidden;
			.left-part {
				width: 5.33rem;
			}
			.right-part {
				width: 7.8rem;
				margin-left: $box-distince;
			}
		}
		.left {
			float: left;
		}
	}
</style>