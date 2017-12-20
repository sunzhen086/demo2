<template>
	<div class="main-top">
		<div class="top-mid left">
		    <div class="left searchContent">
				西安市共有 <span class="numSpan">11</span>  个问题，
				其中严重 <span class="numSpan">1</span> 个，
				一般 <span class="numSpan">3</span> 个，
				较轻 <span class="numSpan">7</span> 个。
		    </div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				warnNum: '11',
				generalWarnNum:'4',
				lightWarnNum:'7',
			}
		}
	}
</script>

<style lang="scss" scoped>
	.left{
		float: left;
	}
	.main-top{
		min-height: 0.5rem;
		line-height: 0.5rem;
		font-size: 0.16rem;
		margin-left:0.2rem;
	}
	.top-mid{
	}
	
	.numSpan{
		color: rgb(254,149,2);
		font-size: 0.2rem;
		font-weight: bold;
	}
</style>
