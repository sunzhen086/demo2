<template>
	<div class="main cma">
		<div class="topBar">
			<topBar></topBar>
		</div>
		<div class="middle">
			<middle></middle>
		</div>
		<div class="bottom">
			<bottom></bottom>
		</div>
	</div>
</template>

<script>
	import topBar from './common/topBar.vue';
	import middle from './common/middle.vue';
	import bottom from './common/bottom.vue';
	
	export default {
		data() {
			return {
				options: [
					{label: '年累计',value: '年累计'},
					{label: '月累计',value: '月累计'}
				],
				value: '年累计',
				value1:'',
				value2:'',
			}
		},
		components: {
			topBar,
			middle,
			bottom
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
			this.$store.commit('setTopNavStatus', 'overview');
			this.$store.commit('setLeftNavStatus', 'province');
		}
	}

</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

	.main {
		height: 6.7rem;
		color: white;
		
		.topBar {
			height: 0.55rem;
			margin-left: $box-distince;
		}
		
		.middle {
			height: 1.69rem;
			margin-left: -0.01rem;
		}
		
		.bottom {
			height: 4.5rem;
		}
	}
</style>