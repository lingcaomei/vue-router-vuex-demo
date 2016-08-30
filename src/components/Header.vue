<template>
	<div>
		<div class="header">
			<div class="header-left"><a class="fc-white" v-link="{path:'/home'}">返回</a></div>
			<div class="header-title"><input type="text" class="search-ipt" v-model="svalue" placeholder="搜索职位"></div>
			<div class="header-right"><a class="fc-white" @click="returnSearchName">搜索</a></div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				svalue:''
			}
		},
		
		methods:{
			returnSearchName(){
				// 调用父组件的方法 把搜索的value传给父组件的jobname
				this.$dispatch('getSearchJobName',this.svalue);
			}
		}
	}
</script>

<style>
	.header{
	    width: 100%;
	    height: 44px;
	    position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    background: #00B388;
	    text-align: center;
	    z-index: 100;
	    
	
	}
	.header-left{width: 50px;position: absolute;top: 0;left: 0;z-index: 102;text-align: center;line-height: 44px;font-size: 14px;}
	.header-right{width: 50px;position: absolute;top: 0;right: 0;z-index: 102;text-align: center;line-height: 44px;font-size: 14px;}
	.header-title{width: 100%;padding: 0 50px;text-align: center;line-height: 44px;font-size: 16px;}
	.search-ipt{
		width: 100%;
    	height: 28px;
    	border: 0;
    	border-radius: 100px;
    	padding: 5px 10px;
    	color: #999;
    	font-family: "微软雅黑";
    	outline: none;
	}
	.fc-white{color: #fff;}
</style>