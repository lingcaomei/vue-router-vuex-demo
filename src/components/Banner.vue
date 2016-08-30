<template>
	<div class="slider">
		<ul :style="ulStyles" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
			<li v-for="item in list" :style="{width:baseWidth+'px'}"><a><img :src="item.imgSrc" alt=""></a></li>
		</ul>
		<div class='dots'>
			<span v-for="item in list" :class="$index==now?'activeClass':'' "></span>
		</div>
	</div>
</template>

<script>
	export default {
		props:['list'],
		data(){
			return {
				baseWidth :document.documentElement.clientWidth,
				ulStyles:{},
				now:0,
				startX:0,
				moveX:0,
				distance:0,
				autoSlide:true,
				sliderTimer:null
			}
		},
		computed:{

			ulStyles (){
				return {
					width : (this.baseWidth * this.list.length) +'px',
					WebkitTransform : 'translate3d(' + this.distance + 'px,0,0)',
					transform : 'translate3d('+ this.distance + 'px, 0, 0)',
					WebkitTransition : 'all ease-out 0.5s',
					transition : 'all ease-out 0.5s'
				}
			},
			distance(){
				return -this.now*this.baseWidth
			}
		},

		methods:{
			touchstart(e) {
				if(this.autoSlide){
					this.closeAuto();
				}
				this.startX = e.touches[0].pageX;
			},

			touchmove(e) {
				this.moveX = e.touches[0].pageX - this.startX
			},

			touchend() {
				if(this.moveX < 0){
					this.move('next')
				}else{
					this.move('prev')
				}

				this.moveX = 0;
				if(this.autoSlide){
					this.autoFn()
				}
				
			},

			move(diretion) {
				if(diretion == 'next'){
					this.now = this.now == (this.list.length-1)? 0 : this.now+1;
				}else if(diretion == 'prev'){
					this.now = this.now == 0? this.list.length-1 : this.now-1;
				}
			},

			// 设置定时器
			autoFn() {
				if(this.autoSlide){
					this.closeAuto()
					this.sliderTimer = setInterval(()=>{
						this.move('next')
					}, 1000)
				}
			},

			// 关闭定时器
			closeAuto() {
				clearInterval(this.sliderTimer)
			}
		},
		ready(){
			// 开启定时播放
			this.autoFn()
		}
	}
	
</script>
<style scoped>
	.slider{width: 100%;overflow: hidden;position: relative;}
	.slider > ul{width: 1000000px;list-style: none;overflow: hidden;}
	.slider > ul >li{float: left;}
	.slider > ul >li >a{display: block;}
	.slider > ul >li img{width: 100%;vertical-align: bottom;}
	
	.dots{ position: absolute; bottom: 5px; text-align: center; width: 100%; }
	.dots span{width: 6px;height: 6px;background: #fff;border-radius: 100%;margin-right: 3px;display: inline-block;}
	
	.dots .activeClass{background: #000;}
</style>