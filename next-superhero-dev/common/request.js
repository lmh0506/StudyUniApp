const ROOT_URL = 'https://www.imovietrailer.com/superhero'

export function request({
	url,
	method = 'GET',
	header = {},
	data = {}
}) {
	
	data = {
		...data,
		qq: '843002185'
	}
	
	if(method.toUpperCase() === 'POST' && !header['Content-Type']) {
    header['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
	}
	
	if(header['Content-Type'] === 'application/json; charset=UTF-8') {
		data = JSON.stringify(data)
	}
	
	return uni.request({
		url: ROOT_URL + url,
		method,
		header,
		data
	}).then(resData => { //resData为一个数组，数组第一项为错误信息，第二项为返回数据
		let [error, res] = resData;

		return Promise.resolve(res.data)
	})
}
