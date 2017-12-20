<template>
	<box-base class="leftBox">
		<div slot="box-title">
			<p class="title">西安月度排名对比</p>
		</div>
		<div class="content">
			<barChart></barChart>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import barChart from './barChart.vue';
	export default {
		data() {
			return {
				tableData:{}
			}
		},
		components: {
			boxBase,
			barChart
		},
		methods: {
	
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.leftBox {
		margin-top:$box-distince;
		height:3rem;
		.extend-class{
			
		}
		.red {
			color: $red;
		}
		
		.green {
			color: $green;
		}
		
		.orange {
			color: $orange;
		}
	}
</style>