<template>
	<div>
		<box-base class="main">
			<div slot="box-title">
				<p>{{boxData.title}}</p>
			</div>
			<div class="content">
				<div class="lb-top">
					<p>
						西安市5月份流失客户共
						<span class="orangeText" @click="showTable('table1')">
							399
						</span> 
						户，
					</p>
					<p>
						其中专卖注销
						<span class="orangeText" @click="showTable('table2')">
							130
						</span> 
						户（正常到期
						<span class="orangeText" @click="showTable('table3')">
							4
						</span> 
						户）
					</p>
					<p>
						其中高档位
						<span class="orangeText" @click="showTable('table4')">
							8
						</span> 
						户
					</p>
				</div>
				<div class="lb-middle">
				</div>
				<div class="lb-bottom">
					<p>
						预算减少销量
						<span class="orangeText" @click="showTable('table5')">
							152
						</span> 
						箱
					</p>
					<p>
						预算流失户单条值
						<span class="orangeText" @click="showTable('table6')">
							115
						</span> 
						元，全市单条值
						<span class="orangeText" @click="showTable('table7')">
							129
						</span> 
						元，
					</p>
					<p>
						提升了结构
					</p>
				</div>
			</div>
		</box-base>
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';

	export default {
		data() {
			return {
				boxData:{
					title:'西安市流失客户详细情况'
				}
			}
			
		},
		methods:{
			showTable: function(tableId){
				console.log("leftTop --- tableId="+tableId);
				this.$emit("changeTable",tableId);
			}
		},
		components: {
			boxBase
		},
	}
</script>

<style lang="scss" scoped>
	@import "../../../../../styles/variables.scss";
	
	.main{
		height: 2.1rem;
		margin-top: $box-distince;
		
		.content{
			margin-left: 0.11rem;
			margin-top: 0.2rem;
			font-size: 0.14rem;
			text-padding: 0.2rem;
			
			.lb-top{
				p{
					margin-top: 0.1rem;
				}
			}
			
			.lb-middle{
				
			}
			
			.lb-bottom{
				margin-top: 0.2rem;
				p{
					margin-top: 0.1rem;
				}
			}
			
			.orangeText {
				font-weight: bold;
				color: $orange;
				cursor:pointer;
			}
		}
	}
</style>
