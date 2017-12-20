<template>
	<div class="cma main-top">
		<div class="top-left left">单位：</div>
		<div class="top-mid left">
			<el-select v-model="unit" placeholder="请选择" 
					size="small"
					class="left cma mid-item item-select" popper-class="cma-select">
				    <el-option
				      v-for="item in units"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
				<div class="top-left left timeTitle">时间：</div>
			<el-select v-model="value" placeholder="请选择" 
				size="small"
				class="left cma mid-item item-select" popper-class="cma-select">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		    <el-date-picker
		      v-model="startDate"
		      type="month"
		      size="small"
		      placeholder="开始日期"
		      class="cma mid-item item-date left">
		    </el-date-picker>
		    <span class="left line"></span>
		    <el-date-picker
		      v-model="endDate"
		      type="month"
		      size="small"
		      placeholder="结束日期"
		      class="cma mid-item item-date left">
		    </el-date-picker>
		    <el-button type="primary" class="cma mid-item item-search left" size="small" icon="search" v-on:click="search">查询</el-button>
		    <div class="left searchContent" ref="searchContent">
				2017年01月 - 2017年05月
		    </div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				units: [
					{label: '西安', value: '西安'},
					{label: '宝鸡', value: '宝鸡'},
					{label: '杨凌', value: '杨凌'},
					{label: '汉中', value: '汉中'},
					{label: '商洛', value: '商洛'},
					{label: '铜川', value: '铜川'},
					{label: '安康', value: '安康'},
					{label: '延安', value: '延安'},
					{label: '咸阳', value: '咸阳'},
					{label: '榆林', value: '榆林'},
					{label: '渭南', value: '渭南'}
				],
				options: [
					{label: '年累计',value: '年累计'},
					{label: '月累计',value: '月累计'}
				],
				unit: '西安',
				value: '年累计',
				startDate:'',
				endDate:'',
			}
		},
		methods: {
			Format:function (date,fmt) { //author: meizz 
			    var o = {
			        "M+": date.getMonth() + 1, //月份 
			        "d+": date.getDate(), //日 
			        "h+": date.getHours(), //小时 
			        "m+": date.getMinutes(), //分 
			        "s+": date.getSeconds(), //秒 
			        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
			        "S": date.getMilliseconds() //毫秒 
			    };
			    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
			    for (var k in o)
			    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			    return fmt;
			},
			search:function(){
				if(this.value1 == ''){
					//this.$alert('请选择开始日期', '提示', {confirmButtonText: '确定'});
				}else if(this.value2 == ''){
					//this.$alert('请选择结束日期', '提示', {confirmButtonText: '确定'});
				}else if(this.value2<this.value1){
					//this.$alert('开始日期必须早于结束日期', '提示', {confirmButtonText: '确定'});
				}else if(this.value1 != '' && this.value2 != ''){
					var str = this.Format(this.value1,'yyyy年MM月') + ' - ' + this.Format(this.value2,'yyyy年MM月');
					this.$refs.searchContent.innerHTML = str;
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.left{
		float: left;
	}
	.main-top{
		min-height: 0.5rem;
		padding-top: 0.15rem;
	}
	.top-left{
		margin-left: 0.3rem;
		font-size: 0.16rem;
		margin-top:0.08rem;
	}
	.top-mid{
		
		.mid-item{
			margin-left: 0.1rem;	
		}
		.item-select{
			width: 0.9rem;
		}
		.item-date{
			width: 1rem;
		}
		.item-search{
			
		}
		.line{
			border-top:0.01rem solid #fff;
			height:0.01rem;
			width: 0.2rem;
			margin-top: 0.15rem;
			margin-left: 0.1rem;
		}
		.searchContent{
			margin-left: 0.5rem;
			margin-top: 0.08rem;
		}
	}
	.top-right{
		width: 4.77rem;
		height: 0.7rem;
	}
</style>