<template>
	<div id="xiTong">
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content examine" style="font-size: 16px;color: #2b7dbc;padding-left:10px;text-align: left;border-bottom: 1px dashed #ccc;padding-bottom: 15px;">系统管理</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content" style="margin: 10px 0;">
		  		用户名:{{name}}  
		  		密码:{{pass}}
		  	</div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	import axios from 'axios'
	import {setCookie,getCookie,delCookie} from '../../static/common/cookie.js'
	
	export default{
		name:'xiTong',
		data(){
			return{
				name:'zhangsan',
				pass:'123456'
			}
		},
		computed:{
			detail(){
//				return store.state.detail
			}
		},
		methods:{
			fn(){
				
			}
		},
		mounted(){
			var _this=this;
			this.name=getCookie("username")
			this.pass=getCookie("password")
		}
		
	}
	
	
</script>

<style scoped="">
	
</style>