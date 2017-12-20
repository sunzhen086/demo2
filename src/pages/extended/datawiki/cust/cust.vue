<template>
	
	<div class="main">
		<div class="menu">
				<nav-scroll :option=navScrollOption @go-target="goTarget" class="nav-scroll"></nav-scroll>
			</div>
		<div class = "main-body">
			<div ref="top" ></div>
			<div ref="menuitem1" class="item" ><leftone ></leftone></div>
			<div ref="menuitem2" class="item" >	<lefttwo ></lefttwo></div>
			<div ref="menuitem3" class="item" ><leftthree ></leftthree></div>
			<div ref="menuitem4" class="item" ><leftfour ></leftfour></div>
			<div ref="menuitem5" class="item" ><leftfive ></leftfive></div>
			<div ref="menuitem6" class="item" ><leftsix ></leftsix></div>
			<div ref="menuitem7" class="item" ><leftseven ></leftseven></div>
			<div ref="menuitem8" class="item" ><lefteight ></lefteight></div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	.main{
		width:11rem;
		margin:0 auto;
		margin-top: 0.2rem;
		font-size: 0.14rem;
		.menu {
            
            bottom: auto;
            top: expression(100+((e=document.documentElement.scrollTop)?e:document.body.scrollTop)+'px');
        	color:#FFFFFF;
        	position: fixed;
            top: 2rem;
            margin-left: 9.7rem;
           
            width: 102px;
        }
		.left{
			float: left;
		}
		.main-body{
			width: 9.5rem;
			.left-part{
				width: 3rem;
			}
			.middle-part{
				width: 6.2rem;
				margin-left: 0.1rem;
			}
			.right-part{
				width: 3rem;
				margin-left: 0.1rem;
			}
			.item {
	            margin-bottom: 20px;
	        }
		}
	}
</style>

<script>
	import leftone from './common/leftone.vue';
	import lefttwo from './common/lefttwo.vue';
	import leftthree from './common/leftthree.vue';
	import leftfour from './common/leftfour.vue';
	import leftfive from './common/leftfive.vue';
	import leftsix from './common/leftsix.vue';
	import leftseven from './common/leftseven.vue';
	import lefteight from './common/lefteight.vue';
	import navScroll from 'components/navscroll/nav-scroll.vue';
	
	export default {
		data() {
			return {
				navScrollOption: {
					data:[
						{
							key: 'menuitem1',
							text: '基础信息'
						},
						{
							key: 'menuitem2',
							text: '许可证信息'
						},
						{
							key: 'menuitem3',
							text: '销售信息'
						},
						{
							key: 'menuitem4',
							text: '终端信息'
						},
						{
							key: 'menuitem5',
							text: '订货统计'
						},
						{
							key: 'menuitem6',
							text: '配送信息'
						},
						{
							key: 'menuitem7',
							text: '竞争力分析'
						},
						{
							key: 'menuitem8',
							text: '守法情况'
						}
					],
					activeMenu:'menuitem1'
				},
				timer:0
			}
			
		},
		components: {
			leftone,
			lefttwo,
			leftthree,
			leftfour,
			leftfive,
			leftsix,
			leftseven,
			lefteight,
			navScroll
		},
		methods: {
			goTarget:function(selector){
				var targetDom = this.$refs[selector];
				var targetTop = targetDom.getBoundingClientRect().top;
				var scrollTop = document.body.scrollTop;
				if ("top" == selector) {
					document.body.scrollTop = 0;
				} else {
					document.body.scrollTop = scrollTop + targetTop - 50;
				}
			},
			handleScroll() {
			
				var self = this;
				clearTimeout(self.timer);
				self.timer = setTimeout(function(){
					var itemArr = self.navScrollOption.data;
					
					var tempArr = [];
					itemArr.forEach(function(item,i){
						var targetDom = self.$refs[item.key];
						var bcr = targetDom.getBoundingClientRect();
						var top = bcr.top;
						if(top > 0){
							tempArr.push({
								top:top,
								ref:item.key
							});
						};
					})
					
					tempArr.sort(function(a,b){
						return a.top - b.top;
					});
					
					var result = tempArr.length == 0 ? "" : tempArr[0].ref;
					self.navScrollOption.activeMenu = result;
				},300)
				

			}
			
		},
		mounted: function () {
			window.addEventListener('scroll', this.handleScroll);
			this.$store.commit('setTopNavStatus', 'extended');
			this.$store.commit('setLeftNavStatus', 'datawiki');
		},
		destroyed:function(){
			window.removeEventListener('scroll', this.handleScroll);
		}
	}

</script>