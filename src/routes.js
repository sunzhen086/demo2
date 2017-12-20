import Vue from 'vue';
import NotFound from './pages/common/404';
//从后端取数的示例
const DynamicDataDemo = resolve => require(['./pages/demo/dynamic-data'], resolve);
//登录页
const Login = resolve => require(['./pages/login/login'], resolve);

//分析平台顶部导航
const TopNav = resolve => require(['./pages/top-nav'], resolve);
//概览--左侧导航
const OverviewLeftNav = resolve => require(['./pages/overview/overview-left-nav'], resolve);
//概览--全国
import Nation from './pages/overview/nation/nation';
//概览--全省
import Province from './pages/overview/province/province';
//概览--地市
import City from './pages/overview/city/city';
//概览--工业
import Vend from './pages/overview/vend/vend';
//概览--价类
import Kind from './pages/overview/kind/kind';
//概览--重点品牌
import KeyBrand from './pages/overview/keybrand/keybrand';

//市场--左侧导航
import MarketLeftNav from './pages/market/market-left-nav';
//市场--市场状态
import Status from './pages/market/status/status';
//市场--市场状态 - 地市
import StatusCity from './pages/market/status/city/statusCity';
//市场--市场异动
import Change from './pages/market/change/change';
//市场--市场策略
import Strategy from './pages/market/strategy/strategy';

//客户--左侧导航
import CustLeftNav from './pages/cust/cust-left-nav';
//客户--客户分布
import Distribute from './pages/cust/distribute/distribute';
//客户--地市客户分布
import DistributeCity from './pages/cust/distribute/city/cityDistribute';
//客户--盈利分析
import Profit from './pages/cust/profit/profit';
//客户--盈利分析-地市
import cityProfit from './pages/cust/profit/city/cityProfit';
//客户--大户分析
import BigCust from './pages/cust/bigcust/bigcust';

//品牌--左侧导航
import BrandLeftNav from './pages/brand/brand-left-nav';
//品牌--品牌分布
import Constitute from './pages/brand/constitute/constitute';
//品牌--品牌表现
import Perform from './pages/brand/perform/perform';
//品牌--细分市场
import Subdivided from './pages/brand/subdivided/subdivided';

//扩展--左侧导航
import ExtendedLeftNav from './pages/extended/extended-left-nav';
//扩展--综合评价
import Complexeval from './pages/extended/complexeval/complexeval';
//扩展--预警中心
import WarnCenter from './pages/extended/warncenter/warncenter';
// 预警中心--问题与规则设置
import WarnCenterSet from './pages/extended/warncenter/warncenterset/warncenterset';
// 预警中心地市
import WarnCenterCity from './pages/extended/warncenter/warncentercity/warncentercity.vue';
// 预警中心问题明细
import WarnCenterDetail from './pages/extended/warncenter/warncenterdetail/warncenterdetail.vue';
//扩展--数据百科
import DataWiki from './pages/extended/datawiki/datawiki';
//扩展--数据百科--搜索列表
import SearchList from './pages/extended/searchlist/searchlist';
//扩展--统计指标
import StatisticalIndex from './pages/extended/statisticalindex/statisticalindex';


//扩展--数据百科--商品
import ItemWiki from './pages/extended/datawiki/item/item';
//扩展--数据百科--客户
import CustWiki from './pages/extended/datawiki/cust/cust';
//扩展--数据百科--工业
import industrywiki from './pages/extended/datawiki/industry/industry';

//报表
//报表--概览--工业--全国省级商业企业相关指标排序表
import comMeasureReport from './pages/report/overview/comMeasureReport.vue';
//报表--概览--全省--地市相关指标排名
import CityQuotaRanking from './pages/report/city/cityQuotaRanking';
//报表--概览--全省--地市各类别销售情况
import CityTypeInfo from './pages/report/city/cityTypeInfo';
//报表--概览--全省--地市各价类销售统计
import CityPriceTypeInfo from './pages/report/city/cityPriceTypeInfo';
//报表--概览--全国--行业销售统计
import nationSale from './pages/report/nation/sale';

//报表--概览--地市--各区县销售整体情况对比
import dptSalesRpt from './pages/report/dpt/dptSalesReport';

//报表中心
import ReportCenter from './pages/reportcenter/reportcenter';

