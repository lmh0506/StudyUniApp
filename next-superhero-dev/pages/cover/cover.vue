<template>
	<view class="black">
		<image :src="img" @longpress="handleLongPress" mode="widthFix" ></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: ''
			}
		},
		onLoad(params) {
			this.img = params.img
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#000000'
			})
			uni.setNavigationBarTitle({
				title: '封面'
			})
		},
		methods: {
			handleLongPress(e) {
				uni.showActionSheet({
					itemList: ['保存图片到本地'],
					success: res => {
						if(res.tapIndex == 0) {
							uni.showLoading({
								title: '图片保存中'
							})
							// 保存图片
							uni.downloadFile({
								url: this.img,
								success({tempFilePath}) {
									console.log(tempFilePath)
									uni.saveImageToPhotosAlbum({
										filePath: tempFilePath,
										success() {
											uni.showToast({
												title: '保存成功',
												duration: 2000
											})
										},
										fail() {
											uni.showToast({
												icon: 'none',
												title: '保存失败',
												duration: 2000
											})
										},
										complete() {
											uni.hideLoading()
										}
									})
								}
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	.black{
		background: #000;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
	}
</style>
