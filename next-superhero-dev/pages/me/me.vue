<template>
	<view class="page page-fill">
		<view class="header">
			<template v-if="userIsLogin">
				<image :src="userInfo.faceImage" class="face" mode=""></image>
				
				<view class="info-wapper">
					<view class="nickname">{{userInfo.nickname}}</view>
					
					<view class="nav-info">ID:{{userInfo.id}}</view>
				</view>
				<view class="set-wrapper">
					<navigator url="../meInfo/meInfo">
						<image src="../../static/icos/settings.png" class="settings" mode=""></image>
					</navigator>
				</view>
			</template>
			<template v-else>
				<image src="http://122.152.205.72:88/group1/M00/00/05/CpoxxFw_-5-AFyVyAABLIH8xBTw233.png" class="face" mode=""></image>
				
				<navigator url="../registLogin/registLogin">
					<view class="nickname regist-login">
						注册/登录
					</view>
				</navigator>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin: false,
				userInfo: {}
			};
		},
		onShow() {
			this.userInfo = uni.getStorageSync('userInfo')
			
			if(this.userInfo && this.userInfo.id) {
				this.userIsLogin = true
			}else{
				this.userIsLogin = false
			}
		}
	}
</script>

<style>
@import url('./me.css')
</style>
