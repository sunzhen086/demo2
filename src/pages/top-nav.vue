<template>
	<section>
		<template v-if="showTopNav">	
			<div class="page">
				<div class="top-nav">
					<div class="logo">
						<router-link to="/">
							<span>陕西省行业数据综合分析系统</span>
						</router-link>
					</div>
					<ul>
						<li>
							<router-link to="/overview/nation">
								<div class="tab" @click="tabClick('overview')" :class="{active: this.currentTab==='overview'}">
									<span class="icon icon1"></span>
									<span class="text">总览</span>
								</div>
							</router-link>
						</li>
						<li>
							<router-link to="/market/status">
								<div class="tab" @click="tabClick('market')" :class="{active: this.currentTab==='market'}">
									<span class="icon icon2"></span>
									<span class="text">市场</span>
								</div>
							</router-link>
						</li>
						<li>
							<router-link to="/cust/distribute">
								<div class="tab" @click="tabClick('cust')" :class="{active: this.currentTab==='cust'}">
									<span class="icon icon3"></span>
									<span class="text">客户</span>
								</div>
							</router-link>
						</li>
						<li>
							<router-link to="/brand/perform">
								<div class="tab" @click="tabClick('brand')" :class="{active: this.currentTab==='brand'}">
									<span class="icon icon4"></span>
									<span class="text">品牌</span>
								</div>
							</router-link>
						</li>
					</ul>
					<ul class="info-group">
						<li>
							<el-tooltip content="今日实时" placement="top" popper-class="cma" effect="light">
								<div class="info-btn real-time" @click="showDialog" @mouseenter="setInfoRealFadeIn()" @mouseleave="setInfoRealFadeOut()">
									<i class="fa fa-clock-o fa-lg"  aria-hidden="true"></i> 
								</div>
							</el-tooltip>
							
							<el-dialog class="cma" top="7%" :before-close="handleClose" :visible.sync="dialogRealTimeVisible" :title="shishiTitle">
								<real-time></real-time>
							</el-dialog>
							
						</li>
						<li>
							<router-link to="/extended/warncenter/">
								<el-tooltip content="预警中心" placement="top" popper-class="cma" effect="light">
									<div class="info-btn warn-center" @mouseenter="setInfoWarnFadeIn()" @mouseleave="setInfoWarnFadeOut()">
										<i class="fa fa-bell fa-lg" aria-hidden="true"></i> 
									</div>
								</el-tooltip>
							</router-link>
						</li>
						<li>
							<el-tooltip content="业务消息" placement="top" popper-class="cma" effect="light">
								<div class="info-btn business-message" @mouseenter="setInfoBussFadeIn()" @mouseleave="setInfoBussFadeOut()">
									<i class="fa fa-comment-o fa-lg" aria-hidden="true"></i> 
								</div>
							</el-tooltip>
						</li>
						<li class="extended-li" @mouseenter="setExtendShow()" @mouseleave="setExtendHide()">
							<div class="info-btn extended">
								<i class="fa fa-th-large fa-lg" aria-hidden="true"></i> 
							</div>
							<div v-if="extendShow" class="little-arrow"></div>
							<transition enter-active-class="fadeIn" leave-active-class="fadeOut">
								<ul v-if="extendShow" class="extend-list">
									<li>
										<router-link to="/extended/complexeval">
											<div class="plugin-item" >
												<span class="itemicon icon1"></span>
												<span class="itemtext">综合评价</span>
											</div>
										</router-link>
									</li>
									<li>
										<router-link to="/extended/warncenter">
											<div class="plugin-item">
												<span class="itemicon icon2"></span>
												<span class="itemtext">预警中心</span>
											</div>
										</router-link>
									</li>
									<li>
										<router-link to="/extended/datawiki">
											<div class="plugin-item">
												<span class="itemicon icon3"></span>
												<span class="itemtext">数据百科</span>
											</div>
										</router-link>
									</li>
									<li>
										<router-link to="/extended/statisticalindex">
											<div class="plugin-item">
												<span class="itemicon icon4"></span>
												<span class="itemtext">统计指标</span>
											</div>
										</router-link>
									</li>
									<li>
										<router-link to="/reportcenter" target="_blank">
											<div class="plugin-item">
												<span class="itemicon icon5"></span>
												<span class="itemtext">报表中心</span>
											</div>
										</router-link>
									</li>
									<li>
										<router-link to="">
											<div class="plugin-item">
												<span class="itemicon icon6"></span>
												<span class="itemtext">更多</span>
											</div>
										</router-link>
									</li>
								</ul>
							</transition>
						</li>
					</ul>
					<!-- 描述：前进和返回按钮区域 -->
					<div class="return-icon" @click="routerBack">
						<i class="fa fa-arrow-left" aria-hidden="true"></i>
					</div>
					<div class="go-icon" @click="routerGo">
						<i class="fa fa-arrow-right" aria-hidden="true"></i>
					</div>
				</div>
				<div class="page-main">
					<router-view></router-view>
				</div>
				
			</div>
		</template>
		
		<template v-else>
			<div>
				<router-view></router-view>
			</div>
		</template>
	</section>
