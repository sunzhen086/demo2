<template>
  <section class="db">
    <template>
      <!-- header start  -->
      <header class="db-header">
      	<div class='db-logo'>
      		<router-link to="/reportcenter">
      			<i class="fa fa-clipboard" aria-hidden="true"></i> 陕西省行业数据综合分析报表中心
      		</router-link>
      	</div>
      </header>
      <!-- header end  -->

      <!-- body start  -->
      <div class="db-body">

        <!-- menu start -->
        <aside class="db-menu-wrapper">
          <el-menu class="db-menu-bar" router>
            <template v-for="(route, index) in $route.meta.children">
              <template v-if="route.children && route.name">
                <el-submenu :index="route.name">
                  <template slot="title"><i class="fa fa-folder" aria-hidden="true"></i> {{route.name}}</template>
                  <el-menu-item :index="cRoute.name" v-for="(cRoute, cIndex) in route.children" :route="cRoute">
                  	<i class="fa fa-file-text-o" aria-hidden="true"></i> {{cRoute.name}}
                  </el-menu-item>
                </el-submenu>
              </template>

              <template v-if="!route.children && route.name">
                <el-menu-item :index="route.name" :route="route"><i class="fa fa-file-text-o" aria-hidden="true"></i> {{route.name}}</el-menu-item>
              </template>
            </template>
          </el-menu>
        </aside>
        <!-- menu end -->

        <!-- content start -->
        <div class="db-content-wrapper">
          <section class="db-content">
          	<div class="db-welcomePage">
          		<div class="db-searchDiv">
          			<div class='db-searchTitle'>报 表 搜 索</div>
								<el-input class="db-SearchInput cma" :placeholder="ph" size="large"></el-input>
								<el-button type="primary" class="db-SearchBtn cma mid-item item-search left" size="large" @click="">搜 索</el-button>
								<tab-base class="db-SearchTab" :option=searchOption @tab-click="changeSearchRange"></tab-base>
          		</div>
          		
          		<div class="db-personalPanel">
          			<div class="db-ppHead">
          				<tab-base class="db-ppHeadTab" :option=personalPanel @tab-click="ppTabClick"></tab-base>
          			</div>
          			<div class="db-ppBody">
          				<div class="offenUseReport" v-if="showTabNum=='tab1'">
          					<ul>
          						<li><i class="fa fa-file-text-o" aria-hidden="true"></i> 各地市各价类销售统计</li>
          						<li><i class="fa fa-file-text-o" aria-hidden="true"></i> 各地市各类别销售情况统计</li>
          						<li><i class="fa fa-file-text-o" aria-hidden="true"></i> 全国省级商业企业相关指标统计分析</li>
          						<li><i class="fa fa-file-text-o" aria-hidden="true"></i> 各地市市场状态统计</li>
          						<li class="moreReport">更多……</li>
          					</ul>
          				</div>
          				
          				<div class="myCollectReport" v-if="showTabNum=='tab2'">
          					<ul>
          						<li><i class="fa fa-file-text-o" aria-hidden="true"></i> 各地市客户分布统计</li>
          						<li><i class="fa fa-file-text-o" aria-hidden="true"></i> 全省户均盈利情况统计分析</li>
          						<li><i class="fa fa-file-text-o" aria-hidden="true"></i> 全省销量前 15 品牌销售情况统计分析</li>
          						<li class="moreReport">查看全部</li>
          					</ul>
          				</div>
          			</div>
          		</div>
          	</div>
            <router-view></router-view>
          </section>
        </div>
        <!-- content end -->
      </div>
      <!-- body end  -->
    </template>
  </section>
</template>

<script>
	import tabBase from 'components/tab/tab-base.vue';
	
export default {
  data() {
    return {
    	ph: '搜索全部内容',
    	phData: {
    		'tab1': '搜索全部内容',
    		'tab2': '在“全国”范围内搜索',
    		'tab3': '在“全省”范围内搜索',
    		'tab4': '在“地市”范围内搜索',
    		'tab5': '在“区县”范围内搜索'
    	},
    	showTabNum: 'tab1',
      searchOption: {
					data:[
						{
							key: 'tab1',
							text: '全部'
						},
						{
							key: 'tab2',
							text: '全国'
						},
						{
							key: 'tab3',
							text: '全省'
						},
						{
							key: 'tab4',
							text: '地市'
						},
						{
							key: 'tab5',
							text: '区县'
						}
					],
					activePane:'tab1'
				},
				personalPanel: {
					data:[
						{
							key: 'tab1',
							text: '常用报表'
						},
						{
							key: 'tab2',
							text: '我的收藏'
						}
					],
					activePane:'tab1'
				}
    };
  },
  components: {
		tabBase
	},
  created() {
  	
  },
  methods: {
  	changeSearchRange: function(tab) {
  		this.ph = this.phData[tab];
  	},
  	ppTabClick: function(activePane) {
  		this.showTabNum = activePane;
  	}
  }
 }
