<template>
	<div class="main-top">
		<div class="top-one left top">
			<span>地点：</span>
			<el-select v-model="value1" placeholder="请选择" 
				size="small"
				class="left cma item-select" popper-class="cma-select">
			    <el-option
			      v-for="item in options1"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		</div>
		<div class="top-two left top">
			<span>时间：</span>
			<el-select v-model="value2" placeholder="请选择" 
				size="small"
				class="left cma mid-item item-select" popper-class="cma-select">
			    <el-option
			      v-for="item in options2"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		</div>
		<div class="top-three left top">
			<el-date-picker
		      v-model="value3"
		      type="month"
		      size="small"
		      placeholder="选择月份"
		      class="cma left item-select">
		   </el-date-picker>
		</div>
		<div class="top-four left top">
			<el-button type="primary" class="cma item-search" size="small" icon="search" v-on:click="search">查询</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options1: [
					{label: '西安',value: '西安'},
					{label: '渭南',value: '渭南'},
					{label: '咸阳',value: '咸阳'},
					{label: '汉中',value: '汉中'},
					{label: '安康',value: '安康'},
					{label: '榆林',value: '榆林'},
					{label: '宝鸡',value: '宝鸡'},
					{label: '商洛',value: '商洛'},
					{label: '延安',value: '延安'},
					{label: '铜川',value: '铜川'},
					{label: '杨凌',value: '杨凌'},
				],
				value1:'西安',
				options2: [
					{label: '年累计',value: '年累计'},
					{label: '月累计',value: '月累计'}
				],
				value2: '年累计',
				value3:'2017-05',
			}
			
		},
		methods:{
			search:function(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-top{
		min-height: 50px;
		padding-top: 0.2rem;
		.left{
			float: left;
		}
		.right{
			float: right;
		}
		.top{
			margin-left: 0.3rem;
			font-size: 0.16rem;
			span{
				float: left;
				margin-top: 0.05rem;
			}
			.item-select{
				width: 1.2rem;
			}
		}
	}
</style>
