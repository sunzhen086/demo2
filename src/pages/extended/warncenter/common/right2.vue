<template>
	<box-base class="leftBox">
		<div slot="box-title">
			<p class="title">问题规则设置与策略库维护</p>
		</div>
		<div slot="box-extend" class="extend-height">
		</div>

		<div class="content">
			<div class="left" @click="forSet()"></div>
			<div class="right">
				<div class="box3">
					<ul class="tips">
						<li class="tip">紧俏货源投放面低：扩大紧俏货源投放范围</li>
						<li class="tip">紧俏货源集中度高：扩大紧俏货源投放范围，均衡分配各档位投放量</li>
						<li class="tip">需求满足率高：适当加大投放量</li>
						
						<li class="tip">紧俏货源投放面低：扩大紧俏货源投放范围</li>
					</ul>
				</div>
			</div>
		</div>
	</box-base>
</template>
<script>
	import $ from 'static/js/jquery-vendor';
	import boxBase from 'components/box/box-base.vue';
	export default {
		data() {
			return {}
		},
		components: {
			boxBase
		},
		methods: {
			scroll: function() {
				//参数初始化
				var opt = {
					line: 1,
					speed: 1000,
					timer: 3000,
				};
				var timerID;
				var _this = $('.box3').find("ul:first");
				var lineH = _this.find("li:first").height(); //获取行高
				var line = opt.line; //每次滚动的行数，默认为一屏，即父容器高度
				var speed = opt.speed; //卷动速度，数值越大，速度越慢（毫秒）
				var timer = opt.timer //滚动的时间间隔（毫秒）
				if(line == 0) line = 1;
				var upHeight = 0 - line * lineH;
				//滚动函数
				var scrollUp = function() {
					_this.animate({
						marginTop: upHeight
					}, speed, function() {
						for(var i = 1; i <= line; i++) {
							_this.find("li:first").appendTo(_this);
						}
						_this.css({
							marginTop: 0,
							//paddingTop:5,
							//paddingBottom:5
						});
					});
				}
				//Shawphy:自动播放
				var autoPlay = function() {
					if(timer) timerID = window.setInterval(scrollUp, timer);
				};
				var autoStop = function() {
					if(timer) window.clearInterval(timerID);
				};
				//鼠标事件绑定
				_this.hover(autoStop, autoPlay).mouseout();
			},
			forSet: function() {
				this.$router.push({
					path: '/extended/warncenterset'
				})
			}
		},
		mounted() {
			this.scroll();
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		.left {
			float: left;
			background: url(../../../../static/img/warncenter/manage.png) no-repeat;
			background-size: 60% ;
			width: 1.1rem;
			height: 1.1rem;
			background-position: center center;
			cursor: pointer;
		}
		.right {
			float: left;
			width: 6.2rem;
			border: 0.01rem rgba(48, 155, 255, 0.4) solid;
			margin-top: 0.1rem;
			margin-left: 0.2rem;
			.box3 {
				overflow: hidden;
				height: 0.85rem;
				.tip {
					font-size: 0.12rem;
					height: 0.28rem;
					line-height: 0.28rem;
					padding-left: 0.1rem;
				}
			}
		}
	}
</style>