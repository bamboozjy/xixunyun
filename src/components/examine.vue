<template>
	<div id="examine">
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content examine" style="font-size: 16px;color: #2b7dbc;padding-left:10px;text-align: left;border-bottom: 1px dashed #ccc;padding-bottom: 15px;">实验预约审核</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content manageTable" style="margin: 10px 0 10px 30px;">
			    <span class="demonstration">申请时间:</span>
			    <el-date-picker
			      v-model="value1"
			      type="date"
			      value-format="yyyy-MM-dd"
			      placeholder="请选择日期" style="width: 200px;margin-right: 50px;">
			    </el-date-picker>
				<span> 申请人:</span>
				<el-input v-model="value2" placeholder="请输入申请人" clearable style="width: 200px;margin-right:50px;"></el-input>
		  		<span>实训项目:</span>
				<el-input v-model="value3" placeholder="请输入实训项目" clearable style="width: 200px;margin-right:50px;"></el-input>
		  	</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content" >
				<span class="demonstration statu">审批状态:</span>
				<el-select v-model="value4" placeholder="请选择审批状态">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value"
				       style="width: 200px;margin-right: 50px;">
				    </el-option>
				</el-select>
				<el-button type="primary" @click="search" style="margin: 10px 0 10px 50px;">搜索</el-button>
		  	</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content">
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
				      prop="company"
				      label="申请人单位"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="申请人"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="phone"
				      label="联系人电话"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="createtime"
				      sortable
				      label="申请时间"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="project"
				      label="实训项目"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="work"
				      label="实训工种"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="level"
				      sortable
				      label="实训等级"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="time"
				      sortable
				      label="实训时间"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="state_str"
				      label="审批状态"
				      width="80">
				    </el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作"
				      prop="state"
				      :filter-method="filter"
				      class-name="caozuo"
				      width="170">
				      <template slot-scope="scope">
				        <button @click="handleClick(scope.row,$event)" type="text" size="small" >查看</button>
				        <button @click="handleClick1(scope.row,$event)" type="text" size="small" class="pass oprate">通过</button>
				        <button @click="handleClick2(scope.row,$event)" type="text" size="small" class="nopass oprate">不通过</button>
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
	import {router} from '../main.js';
	
	function getData (theThis,num,size) {
			var _this=theThis;
			axios({
				method:'get',
				url:'http://base.api.vanber.cn/Appointment/applist',
				params:{
					page_no:num,
					page_size:size
				}
			}).then(function (data) {
//				console.log(data.data.data.list)
				data=data.data.data.list
				if (data) {
					data.map(function (value,index) {
	//					console.log(value.time)
						value.time=JSON.parse(value.time)
						value.time=value.time[0][0]+"到"+value.time[0][1];
					})
					_this.tableData=data;
					/*setTimeout(function () {
						data.map(function (value,index) {
	//						console.log(value.state)
	//						console.log($("span.statu").text())
//							console.log($("td.caozuo").eq(index).find(".oprate"))
							switch (value.state){
								case "0"://console.log("ing")
									break;
								default:$("td.caozuo").eq(index).find(".oprate").remove();
									break;
							}
						})
					},500)*/
				} else{
					
				}
			})
	}
	export default{
		name:'examine',
		data(){
			return{
				value1:'',
				value2: '',
				value3:'',
				value4: '',
				pageSize:8,//一页显示条数
				total:100,//总条数
				curPage:1,
				options: [{
		          value: '1',
		          label: '审批中'
		        }, {
		          value: '2',
		          label: '已审批'
		        }, {
		          value: '3',
		          label: '未审批'
		        }],
		        tableData: []
			}
		},
		computed:{
			detail(){
//				return store.state.detail
			}
		},
		methods:{
			curChange(num){
				//http://base.api.vanber.cn/Appointment/applist //page_no  page_size
				var _this=this;
				this.curPage=num;
				getData (this,num,8)
			},
			handleClick(row,e) {
//		        console.log(row.id);
		        router.push({path:"/examineDetail",query:{id:row.id}})
//		        console.log(e.target)
		    },
		    handleClick1(row,e) {
		    	var eve=e;
		        //console.log(row.id);
		        var _this=this;
		        this.$confirm('确认通过？', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          
		          
		          $.ajax({
	                url:'http://base.api.vanber.cn/Appointment/approve',
	                data:{
	                    id:row.id,
                    	state:1//1是通过，2是不通过
	                },
	                success:function(data){
	                    console.log(data);
	                    var data = JSON.parse(data);
	                    if(data.status == 1){
	                        _this.$message({type: 'success',message: '审核成功!'});
	                        /*setTimeout(function(){
	                            location.reload();
	                        },1000)*/
	                       getData (_this,_this.curPage,8)
	                    }else{
	                        _this.$message({type: 'info',message: '审核失败!'});
	                    }
	                },
	                error:function(a){
	                    _this.$message({type: 'info',message: a});
	                }
	              })
		          
		          
		          $(eve.target).remove()
//		          console.log(eve.path[1].children[1])
		          $(eve.path[1].children[1]).remove()//不通过按钮
		          row.state=1;
		          /*this.$message({
		            type: 'success',
		            message: '已通过!'
		          });*/
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消'
		          });          
		        });
		    },
		    handleClick2(row,e) {
		        var eve=e;
		        var _this=this;
		        this.$confirm('确认不通过？', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		        	
		        	
		          $.ajax({
	                url:'http://base.api.vanber.cn/Appointment/approve',
	                data:{
	                    id:row.id,
                    	state:2//1是通过，2是不通过
	                },
	                success:function(data){
	                    console.log(data);
	                    var data = JSON.parse(data);
	                    if(data.status == 1){
	                        _this.$message({type: 'warning',message: '审核不通过!'});
	                        /*setTimeout(function(){
	                            location.reload();
	                        },1000)*/
	                       getData (_this,_this.curPage,8)
	                    }else{
	                        _this.$message({type: 'info',message: '审核失败!'});
	                    }
	                },
	                error:function(a){
	                    _this.$message({type: 'info',message: a});
	                }
	              })
		        	
		        	
		        	
		          $(eve.target).remove()
		          $(eve.path[1].children[1]).remove()//通过按钮
//		          _this.tableData.
				  row.state=2;//更改状态
		          /*this.$message({
		            type: 'info',
		            message: '已设为不通过!'
		          });*/
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消'
		          });          
		        });
		    },
		    search(){
		   		
		    },
		    filter(value,row,column){
//		    	console.log(value,row,column)
				if(value=='0'){
//					console.log(111)
				}
		    }
		},
		mounted(){
			var _this=this;
			getData (this,1,8)
			axios({
				method:'get',
				url:'http://base.api.vanber.cn/Appointment/applist'
			}).then(function (data) {
				data=data.data.data.list
//				console.log(data.length)//后台默认返回20条
//				_this.total=data.length;
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
	
	.el-message-box__wrapper .alertform{
		width: 600px;
	}
</style>