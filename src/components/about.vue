<template>
	<div id="about">
		<h1>这是关于</h1>
		<div>fnxrmh8xrf830439fm38mhf30f
		efmfreie
		erfcenc</div>
		<!--<ul>
			<router-link v-for="(item,i) in arr" :to='"/list/"+item.goodsID' tag="li">{{item.goodsName}}</router-link>
		</ul>-->
			
			
	</div>
</template>

<script>
	
	import axios from 'axios'
//	import store from '../store/store.js'
	
	export default {
		name:'about',
		data(){
			return{
				tit:'关于',
//				arr:[]
			}
		},
		computed:{
			arr(){
				return store.state.arr
			}
		},
		mounted(){
//			this.$emit('to-parent',this.tit)
			var _this=this;
			
//			store.commit('ajax')
			
//			axios({
//				method:'get',
//				url:'http://datainfo.duapp.com/shopdata/getGoods.php',
//				params:{callback:''}
//			}).then(function(data){
//				_this.arr=eval(data.data)
//				
//			})
			
			
		}
	}
</script>

<style>
	
	
	
</style>