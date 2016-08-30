<template>
	
	<div class="my">
		<div class="my-info">
			<div class="avatar"><img :src="user.avatar" alt=""></div>
			<p class="name">{{user.name}}</p>
		</div>
		<ul class="my-list">
			<li><a>简历</a></li>
			<li class="marb"><a>PLUS</a></li>
			<li><a>收藏</a></li>
			<li><a>意见反馈</a></li>
			<li><a>设置</a></li>
		</ul>
	</div>
</template>

<script>

	import { getUser } from '../vuex/actions'
	import { userData } from '../vuex/getters'
	
	export default {
		route: {
			data() {
				this.getUser('苏莉安');
			}
		},
		vuex:{
			actions:{
				getUser
			},
			getters:{
				user:userData
			}
		}
	}
</script>
<style scoped>
	.marb{margin-bottom: 10px;}
	.my-info{background: #00B388;padding:40px 0 30px 0;}
	.avatar{width: 70px;height: 70px;margin: 0 auto;border-radius: 100px;overflow: hidden;}
	.name{font-size: 15px;text-align: center;line-height: 32px;color: #fff;}

	.my-list{width: 100%;}
	.my-list li{width: 100%;padding:0 20px;background: #fff;}
	.my-list li a{display:block;width: 100%;position: relative;padding: 18px 0;}
	.my-list li a:after{
		content: "";
    	position: absolute;
    	bottom: 0;
    	left: 0;
    	right: 0;
    	width: 100%;
    	height: 1px;
    	background: #eee;
    	-webkit-transform-origin:0 0;
    	-webkit-transform:scaleY(0.5);
    	transform:scaleY(0.5);
	}
</style>