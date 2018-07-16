<template>
	<div id="room">
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content examine" style="font-size: 16px;color: #2b7dbc;padding-left:10px;text-align: left;border-bottom: 1px dashed #ccc;padding-bottom: 15px;">实训室管理</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content manageTable" style="margin: 10px 0;">
			    <span class="demonstration">最近使用时间:</span>
			    <el-date-picker
			      v-model="value1"
			      type="date"
			      value-format="yyyy-MM-dd"
			      placeholder="请选择日期" style="width: 200px;margin-right: 50px;">
			    </el-date-picker>
				<span>最近预约时间:</span>
				<el-date-picker
			      v-model="value2"
			      type="date"
			      value-format="yyyy-MM-dd"
			      placeholder="请选择日期" style="width: 200px;margin-right: 50px;">
			    </el-date-picker>
		  		<span> 实验室名称:</span>
				<el-input v-model="value3" placeholder="请输入 实验室名称" clearable style="width: 200px;margin-right:50px;"></el-input>
		  	</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content">
				<span class="demonstration">实验室地点:</span>
				<el-input v-model="value4" placeholder="请输入实验室地点" clearable style="width: 200px;margin-right:50px;"></el-input>
				<span class="demonstration">是否预约:</span>
				<el-select v-model="value5" placeholder="请选择是否预约" style="width: 200px;margin-right:50px;">
			        <el-option label="是" value="是"></el-option>
			        <el-option label="否" value="否"></el-option>
			    </el-select>
			    <el-button type="primary" @click="search" style="margin: 10px 0;">搜索</el-button>
		  	</div>
		  </el-col>
		</el-row> 
		<el-row>
		  <el-col :span="2">
		  	<div class="grid-content">
		  		<el-button type="text" @click="dialogFormVisible = true"style="margin: 10px 0;">添加实训室</el-button>
				<el-dialog title="请填写以下信息添加实训室" :visible.sync="dialogFormVisible">
				  <el-form :model="form">
				    <el-form-item label="实验室名称:" :label-width="formLabelWidth">
				      <el-input v-model="form.name" auto-complete="off" placeholder="请输入实验室名称"></el-input>
				    </el-form-item>
				    <el-form-item label="实验室地点:" :label-width="formLabelWidth">
				      <el-input v-model="form.address" auto-complete="off" placeholder="请输入实验室地点"></el-input>
				    </el-form-item>
				    <el-form-item label="实验室管理员:" :label-width="formLabelWidth">
				      <el-input v-model="form.manager" auto-complete="off" placeholder="请输入实验室管理员"></el-input>
				    </el-form-item>
				    <el-form-item label="可容纳人数:" :label-width="formLabelWidth">
				      <el-input v-model="form.personnum" auto-complete="off" placeholder="请输入实验室最大可容纳人数"></el-input>
				    </el-form-item>
				    <el-form-item label="实验室简介:" :label-width="formLabelWidth">
				      <textarea v-model="form.text" placeholder="请输入实验室简介"></textarea>
				    </el-form-item>
				  </el-form>
				  <div slot="footer" class="dialog-footer">
				    <el-button @click="cancle" type="reset">取 消</el-button>
				    <el-button type="primary" @click="sure">确 定</el-button>
				  </div>
				</el-dialog>
		  	</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content">
				<el-table
				    :data="tableData"
				    border
				    style="width: 100%;text-align: left;">
				    <el-table-column
				      prop="id"
				      sortable
				      label="编号">
				    </el-table-column>
				    <el-table-column
				      prop="fdRoomName"
				      label="实训室名">
				    </el-table-column>
				    <el-table-column
				      prop="fdRoomAddress"
				      label="实训室地址">
				    </el-table-column>
				    <el-table-column
				      prop="fdRoomManager"
				      label="实训室管理">
				    </el-table-column>
				    <el-table-column
				      prop="fdRoomPersonnum"
				      sortable
				      label="容纳人数">
				    </el-table-column>
				    <el-table-column
				      prop="fdRoomText"
				      label="教室简介">
				    </el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作" 
				      width="80">
				      <template slot-scope="scope">
				        <button @click="handleClick(scope.row,$event)" type="text" size="small" >查看</button>
				      </template>
				    </el-table-column>
				</el-table>
		  	</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content" style="margin-top: 15px;">
				<div class="grid-content">
		  		<el-pagination
				  :page-size="pageSize"
				  :pager-count="7"
				  layout="prev,pager,next,slot"
				  background
				  :current-page="curPage"
				  @current-change="curChange"
				  :total="total">
				</el-pagination> <!-- pager-count：显示的页码个数-->
		  	</div>
		  	</div>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	import axios from 'axios';
	import $ from 'jquery';
	
	function getData (theThis,num,size) {
			var _this=theThis
			axios({
				method:"get",
				url:"http://base.api.vanber.cn/Room/roomlist",
				params:{
					page_no:num,
					page_size:size
				}
			}).then(function (data) {
//				console.log(data.data.data.list)
				_this.tableData=data.data.data.list
			})
	}
	export default{
		name:'room',
		data(){
			return{
				curPage:1,
				total:100,
				pageSize:8,
				value1:'',
				value2:'',
				value3:'',
				value4:'',
				value5:'',
				value6:'',
				tableData:[],
				dialogFormVisible: false,
		        form: {
		          name: '',
		          address:'',
		          manager: '',
		          personnum: '',
		          text: '',
		        },
		        formLabelWidth: '120px'
			}
		},
		computed:{
			detail(){
//				return store.state.detail
			},
			
		},
		methods:{
			handleClick(row,e) {
//		        console.log(row);
//		        console.log(e);
		        console.log(e.target)
		        
		    },
		    search(){
		   		
		    },
		    curChange(num){
				getData (this,num,8)
				this.curPage=num;
			},
			cancle(form){
				this.dialogFormVisible = false;
//				this.form.resetFields();
				console.log(this.form.name,this.form.source)
			},
			sure(){
				var _this=this;
				this.dialogFormVisible = false
//				var d=JSON.stringify(this.form);
//				d=d.substring(1,d.length-1)
//				console.log(d)
				$.ajax({
                    url:'http://base.api.vanber.cn/Room/add',
                    data:_this.form,
                    type:'post',
                    success:function(data){
                       var data = JSON.parse(data);
                       if(data.status == 1){
                       		_this.$message({
					            type: 'info',
					            message: '添加成功！'
					        });
                       }
                    },
                })
			}
			
		},
		mounted(){
			var _this=this;
			getData (this,1,8)
			//http://base.api.vanber.cn/Tool/toollist?page_no=1&page_size=10
			axios({
				method:"get",
				url:"http://base.api.vanber.cn/Room/roomlist"
			}).then(function (data) {
				//console.log(data.data.data.list)
				//_this.total=data.data.data.list.length
			})
		}
		
	}
	
	
</script>

<style scoped="">
	.cell button{
		padding: 5px;
		border-radius: 5px;
		color: #fff;
		border: 1px solid #ccc;
	}
	.cell button:nth-of-type(1){
		background: #009688;
	}
	.cell button:nth-of-type(2){
		background: #0079FF;
	}
	.cell button:nth-of-type(3){
		background: #F43D30;
	}
	.el-button--text{
		 margin: 10px 0;
		 padding: 10px 20px;
		 color:#fff;
		 background: #0079FF;
	}
	textarea{
		 border: 1px solid #eee;
		 border-radius: 5px;
		 width: 95%;
		 height: 50px;
		 /*text-indent: 10px;*/
		 padding: 10px;
	}
</style>