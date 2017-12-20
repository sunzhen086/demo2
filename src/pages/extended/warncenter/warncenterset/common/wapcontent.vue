<template>
	<div class="row" >
		<p v-for="item in wap(content)">
			{{item}}
		</p>
	</div>
</template>

<script>
	export default {
		props: {
			content: String
		},
		computed: {
		},
		data() {
			return {

			}
		},
		methods: {
			wap: function(content) {
				if(content) {
					return content.split("\n");
				} else {
					return [];
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.row{
		text-align:left;
		padding-left: 0.1rem;
	}
</style>