module.exports = (router) => {
	router.all('/system/login', function(req, res, next) {
		res.json({
			code: 200,
			msg: "请求成功",
			data: {
				userId: 'admin',
				userName: '测试用户'
			}
		});
	});
}