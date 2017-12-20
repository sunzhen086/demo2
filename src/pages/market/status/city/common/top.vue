<template>
	<div class="main-top">
		<div class="top-left left">单位：</div>
		<div class="top-mid left">
			<el-select v-model="cityId" placeholder="请选择" 
				size="small"
				class="left cma mid-item item-select" popper-class="cma-select">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
		</div>
		<div class="top-left left">时间：</div>
		<div class="top-mid left">
		    <el-date-picker
		      v-model="month"
		      type="month"
		      size="small"
		      placeholder=""
		      format="yyyy-MM"
		      class="cma mid-item item-date left">
		    </el-date-picker>	   
		</div>
		<div class="top-search left">
			 <el-button type="primary" class="cma mid-item item-search left" size="small" icon="search" v-on:click="doSearch">查询</el-button>			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [
					{label: '西安',value: '西安市'},
					{label: '铜川',value: '铜川市'},
					{label: '宝鸡',value: '宝鸡市'},
					{label: '咸阳',value: '咸阳市'},
					{label: '渭南',value: '渭南市'},
					{label: '延安',value: '延安市'},
					{label: '汉中',value: '汉中市'},
					{label: '榆林',value: '榆林市'},
					{label: '安康',value: '安康市'},
					{label: '商洛',value: '商洛市'},
					{label: '杨凌',value: '杨凌市'}
				],
				cityId:"",
				month:""
			}
		},
		computed: {
			search() {
				return this.$store.state.markStatusCity.search;
			}
		},
		methods:{
			doSearch:function(){
				this.$store.commit('setMarketStatusCitySearch', this.getSearchObj());
			},
			getSearchObj:function(){
				var self=this,cityId = self.cityId,cityName = cityId;
				self.options.forEach(function(item,i){
					if(item.value == cityId){
						cityName = item.label;
					}
				});
				return  {
					city:{
						id:cityId,
						name:cityName
					},
					period:{
						value:self.month
					}
				};
			}
		},
		created(){
			this.cityId = this.$route.query.cityId || this.search.city.id;
			this.month = this.search.period.value;
		},
		mounted(){
			this.doSearch();
		}

	}
</script>

<style lang="scss" scoped>
	.left{
		float: left;
	}
	.main-top{
		min-height: 50px;
		padding-top: 0.15rem;
	}
	.top-left{
		margin-left: 0.3rem;
		font-size: 0.16rem;
		margin-top:0.08rem;
	}
	.top-mid{		
		.mid-item{
			margin-left: 0.1rem;	
		}
		.item-select{
			width: 0.9rem;
		}
		.item-date{
			width: 1.2rem;
		}
	}
	.top-search{
		margin-left: 0.3rem;
	}
</style>
