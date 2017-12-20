<template>
	<div class="link-button" @click="clickBtn()"></div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		methods:{
			clickBtn: function () {
				this.$emit('on-click', event);
			}	
		}
	}
</script>

<style lang="scss" scoped>

.link-button {
	width: 33px;
	height: 28px;
	border: 0;
	background: url(../../static/img/overview/province/tableBtn.png);
	
	&.active,&:hover{
		background: url(../../static/img/common/jumpBtnHover.png);
		cursor:pointer;
	}
}






</style>