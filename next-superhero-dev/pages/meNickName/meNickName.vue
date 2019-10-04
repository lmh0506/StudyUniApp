<template>
	<view class="page page-fill">
			
		<form @submit="formSubmitNickname">
			
			<view class="page-block" style="margin-top: 20upx;">
				<input 
					type="text"
					name="nickname"
					:value="userInfo.nickname" 
					class="input"
					placeholder="请输入昵称"
					placeholder-class="graywords"
					maxlength="10"
					/>
			</view>
			
			<button type="primary" form-type="submit" class="submitBtn">提交</button>
			
		</form>
		
	</view>
</template>

<script>
	import {request} from '../../common/request.js'
	export default {
		data() {
			return {
				userInfo: {}
			}
		},
		onShow() {
			this.userInfo = uni.getStorageSync('userInfo')
		},
		methods: {
			async formSubmitNickname(e) {
				console.log(e)
				let data = e.detail.value
				let res = await request({
					url: '/user/modifyUserinfo?qq=843002185',
					method: 'post',
					header: {
						headerUserToken: this.userInfo.userUniqueToken,
						headerUserId: this.userInfo.id,
						"Content-Type": "application/json; charset=UTF-8"
					},
					data: {
						...data,
						userId: this.userInfo.id
					}
				})
				
				console.log(res)
				if (res.status == 200) {
					uni.setStorageSync('userInfo', res.data)
					uni.navigateBack({
						delta:1
					})
				} else {
					uni.showToast({
						title: res.msg,
						image: "../../static/icos/error.png",
					})
				}
			}
		}
	}
</script>

<style>
/* 页面铺满屏幕 */
.page-fill {
	width:100%;
	height: 100%;
	position: absolute;
}

.graywords {
	color: #EAEAEA;
}

.input {
	height: 80upx;
	line-height: 80upx;
	width: 500upx;
	margin-left: 40upx;
}

.submitBtn {
	width: 95%;
	margin-top: 40upx;
}
</style>
