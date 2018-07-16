<template>
	<div id="baoxiu">
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content examine" style="font-size: 16px;color: #2b7dbc;padding-left:10px;text-align: left;border-bottom: 1px dashed #ccc;padding-bottom: 15px;">设备报修</div>
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
				<span>保修期限:</span>
				<el-date-picker
			      v-model="value2"
			      type="date"
			      value-format="yyyy-MM-dd"
			      placeholder="请选择日期" style="width: 200px;margin-right: 50px;">
			    </el-date-picker>
		  		<span>设备编号:</span>
				<el-input v-model="value3" placeholder="请输入设备编号" clearable style="width: 200px;margin-right:50px;"></el-input>
		  	</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content">
				<span class="demonstration"> 设备名称:</span>
				<el-input v-model="value4" placeholder="请输入设备名称" clearable style="width: 200px;margin-right:50px;"></el-input>
				<span class="demonstration"> 存放位置:</span>
				<el-input v-model="value5" placeholder="请输入存放位置" clearable style="width: 200px;margin-right:50px;"></el-input>
				<span class="demonstration">  生产厂家:</span>
				<el-input v-model="value6" placeholder="请输入生产厂家" clearable style="width: 200px;margin-right:50px;"></el-input>
		  	</div>
		  </el-col>
		</el-row> 
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content">
				<el-button type="primary" @click="search" style="margin: 10px 0;">搜索</el-button>
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
				      label="报修时间"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="fdState"
				      sortable
				      label="报修原因"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作" 
				      width="80">
				      <template slot-scope="scope">
				        <button @click="handleClick(scope.row,$event)" type="text" size="small" >报修</button>
				        <!--<button @click="handleClick1(scope.row,$event)" type="text" size="small">通过</button>
				        <button @click="handleClick2(scope.row,$event)" type="text" size="small" >不通过</button>-->
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
		name:'baoxiu',
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
				tableData:[]
				/*[{
		          id: '3',
		          fdName: '设备机',
		          fdType: 'A',
		          fdNumber: '325',
		          fdSpec: 'eee',
		          fdCountry: "中国",
		          fdProducer: '万博云信',
		          fdCreateDate: '2018-06-02',
		          fdEndDate: "2021-06-02",
		          fdFrom: '中国',
		          fdTime: "2018-06-22",
		          fdPosition: '浙江',
		          fdState: '1',
		        }, {
		          device_id: '7',
		          device_name: '设备机',
		          device_type: 'A',
		          num: '365',
		          type: 'eee',
		          country: "中国",
		          company: '万博云信',
		          out_time: '2018-06-02',
		          keep_time: "2021-06-02",
		          source: '中国',
		          in_time: "2018-06-22",
		          posi: '浙江',
		          statu: '3',
		        }, {
		          device_id: '24',
		          device_name: '设备机',
		          device_type: 'B',
		          num: '3298',
		          type: 'eee',
		          country: "中国",
		          company: '万博云信',
		          out_time: '2018-06-01',
		          keep_time: "2021-06-02",
		          source: '中国',
		          in_time: "2018-06-22",
		          posi: '浙江',
		          statu: '2',
		        }]*/
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
		    handleClick1(row,e) {
		    	var eve=e;
		        console.log(row);
		        this.$confirm('确认通过？', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          $(eve.target).remove()
//		          console.log(eve.path[1].children[1])
		          $(eve.path[1].children[1]).remove()//不通过按钮
		          row.fdState=1;
		          this.$message({
		            type: 'success',
		            message: '已通过!'
		          });
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
		          $(eve.target).remove()
		          $(eve.path[1].children[1]).remove()//通过按钮
//		          _this.tableData.
				  row.fdState=2;//更改状态
		          this.$message({
		            type: 'success',
		            message: '已设为不通过!'
		          });
		        }).catch(() => {
		          this.$message({
		            type: 'info',
		            message: '已取消'
		          });          
		        });
		    },
		    search(){
		   		
		    },
		    curChange(num){
				getData (this,num,8)
				this.curPage=num;
			}
			
		},
		mounted(){
			var _this=this;
			getData (this,1,8)
			//http://base.api.vanber.cn/Tool/toollist?page_no=1&page_size=10
			axios({
				method:"get",
				url:"http://base.api.vanber.cn/Tool/toollist"
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
</style>