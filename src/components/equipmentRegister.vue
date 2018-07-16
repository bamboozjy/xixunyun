<template>
	<div id="equipmentRegister">
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content examine" style="font-size: 16px;color: #2b7dbc;padding-left:10px;text-align: left;border-bottom: 1px dashed #ccc;padding-bottom: 15px;">设备登记</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content manageTable" style="margin: 10px 0;">
			    <span class="demonstration">入库时间:</span>
			    <el-date-picker
			      v-model="value1"
			      type="date"
			      value-format="yyyy-MM-dd"
			      placeholder="请选择日期" style="width: 200px;margin-right: 50px;">
			    </el-date-picker>
				<span>设备名称:</span>
				<el-input v-model="value2" placeholder="请输入设备名称" clearable style="width: 200px;margin-right:50px;"></el-input>
		  		<span>设备编号:</span>
				<el-input v-model="value3" placeholder="请输入设备编号" clearable style="width: 200px;margin-right:50px;"></el-input>
		  	</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content">
				<span class="demonstration">存放位置:</span>
				<el-input v-model="value4" placeholder="请输入存放位置" clearable style="width: 200px;margin-right:50px;"></el-input>
				<span class="demonstration">生产厂家:</span>
				<el-input v-model="value5" placeholder="请输入 生产厂家" clearable style="width: 200px;margin-right:50px;"></el-input>
				<el-button type="primary" @click="search" style="margin: 10px 0;">搜索</el-button>
		  	</div>
		  </el-col>
		</el-row> 
		<el-row>
		  <el-col :span="2">
		  	<div class="grid-content">
				<el-button type="text" @click="dialogFormVisible = true">登记设备</el-button>
				<el-dialog title="请填写以下信息登记入库设备" :visible.sync="dialogFormVisible">
				  <el-form :model="form">
				    <el-form-item label="设备编号:" :label-width="formLabelWidth">
				      <el-input v-model="form.number" auto-complete="off" placeholder="请输入设备编号"></el-input>
				    </el-form-item>
				    <el-form-item label="设备名称:" :label-width="formLabelWidth">
				      <el-input v-model="form.name" auto-complete="off" placeholder="请输入设备名称"></el-input>
				    </el-form-item>
				    <el-form-item label="设备型号:" :label-width="formLabelWidth">
				      <el-input v-model="form.type" auto-complete="off" placeholder="请输入设备型号"></el-input>
				    </el-form-item>
				    <el-form-item label="设备分类号:" :label-width="formLabelWidth">
				      <el-input v-model="form.typenum" auto-complete="off" placeholder="请输入设备分类号"></el-input>
				    </el-form-item>
				    <el-form-item label="设备规格:" :label-width="formLabelWidth">
				      <el-input v-model="form.spec" auto-complete="off" placeholder="请输入设备规格"></el-input>
				    </el-form-item>
				    <el-form-item label="生产国家:" :label-width="formLabelWidth">
				      <el-select v-model="form.country" placeholder="请选择生产国家" style="width: 100%;">
				        <el-option label="中国" value="中国"></el-option>
				        <el-option label="美国" value="美国"></el-option>
				        <el-option label="德国" value="德国"></el-option>
				      </el-select>
				    </el-form-item>
				    <el-form-item label="生产厂家:" :label-width="formLabelWidth">
				      <el-input v-model="form.producer" auto-complete="off" placeholder="请输入生产厂家" style="width: 100%;"></el-input>
				    </el-form-item>
				    <el-form-item label="生产日期:" :label-width="formLabelWidth" >
					    <el-date-picker
					      v-model="form.createdate"
					      type="date" 
					      value-format="yyyy-MM-dd"
					      placeholder="请选择日期" style="width: 100%;">
					    </el-date-picker>
				    </el-form-item>
				    <el-form-item label="保修日期:" :label-width="formLabelWidth" >
					    <el-date-picker
					      v-model="form.enddate"
					      type="date"
					      value-format="yyyy-MM-dd"
					      placeholder="请选择日期" style="width: 100%;"><!--value-format="yyyy-MM-dd"很重要，不写格式会是new Date的格式-->
					    </el-date-picker>
				    </el-form-item>
				    <el-form-item label="设备来源:" :label-width="formLabelWidth">
				      <el-select v-model="form.from" placeholder="请选择设备来源" style="width: 100%;">
				        <el-option label="购置" value="购置"></el-option>
				        <el-option label="捐赠" value="捐赠"></el-option>
				        <el-option label="租赁" value="租赁"></el-option>
				      </el-select>
				    </el-form-item>
				    <el-form-item label="存放位置:" :label-width="formLabelWidth">
				      <el-input v-model="form.fdPosition" auto-complete="off" placeholder="请输入设备存放位置"></el-input>
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
				    style="width: 100%;text-align: center;">
				    <el-table-column
				      prop="id"
				      sortable
				      label="设备编号"
				      width="110">
				    </el-table-column>
				    <el-table-column
				      prop="fdName"
				      label="设备名称"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="fdType"
				      label="设备型号"
				      width="80">
				    </el-table-column>
				    <el-table-column
				      prop="fdNumber"
				      sortable
				      label="数量"
				      width="80">
				    </el-table-column>
				    <el-table-column
				      prop="fdSpec"
				      label="规格"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="fdCountry"
				      label="国别"
				      width="80">
				    </el-table-column>
				    <el-table-column
				      prop="fdProducer"
				      label="厂家"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="fdCreateDate"
				      sortable
				      label="出厂日期"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="fdEndDate"
				      label="保修期限"
				      width="100">
				    </el-table-column>
				    <el-table-column
				      prop="fdFrom"
				      label="设备来源"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="fdTime"
				      label="登记入库日期"
				      width="100">
				    </el-table-column>
				    <el-table-column
				      prop="fdPosition"
				      sortable
				      label="存放位置"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="fdState"
				      sortable
				      label="当前状态"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作"
				      width="80">
				      <template slot-scope="scope">
				        <button @click="handleClick(scope.row,$event)" type="text" size="small">查看</button>
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
				  layout="prev,pager,next"
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
				url:"http://base.api.vanber.cn/Tool/toollist",
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
		name:'equipmentRegister',
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
		          number:'',
		          name: '',
		          type:'',
		          typenum: '',
		          spec: '',
		          resource: '',
		          country: '',
		          createdate:'',
		          enddate:'',
		          from:'',
		          fdPosition:''
		        },
		        formLabelWidth: '120px'
			}
		},
		computed:{
			detail(){
//				return store.state.detail
//				alert(1)
			},
			
		},
		methods:{
			handleClick(row,e) {
		        console.log(row);//当前行的所有数据，可更改当前行的数据,例如 row.name='zs'
//		        console.log(e);
		        console.log(e.target)
//		        $(e.target).remove()
		    },
		    search(){
		   		console.log(111)
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
				var d=JSON.stringify(this.form);
				d=d.substring(1,d.length-1)
//				d=Array.from(this.form);
//				var d=$("#form").serialize()
				console.log(d)
				$.ajax({
                    url:'http://base.api.vanber.cn/Tool/add',
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
				/*axios({
					method:"post",
					url:"http://base.api.vanber.cn/Tool/add",
					params:_this.form//{d}
				}).then(function (data) {
					var data = JSON.parse(data);
                    if(data.status == 1){
                   		_this.$message({
				            type: 'info',
				            message: '添加成功！'
				        });
                	}
				})*/
			}
			
		},
		mounted(){
			var _this=this;
			getData (this,1,8)
			/*axios({
				method:"get",
				url:"http://base.api.vanber.cn/Tool/toollist"
			}).then(function (data) {
				console.log(data.data.data.list)
				_this.tableData=data.data.data.list
				
			})*/
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
</style>