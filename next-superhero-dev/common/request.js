const ROOT_URL = 'https://www.imovietrailer.com/superhero'

export function request({
	url,
	method = 'GET',
	header = {},
	data = {}
}) {
	
	if(method.toUpperCase() === 'POST') {
    header['Content-Type'] = 'application/x-www-form-urlencoded'
	}
	
	return uni.request({
		url: ROOT_URL + url,
		method,
		header,
		data: {
			...data,
			qq: '843002185'
		}
	}).then(resData => { //resData为一个数组，数组第一项为错误信息，第二项为返回数据
		let [error, res] = resData;
		console.log(resData)
		return Promise.resolve(res.data)
	})
}
