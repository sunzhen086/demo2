<template>
	<div class="main">
		<div class="top">
			<div class="topLeft">
			</div>
			<div class="topMidd">
				{{chartData.custName}}
			</div>
			<div class="topRight">
			</div>
			<div class="prinBtn">
				<print-btn></print-btn>
			</div>
		</div>
		<box-base style="height: 2.30rem;">
			<div class="leftContent"></div>
			<div class="rightContent">
				<table class="table-class">
					<tr>
						<td align="right">负责人</td><td align="left">{{chartData.manger}}</td>
					</tr>
					<tr>
						<td align="right">专卖许可证</td><td align="left">{{chartData.lienceCde}}</td>
					</tr>
					<tr>
						<td align="right">经营地址</td><td align="left">{{chartData.address}}</td>
					</tr>
					<tr>
						<td align="right">所属公司</td><td align="left"><a href="javascript:void(0)" v-on:click="jumpToCom">{{chartData.com}}</a></td>
					</tr>
				</table>
			</div>
		</box-base>
	
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import printBtn from 'components/printbutton/print-btn.vue';

	
	export default {
		data() {
			return {
				chartData:{
					custName:'西安市长安区中惠商店',
					manger: '张建学',
					lienceCde: '610122103126',
					address: '长安区东大街道东大正街',
					com: '西安市烟草专卖局（市公司）'
				}
			}
		},
		methods:{
			jumpToCom: function (){
				this.$router.push('/extended/comwiki');
			}
		},
		components: {
			boxBase,
			printBtn
		}
		
	}
</script>

<style lang="scss" scoped>
	a {
		text-decoration: underline;
	}
	.main{
		height: 3.3rem;
		width: 9.5rem;
		margin-bottom: 0.1rem;
		.top{
			//margin-bottom: 0.25rem;
			overflow:hidden;
			.topLeft{
				width:64px;
				height:76px;
				float:left;
				background:url(../../../../../static/img/extended/datawiki/cust/t1.png) no-repeat top left;
			}
			.topMidd{
				height:76px;
				color: white;
				/*color:#2edbff;*/
				font-size:24px;
				font-weight: 700;
				float:left;
				line-height:76px;
				margin-left: -18px;
			}
			.topRight{
				width:330px;
				height:76px;
				float:left;
				background:url(../../../../../static/img/extended/datawiki/cust/t2.png) no-repeat bottom right;
				margin-left:20px;
			}
			
		}
		.leftContent{
			width: 2.40rem;
			height: 1.86rem;
			margin-left: 0.15rem;
			margin-top: 0.1rem;
			float:left;
			background: url(../../../../../static/img/extended/datawiki/cust/bg2.png);
		}
		.rightContent{
			margin-top: 0.3rem;
			margin-left:0.6rem ;
			float: left;
			.table-class{
				font-size: 0.16rem;
				td{
					padding: 0.1rem;
				}
			}
		}
		.prinBtn{
			float:right;
			margin-bottom:0.1rem ;
			margin-top: 0.5rem;
		}
	}
</style>