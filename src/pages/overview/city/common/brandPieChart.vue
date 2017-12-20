<template>
	<box-base class="rightBox">
		<div slot="box-title">
			<p class="title" v-on:click="goto()">价区分布</p>
		</div>
		<div slot="box-extend">

		</div>

		<div class="content" >
			<div ref="piechart" class="piechart"></div>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import echarts from 'echarts';
	export default {
		computed: {
			datas: function() {
				var d1 = [{
					name: '超一类',
					value: this.random(30, 50, 0)
				}, {
					name: '高一类',
					value: this.random(0, 10, 0)
				}, {
					name: '中一类',
					value: this.random(40, 60, 0)
				}, {
					name: '普一类',
					value: this.random(60, 80, 0)
				}, {
					name: '二类',
					value: this.random(60, 80, 0)
				}, {
					name: '高三类',
					value: this.random(30, 60, 0)
				}, {
					name: '普三类',
					value: this.random(20, 40, 0)
				}, {
					name: '四类',
					value: this.random(10, 30, 0)
				}, {
					name: '五类',
					value: this.random(0, 20, 0)
				}];
				var d2 = [{
					name: '一类',
					value: d1[0].value * 1 + d1[1].value * 1 + d1[2].value * 1 + d1[3].value * 1
				}, {
					name: '二类',
					value: d1[4].value
				}, {
					name: '三类',
					value: d1[5].value * 1 + d1[6].value * 1
				}, {
					name: '四类',
					value: d1[7].value
				}, {
					name: '五类',
					value: d1[8].value
				}];
				return [d2, d1];
			}
		},
		data() {
			return {
				colors: [
					['rgb(35,239,190)', 'rgb(0,94,254)', 'rgb(28,217,255)',
						'rgb(93,159,193)', 'rgb(84,100,113)'
					],
					['rgb(255,255,255)', 'rgb(145,199,174)', 'rgb(202,134,33)',
						'rgb(116,159,132)', 'rgb(0,94,254)', 'rgb(12,63,158)',
						'rgb(11,168,237)', 'rgb(93,159,193)', 'rgb(84,100,113)'
					]
				]
			}
		},
		methods: {
			goto:function(){
				this.$router.push({path:'/brand/constitute'});
			},
			draw: function() {
				var datas = this.datas;
				for(var i = 0; i < datas.length; i++) {
					for(var k = 0; k < datas[i].length; k++) {
						datas[i][k]['itemStyle'] = {
							'normal': {
								'color': this.colors[i][k]
							}
						}
					}
				}

				var option = {
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b}: {c} ({d}%)"
					},
					grid: {
						bottom: 25
					},
					legend: {
						show: false
					},
					series: [{
							name: '价类',
							type: 'pie',
							selectedMode: 'single',
							radius: [0, '46%'],
							label: {
								normal: {
									position: 'inner'
								}
							},
							labelLine: {
								normal: {
									show: false
								}
							},
							data: datas[0]
						},
						{
							name: '价类',
							type: 'pie',
							selectedMode: 'single',
							radius: ['58%', '70%'],

							label: {
								normal: {
									textStyle: {
										color: '#fff'
									}
								}
							},
							labelLine: {
								normal: {
									lineStyle: {
										//color:'#fff'
									}
								}
							},
							data: datas[1]
						}
					]
				};
				let chart = this.chart = echarts.init(this.$refs.piechart);
				chart.setOption(option);
			}
		},
		components: {
			boxBase
		},
		mounted() {
			this.draw();
		},
		beforeDestroy() {
			this.chart.dispose();
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../../../styles/variables.scss';
	.rightBox{
		margin-top:$box-distince;
		margin-left:$box-distince;
		.title{
			cursor: pointer;
		}
		.content{
			.piechart {
				height: 1.8rem;
				width: 4.2rem;
			}
		}
	}
</style>