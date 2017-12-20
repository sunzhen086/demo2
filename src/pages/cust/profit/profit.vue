<template>
	<div class="main cma">
		<div class="topBar">
			<topBar></topBar>
		</div>
		<div class="left">
			<left></left>
		</div>
		<div class="right">
			<right></right>
		</div>
	</div>
</template>

<script>
	import topBar from './common/topBar.vue';
	import left from './common/left.vue';
	import right from './common/right.vue';
	
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
				value1:'',
				value2:'',
			}
		},
		components: {
			topBar,
			left,
			right
		},
		methods:{
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
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'cust');
			this.$store.commit('setLeftNavStatus', 'profit');
		}
	}
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

	.main{
		height: 6.6rem;
		margin-left: $box-distince;
		font-size: 0.14rem;
		color: white;
		.left {
			width: 5.29rem;
			height: 6rem;
			float: left;
		}
		
		.right {
			width: 7rem;
			height: 6rem;
			margin-left: 0.1rem;
			float: left;
		}
	}
</style>