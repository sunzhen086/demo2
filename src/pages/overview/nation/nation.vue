<template>
	<div class="main cma">
		<top @showTable='realTime'></top>
		<div class="main-body">
		  	<div class="left-part left">
		  		<leftone></leftone>
		  		<lefttwo></lefttwo>
		  		<leftthree></leftthree>
		  	</div>
		  	<div class="middle-part left" v-if='!middleRealTime'>
				<middle @show-table="showTable"></middle>		  	
		  	</div>
		  	<div class='middle-part left' v-if='middleRealTime'>
		  		<middleRealTime></middleRealTime>
		  	</div>
		  	<div class="right-part left" v-if = "!tableShow">
		  		<rightone></rightone>
		  		<righttwo></righttwo>
		  		<rightthree></rightthree>
		  	</div>
		  	<div class="right-part left" v-if = "tableShow">
		  		<rightTable :tableData='tableData'></rightTable>
		  	</div>
		</div>
		<!--<bottomPart></bottomPart>-->
	</div>
	
</template>

<script>
	import boxBase from 'components/box/box-base.vue';
	import top from './common/top.vue';
	import leftone from './common/leftone.vue';
	import lefttwo from './common/lefttwo.vue';
	import leftthree from './common/leftthree.vue';
	import middle from './common/middle.vue';
	import rightone from './common/rightone.vue';
	import righttwo from './common/righttwo.vue';
	import rightthree from './common/rightthree.vue';
	import rightTable from './common/rightTable.vue';
	import bottomPart from './common/bottomPart.vue';
	import middleRealTime from './common/middleRealTime.vue';
	
	export default {
		data() {
			return {
				tableShow:false,
				tableData:null,
				middleRealTime: false
			}
		},
		components: {
			boxBase,
			top,
			leftone,
			lefttwo,
			leftthree,
			middle,
			rightone,
			righttwo,
			rightthree,
			rightTable,
			bottomPart,
			middleRealTime
		},
		methods:{
			showTable:function(param){
				if(param.active != undefined){
					this.tableShow = param.active;
				}
				this.tableData = param.data;
			},
			realTime: function() {
				this.middleRealTime = !this.middleRealTime;
			}
		},
		mounted: function() {
			this.$store.commit('setTopNavStatus', 'overview');
			this.$store.commit('setLeftNavStatus', 'nation');
		}
	}

</script>

<style lang="scss" scoped>
	@import "../../../styles/variables.scss";
	.main{
		font-size: 0.14rem;
		color:#fff;
		height: 100%;
		padding-left:$box-distince;
		.left{
			float: left;
		}
		.main-body{
			overflow:hidden;
			.left-part{
				width: 3rem;
			}
			.middle-part{
				width: 6.2rem;
				margin-left: $box-distince;
			}
			.right-part{
				width: 3rem;
				margin-left: $box-distince;
			}
		}
	}
	
/*	.cma {
		.el-select {
		    .el-input {
		        .el-input__icon {
		            color: aqua ;
		        }
		    }
		}
	}
	

    
.el-select-dropdown {
    background-color: blue !important;
        
}*/
</style>