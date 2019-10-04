<template>
	<view class="page page-fill">
		<view class="page-block info-list">
			<view class="item-wapper face-line-upbottom">
				<view class="info-words">头像</view>
				<view class="right-wapper" @tap="handleShowOpr">
					<image :src="userInfo.faceImage" class="face" mode=""></image>
					<view class="arrow-block">
						<image src="../../static/icos/left-gray-arrow.png" class="arrow-ico" mode=""></image>
					</view>
				</view>
			</view>
			
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<view class="item-wapper" @tap="handleEditNickName">
				<view class="info-words">昵称</view>
				<view class="right-wapper">
					<view class="gray-fields">{{userInfo.nickname}}</view>
					<view class="arrow-block">
						<image src="../../static/icos/left-gray-arrow.png" class="arrow-ico" mode=""></image>
					</view>
				</view>
			</view>
			
			<view class="line-top">
				<view class="line"></view>
			</view>
			
			<!-- 生日 -->
				<view class="item-wapper">
					<view class="info-words">生日</view>
					
					<view class="right-wapper">
						<picker mode="date" :value="userInfo.birthday" @change="handleBirthDayChange">
							<view class="gray-fields">{{userInfo.birthday}}</view>
						</picker>
						<view class="arrow-block">
							<image src="../../static/icos/left-gray-arrow.png" class="arrow-ico"></image>
						</view>
					</view>
				</view>
				
				<view class="line-top">
					<view class="line"></view>
				</view>
				
				<!-- 性别 -->
				<view class="item-wapper" >
					<view class="info-words">性别</view>
					
					<view class="right-wapper">
						<view class="gray-fields">
							<picker mode="selector" :value="userInfo.sex" :range="sexRange" range-key="name" @change="handleSexChange">
								<view v-if="userInfo.sex == 1">
									男
								</view>
								<view v-else-if="userInfo.sex == 0">
									女
								</view>
								<view v-else>
									未选择
								</view>
							</picker>
						</view>
						<view class="arrow-block">
							<image src="../../static/icos/left-gray-arrow.png" class="arrow-ico"></image>
						</view>
					</view>
				</view>
				
			</view>
			
			<view class="footer-wapper">
				<view class="footer-words" @tap="clearStorage">
					清理缓存
				</view>
				<view class="footer-words" @tap="logout" style="margin-top: 10upx;">
					退出登录
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {request} from '../../common/request.js'
	export default {
		data() {
			return {
				userInfo: {},
				sexRange: [
					{
						name: '男',
						value: 1
					},
					{
						name: '女',
						value: 0
					}
				]
			}
		},
		onShow() {
			this.userInfo = uni.getStorageSync('userInfo')
			
			if(this.userInfo && this.userInfo.id) {
				this.userIsLogin = true
			}
		},
		methods: {
			clearStorage() {
				uni.clearStorageSync()
				uni.showToast({
					title: '清理成功',
					mask: false,
					duration: 1500
				})
			},
			async logout() {
				let res = await request({
					url: '/user/logout',
					method: 'post',
					data: {
						userId: this.userInfo.id
					}
				})
				
				if(res.status == 200) {
					uni.removeStorageSync('userInfo')
					uni.switchTab({
						url: "../me/me"
					})
				}
			},
			handleShowOpr() {
				uni.showActionSheet({
					itemList: ['查看我的头像', '从相册选择上传'],
					success: (res) => {
						let index = res.tapIndex
						if(index == 0) {
							// 预览头像
							uni.previewImage({
								urls: [this.userInfo.faceImage]
							})
						} else if (index == 1) {
							// 选择头像
							uni.chooseImage({
								count: 1,
								sizeType: ['compressed '],
								success: (res) => {
									// 选择上传头像
									// #ifdef H5
									uni.navigateTo({
										url: '../meFace/meFace?img=' + res.tempFilePaths[0]
									})
									// #endif
									
									// #ifndef H5
									uni.navigateTo({
										url: '../faceCrop/faceCrop?img=' + res.tempFilePaths[0]
									})
									// #endif
								}
							})
						}
					}
				})
			},
			handleEditNickName() {
				uni.navigateTo({
					url: '../meNickName/meNickName'
				})
			},
			handleBirthDayChange(e) {
				this.editInfoRequest('birthday', e.detail.value)
			},
			handleSexChange(e) {
				console.log(e)
				this.editInfoRequest('sex', this.sexRange[e.detail.value].value)
			},
			async editInfoRequest(key, value) {
				let res = await request({
					url: '/user/modifyUserinfo?qq=843002185',
					method: 'post',
					header: {
						headerUserToken: this.userInfo.userUniqueToken,
						headerUserId: this.userInfo.id,
						"Content-Type": "application/json; charset=UTF-8"
					},
					data: {
						[key]: value,
						userId: this.userInfo.id
					}
				})
				
				if (res.status == 200) {
					this.userInfo = res.data
					uni.setStorageSync('userInfo', res.data)
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
@import url("./meInfo.css");
</style>
