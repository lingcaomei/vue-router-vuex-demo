<template>
    <div>
        <div class="header"><a v-link="{path:'/search'}" class="search">搜索职位/公司</a></div>
        <div class="wrap">
          <v-banner :list="bannerList"></v-banner>
          <v-joblist :joblist.sync="jobList" ></v-joblist>
        </div>   
    </div>
</template>

<script>
import store from '../vuex/store'
import VJoblist from '../components/JobLi';
import VBanner from '../components/Banner';
import { setJobList } from '../vuex/actions'
import { getJobList } from '../vuex/getters'

var blist = [
    {imgSrc:require('../assets/images/b1.png')},
    {imgSrc:require('../assets/images/b2.jpg')},
    {imgSrc:require('../assets/images/b3.jpg')}
]

export default {
    store,
    // 插入文档后
    ready  () {

    },

    // 实例化后
    created () {
      this.setJobList();
    },

    components: {
        VBanner,
        VJoblist
    },

    data () {
      return {
        pageNo:1,
        pageCount:0,
        jobList:[],
        bannerList:blist
      }
    },
    // 获取action里面输出的函数
    vuex: {
        actions: {
          setJobList
        },
        getters: {
            jobListData: getJobList
        }
    },

    computed:{
        jobList() {
            const list = this.jobListData; 
            return list 
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.search{
    display: inline-block;
    width: 92%;
    height: 28px;
    border-radius: 50px;
    background: #fff;
    margin-top: 8px;
    text-align: left;
    padding:5px 10px;
    font-size: 12px;
    color: #999;
}
.joblist{background: #fff;}
.joblist li{width: 100%;}
.joblist li a{width: 100%;display: flex;display: -webkit-flex;display: -webkit-box;position: relative;

    -webkit-box-pack: center;/*旧版本 垂直居中*/
    -webkit-align-items:center;
    align-items:center;/*flex项目垂直居中显示*/
}
.joblist li a .imgs{padding: 10px;}
.joblist li a .imgs img{width: 80px;}
.joblist li a .infos{width: 100%;padding: 10px;padding-left:0;-webkit-flex:1;flex:1;-webkit-box-flex:1;font-size: 12px;}
.joblist li a .infos .job-name{width: 100%;position: relative;padding-bottom: 10px;}
.joblist li a .infos .job-name h6{font-size: 14px;}
.joblist li a .infos .job-name span{font-size: 14px;position: absolute;top:0;right: 0;color: #FF6000;}
.joblist li a .infos .company-name{padding-bottom: 5px;}
.joblist li a .infos .job-time{color: #999;}

.joblist li a:after{
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    width: 100%;
    margin-left: 100px;
    height: 1px;
    background: #eee;
    -webkit-transform-origin:0 0;
    -webkit-transform:scaleY(0.5);
    transform:scaleY(0.5);

}



.tip{font-size: 14px;color: #999;text-align: center;padding: 10px;}
</style>
