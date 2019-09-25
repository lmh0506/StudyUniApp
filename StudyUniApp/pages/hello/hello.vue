<template>
	<view>
		<navigator url="../index/index" open-type="navigateBack">
			hello world
			{{test}}
		</navigator>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				
			};
		},
		computed: {
			...mapState(['test'])
		}
	}
</script>

<style lang="scss">

</style>
