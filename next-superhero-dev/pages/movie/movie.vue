<template>
	<view class="page">
		<view class="player">
			<video :src="movieInfo.trailer" :poster="movieInfo.poster" class="movie" controls></video>
		</view>
		
		<!-- 影片基本信息 start -->
		<view class="movie-info">
			<image :src="movieInfo.cover" class="cover"></image>
			
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
	</view>
</template>

<script>
	import trailerStars from '../../components/trailerStars.vue'
	import {request} from '../../common/request.js'
	export default {
		data() {
			return {
				movieInfo: {}
			}
		},
		onLoad(option) {
			console.log(option)
			this.getMovieInfo(option.id)
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
				}
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
