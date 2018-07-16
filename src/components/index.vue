<template>
	
	<div id="index">
		
		<!--主页结构-->
		<el-container>
			<el-header style='height: 84px;' class="header">
				<h1 class="fl">习讯云-公共实训基地管理系统</h1>
				<div class="fr">
		            <ul>
		                <li class="fl">
		                    <a href="javascript:;" id="user_message">
		                        <img src="../assets/images/default.jpg" alt="">
		                        <span>
		                        	{{username}}
		                        </span>
		                    </a>
		                </li>
		                <li class="long-string fl"> | </li>
		                <li class="fl">
		                    <a @click="out()">
		                        <img src="../assets/images/return.png" alt="" class="return">
		                        <span>
		                        	退出
		                        </span>
		                    </a>
		                </li>
		            </ul>
		        </div>
			</el-header>
			<el-container>
				<el-aside width="202px">
					<!--<router-link to="/about">about</router-link>
					<router-link to="/other">other</router-link>-->
					<el-row class="tac">
					  <el-col :span="12">
					    <!--<h5>默认颜色</h5>-->
					    <el-menu
					      default-active="2"
					      class="el-menu-vertical-demo"
					      router
					      
					      active-text-color='#2b7dbc'
					      @open="handleOpen"
					      @close="handleClose">
					      <el-menu-item index="/home">
					      	<template slot="title">
					          <i class="icon iconfont icon-wxbzhuye"></i>
					          <span>首页</span>
					        </template>
					      </el-menu-item>
					      <el-menu-item index="/notice">
					      	<template slot="title">
					          <i class="icon iconfont icon-leimu"></i>
					          <span>通知公告</span>
					        </template>
					      </el-menu-item>
					      <el-menu-item index="/examine">
					      	<template slot="title">
					          <i class="icon iconfont icon-detail"></i>
					          <span>实训预约审核</span>
					        </template>
					      </el-menu-item>
					      <el-submenu index="4">
					        <template slot="title">
					          <i class="icon iconfont icon-compass"></i>
					          <span>实训设备管理</span>
					        </template>
					        <el-menu-item-group id="shebei">
					          <!--<template slot="title">分组一</template>-->
					          <el-menu-item index="/equipment">
					          	<template slot="title">
						          <i class="icon iconfont icon-wrench"></i>
						          <span>设备查询</span>
						        </template>
					          </el-menu-item>
					          <el-menu-item index="/equipmentRegister">
					          	<template slot="title">
						          <i class="icon iconfont icon-wrench"></i>
						          <span>设备登记</span>
						        </template>
					          </el-menu-item>
					          <el-menu-item index="/baoxiu">
					          	<template slot="title">
						          <i class="icon iconfont icon-wrench"></i>
						          <span>设备报修</span>
						        </template>
					          </el-menu-item>
					          <el-menu-item index="/baofei">
					          	<template slot="title">
						          <i class="icon iconfont icon-wrench"></i>
						          <span>设备报废</span>
						        </template>
					          </el-menu-item>
					          <el-menu-item index="/baoshi">
					          	<template slot="title">
						          <i class="icon iconfont icon-wrench"></i>
						          <span>设备报失</span>
						        </template>
					          </el-menu-item>
					        </el-menu-item-group>
					      </el-submenu>
					      <el-menu-item index="/room">
					      	<template slot="title">
					          <i class="icon iconfont icon-all"></i>
					          <span>实训教室管理</span>
					        </template>
					      </el-menu-item>
					      <el-menu-item index="/stock">
					      	<template slot="title">
					          <i class="icon iconfont icon-database"></i>
					          <span>采购与库存管理</span>
					        </template>
					      </el-menu-item>
					      <el-menu-item index="/practiceBase">
					      	<template slot="title">
					          <i class="icon iconfont icon-zuobiao"></i>
					          <span>实训基地信息</span>
					        </template>
					      </el-menu-item>
					      <el-menu-item index="/xiTong">
					      	<template slot="title">
					          <i class="icon iconfont icon-shezhi"></i>
					          <span>系统管理</span>
					        </template>
					      </el-menu-item>
					    </el-menu>
					  </el-col>
					</el-row>
				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
		
	</div>
	
</template>

