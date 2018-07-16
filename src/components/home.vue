<template>
	<div id="home">
		<!--<h1>这是home</h1>-->
		<!--<ul>
			<router-link v-for="(item,i) in arr" :to='"/list/"+item.goodsID' tag="li">{{item.goodsName}}</router-link>
		</ul>-->
		
		<el-row>
		  <el-col :span="24"><div class="grid-content shouye" style="font-size: 16px;color: #2b7dbc;padding-left:10px;text-align: left;border-bottom: 1px dashed #ccc;padding-bottom: 15px;">首页</div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"><div class="grid-content manageTable">公共实训基地安排表</div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="24"><div class="grid-content tips"> 当前为本月预约安排表,已安排的时间段不可预约,请预约申请时仔细查看</div></el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content">
		  		<div class="block">
				   	<span class="demonstration" style="font-size: 15px;">查看月度安排表:</span>
				    <el-date-picker
				      v-model="choosemonth"
				      type="month"
				      default-value="2018-05"
				      format="yyyy-MM"
				      value-format="yyyy-MM"
				      @change="timechange"
				      placeholder="请选择月份">
				    </el-date-picker>
				</div>
		  	</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content">
				<table border="1" id="managetab">
					<tr v-for='(item,i) in tabData' :key="item">
						<td v-for='val in tabData[i]' style="padding: 5px;" :key="val">
							{{val}}
						</td>
					</tr>
				</table>
		  	</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content">
		  		<el-pagination
				  :page-size="pageSize"
				  :pager-count="11"
				  layout="prev,pager,next"
				  background
				  :current-page="curPage"
				  @current-change="curChange"
				  :total="total">
				</el-pagination> <!-- pager-count：显示的页码个数; page-count:总页数-->
		  	</div>
		  </el-col>
		</el-row>
				
		
		<!--<div class="main-content" style="position:relative;">
	        <div class="page-content inline-block paddingb0 f-width">
	            <div class="page-content-title">
	                <div class="page-header">
	                    <h1>首页</h1>
	                </div>
	            </div>
	            <div class="col-md-12 col-sm-12" id="section" style="width: 100%;">
	                <h2>公共实训基地安排表</h2>
	                <h5 style="font-size: 14px" class="text-center text-danger">
	                    当前为本月预约安排表,已安排的时间段不可预约,请预约申请时仔细查看
	                </h5>
	                <div class="form-group">
	                    <h4 class="control-label">
	                        查看月度安排表:
	                    </h4>
	                    <div class="layui-inline">
					      <div class="layui-input-inline">
					        <input type="text" class="layui-input" id="test3" placeholder="yyyy-MM" value="">
					      </div>
					    </div>
	                     
	                </div>
	                <div class="tab">
	                    <table class="layui-table">
	                        
	                    </table>
	                    <div id="demo0"></div>
	                </div>
	            </div>
	        </div>
	    </div>-->
			
	</div>
</template>

<script>
	
	import axios from 'axios'
	import { Loading } from 'element-ui';
	import $ from 'jquery';
	
	//每页显示3天安排时，判断要显示的页数
	function getPageNum (m,theThis) {
		if(m=='01'||m=='03'||m=='05'||m=='07'||m=='08'||m=='10'||m=='12'){
			theThis.total=31;
		}else{
			theThis.total=30;
		}
	}
	function getData (theThis,time,pageNum,pageSize) {
		pageSize?pageSize:pageSize=3
		var _this=theThis;
		let loadingInstance = Loading.service({target:'#home',text:"玩命加载中..."});//加载中的提示
		axios({
			method:'get',
			url:"http://baseapi.xixunyun.local/Plan/planlist",
			params:{
				month:time,
				page_no:pageNum,
				page_size:pageSize
			}
		}).then(function (data) {
			console.log(data.data.list)
			_this.tabData=data.data.list;
			if (data.data.list.length<=0) {
				_this.$message({
	              type: 'info',
	              center:true,
	              message: '没有更多数据了'
	            });
			}
		}).then(function () {
			_this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
			  loadingInstance.close();
			});
		})
	}
	
	export default {
		name:'home',
		data(){
			return{
				tit:'首页',
				choosemonth:'',//月份初始化
				tabData:'',
				pageSize:3,
				pageCount:11,
				total:31,
				curPage:1,
				time:''
			}
		},
		computed:{
			arr(){
//				return store.state.arr
			}
		},
		methods:{
			timechange(time){
				/*console.log(typeof time)//object
				console.log(time)
				time=time.toString()
				var year=time.substr(11,4)
				var month=time.substr(4,3)
				switch (month){
					case 'Jan':month='01'
						break;
					case 'Feb':month='02'
						break;
					case 'Mar':month='03'
						break;
					case 'Apr':month='04'
						break;
					case 'May':month='05'
						break;
					case 'Jun':month='06'
						break;
					case 'Jul':month='07'
						break;
					case 'Aug':month='08'
						break;
					case 'Sep':month='09'
						break;
					case 'Oct':month='10'
						break;
					case 'Nov':month='11'
						break;
					case 'Dec':month='12'
						break;
				}
				time=year+"-"+month
				this.time=time
				console.log(time)*/
				var mon=time.substring(5,7)
//				console.log(mon)
				getPageNum (mon,this)
				getData (this,time,this.curPage)
			},
			curChange(num){
//				console.log(num);
				this.curPage=num;
				getData (this,this.time,num)
			}
		},
		mounted(){
			var _this=this;
			//获取当前时间
	        var myDate = new Date();
			var y=myDate.getFullYear();
			var m=myDate.getMonth()+1;
			m=m<10?"0"+m:m;
			var yearAndMonth=y+"-"+m;
			this.time=yearAndMonth;
			this.choosemonth=yearAndMonth;
			getPageNum (m,this)
			getData (this,this.time,1);
//			store.commit('ajax')
//			axios({
//				method:'get',
//				url:'http://datainfo.duapp.com/shopdata/getGoods.php',
//				params:{callback:''}
//			}).then(function(data){
//				_this.arr=eval(data.data)
//				
//			})
		},
		updated(){
			
		}
	}
</script>

<style scoped="">
	.el-row {
	    margin-bottom: 20px;
	}
	
	.manageTable{
		font-size: 18px;
	}
	.tips{
		color: #b94a48;
	}
	
	#managetab{
		width: 100%;
	}
	#managetab td{
		border: 1px solid #e6e6e6;
		color: #666;
	}
	
	
</style>