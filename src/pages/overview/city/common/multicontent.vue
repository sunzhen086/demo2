<template>
	<div class="multicontent">
	  	<span class="main-content">{{formatValue}}</span>
	  	<template  v-if="rate != 0">
	  		<i class='icon-style fa' :class="[rate > 0 ? 'fa-arrow-up up-color' : 'fa-arrow-down down-color']" ><span>{{rate}}</span></i>
	  	</template >
		<template  v-else>
			<i class='icon-style fa fa-arrow-right'>{{rate}}</i>
		</template >
	</div>
</template>

<script>
	export default {
		props: {
			content: String,
			rate: Number,
			percentFlag:{type:Number, default: 1},
			formatFlag: {type:Boolean, default: false}
		},
		data() {
			return {
				formatValue: '',
			}
		},
		watch:{
			value:function(){
				this.formatValue = this.formatNumber();
			}
		},
		computed:{
			value:function(){
				this.formatValue = this.formatNumber();
			}
		},
		methods:{
			formatNumber: function() {
				var formatValue, value = this.content;
				if(this.formatFlag) {
					formatValue = (value || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
				} else {
					formatValue = value;
				}
				return formatValue;
			}
		}
	}
</script>

<style lang="scss" scoped>

.multicontent {
	.main-content {
		display:inline-block;
		border: 0;
	  	color: #FFFFFF;
	  	text-align: right;
	}
	
	.icon-style {
		margin-left: 0.01rem;
	}
	
	.up-color {
		color: #1afb28;
	}
	
	.down-color {
		color: #ff0000;
	}
}
</style>