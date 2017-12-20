<template>
	<box-base class="rightBoxBase">
		<div slot="box-title">
			<p class="title" v-on:click="goto()">市场状态</p>
		</div>
		<div class="content">
			<div class="status-row rowHeader">
				<div class="status-col col1">{{tableData.rowHeader[0]}}</div>
				<div class="status-col col2">{{tableData.rowHeader[1]}}</div>
				<div class="status-col col3">{{tableData.rowHeader[2]}}</div>
				<div class="status-col col4">{{tableData.rowHeader[3]}}</div>
			</div>
			<div class="status-row row1">
				<div class="status-col col1">
					{{tableData.row1.col1.value}}
				</div>
				<div class="status-col col2 background">
					<multi-content :content=tableData.row1.col2.value :rate=tableData.row1.col2.change :percentFlag=0>
					</multi-content>
				</div>
				<div class="status-col col3 background">
					<multi-content :content=tableData.row1.col3.value :rate=tableData.row1.col3.change :percentFlag=0>
					</multi-content>
				</div>
				<div class="status-col col4 background">
					<multi-content :content=tableData.row1.col4.value :rate=tableData.row1.col4.change :percentFlag=0>
					</multi-content>
				</div>
			</div>
			<div class="status-row row2">
				<div class="status-col col1">
					{{tableData.row2.col1.value}}
				</div>
				<div class="status-col col2 background">
					<multi-content :content=tableData.row2.col2.value :rate=tableData.row2.col2.change :percentFlag=0>
					</multi-content>
				</div>
				<div class="status-col col3 background">
					<multi-content :content=tableData.row2.col3.value :rate=tableData.row2.col3.change :percentFlag=0>
					</multi-content>
				</div>
				<div class="status-col col4 background">
					<multi-content :content=tableData.row2.col4.value :rate=tableData.row2.col4.change :percentFlag=0>
					</multi-content>
				</div>
			</div>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import multiContent from './multicontent.vue';
	
	export default {
		data() {
			return {
				tableData: {
					rowHeader:['','价格指数','社会库存','存销比'],
					row1:{
						col1:{value:'西安',change:''},
						col2:{value:'95.75',change:0.1},
						col3:{value:'3.26',change:-0.02},
						col4:{value:'1.23',change:-0.21},
					},
					row2:{
						col1:{value:'全省',change:''},
						col2:{value:'94.94',change:-0.3},
						col3:{value:'7.26',change:-0.35},
						col4:{value:'1.36',change:0.36},
					},
				}
			}
		},
		components: {
			boxBase,
			multiContent
		},
		methods: {
			goto:function(){
				this.$router.push({path:'/market/statuscity?cityId=西安市'});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.rightBoxBase{
		margin-left:$box-distince;
		height: 1.8rem;
		.title{
			cursor: pointer;
		}
		.content{
			padding-top:0rem;
			.status-row{
				font-size:0.16rem;
				overflow: hidden;
				padding-top: 0.08rem;
				padding-bottom: 0.1rem;
				.status-col{
					float: left;
					margin-left: 0.12rem;
					padding-left:0.05rem;
					padding-top: 0.1rem;
					padding-bottom: 0.05rem;
					width:1rem;
				}
				.background{
					background: #0e2c68;
				}
				.col1{
					width:0.35rem;
					color:rgb(0,232,246)
				}
			}
			.rowHeader{
				text-align: center;
			}
		}
	}
</style>