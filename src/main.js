import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import "./assets/layui-v2.2.6/layui/css/layui.css"
import "./assets/iconfont/iconfont.css"
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
//import './css/bootstrap.min.css'
//import './assets/js/bootstrap.min'
//import layui from './assets/layui-v2.2.6/layui/layui.js'
//import layui from 'layui-src'
//import layer from '../static/layer/layer.js'

Vue.use(ElementUI)
Vue.use(VueRouter)

import App from './App.vue';
import Login from "./components/login.vue";
import Index from './components/index.vue';
import Application from "./components/application.vue";
import Baofei from "./components/baofei.vue";
import Baoshi from './components/baoshi.vue';
import Baoxiu from './components/baoxiu.vue';
//import BaoxiuAdd from './components/baoxiuAdd.vue';
import DeviceManage from './components/deviceManage.vue';
import Equipment from './components/equipment.vue';
import EquipmentRegister from "./components/equipmentRegister.vue";
//import EquipmentRegisterAdd from './components/equipmentRegisterAdd.vue';
import Examine from './components/examine.vue';
import ExamineDetail from './components/examineDetail.vue';
import Home from './components/home.vue';
import Notice from './components/notice.vue';
import PracticeBase from './components/practiceBase.vue';
import Room from "./components/room.vue";
import Stock from './components/stock.vue';
import Xitong from './components/xiTong.vue';

var routes=[
	{path:'/login',component:Login},
	{path:'/application',component:Application},
	{path:'/manage',component:Home},
	{path:'/index',component:Index,children:[
		{path:'/home',component:Home},
		{path:'/notice',component:Notice},
		{path:'/examine',component:Examine},
		{path:'/examineDetail',component:ExamineDetail},
//		{path:'/deviceManage',component:DeviceManage,children:[
			{path:'/equipment',component:Equipment},
			{path:'/equipmentRegister',component:EquipmentRegister},
			{path:'/baoxiu',component:Baoxiu},
			{path:'/baofei',component:Baofei},
			{path:'/baoshi',component:Baoshi},
//			{path:'/',redirect:'/equipment'},
//		]},
		{path:'/room',component:Room},
		{path:'/stock',component:Stock},
		{path:'/practiceBase',component:PracticeBase},
		{path:'/xiTong',component:Xitong},
		{path:'/',redirect:'/home'}
	]},
//	{path:'/list/:id',component:Detail},
	{path:'/',redirect:'/login'}//重定向到login下
]

var router=new VueRouter({
	// mode: 'history',
	routes:routes
})



new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})

export{router}
