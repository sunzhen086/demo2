<template>
	<div class="main cma">
		<div class="topBar">
			<topBar></topBar>
		</div>
		<div class="content">
			<chinaMap :popTableData='popTableData'></chinaMap>
		</div>
	</div>
</template>

<script>
	import topBar from './common/topBar.vue';
	import chinaMap from './common/chinaMap.vue';
	
	export default {
		data() {
			return {
				popTableData: {
					title: {
						'浙江中烟': '浙江中烟在途商品信息',
						'四川中烟': '四川中烟在途商品信息'
					},
					data: {
						'浙江中烟': [
							{
								'index': 1,
								'com': '西安',
								'item': '利群(薄荷)',
								'onway': 10,
								'dayavg': 120,
								'predictdays': 12
							},
							{
								'index': 2,
								'com': '西安',
								'item': '利群(江南忆)',
								'onway': 5,
								'dayavg': 80,
								'predictdays': 6
							},
							{
								'index': 3,
								'com': '汉中',
								'item': '利群(神州)',
								'onway': 5,
								'dayavg': 60,
								'predictdays': 8
							},
							{
								'index': 4,
								'com': '咸阳',
								'item': '利群(逍遥)',
								'onway': 10,
								'dayavg': 50,
								'predictdays': 10
							},
							{
								'index': 5,
								'com': '延安',
								'item': '利群(喜庆)',
								'onway': 5,
								'dayavg': 70,
								'predictdays': 7
							},
							{
								'index': 6,
								'com': '商洛',
								'item': '利群(环球阳光)',
								'onway': 5,
								'dayavg': 90,
								'predictdays': 9
							},
							{
								'index': 7,
								'com': '宝鸡',
								'item': '利群(金色阳光)',
								'onway': 5,
								'dayavg': 50,
								'predictdays': 6
							},
							{
								'index': 8,
								'com': '宝鸡',
								'item': '利群(软金色阳光)',
								'onway': 5,
								'dayavg': 60,
								'predictdays': 8
							}
						],
						'四川中烟': [
							{
								'index': 1,
								'com': '西安',
								'item': '娇子(锦绣)',
								'onway': 5,
								'dayavg': 60,
								'predictdays': 7
							},
							{
								'index': 2,
								'com': '咸阳',
								'item': '娇子(软)',
								'onway': 5,
								'dayavg': 30,
								'predictdays': 6
							},
							{
								'index': 3,
								'com': '延安',
								'item': '娇子(天之娇子)',
								'onway': 5,
								'dayavg': 20,
								'predictdays': 7
							},
							{
								'index': 4,
								'com': '宝鸡',
								'item': '娇子(蓝时代)',
								'onway': 5,
								'dayavg': 30,
								'predictdays': 6
							},
							{
								'index': 5,
								'com': '汉中',
								'item': '娇子(九寨沟)',
								'onway': 5,
								'dayavg': 10,
								'predictdays': 8
							}
						]
					}
				}
			}
		},
		components: {
			topBar,
			chinaMap
		},
		methods: {
			
		},
		mounted() {
			this.$store.commit('setTopNavStatus', 'overview');
			this.$store.commit('setLeftNavStatus', 'vend');
		}
	}
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

	.main{
		height: 6.7rem;
		color: white;
		
		.topBar {
			height: 0.55rem;
			margin-left: $box-distince;
		}
		
		.content {
			height: 6.15rem;
		}
	}
</style>