let routes = [
	{
		path: '/',
		name: '陕西省行业数据综合分析系统',
		component: TopNav,
		redirect: { path: 'overview/nation' },
		children: [
			{
				path: 'overview',
				name: '概览',
				component: OverviewLeftNav,
				children: [
					{
						path: 'nation',
						name: '全国',
						component: Nation
					}, 
					{
						path: 'province',
						name: '全省',
						component: Province,
					}, 
					{
						path: 'cityQuotaRanking',
						name: '全省-地市相关指标排名',
						component: CityQuotaRanking,
					}, 
					{
						path: 'cityTypeInfo',
						name: '全省-地市各类别销售情况',
						component: CityTypeInfo,
					}, 
					{
						path: 'cityPriceTypeInfo',
						name: '全省-地市各价类销售统计',
						component: CityPriceTypeInfo,
					}, 
					{
						path: 'city',
						name: '地市',
						component: City,
					}, 
					{
						path: 'vend',
						name: '工业',
						component: Vend
					}, 
					{
						path: 'kind',
						name: '价类',
						component: Kind
					}, 
					{
						path: 'keybrand',
						name: '重点品牌',
						component: KeyBrand
					},{
						path: 'comMeasureReport',
						name: '省级商业企业相关指标排序表',
						component: comMeasureReport
					},
					{
						path: 'nationsale',
						name: '行业销售',
						component: nationSale
					},{
						path: 'dptsalesrpt',
						name: '区县销售',
						component: dptSalesRpt
					}
				]
			}, 
			{
				path: 'market',
				name: '市场',
				component: MarketLeftNav,
				children: [
					{
						path: 'status',
						name: '市场状态',
						component: Status
					}, 
					{
						path: 'statuscity',
						name: '市场状态地市',
						component: StatusCity
					}, 
					{
						path: 'change',
						name: '市场异动',
						component: Change,
					}, 
					{
						path: 'strategy',
						name: '市场策略',
						component: Strategy
					}
				]
			},
			{
				path: 'cust',
				name: '客户',
				component: CustLeftNav,
				children: [
					{
						path: 'distribute',
						name: '客户分布',
						component: Distribute
					}, 
					{
						path: 'citydistribute',
						name: '地市客户分布',
						component: DistributeCity
					}, 
					{
						path: 'profit',
						name: '盈利分析',
						component: Profit,
					}, {
						path: 'cityprofit',
						name: '地市盈利分析',
						component: cityProfit,
					}, 
					{
						path: 'bigcust',
						name: '大户分析',
						component: BigCust
					}
				]
			},
			{
				path: 'brand',
				name: '品牌',
				component: BrandLeftNav,
				children: [
					{
						path: 'constitute',
						name: '品牌分布',
						component: Constitute
					}, 
					{
						path: 'perform',
						name: '品牌表现',
						component: Perform,
					}, 
					{
						path: 'subdivided',
						name: '细分市场',
						component: Subdivided
					}
				]
			},
			{
				path: 'extended',
				name: '扩展',
				component: ExtendedLeftNav,
				children: [
					{
						path: 'complexeval',
						name: '综合评价',
						component: Complexeval
					}, 
					{
						path: 'warncenter',
						name: '预警中心',
						component: WarnCenter,
					}, 
					{
						path: 'warncenterset',
						name: '预警中心问题设置',
						component: WarnCenterSet,
					}, 
					{
						path: 'warncentercity',
						name: '预警中心地市',
						component: WarnCenterCity,
					}, 
					{
						path: 'warncenterdetail',
						name: '预警中心问题明细',
						component: WarnCenterDetail,
					}, 
					{
						path: 'datawiki',
						name: '数据百科',
						component: DataWiki,
						children: [
							
						]
					},
					{
						path: 'industrywiki',
						name: '工业百科',
						component: industrywiki
					},
					{
						path: 'searchlist',
						name: '搜索列表',
						component: SearchList
					},
					{
						path: 'statisticalindex',
						name: '统计指标',
						component: StatisticalIndex
					},
					{
						path: 'itemwiki',
						name: '商品百科',
						component: ItemWiki
					},
					{
						path: 'custwiki',
						name: '客户百科',
						component: CustWiki
					},
				]
			},
			{
				path: 'reportcenter',
				name: '报表中心',
				component: ReportCenter,
				meta: {
					showTopNav: false
				},
				children: [
					{
						path: 'reportcountry',
						name: ' 全国 ',
						meta: {
							showTopNav: false
						},
						children: [
							{
								path: '404',
								name: '全国项目1',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							},
							{
								path: '404',
								name: '全国项目2',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							},
							{
								path: '404',
								name: '全国项目3',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							},
							{
								path: '404',
								name: '全国项目4',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							},
							{
								path: '404',
								name: '全国项目5',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							}
						]
					},
					{
						path: 'reportprovince',
						name: ' 全省 ',
						meta: {
							showTopNav: false
						},
						children: [
							{
								path: '404',
								name: '全省项目1',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							},
							{
								path: '404',
								name: '全省项目2',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							},
							{
								path: '404',
								name: '全省项目3',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							}
						]
					},
					{
						path: 'reportcity',
						name: ' 地市 ',
						meta: {
							showTopNav: false
						},
						children: [
							{
								path: '404',
								name: '地市项目1',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							},
							{
								path: '404',
								name: '地市项目2',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							},
							{
								path: '404',
								name: '地市项目3',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							}
						]
					},
					{
						path: 'reportcounty',
						name: ' 区县 ',
						meta: {
							showTopNav: false
						},
						children: [
							{
								path: '404',
								name: '区县项目1',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							},
							{
								path: '404',
								name: '区县项目2',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							}
						]
					},
					{
						path: 'greport',
						name: ' 自定义报表',
						meta: {
							showTopNav: false
						},
						children: [
							{
								path: '404',
								name: '报表定制',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							},
							{
								path: '404',
								name: '查询条件定制',
								component: NotFound,
								meta: {
									showTopNav: false
								}
							}
						]
					}
				]
			}
		]
	},
	{
		path: '/dynamicdemo',
		name:'dynamicdemo',
		component:DynamicDataDemo,
	},
	{
		path: '/login',
		name:'登录',
		component:Login,
		meta: {
			showTopNav: false
		}
	},
	{
		path: '/404',
		component: NotFound,
		name: '404'
	}, {
		path: '*',
		redirect: {
			path: '/404'
		}
	}
];

routes[0].children.forEach(route => {
  if (route.children) {
    if (!route.meta) route.meta = {};
    route.meta.children = route.children;
  }
});

export default routes;