<template>
	<div class="main-top">
		<div class="top-left left">时间：</div>
		<div class="top-mid left">
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
		      v-model="value1"
		      type="month"
		      size="small"
		      placeholder="开始日期"
		      class="cma mid-item item-date left">
		    </el-date-picker>
		    <span class="left line"></span>
		    <el-date-picker
		      v-model="value2"
		      type="month"
		      size="small"
		      placeholder="结束日期"
		      class="cma mid-item item-date left">
		    </el-date-picker>
		    <el-button type="primary" class="cma mid-item item-search left" size="small" icon="search" v-on:click="search">查询</el-button>
		    <div class="left searchContent" ref="searchContent">
				2017年01月 - 2017年05月
		    </div>
		    <!--<div class="warnCenter" :class="{blinkStatus:warnCenterStatus}" @click="toWarnCenter">
		    	<i class="fa fa-bell" aria-hidden="true"></i> 预警中心
		    </div>-->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [
					{label: '年累计',value: '年累计'},
					{label: '年累计1',value: '年累计1'},
					{label: '年累计2',value: '年累计2'},
					{label: '月累计',value: '月累计'}
				],
				value: '年累计',
				value1:'2017-01',
				value2:'2017-05',
				warnCenterStatus: false
			}
		},
		methods:{
			toWarnCenter: function() {
				this.$router.push({ path: '/extended/warncenter' });
			},
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
			},
			warncenterBtnBlink: function() {
				var that = this;
				var timer = this.timer = setInterval(function() {
					that.warnCenterStatus = !that.warnCenterStatus;
				},2000);
			}
		},
		mounted() {
			this.warncenterBtnBlink();
		},
		beforeDestroy() {
			clearInterval(this.timer);
		}
	}
</script>

<style lang="scss" scoped>
	.left{
		float: left;
	}
	.right{
		float: right;
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
	
	.warnCenter {
		padding: 0rem 0.1rem;
		background-color: rgba(255,88,88,1);
		float: left;
		cursor: pointer;
		font-weight: bold;
		margin-left: 0.3rem;
		line-height: 0.3rem;
		border-radius: 0.02rem;
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Chrome/Safari/Opera */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; 
		transition: all 2s linear;
	}
	.blinkStatus {
		background-color: rgba(255,88,88,0.4);
	}
</style>
