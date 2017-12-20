<template>
	<box-base class="rightBox">
		<div slot="box-title">
			<p class="title">西安市月度排名</p>
		</div>
		<div class="content">
			<pictorialBar></pictorialBar>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import lineChart from './lineChart.vue';
	import pictorialBar from './pictorialBar.vue';
	export default {
		data() {
			return {
				tableData:{}
			}
		},
		components: {
			boxBase,
			lineChart,
			pictorialBar
		},
		methods: {
	
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.rightBox {
		margin-top:$box-distince;
		height:2.25rem;
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