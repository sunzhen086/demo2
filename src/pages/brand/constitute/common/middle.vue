<template>
	<box-base>
		<div slot="box-title">
			<p class="title">规格分布</p>
		</div>
		<div slot="box-extend">
			<p>
				<tab-base :option=tabOption @tab-click="tabClick" class="tabClass"></tab-base>
			</p>
		</div>

		<div class="content">
			<kindTable v-if="tabOption.activePane == 'kind'"></kindTable>
			<vendTable v-if="tabOption.activePane == 'vend'"></vendTable>
		</div>
	</box-base>
</template>

<script>
	import boxBase from 'components/box/box-base.vue';

	import tabBase from 'components/tab/tab-base.vue';

	import kindTable from './kindTable.vue';
	import vendTable from './vendTable.vue';

	export default {
		data() {
			return {
				tabOption: {
					data: [{
						key: 'kind',
						text: '品类'
					}, {
						key: 'vend',
						text: '工业'
					}],
					activePane: 'kind'
				}
			}
		},
		components: {
			boxBase,
			tabBase,
			kindTable,
			vendTable
		},
		methods: {
			tabClick: function(curTab) {
				this.tabOption.activePane = curTab;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 4.17rem;
		margin-left: 0.02rem;
		margin-right: 0.02rem;
		margin-top: 0.1rem;
	}
</style>