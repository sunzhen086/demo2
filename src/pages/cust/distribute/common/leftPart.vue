<template>
	<box-base class="main-left">
		<div slot="box-title">
			<p class="title">各地市订货户数情况</p>
		</div>
		<div slot="box-extend">
			<div class="changeBtn">
				<div @click="showTable" class="tableBtn Btn" v-bind:class="{'active':tableShow}"></div>
			</div>
		</div>
		<div class="content">
			<div class="mapChartDiv left">
				<div class="note">
					<div><span class="green">{{changedata[0]}}</span>家单位订货户数同比增长</div>
					<div style="margin-top: 0.1rem;"><span class="red">{{changedata[1]}}</span>家单位订货户数同比下降</div>
				</div>
				<leftMapChart></leftMapChart>
			</div>
			<div class="barChartDiv right">
				<leftBarChart></leftBarChart>
			</div>
			<div class="pieChartDiv">
				<div class="col col1">
					<div class="col-title">按业态订货户数占比</div>
					<leftPieChart :chart-data="pieChart[0]" class="pieChart"></leftPieChart>
				</div>
				<div class="col col2">
					<div class="col-title">按规模订货户数占比</div>
					<leftPieChart :chart-data="pieChart[1]" class="pieChart"></leftPieChart>
				</div>
				<div class="col col3">
					<div class="col-title">按市场类型订货户数占比</div>
					<leftPieChart :chart-data="pieChart[2]" class="pieChart"></leftPieChart>
				</div>
			</div>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import leftMapChart from './leftMapChart.vue';
	import leftBarChart from './leftBarChart.vue';
	import leftPieChart from './leftPieChart.vue';
	export default {
		data() {
			return {
				tableShow:false,
				changedata:[8,3],
				pieChart: [
					{text:'按业态订货户数占比',data:[{name:'食杂店',value:69.06},{name:'便利店',value:17.59},{name:'娱乐服务',value:0.73},{name:'商场',value:0.13},{name:'其他',value:1.47},{name:'超市',value:2.01},{name:'烟酒商店',value:9.01}]},
					{text:'按规模订货户数占比',data:[{name:'大规模',value:20},{name:'中规模',value:60},{name:'小规模',value:20}]},
					{text:'按市场类型订货户数占比',data:[{name:'城镇',value:51.69},{name:'乡村',value:48.31}]}
				]
			}
			
		},
		components: {
			boxBase,
			leftMapChart,
			leftBarChart,
			leftPieChart
		},
		methods:{
			showTable:function(event){
				this.tableShow = !this.tableShow;
				this.$emit('show-table','');
			}
		}
	
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.main-left{
		padding-top:0.1rem;
		.dn{
			display:none;
		}
		.changeBtn{
			.Btn{
				float:right;
				margin-right: 0rem;
				width: 0.33rem;
				height: 0.28rem;
				cursor: pointer;
			}
			.tableBtn{
				background: url(../../../../static/img/cust/distribute/tableBtn.png);
			}
			.tableBtn:hover{
				background: url(../../../../static/img/cust/distribute/tableBtnHover.png);
			}
			.tableBtn.active{
				background: url(../../../../static/img/cust/distribute/tableBtnHover.png);
			}
		}
		.content{
			position:relative;
			overflow:hidden;
			margin-top:0.05rem;
			.left{
				float: left;
			}
			.right{
				float: right;
			}
			.mapChartDiv{
				width:3rem;
				.note{
					background-color: rgb(36,62,136);
					margin-left: 0.2rem;
					font-size: 0.14rem;
					line-height: 0.2rem;
					padding:0.10rem;
					position:absolute;
					span{
						font-size: 0.2rem;
						font-weight: bold;
						margin: 0 0.05rem 0 0.01rem;
					}
					.red{
						color: $red;
					}
					.green{
						color: $green;
					}
					.orange{
						color: $orange;
					}
				}
			}
			.barChartDiv{
				width: 2rem;
				position: relative;
			}
			.pieChartDiv{
				.col{
					float: left;
					width: 1.55rem;
					margin-top: 0.06rem;
					color: #fff;/*#2edbff*/;
					text-align: center;
				}
				.col1{
					margin-left: 0.15rem;
				}
				.col2{
					margin-left: 0.08rem;
				}
				.col3{
					margin-left: 0.14rem;
				}
				.pieChart{
					margin: auto;
					margin-top: 0.1rem;
				}
			}
		}
	}
</style>