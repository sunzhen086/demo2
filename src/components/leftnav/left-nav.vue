<template>
	<div class="page">
		<ul class="leftNavContent">
			<li v-for="tabData in tabDatas" v-on:click="itemClick(tabData.tabUrl, tabData.tabNum,currentTab)" :class="{active: currentTab===tabData.tabNum}">
				<span class="icon" :class="tabData.tabIcon"></span>
				<span class="text">{{ tabData.tabName }}</span>
			</li>
		</ul>

	</div>
</template>

<script>
	export default {
		props: {
			tabDatas:Array
		},
		data() {
			return {
				currentTab: "nation"
			}
		},
		methods:{
			itemClick:function(url,currentTab,flag){
				//this.currentTab = currentTab;
				this.$store.commit('setLeftNavStatus', currentTab);
				this.$router.push({ path: url});
				
			},
			menuHandlerHover:function(){
				this.leftNavShow = true;
				
			},
			menuOnLeave:function(){
				this.leftNavShow = false;
			}
		},
		computed: {
			leftnav() {
				return this.$store.state.app.nav.left;
			}
			
		},
		watch: {
			leftnav:{
				handler:function(){
					this.currentTab = this.leftnav;
				},
				deep:true
			}
		}
	}
</script>

<style lang="scss" scoped>
	ul{
		position:absolute;
		left:0rem;
		padding-top:0.1rem;
		height:100%;
		width:0.87rem;
		min-height: 5.75rem;
		background-color:rgba(0,0,0,0.8); 
		li{
			display: block;
			width:79px;
			height:75px;
			cursor:pointer;
			margin-top:0.1rem;
			margin-left: 4px;
			position:relative;
			
			.icon{
				display: block;
				width:79px;
				height:69px;

				&.quanguo_1{
					background: url('../../static/img/leftnav/quanguo_1.png');					
				}
				&.quansheng_1{
					background: url('../../static/img/leftnav/quansheng_1.png');
				}
				&.dishi_1{
					background: url('../../static/img/leftnav/dishi_1.png');
				}
				&.gongye_1{
					background: url('../../static/img/leftnav/gongye_1.png');
				}
				&.zhongdianpinpai_1{
					background: url('../../static/img/leftnav/zhongdianpinpai_1.png');
				}
				
				&.shichangzhuangtai_1{
					background: url('../../static/img/leftnav/shichangzhuangtai_1.png');
				}
				&.shichangcelue_1{
					background: url('../../static/img/leftnav/shichangcelue_1.png');
				}
				
				&.kehufenbu_1{
					background: url('../../static/img/leftnav/kehufenbu_1.png');
				}
				&.yinglifenxi_1{
					background: url('../../static/img/leftnav/yinglifenxi_1.png');
				}
				
				&.pinpaifenbu_1{
					background: url('../../static/img/leftnav/pinpaifenbu_1.png');
				}
				&.pinpaibiaoxian_1{
					background: url('../../static/img/leftnav/pinpaibiaoxian_1.png');
				}
				
				&.zonghepingjia_1{
					background: url('../../static/img/leftnav/zonghepingjia_1.png');
				}
				&.yujingzhongxin_1{
					background: url('../../static/img/leftnav/yujingzhongxin_1.png');
				}
				&.shujvbaike_1{
					background: url('../../static/img/leftnav/shujvbaike_1.png');
				}
				&.tongjizhibiao_1{
					background: url('../../static/img/leftnav/tongjizhibiao_1.png');
				}
				&.jini_1{
					background: url('../../static/img/leftnav/jini_1.png');
				}
			}
			
			&.active .quanguo_1,&:hover .quanguo_1{
				background: url('../../static/img/leftnav/quanguo_2.png');
			}
			&.active .quansheng_1,&:hover .quansheng_1{
				background: url('../../static/img/leftnav/quansheng_2.png');
			}
			&.active .dishi_1,&:hover .dishi_1{
				background: url('../../static/img/leftnav/dishi_2.png');
			}
			&.active .gongye_1,&:hover .gongye_1{
				background: url('../../static/img/leftnav/gongye_2.png');
			}
			&.active .zhongdianpinpai_1,&:hover .zhongdianpinpai_1{
				background: url('../../static/img/leftnav/zhongdianpinpai_2.png');
			}
			
			&.active .shichangzhuangtai_1,&:hover .shichangzhuangtai_1{
				background: url('../../static/img/leftnav/shichangzhuangtai_2.png');
			}
			&.active .shichangcelue_1,&:hover .shichangcelue_1{
				background: url('../../static/img/leftnav/shichangcelue_2.png');
			}
			
			&.active .kehufenbu_1,&:hover .kehufenbu_1{
				background: url('../../static/img/leftnav/kehufenbu_2.png');
			}
			&.active .yinglifenxi_1,&:hover .yinglifenxi_1{
				background: url('../../static/img/leftnav/yinglifenxi_2.png');
			}
			
			&.active .pinpaifenbu_1,&:hover .pinpaifenbu_1{
				background: url('../../static/img/leftnav/pinpaifenbu_2.png');
			}
			&.active .pinpaibiaoxian_1,&:hover .pinpaibiaoxian_1{
				background: url('../../static/img/leftnav/pinpaibiaoxian_2.png');
			}
			
			&.active .zonghepingjia_1,&:hover .zonghepingjia_1{
				background: url('../../static/img/leftnav/zonghepingjia_2.png');
			}
			&.active .yujingzhongxin_1,&:hover .yujingzhongxin_1{
				background: url('../../static/img/leftnav/yujingzhongxin_2.png');
			}
			&.active .shujvbaike_1,&:hover .shujvbaike_1{
				background: url('../../static/img/leftnav/shujvbaike_2.png');
			}
			&.active .tongjizhibiao_1,&:hover .tongjizhibiao_1{
				background: url('../../static/img/leftnav/tongjizhibiao_2.png');
			}
			&.active .jini_1,&:hover .jini_1{
				background: url('../../static/img/leftnav/jini_2.png');
			}
			
			
			.text{
				display: block;
				color:#fff;
				font-size:14px;
				font-weight: 400;
				position:absolute;
				top:47px;
				width:100%;
				text-align:center;

			}
		}
		
	}
	
	.content{
		margin-left:0.87rem;
	}
	
	.leftNavContent {
		background: rgba(9,34,101,1);
	}
</style>