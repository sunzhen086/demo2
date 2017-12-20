/**
 * 配置编译环境和线上环境之间的切换
 * baseUrl: 域名地址
 */

let baseUrl = ''; 
if (process.env.NODE_ENV == 'development') {
	baseUrl = "/test";
}else if(process.env.NODE_ENV == 'production'){
	baseUrl = "/cma_s/restful";
}

export {
	baseUrl
}