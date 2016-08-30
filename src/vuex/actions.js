import api from '../api/index'

// 两种写法均可
export const cutNum = ({ dispatch, state}) => {
  dispatch('CUTNUM' , 1); //指向的是store.js mutations中CUTNUM的函数
};
// export const cutNum = ({ dispatch, state}) => dispatch('CUTNUM' , 1);


// api get请求
export const setJobList = ({dispatch}) => {
  api.get('/static/data/jobList.json', ({data}) => {
    dispatch('GETJOBLIST', data.list)
  })

}

export const setFindList = ({dispatch}) =>{
	api.get('/static/data/findList.json', ({data}) => {
		dispatch('FINDLIST', data.find_list)
	})
}

export const getUser = ({dispatch}, userName) =>{
	api.get('http://api.kanzhihu.com/searchuser/'+userName, ({data}) => {
		dispatch('USER', data)
	})
} 




// api post请求
// export const editTaskContent = ({dispatch}, value) => {
//   api.post('/api/list', {
//     id: store.state.activeTask.id,
//     task_content: value
//   }, (response) => {
//     var data = response
//     if(data.data.success) {
//       dispatch('EDIT_TASK_CONTENT', value)  //存在state里面
//     } else {
//       dispatch('SHOW_ERROR', data.data.msg)
//     }
//   }, () => {
//     dispatch('SHOW_ERROR', '网络错误')
//   })
// }