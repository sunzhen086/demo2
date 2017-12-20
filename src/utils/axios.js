import {baseUrl} from 'config/config'

import axios from 'axios';

// 创建实例时设置配置的默认值
let instance = axios.create({
	baseURL: baseUrl,
	timeout:30000
});

export default instance;