<template>
	<view class="page page-fill">
		
		<view class="pending-wapper">
			<image id="face" :src="tempFace" class="pending-face" mode="scaleToFill"></image>
		</view>
		
		<view class="notice">
			<view class="notice-words">
				* 请从相册中选择等比宽高的图片噢~
			</view>
		</view>
		
		<view class="footer-opertor">
			<view class="opertor-words" @tap="changePendingFace">
				重新选择
			</view>
			<view class="opertor-words" @tap="upload">
				确认上传
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tempFace: '',
				userInfo: {}
			}
		},
		onLoad({img}) {
			this.tempFace = img
			this.userInfo = uni.getStorageSync('userInfo')
			console.log(this.userInfo)
		},
		methods: {
			changePendingFace() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed '],
					success: (res) => {
						// 选择上传头像
						this.tempFace = res.tempFilePaths[0]
					}
				})
			},
			upload() {
				uni.showLoading({
					mask: true,
					title: '上传中，请稍后。。。'
				})
				uni.uploadFile({
					url: 'https://www.imovietrailer.com/superhero/user/uploadFace?qq=843002185',
					filePath: this.tempFace,
					name: 'file',
					header: {
						headerUserId: this.userInfo.id,
						headerUserToken: this.userInfo.userUniqueToken
					},
					formData: {
						userId: this.userInfo.id
					},
					success: (res) => {
						res = JSON.parse(res.data)
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
					},
					complete() {
						uni.hideLoading()
					}
				})
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
	background: black;
}

.pending-wapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	
	margin-top: 40upx;
}
.pending-face {
	width: 600upx;
	height: 600upx;
}

.notice {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}

.notice-words {
	color: gray;
	font-size: 13px;
	margin-top: 30upx;
	width: 600upx;
}

/* 底部操作 start */
.footer-opertor {
	position: fixed;
	bottom: 0;
	
	border-top: #515050 solid 1px;
	width: 100%;
	
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
	padding: 30upx;
}
.opertor-words {
	color: #e8e5e5;
	font-size: 16px;
	width: 200upx;
}
/* 底部操作 end */
</style>
