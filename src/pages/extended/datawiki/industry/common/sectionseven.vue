<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">7&nbsp;/</span><span class="title2">陕西销售明细</span>
			
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
		</div>
		
		<div class="content">
			<table-chart :tableData=tableData></table-chart>
		</div>
		<div style="height: 0.15rem;margin-bottom: 0.15rem;margin-left:0.05rem">
			<span class="title2">陕西中烟价类结构表</span>
		</div>
		<div class="content">
			<table-two :tableData=tableDataTwo></table-two>
		</div>
	</box-base>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import tableChart from  './tablesevenone.vue';
	import tableTwo from  './tableseventwo.vue';
	
	export default {
		data() {
			return {
				options: [{"label":"陕西销售明细","value":"01"}],
				tableData: [
					{name: '全国',qtySoldLLY: '500',qtySolyLastYear:"601",qtySOld:"450",qtyAgreement:"650",qtyExec:"450"},
					{name: '陕西中烟小计',qtySoldLLY: '500',qtySolyLastYear:"601",qtySOld:"450",qtyAgreement:"650",qtyExec:"450"},
					{name: '占总销量比重（%）',qtySoldLLY: '500',qtySolyLastYear:"601",qtySOld:"450",qtyAgreement:"650",qtyExec:"450"},
					{name: '好猫',qtySoldLLY: '500',qtySolyLastYear:"601",qtySOld:"450",qtyAgreement:"650",qtyExec:"450"},
					{name: '猴王',qtySoldLLY: '500',qtySolyLastYear:"601",qtySOld:"450",qtyAgreement:"650",qtyExec:"450"},
					{name: '延安',qtySoldLLY: '500',qtySolyLastYear:"601",qtySOld:"450",qtyAgreement:"650",qtyExec:"450"}
				],
				tableDataTwo: [
					{date1: '2013',kind1: '500',kind2:"601",kind3:"450",kind4:"650",kind5:"450",priceTrn:"230",soldPrice:"250",profitRate:"20%"},
					{date1: '2014',kind1: '500',kind2:"601",kind3:"450",kind4:"650",kind5:"450",priceTrn:"232",soldPrice:"252",profitRate:"21%"},
					{date1: '2015',kind1: '500',kind2:"601",kind3:"450",kind4:"650",kind5:"450",priceTrn:"239",soldPrice:"256",profitRate:"23%"},
					{date1: '2016',kind1: '500',kind2:"601",kind3:"450",kind4:"650",kind5:"450",priceTrn:"250",soldPrice:"260",profitRate:"19%"},
					{date1: '2017',kind1: '500',kind2:"601",kind3:"450",kind4:"650",kind5:"450",priceTrn:"255",soldPrice:"261",profitRate:"23%"}
				]
			}
		},
		components: {
			boxBase,
			tableChart,
			tableTwo
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		margin-bottom: 0.13rem;
		.title1{
			color: #2edbff;
			font-size: 30px;
		}
		.title2{
			margin-left: 10px ;
			color: #2edbff;
			font-size: 18px;
		}
		.content{
			margin-left: 0.15rem;
			margin-bottom: 0.13rem;
			margin-right: 0.13rem;
		}
		.reportSpan {
			float: right;
			margin-right:0.15rem;
			padding-top:0.02rem;
			color:black;
		}
	}
	
</style>