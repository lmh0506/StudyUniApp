<template>
	<view class="page">
		<!-- 轮播图 start -->
		<swiper :indicator-dots="true" :autoplay="true"  class="carousel">
			<swiper-item v-for="carousel in carouselList" :key="carousel.id">
				<image class="carousel" :src="carousel.image" mode="aspectFit"></image>
			</swiper-item>
		</swiper>
		<!-- 轮播图 end -->
		
		<!-- 热门超英 start -->
		<view class="page-block super-hot">
			<view class="hot-title-wrapper">
				<image class="icon" src="../../static/icos/hot.png"></image>
				<view class="hot-title">热门超英</view>
			</view>
		</view>
		<scroll-view scroll-x="true" class="page-block hot">
			<view class="single-poster" v-for="hot in hotMovies" :key="hot.id">
				<view class="poster-wrapper">
					<image :src="hot.poster" mode="" class="poster"></image>
					<view class="movie-name">{{hot.name}}</view>
					<trailerStars :score="hot.score"></trailerStars>
				</view>
			</view>
		</scroll-view>
		<!-- 热门超英 end -->
		
		<!-- 热门预告 start -->
		<view class="page-block super-hot">
			<view class="hot-title-wrapper">
				<image class="icon" src="../../static/icos/interest.png"></image>
				<view class="hot-title">热门预告</view>
			</view>
		</view>
		<view class="page-block hot-movies">
			<video class="hot-movie-single" controls v-for="trailer in hotTrailers" :key="trailer.id" :src="trailer.trailer" :poster="trailer.poster"></video>
		</view>
		<!-- 热门预告 end -->
		
		<!-- 猜你喜欢 start -->
		<view class="page-block super-hot">
			<view class="hot-title-wrapper">
				<image class="icon" src="../../static/icos/guess-u-like.png"></image>
				<view class="hot-title">猜你喜欢</view>
			</view>
		</view>
		<view class="page-block guess-u-like">
			<view class="single-movie-like" v-for="(movie, index) in guessLikeMovies" :key="movie.id">
				<image :src="movie.cover" class="poster" mode=""></image>
				<view class="movie-desc">
					<view class="movie-title">{{movie.name}}</view>
					<trailerStars :score="movie.score" :showNum="false"></trailerStars>
					<view class="movie-info">{{movie.basicInfo}}</view>
					<view class="movie-info">{{movie.releaseDate}}</view>
				</view>
				
				<view class="movie-oper" :data-index="index" @tap="handlePraiseMe">
					<image src="../../static/icos/praise.png" class="praise-ico" mode=""></image>
					<view class="praise-me">点赞</view>
					<view :animation="praiseMeAnimates[index]" class="praise-me animation-opacity">+1</view>
				</view>
			</view>
		</view>
		<!-- 猜你喜欢 end -->
	</view>
</template>

<script>
	import trailerStars from '../../components/trailerStars.vue'
	import {request} from '../../common/request.js'
	export default {
		data() {
			return {
				carouselList: [],
				hotMovies: [],
				hotTrailers: [],
				guessLikeMovies: [],
				praiseMeAnimates: []
			}
		},
		onLoad() {
			this.getCarouselData()
			this.getHotMovies()
			this.getHotTrailers()
			this.getGuessULikeData()
			
			// 在页面创建时创建一个临时的动画对象
			this.animation = uni.createAnimation()
		},
		onPullDownRefresh() {
			this.getGuessULikeData(() => {
				uni.stopPullDownRefresh()
			})
		},
		methods: {
			// 获取轮播图数据
			async getCarouselData() {
				let res = await request({ 
					url: '/index/carousel/list',
					method: 'post'
				})
				if(res.status == 200) {
					this.carouselList = res.data
				}
			},
			// 获取热门超英数据
			async getHotMovies() {
				let res = await request({
					url: '/index/movie/hot',
					method: 'post',
					data: {
						type: 'superhero'
					}
				})
				if(res.status == 200) {
					this.hotMovies = res.data
				}
			},
			// 获取热门预告数据
			async getHotTrailers() {
				let res = await request({
					url: '/index/movie/hot',
					method: 'post',
					data: {
						type: 'trailer'
					}
				})
				if(res.status == 200) {
					this.hotTrailers = res.data
				}
			},
			async getGuessULikeData(callback) {
				let res = await request({
					url: '/index/guessULike',
					method: 'post'
				})
				if(res.status == 200) {
					this.guessLikeMovies = res.data
				}
				callback && callback()
			},
			handlePraiseMe(e) {
				let index = e.currentTarget.dataset.index

				// 构建动画数据  并且通过step表示该组动画完成
				this.$set(this.praiseMeAnimates, index, this.animation.translateY(-70).scale(1.2).opacity(1).step({
					duration: 300
				}).export())
				
				setTimeout(() => {
					this.$set(this.praiseMeAnimates, index, this.animation.translateY(-30).scale(1).opacity(0).step({
						duration: 0
					}).export())
				}, 350);
			}
		},
		components: {
			trailerStars
		},
		onUnload() {
			// 页面卸载的时候清除动画数据
			this.praiseMeAnimates = []
		}
	}
</script>

<style lang="scss">
	@import url("./index.scss");
</style>
