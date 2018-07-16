<template>
	<div id="examine">
		<el-row>
		  <el-col :span="24">
		  	<div class="grid-content examine" style="font-size: 16px;color: #2b7dbc;padding-left:10px;text-align: left;border-bottom: 1px dashed #ccc;padding-bottom: 15px;">实训预约审核详情</div>
		  </el-col>
		</el-row>
		<div class="row">
            <h5  class="form-group col-sm-4">申请人基本信息</h5>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">申请单位 :</div>
                <div class="col-sm-9 company"></div>
            </div>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">单位地址 :</div>
                <div class="col-sm-9 address"></div>
            </div>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">申请人姓名 :</div>
                <div class="col-sm-9 name"></div>
            </div>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">申请人电话 :</div>
                <div class="col-sm-9 phone"></div>
            </div>
            <h5 class="form-group col-sm-4">申请人项目信息</h5>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">实训项目 :</div>
                <div class="col-sm-9 project"></div>
            </div>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">实训工种 :</div>
                <div class="col-sm-9 work"></div>
            </div>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">实训等级 :</div>
                <div class="col-sm-9 level"></div>
            </div>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">实训人数 :</div>
                <div class="col-sm-9 personnum"></div>
            </div>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">实验室选择 :</div>
                <div class="col-sm-9 room"></div>
            </div>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">预约时间段 :</div>
                <div class="col-sm-9 time"></div>
            </div>
            <h5 class="form-group col-sm-4">实训材料要求</h5>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">实训材料准备 :</div>
                <div class="col-sm-9 materialtype"></div>
            </div>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">实训材料型号 :</div>
                <div class="col-sm-9 size"></div>
            </div>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">实训材料数量 :</div>
                <div class="col-sm-9 materialnum"></div>
            </div>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right">辅助设备要求 :</div>
                <div class="col-sm-9 require"></div>
            </div>
            <h5 class="form-group col-sm-4">授课师资及管理人员</h5>
            <div class="form-group col-sm-12">
                <!--<div class="col-sm-3 text-right"> </div>
                <div class="col-sm-9 personinfo"></div>-->
                <table class="col-sm-12 personinfo">
                    <thead>
                        <tr>
                            <th></th>
                            <th>姓名</th>
                            <th>工作单位</th>
                            <th>联系电话</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="2" style="padding: 15px;">实训指导教师</td>
                            <td class="tec1"></td>
                            <td class="tec1"></td>
                            <td class="tec1"></td>
                        </tr>
                        <tr>
                            <td class="tec2"></td>
                            <td class="tec2"></td>
                            <td class="tec2"></td>
                        </tr>
                        <tr>
                            <td rowspan="2" style="padding: 15px;">带队管理人员</td>
                            <td class="man1"></td>
                            <td class="man1"></td>
                            <td class="man1"></td>
                        </tr>
                        <tr>
                            <td class="man2"></td>
                            <td class="man2"></td>
                            <td class="man2"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h5 class="form-group col-sm-4">学员资料</h5>
            <div class="form-group col-sm-12">
                <div class="col-sm-3 text-right"></div>
                <div class="col-sm-9 stuMsg"> img </div>
            </div>
            <div class="form-group col-sm-12">
                <button class="btn btn-success" @click="returnback">返回目录列表</button>
            </div>
        </div>
		
	</div>
</template>

<script>
	import axios from 'axios';
//	import {router} from '../main.js';
	
	export default{
		name:'examine',
		data(){
			return{
				
			}
		},
		computed:{
			detail(){
//				return store.state.detail
			}
		},
		methods:{
			returnback(){
				//router.push({path:"/examine"})
				//history.back(-1);
				this.$router.push({path:"/examine"})
			}
		},
		mounted(){
			var _this=this;
			var id=this.$route.query.id;
			//console.log(id)
			
	        axios({
	        	method:'get',
	        	url:'http://base.api.vanber.cn/Appointment/detail',
	        	params:{id:id}
	        }).then(function (data) {
//	        	console.log(data.data)
	        	var d=data.data;
	        	
	        	$(".company").text(d.company); //申请单位
	            $(".address").text(d.address); //单位地址
	            $(".name").text(d.name); //申请人姓名
	            $(".phone").text(d.phone); //申请人电话
	            $(".project").text(d.project); //实训项目
	            $(".work").text(d.work); //实训工种
	            
	            var lev='';
	        	if(d.level == 1){
	                lev="高级工"; 
	            }else if(d.level == 2){
	                lev="技师"; 
	            }else if(d.level == 3){
	                lev="高级技师"; 
	            }else if(d.level == 4){
	                lev="其他"; 
	            }
	            $(".level").text(lev); //实训等级
	            
	            $(".personnum").text(d.personnum); //实训人数
	        	var rooms='';
	        	if(d.room == 1){
	                rooms="机电实训室"; //实训室
	            }else if(d.room == 2){
	                rooms="机器人实训室"; //实训室
	            }else if(d.room == 3){
	                rooms="数控实训室"; //实训室
	            }
	            $(".room").text(rooms);
	            
	            var time = JSON.parse(d.time);
	            var ohtml = "";
	            for(var i=0;i<time.length;i++){
	                for(var j= 0;j<time[i].length;j++){
//	                    console.log(time[i][j])
	                    var start = time[i][0];
	                    var end = time[i][1];
	                    var moment = "";
	                    if(time[i][2] == "1"){
	                        moment  = "上午9:00-11:30"
	                    }else if(time[i][2] == "2"){
	                        moment  = "下午13:30-16:00"
	                    }else if(time[i][2] == "3"){
	                        moment  = "晚上18:00-20:30"
	                    }
	                }
	                ohtml+="<div>"+
	                   "<span>"+start+"</span>"+"到"+
	                   "<span>"+end+"</span>"+"&nbsp;&nbsp;"+
	                   "<span>"+moment+"</span>"+
	                   "</div>"
	            }
	            $(".time").html(ohtml); //实训时间
	            
	            var met=''
	            if(d.materialtype == 1){
	                met="自带"; //实训材料准备
	            }else if(d.materialtype == 2){
	                met="基地提供"; //实训材料准备
	            }
	            $(".materialtype").text(met); 
	            
	            $(".size").text(d.size); //实训材料型号
	            $(".materialnum").text(d.materialnum); //实训材料数量
	            $(".require").text(d.require); //辅助设备要求
	            if (d.personinfo!='') {
	            	//console.log(d.personinfo)//{"json1":[["1","2","3"],["4","5","6"]],"json2":[["11","22","33"],["44","55","66"]]}
	            	var ps=JSON.parse(d.personinfo) //授课师资
	            	ps.json1[0].map(function (v,i){
	            		$(".tec1").eq(i).text(v)
	            	})
	            	ps.json1[1].map(function (v,i){
	            		$(".tec2").eq(i).text(v)
	            	})
	            	ps.json2[0].map(function (v,i){
	            		$(".man1").eq(i).text(v)
	            	})
	            	ps.json2[1].map(function (v,i){
	            		$(".man2").eq(i).text(v)
	            	})
	            }
			})
		}
		
	}
	
	
</script>

<style scoped="">
	.row{
		text-align: left;
		padding: 10px 20px;
	}
	.row h5{
		font-size: 18px;
		margin-top: 30px;
	}
	table.personinfo td,th{
		border:1px solid #eee;
		width: 25%;
		padding: 10px;
	}
</style>