<script>
	
	import axios from 'axios';
	import {myfun} from '../../static/common/demo.js'
	import {setCookie,getCookie,delCookie} from '../../static/common/cookie.js'
	import {router} from '../main.js';
	import $ from 'jquery';
	
	export default {
		name:'index',
		data(){
			return{
				str:'hello vue 单文件组件',
				tit:'首页',
				username:'zhangsan',
				password:"123456"
			}
		},
		methods:{
			handleOpen(key, keyPath) {
		        console.log(key, keyPath);
		        console.log("kai");
//		        $(".el-submenu").css({background:"#fff"});
		        $(".el-menu-item-group").css({background:"#fff"});
		        
		        $(".el-menu-item-group__title").hide()
		    },
		    handleClose(key, keyPath) {
		        console.log(key, keyPath);
		        console.log("guan");
//		        $(".el-submenu").css({background:"#f9f9f9"});
		        $(".el-menu-item-group").css({background:"#fff"});
		    },
			tap(){
//				this.str='hi 你好'
					axios({
						method:'get',
						url:'http://datainfo.duapp.com/shopdata/getclass.php'
					}).then(function(data){
//						console.log(data.data)
					})	
			},
			out(){
				this.$router.push('/login')
				delCookie('username')
			}
		},
		mounted(){
//				this.$emit('to-parent',this.tit)
			var user=getCookie("username")
			var password=getCookie("password")
			if (user) {
				this.username=user;
				this.password=password
			} else{
//				router.push("/login")
			}
			//this.username=this.$route.query.username
			
		},
		watch:{
			/*"username":function(now,old){
				var user=getCookie("username")
				if (!user) {
					router.push("/login")
				} 
			}*/
		}
	}

/*<li data-v-6efe4612="" role="menuitem" aria-haspopup="true" class="el-submenu is-opened" aria-expanded="true">
	<div class="el-submenu__title" style="padding-left: 20px;">
		<i data-v-6efe4612="" class="el-icon-location"></i> 
		<span data-v-6efe4612="">实训设备管理</span>
		<i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
	</div>
	<ul role="menu" class="el-menu el-menu--inline" style="" data-old-padding-top="" data-old-padding-bottom="" data-old-overflow="">
		<li data-v-6efe4612="" class="el-menu-item-group">
			<div class="el-menu-item-group__title" style="padding-left: 40px;"></div>
			<ul>
				<li data-v-6efe4612="" role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px;"><a data-v-6efe4612="" href="#/other" class="">设备查询</a></li> 
				<li data-v-6efe4612="" role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px;"><a data-v-6efe4612="" href="#/other" class="">设备登记</a></li> 
				<li data-v-6efe4612="" role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px;"><a data-v-6efe4612="" href="#/other" class="">设备报修</a></li> 
				<li data-v-6efe4612="" role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px;"><a data-v-6efe4612="" href="#/other" class="">设备报废</a></li> 
				<li data-v-6efe4612="" role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px;"><a data-v-6efe4612="" href="#/other" class="">设备报失</a></li>
			</ul>
		</li>
	</ul>
</li>*/
</script>

<style scoped="">
	/*@import "../css/style.css"*/
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.header{
		height: 84px;
		line-height: 84px;
		color: #FFF;
		border: 0;
	}
	.header h1{
		/*font-weight: bold;*/
		font-size: 24px;
		line-height: 84px;
		margin:0;
	}
	
	.header li a{
		padding: 0 10px;
		display: block;
		height: 84px;
	}
	.header li a:hover{
		background: #0062CC;
	}
	.header span{
		color: #fff;
		font-size: 14px;
	}
	.header:after,.header ul:after{
		content: "";
		display: block;
		clear: both;
	}
	#user_message img{
		width: 24px;
		border-radius: 50%;
		border: 2px solid #fff;
	}
	
	#shebei .el-menu-item-group__title{/*小分支头部介绍*/
		display: none;
		padding: 0;
	}
	
	#index #shebei .el-menu-item{
		border-top: 1px solid #f0f0f0;
	}
	#index #shebei .el-menu-item span{
		font-size: 15px;
	}
	#index .is-active{
		/*background: #0072E2;*/
		color: #0079FF;
	}
	
	aside{
		overflow: hidden;
	}
	.tac::-webkit-scrollbar {display:none}
	#index .el-menu-item span,#index .el-submenu span{
		font-size: 16px;
		/*margin-left: 5px;*/
		/*color: #585858;*/
	}
	.el-row,.el-col{
		width: 200px;
	}
	.el-header{
		background: #4889dc;
	}
	.el-menu-vertical-demo{
		text-align: left;
		background: #f9f9f9;
		/*width: 200px;*/
	}
	.el-menu-vertical-demo>li{
		border-bottom: 1px solid #f0f0f0;
	}
	.el-menu-vertical-demo i{
		display:inline-block;
		margin-right: 5px;
		/*font-weight: 900;*/
		font-size: 18px;
	}
</style>