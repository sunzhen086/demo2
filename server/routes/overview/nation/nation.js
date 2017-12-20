module.exports = (router) => {
	//Mock资料：https://github.com/nuysoft/Mock/wiki/Basic
	var Mock = require('mockjs');
	var Random = Mock.Random;

	router.get('/overview/nation/getChinaMapData', function(req, res, next) {
		var queryKey = req.query.queryKey;
		var result = [];
		var cityArr = ["上海", "云南", "内蒙古", "北京", "吉林", "四川", "大连", "天津", "宁夏", "安徽", "山东", "山西", "广东", "广西", "新疆", "江苏", "江西", "河北", "河南", "浙江", "海南", "深圳", "湖北", "湖南", "甘肃", "福建", "西藏", "贵州", "辽宁", "重庆", "陕西", "青海", "黑龙江"];
		cityArr.forEach(function(item){
			if(queryKey == "saleQty"){
				result.push({
					name:item,
					value:Random.float(-20,20,2,2),
					cur:Random.float(2,90,2,2),
					same:Random.float(2,90,2,2)
				})
			}else if(queryKey == "saleAmt"){
				result.push({
					name:item,
					value:Random.float(-20,20,2,2),
					cur:Random.float(8,300,2,2),
					same:Random.float(8,300,2,2)
				})
			}else if(queryKey == "avePrice"){
				result.push({
					name:item,
					value:Random.float(-20,20,2,2),
					cur:Random.float(2,5,2,2),
					same:Random.float(2,5,2,2)
				})
			}
		});
		
		setTimeout(function(){
			res.json({
				code: 200,
				message: "请求成功",
				result:result
			})
		},Random.integer(0,2000))

	});
	
	
	router.get('/overview/nation/getInfoBoxData', function(req, res, next) {
		var queryKey = req.query.queryKey;
		var result = {};
		if(queryKey == "saleQty"){
			result = {
				increaseUnitCount: 6, 
				decreaseUnitCount: 27, 
				provinceSameRate: -19.27, 
				provinceRank: 32, 
				provinceSameRankRise: 1 
			}
		}else if(queryKey == "saleAmt"){
			result = {
				increaseUnitCount: 9, 
				decreaseUnitCount: 24, 
				provinceSameRate: -22.67, 
				provinceRank: 32, 
				provinceSameRankRise: 1 
			}
		}else if(queryKey == "avePrice"){
			result = {
				increaseUnitCount: 20, 
				decreaseUnitCount: 13, 
				provinceSameRate: -4.3, 
				provinceRank: 26, 
				provinceSameRankRise: 2 
			}
		}

		setTimeout(function(){
			res.json({
				code: 200,
				message: "请求成功",
				result:result
			})
		},Random.integer(0,3000))
	});
}