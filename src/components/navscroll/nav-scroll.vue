<template>
	<div class="nav-bar">
		<ul class="menu">
			<li class="icon-top" @click="goTarget('top')"><i class="fa fa-sort-asc fa-3x icon-top" aria-hidden="true"></i></li>
			<li class="li-top" @click="goTarget('top')">
				<a href="javascript:void(0)" >TOP</a>
			</li>
		  	<li class="menu-item"  v-for="menuitem in option.data" :class="{active: menuitem.key === currentMenuItem}" @click="setCur(menuitem.key)">
		  		<a :href="'#' + menuitem.key" 
		  			:class="{current : menuitem.key === currentMenuItem}" 
		  			href="javascript:void(0)" 
		  			@click="goTarget(menuitem.key)">{{menuitem.text}}</a>
		  	</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:{
			option:Object
		},
		data() {
			return {
				currentMenuItem:"",
			}
		},
		methods:{
			setCur: function (curPane) {
				this.currentMenuItem = curPane;
				
			},
			goTarget(ref) {
		        this.$emit('go-target', ref, event);
		    }
		},
		watch: {
			option:{
				handler:function(){
					this.currentMenuItem = this.option.activeMenu;
				},
				deep:true
				
			}
			
		},
		mounted() {
			this.currentMenuItem = this.option.activeMenu;
		}
		
	}
</script>

<style lang="scss" scoped>

.nav-bar{
	position:relative;
	.menu {
		position:fixed;
		.icon-top {
			text-align: center;
			margin-bottom: -0.1rem;
			list-style: none;
			
		}
		
		.li-top {
			text-align: center;
		}
		
		.menu-item{
			padding:0.04rem 0.3rem;
			color:#fff;
			cursor: pointer;
			line-height: 0.3rem;
			position:relative;
			text-align:center;
			margin-left: 0.05rem;
			
			background: url(../../static/img/common/navscroll/normal.png) no-repeat;
			
			&.active,&:hover{
				font-size: 0.2rem;
				
				margin-left: 0.01rem;
				
				background: url(../../static/img/common/navscroll/hover.png) no-repeat;
			}
			
		}
		
		&::before {
			content:"";
			background: url(../../static/img/common/navscroll/up.png);
			position:absolute;
			left:0.08rem;
			top:0.13rem;
			width: 1px;
			height: 28px;
			
		}
		
		&::after {
			content:"";
			background: url(../../static/img/common/navscroll/down.png);
			position:absolute;
			left:0.08rem;
			width: 1px;
			height: 28px;
		}

	}
}







</style>