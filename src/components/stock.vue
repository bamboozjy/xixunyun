<template>
	<div id="stock">
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content examine" style="font-size: 16px;color: #2b7dbc;padding-left:10px;text-align: left;border-bottom: 1px dashed #ccc;padding-bottom: 15px;">采购与库存管理</div>
		  </el-col>
		</el-row>
		
	</div>
</template>

<script>
	import axios from 'axios'
	
	export default{
		name:'stock',
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