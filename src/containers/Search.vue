<template>
	<div>
		<div class="header search-container">
			<div class="header-left"><a>深圳</a></div>
			<div class="header-title"><input type="text" class="search-ipt" placeholder="搜索职位" v-model="searchValue"></div>
			<div class="header-right" v-link="{ path: '/searchlist', query: { jobname: searchValue }}"><a>搜索</a></div>

		</div>
	</div>
</template>
<script>
	import { setJobList } from '../vuex/actions'
	import { getJobList } from '../vuex/getters'
	export default {
		data(){
			return {
				searchValue:''
			}
		}
	}
</script>
<style scoped>
	.header-left{width: 50px;position: absolute;top: 0;left: 0;z-index: 102;text-align: center;line-height: 44px;font-size: 14px;}
	.header-right{width: 50px;position: absolute;top: 0;right: 0;z-index: 102;text-align: center;line-height: 44px;font-size: 14px;}
	.header-title{width: 100%;padding: 0 50px;}
	.header-title .search-ipt{width: 100%;height: 28px;border: 0;background: #E7E8EA;outline: none;border-radius: 100px;margin-top: 8px;padding: 5px 10px;font-family: '微软雅黑';font-size: 12px;}
	.search-container{width: 100%;height:44px; background: #fff;}

</style>