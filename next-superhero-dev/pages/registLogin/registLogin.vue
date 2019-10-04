<template>
	<view class="body">
		<form @submit="handleFormSubmit">
			
			<view class="face-wapper">
				<image src="../../static/icos/default-face.png" class="face" mode=""></image>
			</view>
			<view class="info-wapper">
				<label class="words-lbl">账号</label>
				<input type="text" name="username" class="input" placeholder="请输入用户名" placeholder-class="graywords" value="" />
			</view>
			
			<view class="info-wapper">
				<label class="words-lbl">密码</label>
				<input type="password" name="password" class="input" placeholder="请输入密码" placeholder-class="graywords" value="" />
			</view>
		
			<button type="primary" form-type="submit" style="margin-top: 60upx;width: 90%;">注册/登录</button>
		</form>
		
		<!-- 第三方登录 H5不支持 -->
		<!-- #ifndef H5 -->
		<view class="third-wapper">
			<view class="third-line">
				<view class="single-line">
					<view class="line"></view>
				</view>
				
				<view class="third-words">第三方账号登录</view>
				
				<view class="single-line">
					<view class="line"></view>
				</view>
			</view>
			
			<view class="third-icos-wapper">
				<!-- 5+app 用qq/微信/微博 登录 小程序用微信小程序登录 h5不支持 -->
				<!-- #ifdef APP-PLUS -->
					<image src="../../static/icos/weixin.png" data-logintype="weixin" @tap="appOAuthLogin" class="third-ico"></image>
					<image src="../../static/icos/QQ.png" data-logintype="qq" @tap="appOAuthLogin" class="third-ico" style="margin-left: 80upx;"></image>
					<image src="../../static/icos/weibo.png" data-logintype="sinaweibo" @tap="appOAuthLogin" class="third-ico" style="margin-left: 80upx;"></image>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
					<button open-type='getUserInfo' @getuserinfo="wxLogin" class="third-btn-ico">
					</button>
				<!-- #endif -->
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import {request} from '../../common/request.js'
	export default {
		data() {
			return {

			}
		},
		methods: {
			appOAuthLogin(e) {
				let logintype = e.currentTarget.dataset.logintype
				
				console.log(logintype)
				uni.login({
					provider: logintype,
					success: (res) => {
						// 授权登陆成功以后 获取用户信息
						uni.getUserInfo({
							provider: logintype,
							success: async (info) => {
								let userInfo = info.userInfo
								let data = {}
								
								if(logintype == 'weixin') {
									data = {
										face: userInfo.avatarUrl,
										nickname: userInfo.nickName,
										openIdOrUid: userInfo.openId
									}
								}else if(logintype == 'qq') {
									data = {
										face: userInfo.figureurl_qq_2,
										nickname: userInfo.nickName,
										openIdOrUid: userInfo.openId
									}
								} else if (logintype == 'sinaweibo') {
									data = {
										face: userInfo.avatar_large,
										nickname: userInfo.nickName,
										openIdOrUid: userInfo.id
									}
								}
								
								let loginRes = await request({
									url: '/appUnionLogin/' + logintype + '?qq=843002185',
									method: 'post',
									data,
									header: {
										"Content-Type": "application/json; charset=UTF-8"
									}
								})
								
								if(loginRes.status == 200) {
									// 保存用户信息到全局的缓存中
									uni.setStorageSync('userInfo', loginRes.data)
									
									uni.switchTab({
										url: "../me/me"
									})
								}else{
									uni.showToast({
										image: "../../static/icos/error.png",
										title: loginRes.msg
									})
								}
							}
						})
					}
				})
			},
			wxLogin(e) {
				// 因为前后端的appid不同  微信小程序无法登陆
				console.log(e)
				// 通过微信开放能力，获取微信用户的基本信息
				let userInfo = e.detail.userInfo
				
				// 实现微信登录
				uni.login({
					provider: "weixin",
					success: async (res) => {
						let loginRes = await request({
							url: '/stu/mpWXLogin/' + res.code + '?qq=843002185',
							method: 'post',
							data: {
								avatarUrl: userInfo.avatarUrl,
								nickName: userInfo.nickName,
								whichMP: 1
							},
							header: {
								"Content-Type": "application/json; charset=UTF-8"
							}
						})
					}
				})
			},
			async handleFormSubmit(e) {
				let {username, password} = e.detail.value
				
				let res = await request({
					url: '/user/registOrLogin?qq=843002185',
					method: 'post',
					data: {
						username,
						password
					},
					header: {
						"Content-Type": "application/json; charset=UTF-8"
					}
				})

				if(res.status == 200) {
					// 保存用户信息到全局的缓存中
					uni.setStorageSync('userInfo', res.data)
					
					uni.switchTab({
						url: "../me/me"
					})
				}else{
					uni.showToast({
						image: "../../static/icos/error.png",
						title: res.msg
					})
				}
			}
		}
	}
</script>

<style>
@import url("./registLogin.css");
</style>
