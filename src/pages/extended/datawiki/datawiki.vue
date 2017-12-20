<template>
	<div class='datawikimain'>
		<div class="datawikiMain" id="datawikiMain" >
			<div class="datawikiSearchLogo"></div>
			<div class="datawikiSearchBox">
				<el-input class="datawikiSearchInput cma" placeholder="请输入搜索内容" size="large"></el-input>
				<el-button type="primary" class="datawikiSearchBtn cma mid-item item-search left" size="large" @click="doSearch">搜 索</el-button>
				<tab-base class="datawikiSearchTab" :option=searchOption @tab-click="tabClick"></tab-base>
			</div>
		</div>
		
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import tabBase from 'components/tab/tab-base.vue';
	
	export default {
		data() {
			return {
				searchOption: {
					data:[
						{
							key: 'tab1',
							text: '全部'
						},
						{
							key: 'tab2',
							text: '公司'
						},
						{
							key: 'tab3',
							text: '工业'
						},
						{
							key: 'tab4',
							text: '商品'
						},
						{
							key: 'tab5',
							text: '客户'
						}
					],
					activePane:'tab1'
				}
			}
		},
		components: {
			tabBase
		},
		methods: {
			tabClick: function(curTab){
				console.log(curTab);
			},
			doSearch: function() {
				this.$router.push('/extended/searchlist');
			}
		},
		mounted: function() {
			this.$store.commit('setLeftNavStatus', 'datawiki');
		}
	}
</script>

<style lang="scss">
	.datawikimain {
		height: 6.7rem;
		width: 12.3rem;
		overflow: hidden;
	}
	
	.datawikiMain{
		width: 6rem;
		padding-top: 1.3rem;
		margin-left: 3.79rem;
		font-size: 0.14rem;
		color: white;
		overflow: hidden;
		
		.datawikiSearchLogo {
			width: 2rem;
			height: 0.46rem;
			margin: 0 auto;
			background-image: url(../../../static/img/extended/datawiki/datawiki_logo.png);
		}
		
		.datawikiSearchBox {
			width: inherit;
			margin-top: 0.5rem;
			
			.datawikiSearchInput {
				width: 5rem;
				float: left;
				
				input {
					height: 0.5rem !important;
					background: #040E28 !important;
					border: 2px solid #309BFF !important;
					border-right: none !important;
				}
			}
			.datawikiSearchBtn {
				width: 1rem;
				height: 0.5rem !important;
				float: left;
				border: 2px solid #309BFF !important;
				background-color: #309BFF !important;
			}
			.datawikiSearchBtn:hover {
				background: #0b85ff !important;
				border-color: #0b85ff !important;
				color: white !important;
			}
			
			.datawikiSearchTab {
				margin-top: 0.1rem;
				border: none;
				
				li {
					padding: 0;
					margin-left: 0.35rem;
					color: #B8BCC5;
					background: none;
				}
				li:hover {
					color: #2D97FB;
					text-decoration: underline;
					background: none;
				}
				.active {
					color: #2D97FB;
					background: none;
				}
			}
		}
	}
</style>