<template>
	<div class="joblist" id="joblist">
        <ul>
            <li v-for="jobLi in joblistdata">
                <a>
                    <div class="imgs"><img :src="'http://www.lgstatic.com/'+jobLi.companyLogo" /></div>
                    <div class="infos">
                        <div class="job-name"><h6>{{jobLi.positionName}}</h6><span>{{jobLi.salary}}</span></div>
                        <p class="company-name">{{jobLi.companyFullName}}</p>
                        <p class="job-time">{{jobLi.createTime}}</p>
                    </div>
                </a>
            </li>
        </ul>
        <div class="tip" v-if="pageCount>0 && pageNo!=pageCount" @click="nextPage">点击加载更多</div>
        <div class="tip" v-if="pageNo==pageCount">没有更多了哦~</div>
        <!-- <div class="tip" v-if="nodata">没有找到相关数据哦~</div> -->
    </div>
</template>
<script>
	export default {
		data() {
			return {
				pageNo:1,
		        pageCount:0,
                nodata:false
			}
		},
		props:['joblist','filtername'],

		computed:{
			joblistdata:{
				cache: false,
				get(){
					const list =this.filtername? this.joblist.filter((item) => item.positionName.indexOf(this.filtername) !=-1) : this.joblist;
					let listJob = [];
        	        if(list && list.length > 0){
        	        	var arr = ((list.length/5)+'').split('.');
        	            this.pageCount = arr[1]?arr[0]*1+1 : arr[0] ;
        	            for(var i=0; i< Math.min(list.length,this.pageNo*5); i++){
        	                listJob.push(list[i]);
        	            }

        	        }

        	        return listJob
				}
			}
		},
		methods: {
    	    nextPage: function() {
    	        this.pageNo++
    	    }
    	    
    	},
        ready(){
            // 滚动到底 加载下一页
            // window.onscroll = () => {
            //     let winH = document.documentElement.clientHeight;
            //     let pageH = document.body.scrollHeight ;
            //     let scrollT = document.documentElement.scrollTop||document.body.scrollTop;

            //     if(pageH-scrollT<=winH){
            //         this.nextPage()
            //     }
            // }
        }
	}
</script>