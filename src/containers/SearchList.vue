<template>
	<div>
		<v-header></v-header>
		<div class="wrap">
			<!-- 组件写法 -->
			<v-joblist :joblist="jobList" :filtername="jobname"></v-joblist>
		</div>
		
	</div>
</template>

<script>
	import VHeader from '../components/Header';
	import VJoblist from '../components/JobLi';
	import { setJobList } from '../vuex/actions';
	import { getJobList } from '../vuex/getters';

	export default {
		route: {
			data({ to: { query: { jobname }}}) {  //获取query的参数
				this.$set('jobname',jobname)
				return this.setJobList()
			}
		},
		components: {
 		  VHeader,
 		  VJoblist
 		},
		data () {
		    return {
		        pageNo:1,
		        pageCount:0,
		        jobname:'',
		        jobList:[]
		    }
		},
		vuex: {
			actions:{
				setJobList
			},
			getters: {
				jobListData: getJobList
			}
		},
		computed:{
			jobList(){
				return this.jobListData
			}
		},
		events:{
			getSearchJobName(data) {
				this.jobname = data;
			}
		}
	}
</script>