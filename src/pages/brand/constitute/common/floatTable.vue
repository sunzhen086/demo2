<template>
	<div>
		<el-table class="cma row-height-35" :show-header="true" :data="tableData">
			<el-table-column label="竞争类型" prop='col1' align="center" width='95'>
			</el-table-column>
			<el-table-column label="判断标准" prop='col2' align="left" header-align="center">
			</el-table-column>
			<el-table-column label="特点" prop='col3' align="left" header-align="center">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					col1: '完全独占型',
					col2: '第一名市场占有率超过73.9%',
					col3: '第１位品牌具有绝对优势'
				}, {
					col1: '绝对独占型',
					col2: '第一名的市场占用率已超过预定目的值41.7％，其占有率大于第二名1.7倍。',
					col3: '第1位品牌大幅领先，通常会受益，处于2、3位的必须联合起来才有获胜机会'
				}, {
					col1: '二大寡占型',
					col2: '前二名的占有率总和超过73.9％；前二名的占有率之比在1.7以下',
					col3: '第1位和第2位品牌展开激烈的竞争，第三位如果展开差异化战略，则可坐收渔翁之利。所以对于第1、第2位而言，第3位品牌就是重点攻击对象'
				}, {
					col1: '相对寡占型',
					col2: '前三位的占有率总和超过73.9％(上限目的值)；第二名和第三名相加便可上升到第一名，1-3名的市场占有率的比例在1.7以内',
					col3: '三足鼎立的作战'
				}, {
					col1: '分散型',
					col2: '第一名品牌的占有率在目标下限26％以下；各品牌的市场占有率的距离在3％以内，因此各品牌的占有率的比值均在1.7以下',
					col3: '各品牌变动可能性极大，谁投入资源都可能改变竞争格局。'
				}]
			}
		}
	}
</script>

<style>

</style>