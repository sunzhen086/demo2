<template>
	<div class="main-top">
		<div class="top-left left">分类：</div>
		<div class="top-mid left">
			<el-input class="cma item-input input" v-model="type" placeholder="市场" size="small"></el-input>
		</div>
		<div class="top-left left">指标：</div>
		<div class="top-mid left">
			<el-input class="cma item-input input" v-model="index" placeholder="投放集中度" size="small"></el-input>
		</div>
		<div class="top-left left">规则：</div>
		<div class="top-mid left">
			<el-input class="cma item-input input" v-model="rule" placeholder="对比" size="small"></el-input>
		</div>
		<div class="top-left left"></div>
		<el-button type="primary" class="cma mid-item item-search left" size="small" icon="search" v-on:click="search">查询</el-button>
	</div>
</template>

<script>
	import bus from './bus.js';
	export default {
		data() {
			return {
				type: '',
				index: '',
				rule: ''
			}
		},
		methods: {
			search: function() {
				var obj=[];
				if(this.type){
					obj['type']=this.type;
				};
				if(this.index){
					obj['index']=this.index;
				};
				if(this.rule){
					obj['rule']=this.rule;
				};
				bus.$emit('doSearch', obj);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.left {
		float: left;
	}
	
	.right {
		float: right;
	}
	
	.main-top {
		min-height: 0.5rem;
		padding-top: 0.15rem;
		.input {
			width: 1.4rem;
		}
	}
	
	.top-left {
		margin-left: 0.3rem;
		font-size: 0.16rem;
		margin-top: 0.08rem;
	}
	
	.top-mid {
		.mid-item {
			margin-left: 0.1rem;
		}
		.item-select {
			width: 0.9rem;
		}
		.item-date {
			width: 1rem;
		}
		.item-search {}
		.line {
			border-top: 0.01rem solid #fff;
			height: 0.01rem;
			width: 0.2rem;
			margin-top: 0.15rem;
			margin-left: 0.1rem;
		}
		.searchContent {
			margin-left: 0.5rem;
			margin-top: 0.08rem;
		}
	}
	
	.top-right {
		width: 4.77rem;
		height: 0.7rem;
		background: url(../../../../../static/img/overview/nation/bg2.png);
	}
</style>