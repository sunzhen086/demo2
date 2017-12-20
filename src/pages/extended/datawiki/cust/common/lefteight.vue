<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">7&nbsp;/</span><span class="title2">守法情况</span>
		    
		    <span class="reportSpan cma">
			    <el-select v-model="selectValue" placeholder="相关分析" 
					size="small"
					class="left cma mid-item item-select" popper-class="cma-select">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</span>
			
		    <!--<span class="reportSpan">
			    <el-dropdown>
				  <span class="el-dropdown-link dropdownSpan">
				    相关分析<i class="el-icon-caret-bottom el-icon--right"></i>
				  </span>
				  <el-dropdown-menu slot="dropdown">
				    	<el-dropdown-item>案件记录</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
			</span>-->
		</div>
		
		<div class="content">
			<div class="lawContent">
				<img src="../../../../../static/img/extended/datawiki/cust/balance.png" class="lawImg">
				<div class="lawMessage">守法经营户，无不良记录</div>
			</div>
		</div>
		
	
	</box-base>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	
	export default {
		data() {
			return {
				options: [{"label":"案件记录","value":"01"}],
				selectValue: ''
			}
		},
		methods:{
		},
		components: {
			boxBase
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		width: 9.5rem;
		margin-bottom: 0.13rem;
		
		
		.lawContent {
			height: 1rem;
		    font-size: 18px;
		    line-height: 1rem;
		    background-color: rgb(20,52,112);
		    padding-left: 0.4rem;
		    
		    .lawImg {
		    	float:left; 
		    	width:40px; 
		    	padding-top:30px;
		    }
		    .lawMessage{
		    	float:left;
		    	padding-left: 0.2rem;
		    }
		}
		
		.reportSpan {
			float: right;
			margin-right:0.15rem;
			padding-top:0.02rem;
			color:black;
		}
		.dropdownSpan {
			color: #4ed4f8 ;
			font-size:16px;
		}
		.el-dropdown-menu .el-dropdown-menu__item{
			background-color: #4ed4f8 !important;
		}
		
		.title1{
			color: #2edbff;
			font-size: 30px;
		}
		.title2{
			margin-left: 10px ;
			color: #2edbff;
			font-size: 18px;
		}
		.detail{
			margin-top: 0.1rem;
			margin-left: 0.15rem ;
			margin-bottom: 0.2rem;
			font-size: 14px;
		}
		.content{
			border: 1px #4169E1 solid;
			margin-left: 0.13rem;
			margin-bottom: 0.2rem;
			margin-right: 0.13rem;
			
			.muti{
				font-size: 14px;
				margin-left: -12px;
				margin-right: -12px;
			}
		}
	}
	
	.numSpan{
		color: rgb(254,149,2);
		font-size: 0.2rem;
		font-weight: bold;
	}	
	
</style>