<template>
	
	<div class="wrap">		
		<ul class="find-ul" v-for="findLi in findList">
			<li>
				<a :href="findLi.link">
					<div class="pic"><img :src="findLi.imgUrl" /></div>
					<div class="infos">
						<h6>{{findLi.title}}</h6>
						<p>{{findLi.digest}}</p>
					</div>
				</a>
			</li>
		</ul>
				
	</div>
</template>

<script>
	import { setFindList } from '../vuex/actions'
	import { findList } from '../vuex/getters'

	export default {

		route: {
			data () {
				this.setFindList();
			}
		},

		vuex:{
			actions:{
				setFindList
			},

			getters:{
				findList
			}
		}
	}
</script>

<style scoped>
	.wrap{padding-top: 0;background: #fff;}
	.find-ul{width: 100%;}
	.find-ul li{width: 100%;padding:0 10px;}
	.find-ul li a {display:block;width: 100%;position: relative;padding-bottom: 20px;padding-top: 20px;}
	.find-ul li a .pic{width: 100%;}
	.find-ul li a .infos{width: 100%;}
	.find-ul li a .infos h6{font-size: 14px;color: #333;line-height: 36px;}
	.find-ul li a .infos p{font-size: 12px;color: #999;}
	.find-ul li a:after{
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