</script>

<style lang="scss">
.db {
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: white;
	
  .el-dropdown-menu {
    margin-top: 20px;
  }
  // header
  .db-header {
    width: 100%;
    height: 0.6rem;
    background: #20A0FF;
    padding: 0.13rem 0.2rem;
    box-sizing: border-box;
    color: #ffffff;
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;

    .db-logo{
      font-size: 0.24rem;
      margin-top: 0.03rem;
      margin-left: 0.2rem;
    }
    
  }

  // body
  .db-body {

    // menu
    .db-menu-wrapper {
      position: fixed;
      left: 0;
      top: 60px;
      height: 100%;
      overflow: auto;
      z-index: 98;

      .db-menu-bar {
        height: 100%;
        flex-grow: 0;
        width: 2rem;
      }
    }

    // content
    .db-content-wrapper {
      width: 100%;
      z-index: 97;
      box-sizing: border-box;
      padding: 60px 0px 0px 200px;

      .db-content {
      	
        .db-welcomePage {
        	color: #64B72F;
        	font-size: 0.55rem;
        	width: 100%;
        	position: fixed;
		      left: 2rem;
		      top: 0.6rem;
		      height: 100%;
		      overflow: auto;
		      z-index: 97;
        	/*background: url(../../static/img/reportcenter/welcome.jpg) no-repeat;
        	background-size: contain;*/
        	background-color: white;
        	
        	.db-searchDiv {
        		width: 6rem;
        		margin-left: 2.34rem;
        		margin-top: 0.75rem;
        		font-size: 0.15rem;
        		
        		.db-searchTitle {
        			width: 1.8rem;
        			height: 0.35rem;
        			color: #20A0FF;
        			margin: 0.1rem auto;
        			font-size: 0.3rem;
        		}
        		
        		.db-SearchInput {
        			width: 80%;
        			margin: 0;
        			float: left;
        			
        			input {
        				border: #20A0FF 2px solid;
        				color: black;
        				background-color: white;
        				border-right: none;
        			}
        		}
        		
        		.db-SearchBtn {
        			width: 20%;
        			margin-left: -0.02rem;
        			float: left;
        			background-color: #20A0FF;
        			border: 2px #20A0FF solid;
        		}
        		.db-SearchBtn:hover {
        			background-color: rgb(17, 85, 238);
        			border: rgb(17, 85, 238) 2px solid;
        			color: white;
        		}
        		
        		.tab {
        			border: none;
        			
        			.active {
        				color: #000;
        			}
        			li {
        				width: 0.3rem;
        				padding: 0;
        				margin: 0.1rem 0.15rem;
        				color: #20A0FF;
        				background: none;
        			}
        			li:hover {
        				text-decoration: underline;
        			}
        		}
        	}
        	
        	.db-personalPanel {
        		width: 8rem;
        		height: 3rem;
        		margin-left: 1.35rem;
        		margin-top: 1.25rem;
        		
        		.db-ppHead {
        			height: 0.5rem;
        			width: 8rem;
        			
        			.tab {
        				border: none;
        				font-size: 0.2rem;
        				
        				.active {
        					border-bottom: 0.02rem solid white;
        				}
        				
        				li {
        					height: 0.4rem;
        					line-height: 0.38rem;
        					border: 0.02rem #20A0FF solid;
        					margin-right: -0.02rem;
        					color: #20A0FF;
        					background-color: #fff;
        				}
        			}
        		}
        		
        		.db-ppBody {
        			height: 2.1rem;
        			width: 7.96rem;
        			border: 0.02rem #20A0FF solid;
        			background-color: white;
        			
        			.moreReport {
        				font-size: 0.13rem;
        			}
        			
        			.offenUseReport {
        				width: 100%;
        				height: 100%;
        				
        				ul {
        					width: 4.5rem;
        					margin-top: 0.15rem;
        					margin-left: 0.5rem;
        					color: grey;
        					font-size: 0.15rem;
        					
        					li {
        						line-height: 0.3rem;
        						margin-top: 0.06rem;
        					}
        					li:hover {
        						color: #20A0FF;
        						/*text-decoration: underline;*/
        						cursor: pointer;
        					}
        				}
        			}
        			.myCollectReport {
        				width: 100%;
        				height: 100%;
        				
        				ul {
        					width: 4.5rem;
        					margin-top: 0.15rem;
        					margin-left: 0.5rem;
        					color: grey;
        					font-size: 0.15rem;
        					
        					li {
        						line-height: 0.3rem;
        						margin-top: 0.06rem;
        					}
        					li:hover {
        						color: #20A0FF;
        						cursor: pointer;
        					}
        				}
        			}
        		}
        	}
        }

        .db-content-inner {
          padding: 30px 0px;
        }
      }
    }
  }
}
</style>
