<template>
	<div class="main cma">
		<sectiontop></sectiontop>
		<div class="main-body left">
			<div class="left-part left">
				<sectionleft v-on:clickRow="warnInfoRecieve" :tableData=tableData></sectionleft>
			</div>
			<div class="right-part left">
				<sectionright :warnInfo="warnInfo"></sectionright>
			</div>
		</div>
	</div>
</template>

<script>
	import sectiontop from './common/sectiontop.vue';
	import sectionleft from './common/sectionleft.vue';
	import sectionright from './common/sectionright.vue';

	export default {
		data() {
			return {
				tableData: [{
					seq: "1",
					warnLevel: "一般",
					warnType: "客户",
					warnDesc: "5月份客户流失率超过1.3%",
					warnReply: "分析流失客户数据，是否正常注销；调研流失客户，分析实际原因；分析流失影响，是否包括贡献度大的客户",
					warnRule: "严重：超过1.5%  一般：超过1.3%   较轻：超过1%"
				},{
					seq: "2",
					warnLevel: "严重",
					warnType: "市场",
					warnDesc: "有14个规格市场状态松，零售价格指数低于0.95",
					warnReply: ""
				},{
					seq: "3",
					warnLevel: "一般",
					warnType: "市场",
					warnDesc: "有11个规格市场状态稍松，价格指数>=0.95且<0.98;有1个规格市场状态紧，价格指数>1.03",
					warnReply: ""
				},{
					seq: "4",
					warnLevel: "一般",
					warnType: "市场",
					warnDesc: "",
					warnReply: ""
				},{
					seq: "5",
					warnLevel: "较轻",
					warnType: "品牌",
					warnDesc: "",
					warnReply: ""
				},{
					seq: "6",
					warnLevel: "较轻",
					warnType: "品牌",
					warnDesc: "",
					warnReply: ""
				},{
					seq: "7",
					warnLevel: "较轻",
					warnType: "销售收入",
					warnDesc: "",
					warnReply: ""
				},{
					seq: "8",
					warnLevel: "较轻",
					warnType: "销售收入",
					warnDesc: "",
					warnReply: ""
				},{
					seq: "9",
					warnLevel: "较轻",
					warnType: "销售收入",
					warnDesc: "",
					warnReply: ""
				},{
					seq: "10",
					warnLevel: "较轻",
					warnType: "销售收入",
					warnDesc: "",
					warnReply: ""
				},{
					seq: "11",
					warnLevel: "较轻",
					warnType: "销售收入",
					warnDesc: "",
					warnReply: ""
				}],
				warnInfo:{
					seq: "1",
					warnLevel: "一般",
					warnType: "客户",
					warnDesc: "5月份客户流失率超过1.3%",
					warnReply: "分析流失客户数据，是否正常注销；调研流失客户，分析实际原因；分析流失影响，是否包括贡献度大的客户",
					warnRule: "严重：超过1.5%  一般：超过1.3%   较轻：超过1%"
				}
			}
		},
		components: {
			sectiontop,
			sectionleft,
			sectionright
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'extended');
			this.$store.commit('setLeftNavStatus', 'warncenter');
		},
		methods:{
			warnInfoRecieve:function(clickRow){
				this.warnInfo = clickRow;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		margin-left:0.15rem;
		font-size: 0.14rem;
		color: white;
		
		.left{
			float: left;
		}
		.main-body{
			overflow: hidden;
			.left-part{
				width: 6.3rem;
			}
			.right-part{
				width: 6.8rem;
				margin-left: 0.15rem;
			}
		}
	}
</style>