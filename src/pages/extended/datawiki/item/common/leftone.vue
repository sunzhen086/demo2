<template>
	<div class="main">
		<div class="top">
			<div class="topLeft">
			</div>
			<div class="topMidd">
				{{itemName}}
			</div>
			<div class="topRight">
			</div>
			<div class="prinBtn">
				<print-btn></print-btn>
			</div>
		</div>
		
		<box-base style="height: 3.55rem;">
			<div style="height: 0.15rem;margin-bottom: 0.30rem;">
				<span class="title1">1&nbsp;/</span><span class="title2">基础信息</span>
			</div>
			
			<div class="leftContent"></div>
			<div class="rightContent">
				<el-table class="cma-extend row-height-35" :show-header=false :data="tableData"  >
					<el-table-column align="right" :show-overflow-tooltip=true min-width="100" >
						<template scope="scope">
							<div class="muti">
								{{scope.row.key1}}
							</div>
						</template>
					</el-table-column>
					<el-table-column  align="left" :show-overflow-tooltip=true min-width="106">
						<template scope="scope">
							<div class="muti">
								{{scope.row.value1}}
							</div>
						</template>
					</el-table-column>
					<el-table-column   align="right" :show-overflow-tooltip=true   min-width="120">
						<template scope="scope">
							<div class="muti">
								{{scope.row.key2}}
							</div>
						</template>
					</el-table-column>
					<el-table-column  align="left" :show-overflow-tooltip=true min-width="106">
						<template scope="scope">
							<div class="muti">
								{{scope.row.value2}}
							</div>
						</template>
					</el-table-column>
					<el-table-column  align="right" :show-overflow-tooltip=true min-width="120">
						<template scope="scope">
							<div class="muti">
								{{scope.row.key3}}
							</div>
						</template>
					</el-table-column>
					<el-table-column align="left" :show-overflow-tooltip=true min-width="190">
						<template scope="scope">
							<div class="muti">
								{{scope.row.value3}}
							</div>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</box-base>
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import printBtn from 'components/printbutton/print-btn.vue';
	
	export default {
		data() {
			return {
				
				itemName:'中华（软）',
				showHeader: false,
				tableData: [{
					key1: '入网日期 ',
					value1: '20140101',
					key2: '品牌系列',
					value2: '中华',
					key3: '品牌拥有者',
					value3: '上海烟草集团有限责任公司'
				},{
					key1: '条包条形码 ',
					value1: '6901028075022',
					key2: ' 盒包装条形码   ',
					value2: '6901028075770',
					key3: '箱包装条形码 ',
					value3: '6901028075787'
				},{
					key1: '焦油含量 ',
					value1: '11mg',
					key2: '烟气烟碱',
					value2: '1.0mg',
					key3: '一氧化碳 ',
					value3: '11mg'
				},{
					key1: '烟支规格',
					value1: '84mm软',
					key2: ' 烟支周长 ',
					value2: '24mm',
					key3: '产品类型',
					value3: '烤烟型'
				},{
					key1: ' 是否异型烟 ',
					value1: '否',
					key2: '是否细支烟 ',
					value2: '否',
					key3: ' 是否天价烟 ',
					value3: '否'
				},{
					key1: ' 价类 ',
					value1: '一类',
					key2: ' 品类',
					value2: '',
					key3: '价位段',
					value3: '[600,800)'
				},{
					key1: ' 调拨价 ',
					value1: '379.5元',
					key2: ' 批发价',
					value2: '583元',
					key3: '建议零售价',
					value3: '700元'
				}]
				
			}
		},
		components: {
			boxBase,
			printBtn
		}
		
	}
</script>

<style lang="scss" scoped>
	.main{
		height: 4.7rem;
		width: 9.5rem;
		margin-bottom: 0.1rem;
		.top{
			margin-bottom: 0rem;
			overflow:hidden;
			.topLeft{
				width:0.64rem;
				height:0.76rem;
				float:left;
				background:url(../../../../../static/img/extended/datawiki/cust/t1.png) no-repeat top left;
			}
			.topMidd{
				height:0.76rem;
				color: white;
				/*color:#2edbff;*/
				font-size:0.24rem;
				font-weight: 700;
				float:left;
				line-height:0.76rem;
				margin-left: -18px;
			}
			.topRight{
				width:3.3rem;
				height:0.76rem;
				float:left;
				background:url(../../../../../static/img/extended/datawiki/cust/t2.png) no-repeat bottom right;
				margin-left:0.20;
			}
			
		}
		.title1{
			color: #2edbff;
			font-size: 0.30rem;
		}
		.title2{
			margin-left: 0.10rem ;
			color: #2edbff;
			font-size: 0.18rem;
		}
		.leftContent{
			width:1.5rem;
			height:2.42rem;
			margin-left: 0.15rem;
			margin-top: 0.1rem;
			float:left;
			background: url(../../../../../static/img/extended/datawiki/item/bg1.png);
			background-size:100% 100%;
		}
		.rightContent{
			width: 7.42rem;
			margin-top: 0.1rem;
			margin-right:0.13rem ;
			float:right;
			.muti{
				font-size: 14px;
				margin-left: -12px;
				margin-right: -12px;
			}
		}
		.prinBtn{
			float:right;
			margin-bottom:0.1rem ;
			margin-top: 0.7rem;
		}
	}
</style>