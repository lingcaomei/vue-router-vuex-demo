import Vue from 'vue'
import App from './App'
import Home from './containers/Home'
import News from './containers/News'
import Find from './containers/Find'
import My from './containers/My'
import Search from './containers/Search'
import SearchList from './containers/SearchList'

import vueRouter from 'vue-router'
import vueResource from 'vue-resource'

Vue.use(vueRouter);
Vue.use(vueResource);

// Vue.http.options.root =  'static/data' 
Vue.http.options.emulateJSON = true

const router = new vueRouter();

router.map({
  '/index': {
    component: Home
  },
  'news':{
    component:News
  },
  '/find':{
    name:'find',
    component:Find
  },
  '/my':{
  	component:My
  },
  '/search':{
    component:Search
  },
  '/searchlist':{
    component:SearchList
  }

});

router.redirect({
  '*': '/index'
});


// router.beforeEach((transition) => {
//   console.log('path:..........................')
//   console.log(transition.to.path)//获取当前路径
//   if(transition.to.path == '/my'){
//     // router.redirect({
//     // // 重定向 /a 到 /b
//     // '/my': '/find'})
//     const redirect = encodeURIComponent(transition.to.path); //将转义用于分隔 URI 各个部分的标点符号'/'
//     console.log(redirect)
//     transition.redirect({ name: 'find' , query: {redirect} }); // map上定义了name才可以使用
//     // http://10.1.20.76:8080/#!/find?redirect=%252Fmy

//   }else{
//     transition.next()
//   }
// })

router.start(App, '#app');