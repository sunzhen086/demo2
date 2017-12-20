<template>
	<box-base  class="main">
		<div style="height: 0.15rem;margin-bottom: 0.30rem;">
			<span class="title1">1&nbsp;/</span><span class="title2">公司简介</span>
		</div>
		
		<div class="content">
			<div class="message">{{comDescribe1}}</div>
			<div class="message">{{comDescribe2}}</div>
			<div class="message">{{comDescribe3}}</div>
		</div>
	</box-base>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	
	export default {
		data() {
			return {
				showHeader: false,
				comDescribe1: "    陕西中烟工业有限责任公司组建于2003年12月，隶属于国家烟草专卖局（中国烟草总公司）。2005年12月8日，陕西中烟工业有限责任公司顺利完成管理体制改革，正式挂牌成立。标志着陕西烟草工业步入了规模化经营、一体化管理的新运作模式，进入了更高起点、更高水平的发展阶段。",
		        comDescribe2: "    目前，陕西中烟工业有限责任公司拥有宝鸡卷烟厂、延安卷烟厂、汉中卷烟厂、旬阳卷烟分厂、澄城卷烟分厂五个卷烟加工企业和一个卷烟材料厂，现有职工8000多人，总资产80亿元。公司自成立以来，利税连年递增，2008年实现工业总产值91.85亿元，销售收入89.77亿元，税利55.05亿元，其中利润11.51亿元。",
		        comDescribe3: "    在激烈的市场竞争中，公司“好猫”、“猴王”、“延安”三大主导品牌被列入全国卷烟百牌号目录。其中“好猫”品牌2008年被国家局列为重点骨干品牌。2008年全系统共生产卷烟772.5亿支，产品畅销全国各地。"
			}
		},
		components: {
			boxBase
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
			//width: 10.46rem;
			margin-left: 0.15rem;
			margin-bottom: 0.13rem;
			margin-right: 0.13rem;
			line-height:30px;
			div.message{				
				text-indent: 2em; 
			}
		}
	}
		
	
</style>