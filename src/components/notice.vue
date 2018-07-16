<template>
	<div id="notice">
		<el-row>
		  <el-col :span="24"><div class="grid-content notice" style="font-size: 16px;color: #2b7dbc;padding-left:10px;text-align: left;border-bottom: 1px dashed #ccc;padding-bottom: 15px;">通知公告</div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content manageTable" style="margin: 10px 0;">
			    <span class="demonstration">发送时间:</span>
			    <el-date-picker
			      v-model="value1"
			      type="date"
			      value-format="yyyy-MM-dd"
			      placeholder="请选择日期" style="margin-right: 50px;">
			    </el-date-picker>
				<span>通知标题:</span>
				<el-input v-model="value2" placeholder="请输入内容" clearable style="width: 200px;margin-right:50px;"></el-input>
				<el-button type="primary" @click="search">搜索</el-button>
		  	</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content manageTable">
		  		<el-table
				    :data="tableData"
				    style="width: 100%;text-align: left;"
				    border
				    :default-sort = "{prop: 'date', order: 'descending'}"
				    >
				    <el-table-column
				      prop="date"
				      label="发送时间"
				      sortable
				      >
				    </el-table-column>
				    <el-table-column
				      prop="person"
				      label="发布人"
				      sortable
				      >
				    </el-table-column>
				    <el-table-column
				      prop="title"
				      label="通知标题"
				      >
				    </el-table-column>
				    <el-table-column
				      prop="abstract"
				      label="内容摘要"
				      >
				    </el-table-column>
				    <el-table-column
				      prop="operate"
				      label="操作"
				      >
				    </el-table-column>
				</el-table>
		  	</div>
		  </el-col>
		</el-row>
		
	</div>
</template>

<script>
	import axios from 'axios';
	import $ from 'jquery';
	
	export default{
		name:'notice',
		data(){
			return{
				value1:'',
				value2: '',
				tableData: [{
		          date: '2016-05-02',
		          person: '王小虎',
		          title: '1518',
		          abstract: '111',
		          operate: '6'
		        }, {
		          date: '2016-05-04',
		          person: '王小明',
		          title: '1517',
		          abstract: '222',
		          operate: '8'
		        }]
			}
		},
		methods:{
			formatter(row, column) {
		        return row.address;
		    },
		    search(){
		   		
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