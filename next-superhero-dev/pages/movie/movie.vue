<template>
	<view class="page">
		<view class="player">
			<video id="myVideo" :src="movieInfo.trailer" :poster="movieInfo.poster" class="movie" controls></video>
		</view>
		
		<!-- 影片基本信息 start -->
		<view class="movie-info">
			<navigator :url="'../cover/cover?img=' + movieInfo.cover">
				<image :src="movieInfo.cover" class="cover"></image>
			</navigator>
			
			<view class="movie-desc">
				<view class="title">{{movieInfo.name}}</view>
				<view class="basic-info">{{movieInfo.basicInfo}}</view>
				<view class="basic-info">{{movieInfo.originalName}}</view>
				<view class="basic-info">{{movieInfo.plotDesc}}</view>
				<view class="basic-info">{{movieInfo.releaseDate}}</view>
				
				<view class="score-block">
					<view class="big-score">
						<view class="score-words">综合评分</view>
						<view class="score-nums">{{movieInfo.score}}</view>
					</view>
					
					<view class="score-stars">
						<trailer-stars :score="movieInfo.score" :showNum="false"></trailer-stars>
						<view class="prise-counts">
							{{movieInfo.prisedCounts}} 人点赞
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 影片基本信息 end -->
		
		<view class="line-wrapper">
			<view class="line"></view>
		</view>
		
		<!-- 剧情介绍 start -->
		<view class="plots-block">
			<view class="plots-title">剧情详情</view>
			<view class="plots-desc">{{movieInfo.plotDesc}}</view>
		</view>
		<!-- 剧情介绍 end -->
		
		<!-- 演职人员 start -->
		<view class="scroll-block">
			<view class="plots-title">演职人员</view>
			<scroll-view scroll-x="true" class="scroll-list">
				
				<view class="actor-wrapper" v-for="(director, index) in directors" :key="director.staffId" >
					<image :data-index="index" @tap="handleStaffImgPreview" :src="director.photo" class="single-actor" mode="aspectFill"></image>
					<view class="actor-name">{{director.name}}</view>
					<view class="actor-role">{{director.actName}}</view>
				</view>
				<view class="actor-wrapper" v-for="(actor, index) in actors" :key="actor.staffId" >
					<image :data-index="index + directors.length" @tap="handleStaffImgPreview" :src="actor.photo" class="single-actor" mode="aspectFill"></image>
					<view class="actor-name">{{actor.name}}</view>
					<view class="actor-role">{{actor.actName}}</view>
				</view>
			</scroll-view>
		</view>
		<!-- 演职人员 end -->
		
		<!-- 剧照 start -->
		<view class="scroll-block">
			<view class="plots-title">剧照</view>
			<scroll-view scroll-x="true" class="scroll-list">
				<image v-for="(img, index) in movieInfo.plotPics" :data-index="index" @tap="handleImgPreview" :key="img" :src="img" class="plot-image" mode="aspectFill"></image>
			</scroll-view>
		</view>
		<!-- 剧照 end -->
	</view>
</template>

<script>
	import trailerStars from '../../components/trailerStars.vue'
	import {request} from '../../common/request.js'
	export default {
		data() {
			return {
				movieInfo: {},
				actors: [],
				directors: []
			}
		},
		onLoad(option) {
			console.log(option)
			this.getMovieInfo(option.id)
			this.getActorsOrDirectors(option.id, 1)
			this.getActorsOrDirectors(option.id, 2)
		},
		onReady() {
			this.videoCtx = uni.createVideoContext('myVideo')
		},
		onHide() {
			// 页面被隐藏时  暂停播放
			this.videoCtx.pause()
		},
		onShow() {
			// 页面被再次显示的时候  继续播放
			this.videoCtx && this.videoCtx.play()
		},
		onShareAppMessage(res) {
			return {
				title: this.movieInfo.name,
				path: '/pages/movie/movie?id=' + this.movieInfo.id
			}
		},
		// 监听原生标题栏点击事件
		onNavigationBarButtonTap(e) {
			console.log(e)
			if(e.type === 'share') {
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 0,
					href: "http://192.168.1.101:8080/#/pages/movie/movie?id=" + this.movieInfo.id,
					title: "超英预告：《" + this.movieInfo.name + "》",
					summary: "超英预告：《" + this.movieInfo.name + "》",
					imageUrl: this.movieInfo.cover,
					success: function (res) {
							console.log("success:" + JSON.stringify(res));
					},
					fail: function (err) {
							console.log("fail:" + JSON.stringify(err));
					}
				})
			} else if (e.type == 'home') {
				uni.switchTab({
					url: '../index/index'
				})
			}
		},
		computed: {
			staffImgs() {
				let imgs = []
				this.directors.forEach(staff => {
					imgs.push(staff.photo)
				})
				this.actors.forEach(staff => {
					imgs.push(staff.photo)
				})
				return imgs
			}
		},
		methods: {
			async getMovieInfo(id) {
				let res = await request({
					url: '/search/trailer/' + id,
					method: 'post'
				})
				
				console.log(res)
				if(res.status == 200) {
					this.movieInfo = res.data
					this.movieInfo.plotPics = JSON.parse(this.movieInfo.plotPics)
				}
			},
			async getActorsOrDirectors(id, role) {
				let res = await request({
					url: '/search/staff/' + id + '/' + role,
					method: 'post'
				})
				
				if(res.status == 200) {
					if(role === 1) {
						this.directors = res.data
					}else if(role === 2) {
						this.actors = res.data
					}
				}
			},
			handleImgPreview(e) {
				let index = e.currentTarget.dataset.index

				uni.previewImage({
					current: this.movieInfo.plotPics[index],
					loop: true,
					urls: this.movieInfo.plotPics
				})
			},
			handleStaffImgPreview(e) {
				let index = e.currentTarget.dataset.index
				console.log(index)
				
				uni.previewImage({
					current: this.staffImgs[index],
					loop: true,
					urls: this.staffImgs
				})
			}
		},
		components: {
			'trailer-stars': trailerStars
		}
	}
</script>

<style>
 @import url("./movie.css");
</style>