</template>

<script>
	
	import realTime from  './overview/nation/common/middleRealTime.vue';

	import bus from './overview/nation/common/tool/bus.js';
	export default {
		data() {
			return {
				currentTab:"overview",
				dialogRealTimeVisible: false,
				extendShow:false,
				shishiTitle:'今日实时',
				isInfoRealHover: false,
				isInfoWarnHover: false,
				isInfoBussHover: false,
				showTopNav: true
			}
		},
		methods: {
			tabClick:function(currentTab){
				this.$store.commit('setTopNavStatus', currentTab);
			},
			routerBack() {
				this.$router.go(-1);
			},
			routerGo() {
				this.$router.go(1);
			},
			setExtendShow(){
				this.extendShow = true;
			},
			setExtendHide(){
				this.extendShow = false;
			},
			setInfoRealFadeIn() {
				this.isInfoRealHover = true;
			},
			setInfoRealFadeOut() {
				this.isInfoRealHover = false;
			},
			setInfoWarnFadeIn() {
				this.isInfoWarnHover = true;
			},
			setInfoWarnFadeOut() {
				this.isInfoWarnHover = false;
			},
			setInfoBussFadeIn() {
				this.isInfoBussHover = true;
			},
			setInfoBussFadeOut() {
				this.isInfoBussHover = false;
			},
			handleClose:function(done){
				bus.$emit('stopTimmer',true);
				done();
			},
			showDialog:function(){
				bus.$emit('stopTimmer',false);
				this.dialogRealTimeVisible=true;
				
			}
		},
		components: {
			realTime
		},
		computed: {
			topnav() {
				return this.$store.state.app.nav.top;
			}
			
		},
		watch: {
			topnav:{
				handler:function(){
					this.currentTab = this.topnav;
				},
				deep:true
			},
			'$route': function() {  // 监视路由变化，此处用来控制是否显示页面框架的 top-nav，$route 要用引号括起来
				if(this.$route.meta.showTopNav == false) {
					this.showTopNav = this.$route.meta.showTopNav;
				} else {
					this.showTopNav = true;
				}
			}
		},
		created() {
			if(this.$route.meta.showTopNav == false) {
				this.showTopNav = this.$route.meta.showTopNav;
			} else {
				this.showTopNav = true;
			}
		},
		mounted() {
		},
		beforeDestroy() {
			this.showTopNav = true;
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		width:13.56rem;
		padding-bottom: 0.02rem;
		position: relative;
		.top-nav {
			width: 100%;
			height: 0.74rem;
			background: url('../static/img/bg1.png') repeat-x;
			.logo {
				width:5.45rem;
				height:0.71rem;
				margin-left: -0.4rem;
				position: absolute;
				background: url('../static/img/topnav/logo1.png') no-repeat;
				left: 0.2rem;
				top: 0rem;
				color: #fff;
				font-size: 0.3rem;
				line-height:0.62rem;
				
				span {
					margin-left: 205px;
					font-size: 0.22rem;
				}
			}
			&>ul {
				display: block;
				margin-left: 5.1rem;
				&>li {
					float: left;
					margin-left:20px;
					.tab{
						width:79px;
						height:74px;
						span {
							display:block;
							&.icon{
								float:left;
								width:22px;
								height:22px;
								margin-left:28.5px;
								margin-top:13px;
								&.icon1{
									background: url('../static/img/topnav/top1.png');
								}
								&.icon2{
									background: url('../static/img/topnav/top2.png');
								}
								&.icon3{
									background: url('../static/img/topnav/top3.png');
								}
								&.icon4{
									background: url('../static/img/topnav/top4.png');
								}
								&.icon5{
									background: url('../static/img/topnav/top5.png');
								}
							}
							&.text{
								float:left;
								height:30px;
								margin-top:10px;
								margin-left:24px;
								color:#fff;
							}
						}
						&.active,&:hover{
							color: #fff;
							background: url('../static/img/topnav/top.png') repeat-x;
						}
					}	
					
					.info-btn{
						margin-top: 0.45rem;
						margin-left: 0.05rem;
						width: 0.16rem;
						cursor: pointer;
						
						&.extended {
							color: rgba(1,120,168,1);
							&:hover {
								color: rgba(1, 236, 250, 1);
							}
							
						}
					}
					.real-time {
						animation: real-time-div 2s infinite;
					}
					.warn-center {
						animation: warn-center-div 2s infinite;
					}
					.business-message {
						animation: business-msg-div 2s infinite;
					}
					
				}
				
				
				&.info-group {
					position:absolute;
					margin-left: 0.5rem;
					left:10rem;
					
					.extended-li {
						position: relative;
					}
					
					.little-arrow {
						position:absolute;
						left: 0.05rem;
						margin-top:0.02rem;
						width: 17px;
						height: 8px;
						background: url(../static/img/topnav/extend/little-arrow.png);
						z-index:999999;
					}
					
					.extend-list{
						display:block;
						width:3.46rem;
						overflow:hidden;
						position:absolute;
						background:rgba(16,64,126, 1);
						border: 1px solid rgba(48, 151, 253, 1);
						top:100%;
						right:100%;
						margin-right:-1.5rem;
						margin-top:0.09rem;
						
						z-index:999998;
						li {
							width:0.66rem;
							height:0.96rem;
							float:left;
							margin:0.1rem;
							color: white;
							
							.plugin-item {
								width:66px;
								height:66px;
								
								span {
									display: block;
									
									&.itemicon {
										display: block;
										float:left;
										width:66px;
										height:66px;
										
										margin-top:8px;
										&.icon1 {
											background: url('../static/img/topnav/extend/zonghepingjia1.png');
											&:hover {
												background: url('../static/img/topnav/extend/zonghepingjia2.png');
											}
										}
										&.icon2 {
											background: url('../static/img/topnav/extend/yujingzhongxin1.png');
											&:hover {
												background: url('../static/img/topnav/extend/yujingzhongxin2.png');
											}
										}
										&.icon3 {
											background: url('../static/img/topnav/extend/shujubaike1.png');
											&:hover {
												background: url('../static/img/topnav/extend/shujubaike2.png');
											}
										}
										&.icon4 {
											background: url('../static/img/topnav/extend/tongjizhibiao1.png');
											&:hover {
												background: url('../static/img/topnav/extend/tongjizhibiao2.png');
											}
										}
										&.icon5 {
											background: url('../static/img/topnav/extend/baobiaozhongxin1.png');
											&:hover {
												background: url('../static/img/topnav/extend/baobiaozhongxin2.png');
											}
										}
										&.icon6 {
											background: url('../static/img/topnav/extend/jiahao.png');
											
										}
									}
									
									&.itemtext {
										display: block;
										float:left;
										width: 66px;
										height:30px;
										margin-top:10px;
										text-align: center;
										color:#fff;
									}
								}
							}
						}
					}
				}
				
			}
			
			
		}
		
		
		.page-main {
			background: url(../static/img/bg2.png) no-repeat right top;
		}
		
		.return-icon {
			display: inline-block;
			width: 0.3rem;
			height: 0.3rem;
			margin-top: 0.2rem;
			margin-left: 3.6rem;
			cursor: pointer;
			-moz-border-radius: 0.15rem;
     		-webkit-border-radius: 0.15rem;
     		border-radius: 0.15rem;
     		color: white;
     		background: rgba(1,120,168,1);
     		text-align:center;
     		text-indent:0;
     		line-height:0.3rem; 
     		font-size:0.12rem;
			&:hover, &:active {
				background: rgba(78,212,248,1);
			 	border-color: rgba(78,212,248,1);
			 	color: black;
			}
		}
		
		.go-icon {
			float: right;
			width: 0.3rem;
			height: 0.3rem;
			margin-top: 0.2rem;
			margin-right: 0.2rem;
			cursor: pointer;
			-moz-border-radius: 0.15rem;
     		-webkit-border-radius: 0.15rem;
     		border-radius: 0.15rem;
     		color: white;
     		background: rgba(1,120,168,1);
     		text-align:center;
     		text-indent:0;
     		line-height:0.3rem; 
     		font-size:0.12rem;
			&:hover, &:active {
				background: rgba(78,212,248,1);
			 	border-color: rgba(78,212,248,1);
			 	color: black;
			}
		}
		
		
	}
	
	@keyframes real-time-div {
		0%   {color: #3cc8d5;}
		100% {color: #9dd25c;}
	}
	@keyframes warn-center-div {
		0%   {color: #ffc200;}
		100% {color: #ff9533;}
	}
	@keyframes business-msg-div {
		0%   {color: #00a9ff;}
		100% {color: #177fb4;}
	}

</style>