<template>
	<div class="page" ref="top">
		<div class="menu">
			<nav-scroll :option=navScrollOption @go-target="goTarget" class="nav-scroll"></nav-scroll>
		</div>
		
		<div class="main">
			<div class = "main-body">
				<div><sectionhead></sectionhead></div>
				<div ref="menuitem1"><sectionone></sectionone></div>
			  	<div ref="menuitem2"><sectiontwo></sectiontwo></div>
			  	<div ref="menuitem3"><sectionthree></sectionthree></div>
				<div ref="menuitem4"><sectionfour></sectionfour></div>
				<div ref="menuitem5"><sectionfive></sectionfive></div>
				<div ref="menuitem6"><sectionsix></sectionsix></div>
				<div ref="menuitem7"><sectionseven></sectionseven></div>
			</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
	.page{
		width:11rem;
		margin:0 auto;
	}
	.menu {     
        bottom: auto;
        top: expression(100+((e=document.documentElement.scrollTop)?e:document.body.scrollTop)+'px');
    	color:#FFFFFF;
    	position: fixed;
        top: 200px;
        /*left: 50%;*/
        margin-left: 9.7rem;
        width: 120px;
    }
	.main{
		margin-left:0.0rem;
		font-size: 0.14rem;
		
		.left{
			float: left;
		}
		.main-body{
			width:9.5rem;
			margin-left:0.14rem;
			padding-top:0.25rem;
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
		}
	}
</style>

<script>
	import navScroll from 'components/navscroll/nav-scroll.vue';

	import sectionhead from './common/sectionhead.vue';
	import sectionone from './common/sectionone.vue';
	import sectiontwo from './common/sectiontwo.vue';
	import sectionthree from './common/sectionthree.vue';
	import sectionfour from './common/sectionfour.vue';
	import sectionfive from './common/sectionfive.vue';
	import sectionsix from './common/sectionsix.vue';
	import sectionseven from './common/sectionseven.vue';
	
	export default {
		data() {
			return {
				navScrollOption: {
					data:[
						{
							key: 'menuitem1',
							text: '公司简介'
						},
						{
							key: 'menuitem2',
							text: '公司往来'
						},
						{
							key: 'menuitem3',
							text: '行业销量排名'
						},
						{
							key: 'menuitem4',
							text: '行业重点品牌'
						}, {
							key: 'menuitem5',
							text: '陕西销量排名'
						}, {
							key: 'menuitem6',
							text: '陕西重点品牌'
						}, {
							key: 'menuitem7',
							text: '陕西销量明细'
						}
					],
					activeMenu:'menuitem1'
				},
				timer:0
			}
			
		},
		components: {
			sectionhead,
			sectionone,
			sectiontwo,
			sectionthree,
			sectionfour,
			sectionfive,
			sectionsix,
			sectionseven,
			navScroll
		},
		methods:{
			goTarget:function(selector){
				console.log(selector);
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
		destroyed: function () {
			window.removeEventListener('scroll', this.handleScroll);
		}
	}

</script>