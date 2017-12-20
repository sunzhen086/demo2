<template>
	<div :style="itemsClass">
		{{current}}
	</div>
</template>

<script>
	export default {
		props: {
			range: Array,
			current: Number,
			align:{type:String, default: 'left'},
			color:{type:String,default:'rgb(0,96,255)'}
		},
		computed: {
			itemsClass: function() {
				var min = this.range[0];
				var max = this.range[1];
				var current = this.current;
				var minWidth = (current + '').length / 10; //最小宽度
				var maxWidth = 1.2;
				//按比例设置宽度
				var width = ((maxWidth-minWidth)/(max-min))*current +minWidth;
				return {
					minWidth: minWidth + 'rem',
					maxWidth: maxWidth + 'rem',
					width:width+'rem',
					backgroundColor: this.color,
					float: this.align,
					paddingLeft:'0.1rem',
					paddingRight:'0.1rem',
					height:'0.18rem',
					lineHeight:'0.18rem',
					//textAlign:'center'
				};
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>

</style>