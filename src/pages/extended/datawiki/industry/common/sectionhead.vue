<template>
	<div class="main">
		<div class="top">
			<div class="topLeft">
			</div>
			<div class="topMidd">
				{{chartData.com}}
			</div>
			<div class="topRight">
			</div>
			<div class="prinBtn">
				<print-btn></print-btn>
		</div>
		</div>
		<div>
			<img src="../../../../../static/img/extended/datawiki/industry/industry.png" style="width:9.5rem"/>
		</div>
		
	
	</div>
	
</template>

<script>
	import printBtn from 'components/printbutton/print-btn.vue';
	
	export default {
		components: {
			printBtn
		},
		data() {
			return {
				chartData:{
					com: '陕西中烟工业有限责任公司'
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		height: 3rem;
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
				font-size:24px;
				font-weight: bold;
				float:left;
				line-height:76px;
				color: white;
				/*color:rgb(47,149,253);*/
				margin-left: -18px;
			}
			.topRight{
				width:330px;
				height:76px;
				float:left;
				background:url(../../../../../static/img/extended/datawiki/cust/t2.png) no-repeat bottom right;
				margin-left: 20px;
			}
			.prinBtn{
				float:right;
				margin-bottom:0.1rem ;
				margin-top: 0.5rem;
			}
		}
	}
</style>