
/**
 *    获取随机数
 */
const getRandom = (min, max, scale) => {
  scale = scale == undefined ? 0 : scale;
  var ret = (Math.random() * (max - min) + min).toFixed(scale)
  return Number(ret);
}

/**
 * 存储localStorage
 */
const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}

export default  {
	getRandom,
	setStore,
	getStore,
	removeStore
}