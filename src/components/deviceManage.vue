<template>
	<div id="deviceManage">
		<h1>deviceManage</h1>
		<!--<img :src="imgs" alt="" />-->
		
	</div>
</template>

<script>
	import axios from 'axios'
//	import store from '../store/store.js'
	
	export default{
		name:'deviceManage',
		data(){
			return{
				imgs:[]
			}
		},
		computed:{
			detail(){
//				return store.state.detail
			}
		},
		mounted(){
			var _this=this;
			
		}
		
	}
	
	
</script>

<style scoped="">
	
</style>