<template>
    <div>

        <!-- 输出页面 -->
       <router-view></router-view>
       <div class="nav">
            <!-- 使用 v-link 指向 导航 -->
            <ul>
                <li><a v-link="{path:'/index'}" ><i></i><span>首页</span></a></li>
                <li><a v-link="{path:'/news'}"><i></i><span>消息</span></a></li>
                <li><a v-link="{path:'/find'}" ><i></i><span>发现</span></a></li>
                <li><a v-link="{path:'/my'}" ><i></i><span>我的</span></a></li>
            </ul> 
      </div>
      <!-- v-if="$route.footer" 可以获取router.map上的属性（可以自定义属性）--> 
   
    </div>
</template>

<script>

import store from './vuex/store'

export default {
    // 总入口需要把store引入 || 引入其他有关数据state\vuex的页面都需要引入
    store
}

</script>

<style>
*{padding: 0;margin: 0;box-sizing:border-box;}
html,body{font-family: '微软雅黑';font-size: 13px;background: #F2F1F6;width: 100%;overflow-x: hidden;}
ul{list-style: none;}
a{text-decoration: none;}
img{border: 0;width: 100%;}
.flex{width: 100%;display: flex;display: -webkit-flex;display: -webkit-box;}
.wrap{padding-top: 44px;padding-bottom: 51px;}

.nav {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    line-height: 49px;
    z-index: 1010;
    background: #fff;
}
.nav:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background: #dedede;
    -webkit-transform-origin:0 0;
    -webkit-transform:scaleY(0.5);
    transform:scaleY(0.5);

}
.nav ul{
    padding-left: 8px;
    padding-right: 8px;
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.nav ul li{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 25%;
}

.nav ul li i{
    display: block;
    vertical-align: middle;
    height: 28px;
    width: 28px;
    margin: 4px auto 0;
}
.nav ul li:nth-child(1) i{
    background: url(./assets/images/icons/sy_ico.png) no-repeat;
    background-size: 100%;
}
.nav ul li:nth-child(1) .v-link-active i{
    background: url(./assets/images/icons/sy_cur.png) no-repeat;
    background-size: 100%;
}

.nav ul li:nth-child(2) i{
    background: url(./assets/images/icons/news_ico.png) no-repeat;
    background-size: 100%;
}
.nav ul li:nth-child(2) .v-link-active i{
    background: url(./assets/images/icons/news_cur.png) no-repeat;
    background-size: 100%;
}
.nav ul li:nth-child(3) i{
    background: url(./assets/images/icons/find_ico.png) no-repeat;
    background-size: 100%;
}
.nav ul li:nth-child(3) .v-link-active i{
    background: url(./assets/images/icons/find_cur.png) no-repeat;
    background-size: 100%;
}
.nav ul li:nth-child(4) i{
    background: url(./assets/images/icons/my_ico.png) no-repeat;
    background-size: 100%;
}
.nav ul li:nth-child(4) .v-link-active i{
    background: url(./assets/images/icons/my_cur.png) no-repeat;
    background-size: 100%;
}
.nav ul li span{
    padding-top: 2px;
    line-height: 1;
    font-size: 12px;
    color: #4B4B4B;
    display: block;
    word-wrap: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.nav ul li .v-link-active span{color: #00b38a;}
</style>
