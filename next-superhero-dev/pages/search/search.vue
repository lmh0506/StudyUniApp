<template>
	<view class="page">
		<view class="search-block">
			<view class="search-ico-wrapper">
				<image src="../../static/icos/search.png" class="search-ico"></image>
			</view>
			<input 
				type="text" 
				placeholder="搜索预告" 
				maxlength="10" 
				class="search-text" 
				focus
				confirm-type="search"
				@confirm="handleConfirmSearch"/>
		</view>
		
		<view class="movie-list page-block">
			<view class="movie-wrapper" v-for="movie in movieList" :key="movie.id">
				<image :src="movie.poster" :data-movieid="movie.id" @tap="handleToDetail" class="poster"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {request} from '../../common/request.js'
	export default {
		data() {
			return {
				page: 1,
				pageSize: 12,
				keywords: '',
				movieList: [],
				totalPage: 0
			};
		},
		onLoad() {
			this.searchData()
		},
		onReachBottom() {
			this.page ++;
			if(this.page < this.totalPage) {
				this.searchData(true)
			}
		},
		methods: {
			async searchData(isSearchMore) {
				uni.showLoading({
					title: "加载中。。。",
					mask: true
				})
				uni.showNavigationBarLoading()

				let res = await request({
					url: '/search/list',
					method: "post",
					data: {
						keywords: this.keywords,
						page: this.page,
						pageSize: this.pageSize
					}
				})

				if(res.status == 200) {
					if(isSearchMore) {
						this.movieList = this.movieList.concat((res.data.rows))
					}else{
						this.movieList = res.data.rows
					}
					this.totalPage = res.data.total
				}
				
				uni.hideLoading()
				uni.hideNavigationBarLoading()
			},
			handleConfirmSearch(e) {
				console.log(e)
				this.keywords = e.detail.value
				this.page = 1
				this.movieList = []
				this.searchData()
			},
			handleToDetail(e) {
				let id = e.currentTarget.dataset.movieid

				uni.navigateTo({
					url: '../movie/movie?id=' + id
				})
			}
		}
	}
</script>

<style>
	@import url("./search.css");
</style>
