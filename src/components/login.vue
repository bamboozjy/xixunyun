<template>
	<div id="login">
		<div class="header">
			<div class="logo">
				<img src="../assets/images/u8.png" height="140" width="140">习讯云-公共实训基地管理平台
			</div>
			<div class="nav">
				<ul style="font-size: 16px;">
					<!--<a href="http://www.vanber.cn/" style="display: inline-block;margin-left: 20px;margin-right:20px">万博职教</a>-->
					<a style="display: inline-block;margin-right:10px" @click="backindex">
						<div style="color: #0BB5FF;display: inline-block;position:relative;padding:5px 30px;text-align: center;margin-top: 5px;border-radius: 20px;border:1px solid #ddd">
							返回首页
						</div>
					</a>
				</ul>
			</div>
		</div>
		<div class="content" :style ="note" >
			<div class="login">
				<div class="title">
					<h3 style="line-height: 30px;" id="logintit">
		                <span class="fl">管理员登录</span>
		                <a  class="register fr" @click="toApplication">实训基地预约</a>
		            </h3>
				</div>
				<div class="user input">
					<span class="fl"></span>
					<input id="name"  class="fl" type="text" autocomplete="off" placeholder="请输入管理员账号">
				</div>
				<div class="password input">
					<span class="fl"></span>
					<input class="fl" id="password" type="password" autocomplete="off" placeholder="请输入密码">
				</div>
				<div class="h30">
					<p class="prompt"></p>
				</div>
				<div class="tl">
					<a href="javascript:void(0);" class="a-login" id="login" @click="login()">登 录</a>
				</div>
			</div>
		</div>

		<div class="footer">
			<div class="title">
				<h3 class="fl">通知公告</h3>
				<a href="javascript:" class="fr">查看更多</a>
			</div>
			<div class="news">
				<ul>
					<li>
						<a href="javascript:">*关于公共实训基地申请的通知
							<span style="float: right;">2018年5月2日</span>
						</a>
					</li>
					<li>
						<a href="javascript:">*机电实训室暂停申请公告
							<span style="float: right;">2018年5月2日</span>
						</a>
					</li>
					<li>
						<a href="javascript:">*公共实训基地对外开放申请使用的通知
							<span style="float: right;">2018年5月2日</span>
						</a>
					</li>
				</ul>
				<div class="line"></div>
				<ul>
					<li>
						<a href="javascript:">*关于公共实训基地申请的通知
							<span style="float: right;">2018年5月2日</span>
						</a>
					</li>
					<li>
						<a href="javascript:">*机电实训室暂停申请公告
							<span style="float: right;">2018年5月2日</span>
						</a>
					</li>
					<li>
						<a href="javascript:">*公共实训基地对外开放申请使用的通知
							<span style="float: right;">2018年5月2日</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="fot">
				<h3>万博云信(北京)教育科技有限公司</h3>
				<h3>在线客服QQ:1059968723&nbsp;&nbsp;邮箱:xixun@vanber.cn</h3>
				<h3>Copyright &copy; 2015-2016 Vanber.All Rights Reserved.京</h3>
				<h3>ICP备15033449号-2</h3>
			</div>
		</div>
		<!-- <div @click="fns">gai</div>
		<div @click="fnss">zuihou</div>
		<div>{{msg}}</div> -->
		<!-- <div class="hhh">hhh</div> -->
		<!--<el-button type="text" @click="open()">点击打开 Message Box</el-button>-->
	</div>
</template>
<script src="../../static/common/layui.js" type="text/javascript" charset="utf-8"></script>
<script>
	import axios from 'axios';
	import $ from 'jquery';
	import {router} from '../main.js';
	import {setCookie,getCookie} from '../../static/common/cookie.js';
//	import layui from 'layui-src';
//	import  layui  from '../../static/common/layui.js'
//	layui.use('layer', function() {
//      layer = layui.layer;
//  })
//	import Vue from 'vue'
//	import layer from 'vue-layer'
//	Vue.prototype.$layer = layer(Vue);
//	this.$layer.alert("找不到对象！");
	
	//判断浏览器
	import { myBrowser } from '../../static/common/browser.js'
	if(myBrowser() == "IE55" || myBrowser() == "IE6" || myBrowser() == "IE7" || myBrowser() == "IE8") {
		alert("当前浏览器版本过低,请升级浏览器！\n建议更换360极速浏览器或在线咨询客服：QQ 1059968723");
		window.close();
	}
	//	else{
	//		console.log("不是低版浏览器")
	//	}

	export default {
		name: 'login',
		data() {
			return {
				tit: '首页',
				note: {
		            backgroundImage: "url(" + require("../assets/images/background.jpg") + ")",
		            backgroundRepeat: "no-repeat",
		            backgroundSize: "100% 100%",
		            backgroundPosition:"center 0"
//		            marginTop: "5px",
				},
				// msg:[1,3]
			}
		},
		methods: {
			// fns(){
			// 	this.$set(this.msg,this.msg.length,4)
			// },
			// fnss(){
			// 	console.log(this.msg)
			// },
			login(){
				var _this=this;
				var name = $("#name").val();
				var password = $("#password").val();
				if(name == "") {
					this.$message({
		              type: 'info',
		              message: '请输入管理员账号!'
		            });
				} else if(password == "") {
					this.$message({
		              type: 'info',
		              message: '请输入密码!'
		            });
				} else {
					$.ajax({
						//url:'http://baseapi.xixunyun.local/User/login',
						url: 'http://base.api.vanber.cn/User/login',
						type: 'post',
						data: {
							number: name,
							password: password
						},
						success: function(data) {
							var data = JSON.parse(data);
							//console.log(data)
							if(data.status == 1) {
								//window.location.href = '/html/index.html'
								router.push({path:"/index",query:{username:name}})
								setCookie("username",name,3)
								setCookie("password",password,3)
							} else {
								//layer.msg("用户名或密码错误!");
								_this.$message({
					              type: 'info',
					              message: '用户名或密码错误!'
					            });
								$("#name").val('');
								$("#password").val('');
							}
						},
						error: function(a) {
							//layer.msg(a);
						}
					})
				}
			},
			backindex(){
				this.$router.push("/index")
			},
			toApplication(){
				this.$router.push("/application")
			},
			/*open() {
				console.log(this)
				this.$alert('这是一段内容', '标题名称', {
		          confirmButtonText: '确定',
		          callback: action => {
		            this.$message({
		              type: 'info',
		              message: `action: ${ action }`
		            });
		          }
		        });
		    }*/
		},
		// beforeCreate(){
		// 	console.log(1)
		// 	console.log($('.hhh').html())
		// },
		// created(){
		// 	console.log(2)
		// 	console.log($('.hhh').html())

		// },
		// beforeMount(){
		// 	console.log(3)
		// 	console.log($('.hhh').html())

		// },
		// mounted() {
		// 	console.log(4)
		// 	console.log($('.hhh').html())

		// 	this.$nextTick(function(){
		// 		setTimeout(() => {
		// 			console.log('333333')
		// 		}, 3000);
		// 		console.log('next')
		// 	})
		// }
	}
</script>

<style scoped="">
	@import "../css/style.css";
	.login input{
		width: 270px;
		height: 48px;
	}
</style>