<template>
  <div>
     <ul class="news-ul">
     	<li>
     		<a>
     			<div class="news-icon"><img src="../assets/images/icons/myli_ico1.png" alt=""></div>
     			<div class="news-info">
     				<h6>谁看过我</h6>
     				<p>暂无新消息</p>
     			</div>
     		</a>
     	</li>
     	<li>
     		<a>
     			<div class="news-icon"><img src="../assets/images/icons/myli_ico2.png" alt=""></div>
     			<div class="news-info">
     				<h6>简历状态通知</h6>
     				<p>暂无新消息</p>
     			</div>
     		</a>
     	</li>
     	<li>
     		<a>
     			<div class="news-icon"><img src="../assets/images/icons/myli_ico3.png" alt=""></div>
     			<div class="news-info">
     				<h6>职位邀请通知</h6>
     				<p>plus未开启</p>
     			</div>
     		</a>
     	</li>
     	<li>
     		<a>
     			<div class="news-icon"><img src="../assets/images/icons/myli_ico1.png" alt=""></div>
     			<div class="news-info">
     				<h6>拉勾coco</h6>
     				<p>如何获得更多面试机会？</p>
     			</div>
     		</a>
     	</li>
     </ul>
  </div>
</template>

<style scoped>
	.news-ul{width: 100%;background: #fff;}
	.news-ul li a{position: relative;display: flex;display: -webkit-flex;display: -webkit-box;padding: 10px 0 0 10px;}
	.news-ul li a .news-icon{width: 48px;padding-bottom: 10px;}
	.news-ul li a .news-info{flex:1;-webkit-flex:1;-webkit-box-flex:1;width: 100%;padding: 0 10px 10px 10px;}
	.news-ul li a .news-info h6{font-size: 14px;padding-bottom: 5px;padding-top: 2px;}
	.news-ul li a .news-info p{font-size: 12px;color: #999;}
	.news-ul li a:after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin-left: 68px;
    height: 1px;
    background: #eee;
    -webkit-transform-origin:0 0;
    -webkit-transform:scaleY(0.5);
    transform:scaleY(0.5);

}
</style>