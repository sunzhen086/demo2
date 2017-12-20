<template>
	<box-base class="rightBox">
		<div slot="box-title">
			<p class="title">综合评价规则</p>
		</div>
		<div class="content">
			<tablePart :tableData="tableData"></tablePart>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tablePart from './tablePart.vue';
	export default {
		data() {
			return {
				tableData:{
					tableNumber:'1',
					data:[
		                {name: '西藏',value: 1.04 },
		                {name: '广东',value: 0.68 },
		                {name: '贵州',value: 0.20 },
		                {name: '海南',value: 0.10 },
		                {name: '云南',value: -1.16 },
		                {name: '甘肃',value: -1.86 },
		                {name: '黑龙江',value: -2.11 },
		                {name: '上海',value: -2.44 },
		                {name: '深圳',value: -2.55 },
		                {name: '福建',value: -2.66 },
		                {name: '江苏',value: -3.31 },
		                {name: '广西',value: -3.31 },
		                {name: '重庆',value: -3.39 },
		                {name: '浙江',value: -3.66 },
		                {name: '宁夏',value: -4.43 },
		                {name: '四川',value: -4.81 },
		                {name: '内蒙古',value: -5.08 },
		                {name: '陕西',value: -5.74 },
		                {name: '湖南',value: -5.98 },
		                {name: '青海',value: -6.60 },
		                {name: '河北',value: -7.32 },
		                {name: '河南',value: -7.44 },
		                {name: '新疆',value: -7.80 },
		                {name: '山东',value: -7.98 },
		                {name: '吉林',value: -8.91 },
		                {name: '北京',value: -9.13 },
		                {name: '安徽',value: -9.33 },
		                {name: '湖北',value: -9.73 },
		                {name: '辽宁',value: -11.86 },
		                {name: '山西',value: -11.98 },
		                {name: '大连',value: -12.18 },
		                {name: '天津',value: -12.69 },
		                {name: '江西',value: -13.60 },
					]
				}
			}
		},
		components: {
			boxBase,
			tablePart
		},
		methods: {
	
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../../styles/variables.scss";
	.rightBox {
		height:3rem;
		margin-top:$box-distince;
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