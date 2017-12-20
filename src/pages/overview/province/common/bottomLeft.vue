<template>
	<div class="leftPanel">
		<box-base class="leftBoxBase">
			<div class="boxBaseTop">
				<tab-base :option=paneOption @tab-click="tabClick"></tab-base>
			</div>
			<div slot="box-extend">
				<detail-btn @on-click="showhideTable"></detail-btn>
			</div>
			
			<div class="bottomMap">
				<div class="leftLegend">
					<div class="leftTop">
						<p><span class="spanGreen">{{sale.up}}</span> 家单位销售同比增长</p>
						<p><span class="spanRed">{{sale.down}}</span> 家单位销售同比下降</p>
					</div>
				</div>
				<div class="rightMap">
					<shanxiMap></shanxiMap>
				</div>
			</div>
		</box-base>
	</div>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tabBase from 'components/tab/tab-base.vue';
	import shanxiMap from './shanxiMap.vue';
	import multiContent from 'components/multicontent/multicontent.vue';
	import detailBtn from 'components/detailbutton/detail-button.vue';
	
	export default {
		data() {
			return {
				sale: {
					'up': 8,
					'down': 3
				},
				paneOption: {
					data:[
						{
							key: 'tab1',
							text: '销量增长率'
						},
						{
							key: 'tab2',
							text: '销量'
						},
						{
							key: 'tab3',
							text: '单箱值'
						}
					],
					activePane:'tab1'
				}
			}
		},
		components: {
			boxBase,
			tabBase,
			shanxiMap,
			multiContent,
			detailBtn
		},
		methods: {
			tabClick:function(curTab){
				console.log(curTab);
			},
			showhideTable: function() {
				this.$emit('show-table-btn-click');
			}
		},
		mounted() {
				
		}
	}
</script>

<style lang="scss" scoped>
@import '../../../../styles/variables.scss';

	.leftPanel {
		float: left;
		position: relative;
		
		.leftBoxBase {
			width: 4.92rem;
			height: 4.2rem;
			
			.boxBaseTop {
				width: 4rem;
				height: 0.2rem;
				position: absolute;
				top: 0.1rem;
				left: 0.12rem;
			}
			
			.bottomMap {
				width: 4.8rem;
				height: 3.7rem;
				margin-left: 0.12rem;
				margin-top: 0.3rem;
				
				.leftLegend {
					width: 2.4rem;
					height: 1.5rem;
					position: absolute;
					left: 0.12rem;
					top: 0.45rem;
					
					.leftTop {
						width: 1.50rem;
						height: 0.45rem;
						padding: 0.1rem 0.15rem;
						line-height: 0.22rem;
						text-align: center;
						background-color: #263E84;
						
						p {
							color: white;
							
							.spanRed {
								color: $red;
								font-weight: bold;
								font-size: large;
							}
							.spanGreen {
								color: $green;
								font-weight: bold;
								font-size: large;
							}
						}
					}

				}
				
				.rightMap {
					width: 4.6rem;
					height: 3.6rem;
					position: absolute;
					left: 0rem;
					top: 0.4rem;
				}
				
				.rankBtn {
					position: absolute;
					right: 0.2rem;
					bottom: 0.15rem;
					z-index: 100;
				}
			}
			
			.rankTitleBar {
				height: 0.12rem;
				width: inherit;
			}
			
			.rankTitle {
				position: absolute;
				top: 0.16rem;
				left: 0.18rem;
				z-index: 100;
			}
			
			.backBtn {
				position: absolute;
				top: 0.13rem;
				right: 0.18rem;
				z-index: 100;
				cursor: pointer;
				width: 0.16rem;
				height: 0.16rem;
				background-image: url(../../../../static/img/overview/province/back.png);
			}
			
			.elTable {
				margin-top: 0.2rem;
				margin-left: 0.11rem;
			}
			
			.muti {
				margin-left: -0.5rem;
			}
		}
	}
</style>