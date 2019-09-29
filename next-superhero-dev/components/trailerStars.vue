<template>
	<view class="movie-score-wrapper">
		<!-- <image v-for="(i, index) in 5" :key="i" class="star" :src="score > (index + 1) * 2 ? '/static/icos/star-yellow.png' : '/static/icos/star-gray.png'" mode=""></image> -->
		<view class="bg-star">
			<view class="active-star" :style="{width: score * 10 + '%'}"></view>
		</view>
		<text v-if="showNum" class="movie-score">{{score}}</text>
	</view>
</template>

<script>
	export default {
		name: 'trailerStars',
		props: {
			score: {
				type: Number,
				default: 0
			},
			showNum: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

.movie-score-wrapper{
	display: flex;
	align-items: center;
	.bg-star{
		width: 50px;
		height: 10px;
		margin-top: 6upx;
		background: url(~@/static/icos/star-gray.png);
		background-size: 10px 10px;
		position: relative;
		.active-star{
			position: absolute;
			top: 0px;
			left: 0px;
			height: 100%;
			background: url(~@/static/icos/star-yellow.png);
		background-size: 10px 10px;
		}
	}
	
	.star{
		width: 20upx;
		height: 20upx;
		margin-top: 6upx;
	}
	
	.movie-score{
		font-size: 12px;
		color: gray;
		margin-left: 8upx;
	}
}
</style>
