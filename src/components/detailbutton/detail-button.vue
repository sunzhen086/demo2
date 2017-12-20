<template>
	<div class="detail-button" @click="clickBtn()" :class="{active:this.showTable===1}"></div>
</template>

<script>
	export default {
		data() {
			return {
				showTable: 0
			}
		},
		methods:{
			clickBtn: function () {
				this.showTable = 1-this.showTable;
				this.$emit('on-click', event);
			}	
		}
	}
</script>

<style lang="scss" scoped>

.detail-button {
	background: url(../../static/img/overview/province/tableBtn.png);
	width: 33px;
	height: 28px;
	border: 0;
	&.active,&:hover{
		background: url(../../static/img/overview/province/tableBtnHover.png);
		cursor:pointer;
	}
}






</style>