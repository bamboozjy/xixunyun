<template>
	<div id="application">
		<div class="header">
			<div class="logo fl">
				<img src="../assets/images/u8.png" style="font-weight: 400;" height="40"> &nbsp;&nbsp;习讯云-实训基地预约
			</div>
			<div class="nav fr">
				<!--<a href="http://www.vanber.cn/" style="display: inline-block;margin-left: 20px;margin-right:20px">万博职教</a>-->
				<a style="display: inline-block;margin-right:10px" @click="tologin">
					<div style="display: inline-block;position:relative;padding:5px 30px;text-align: center;margin-top: 5px;border-radius: 20px;border:1px solid black">
						返回
					</div>
				</a>
			</div>
		</div>
		<!--  <div style="background:url(https://www.fxiaoke.com/XV/Asset/img/reg/bg.png)"></div> -->
		<div class="col-md-12 col-sm-12" :style="note">
			<div id="form" style="margin-top: 30px;background:white;box-shadow: 0 0 10px gray;" class="col-md-8 col-sm-8 col-sm-offset-2 col-md-offset-2">
				<div class="col-md-10 col-md-offset-1">
					<form style="background:white" class="form-horizontal" role="form">
						<div class="form-group">
							<h2 class="text-center" style="margin-left: 150px;margin-top: 20px;margin-bottom: 10px;font-weight: bold;">
                            	公共实训基地预约申请表
                            <a href="/manage" class="tab">查看本月安排表</a>
                        </h2>
							<h5 style="font-size: 12px" class="text-center text-danger">请填写按照要求,填写本表单信息,提交后方可预约申请,申请前请查看实训基地安排表,避免申请冲突</h5>
						</div>
						<div class="first-page" v-show="p1">
							<!--申请人基本信息   -->
							<div class="infor_1 list">
								<h4 style="text-align: left;font-weight: 600;">申请人基本信息:</h4>
								<div class="form-group">
									<label for="a1" class="col-sm-2 control-label">
		                                <span class="star">*</span>
		                                	申请单位
		                            </label>
									<div class="col-sm-10">
										<input type="text" required name="company" class="form-control" id="a1" placeholder="请输入申请人所在单位">
									</div>
								</div>
								<div class="form-group">
									<label for="a2" class="col-sm-2 control-label">单位地址</label>
									<div class="col-sm-10">
										<input type="text" name="address" class="form-control" id="a2" placeholder="请填写单位地址信息">
									</div>
								</div>
								<div class="form-group">
									<label for="a3" class="col-sm-2 control-label">
		                                <span class="star">*</span>
		                                	申请人姓名
		                            </label>
									<div class="col-sm-10">
										<input type="text" name="name" class="form-control" id="a3" placeholder="请输入申请人姓名">
									</div>
								</div>
								<div class="form-group">
									<label for="a4" class="col-sm-2 control-label">
		                                <span class="star">*</span>
		                                	申请人电话
		                            </label>
									<div class="col-sm-10">
										<input type="text" name="phone" class="form-control" id="a4" placeholder="请填写联系人手机号,方便及时收到预约结果">
									</div>
								</div>
							</div>
							<!--申请项目信息-->
							<div class="infor_2 list">
								<h4 style="text-align: left;font-weight: 600;margin-top: 20px;">申请项目信息:</h4>
								<div class="form-group">
									<label for="a5" class="col-sm-2 control-label">
		                                <span class="star">*</span>
		                                	实训项目
		                            </label>
									<div class="col-sm-10">
										<input type="text" name="project" class="form-control" id="a5" placeholder="请填写实训项目名称">
									</div>
								</div>
								<div class="form-group">
									<label for="a6" class="col-sm-2 control-label">实训工种</label>
									<div class="col-sm-10">
										<input type="text" name="work" class="form-control" id="a6" placeholder="请填写实训项目工种名称">
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">
		                                <span class="star">*</span>
		                                	实训等级
		                            </label>
									<div class="col-sm-10">
										<select class="form-control" name="level">
											<option value="0">请选择实训登记</option>
											<option value="1">高级工</option>
											<option value="2">技师</option>
											<option value="3">高级技师</option>
											<option value="4">其他</option>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label for="a7" class="col-sm-2 control-label">
		                                <span class="star">*</span>
		                                	实训人数
		                            </label>
									<div class="col-sm-10">
										<input name="personnum" type="number" min="0" class="form-control" id="a7" placeholder="请填写实训项目具体人数">
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">
		                                <span class="star">*</span>
		                               	 实训室选择
		                            </label>
									<div class="col-sm-10">
										<select class="form-control" name="room">
											<option value="0">请选择预约的实训室</option>
											<option value="1">机电实训室</option>
											<option value="2">机器人实训室</option>
											<option value="3">数控实训室</option>
										</select>
									</div>
								</div>
							</div>
							<!--预约时间段-->
							<div class="infor_3 list">
								<h4> <span class="star">*</span>预约时间段: &nbsp; &nbsp; &nbsp; 备注: 上午9:00-11:30 , 下午13:30-16:00 , 晚上18:00-20:30</h4>
								<div class="layui-inline col-xs-12 dateRange">
									<!--<el-row>
									  <el-col :span="24">
									  	
									  </el-col>
									</el-row>-->
									<div class="col-xs-7">
										<div class="layui-input-inline">
											<span class="" style="margin-right: 10px;">请选择范围:</span>
											<!--<input type="text" class="layui-input range" id="date1" placeholder="开始 到 结束">-->
											<el-date-picker
										      v-model="value1"
										      type="daterange"
										      class="range"
										      id="date1"
										      value-format="yyyy-MM-dd"
										      style="width: 260px;"
										      range-separator="-"
										      start-placeholder="开始日期"
										      end-placeholder="结束日期">
										    </el-date-picker>
											<!--<el-date-picker
										      v-model="value1"
										      type="date"
										      id="date1"
										      class="layui-input range"
										      value-format="yyyy-MM-dd"
										      placeholder="开始 到 结束" style="width: 200px;margin-right: 50px;">
										    </el-date-picker>-->
										</div>
										<input type="hidden" name="time">
									</div>
									<div class=" col-xs-2">
		                                <ul  class="moment">
		                                    <li>
		                                        <label>
		                                            <input type="radio" name="time1" value="1">上午
		                                        </label>
		                                    </li>
		                                    <li>
		                                        <label>
		                                            <input type="radio" name="time1" value="2">下午
		                                        </label>
		                                    </li>
		                                    <li>
		                                        <label>
		                                            <input type="radio" name="time1" value="3">晚上
		                                        </label>
		                                    </li>
		                                </ul>
		                            </div>
		                            <div class=" col-xs-3">
		                                <button class="add layui-btn-normal layui-btn-sm layui-btn" @click="add" type="button">添加时间段</button>
		                            </div>
								</div>
								
								<div class="layui-inline col-xs-12 dateRange" v-show="no2">
									<div class="col-xs-7">
										<div class="layui-input-inline">
											<span class="" style="margin-right: 10px;">请选择范围:</span>
											<el-date-picker
										      v-model="value2"
										      type="daterange"
										      class="range"
										      id="date2"
										      value-format="yyyy-MM-dd"
										      style="width: 260px;"
										      range-separator="-"
										      start-placeholder="开始日期"
										      end-placeholder="结束日期">
										    </el-date-picker>
										</div>
										<input type="hidden" name="time">
									</div>
									<div class=" col-xs-2">
		                                <ul  class="moment">
		                                    <li>
		                                        <label>
		                                            <input type="radio" name="time2" value="1">上午
		                                        </label>
		                                    </li>
		                                    <li>
		                                        <label>
		                                            <input type="radio" name="time2" value="2">下午
		                                        </label>
		                                    </li>
		                                    <li>
		                                        <label>
		                                            <input type="radio" name="time2" value="3">晚上
		                                        </label>
		                                    </li>
		                                </ul>
		                            </div>
		                            <div class=" col-xs-3">
		                                <button class="del layui-btn-normal layui-btn-sm layui-btn" @click="del" type="button">删除时间段</button>
		                            </div>
								</div>
								
								
							</div>
							<div class="text-center">
								<button class="btn btn-info next" @click="next" style="margin-top: 40px;width:40%;margin-bottom: 40px;" type="button">下一步</button>
							</div>
						</div>
						<div class="next-page" v-show="p2">
							<!--实训材料要求-->
							<div class="infor_4 list">
								<h4 style="text-align: left;font-weight: 600;margin-top: 20px;">实训材料要求:</h4>
								<div class="form-group">
									<label class="col-sm-2 control-label" style="padding: 7px 0px;">
		                                <span class="star">*</span>
		                                	实训材料准备
		                            </label>
									<div class="col-sm-10">
										<select class="form-control" name="materialtype">
											<option value="0">请选择实训材料要求</option>
											<option value="1">自带</option>
											<option value="2">基地提供</option>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">实训材料型号</label>
									<div class="col-sm-10">
										<textarea class="form-control" rows="3" name="size"></textarea>
									</div>
								</div>
								<div class="form-group">
									<label for='a9' class="col-sm-2 control-label">实训材料数量</label>
									<div class="col-sm-10">
										<input type="text" name="materialnum" class="form-control" id="a9" placeholder="请填写材料数量要求">
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">辅助设备要求</label>
									<div class="col-sm-10">
										<textarea name="require" class="form-control" rows="3"></textarea>
									</div>
								</div>
							</div>
							<!--授课师资-->
							<div class="infor_5 list">
								<h4 style="text-align: left;font-weight: 600;margin-top: 20px;">授课师资及管理人员:</h4>
								<table class="layui-table">
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
											<td><input type="text" class="form-control name1"></td>
											<td><input type="text" class="form-control company1"></td>
											<td><input type="text" class="form-control phone1"></td>
										</tr>
										<tr>
											<td><input type="text" class="form-control name1"></td>
											<td><input type="text" class="form-control company1"></td>
											<td><input type="text" class="form-control phone1"></td>
										</tr>
										<tr>
											<td rowspan="2" style="padding: 15px;">带队管理人员</td>
											<td><input type="text" class="form-control name2"></td>
											<td><input type="text" class="form-control company2"></td>
											<td><input type="text" class="form-control phone2"></td>
										</tr>
										<tr>
											<td><input type="text" class="form-control name2"></td>
											<td><input type="text" class="form-control company2"></td>
											<td><input type="text" class="form-control phone2"></td>
										</tr>
									</tbody>
								</table>
								<div style="text-align: center">
									<button class="btn btn-info addTeach" type="button" @click="addTeach">添加</button>
								</div>
								<input type="hidden" name="personinfo">
							</div>
							<!--学员材料-->
							<div class="infor_6 list">
								<h4 class="col-sm-2 control-label" style="text-align: left;font-weight: 600;margin-top: 20px;">学员资料:</h4>
								<div class="col-sm-10" style="margin-top: 20px;">
									<div class="layui-upload">
										<ul id="file-box">
											<li>
												<div class="row">
													<div class="col-xs-6">
														<form class="addimg-form" data-url="file/form" enctype="multipart/form-data">
															<input id="" multiple="false" name="addFile[]" fileUrl="" class="blue addimg" type="file" />
															<input type="hidden" name="input_name" value="addFile" />
															<input type="hidden" name="business" value="internshipsummary" />
														</form>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="text-center" style="margin-bottom: 30px;">
								<button class="btn btn-info submit" style="margin-top: 40px;width:30%;" type="button" @click="submit">提交申请</button>
								<button class="btn btn-info last" @click="last" style="margin-top: 40px;width:30%;margin-left: 50px;" type="button">返回编辑</button>
							</div>
						</div>
					</form>

				</div>
			</div>
			<div id="form2" style="margin-top: 200px;height:350px;background: white;box-shadow: 0 0 10px gray;display: none;" class="col-md-6 col-sm-8 col-md-offset-3 col-sm-offset-2">
				<h2 class="text-center" style="margin-top: 60px;">您已成功申请开通习讯顶岗实习云服务平台!</h2>
				<div style="background:lightgray;margin-top: 30px;margin-bottom: 50px;" class="col-md-12 col-sm-12"></div>
				<h4 class="text-center">专属客服会在三个工作日内与您联系，请保持手机畅通</h4>
				<h4 class="text-center">快速开通请联系客服电话<span class="text-warning">0571-8802 6052</span></h4>
			</div>
		</div>
		<div class="footer">
			<div class="float-box fr">
				<dl>
					<dd style="margin: 30px 30px 30px 0">
						<p>IOS客户端</p>
						<img src="../assets/images/latest_ios.jpg">
					</dd>
					<dd style="margin: 30px 0px 30px 0">
						<p>安卓客户端</p>
						<img src="../assets/images/my_android.png">
					</dd>
				</dl>
			</div>
			<div class="fl flbox">
				<div style="margin-top: 30px;">
					<a href="http://www.vanber.cn/">关于万博</a> | <a href="Application.html">联系我们</a>
				</div>
				<div style="margin-top:15px">
					地址：北京市海淀区苏州街3号大恒科技大厦南座5层 电话：18911656408
				</div>
				<div style="margin-top:15px">
					Copyright © 2015-2016 Vanber. All Rights Reserved. 京ICP备15033449号-2
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	import axios from 'axios';
	import $ from 'jquery';
	
    var i = 1;
    var list = [[]];
	export default {
		name: 'application',
		data() {
			return {
				note: {
					backgroundImage: "url(" + require("../assets/images/bg.jpg") + ")",
					overflow: "hidden",
					paddingBottom: "100px"
				},
				value1:'',
				value2:'',
				no2:false,
				value3:'',
				no3:false,
				p1:true,
				p2:false,
				
			}
		},
		computed: {
			detail() {

			}
		},
		methods: {
			tologin(){
				this.$router.push('/login')
			},
			add(){
				
				if(this.value1== "" || !$('[type="radio"]').is(':checked')){
	                this.$message({
		              type: 'info',
		              center:true,
		              message: '请先选择时间段'
		            });
	            }else{
	                list.push([]);
	                //添加时间段
	                if(i<5){
	                    this.no2=true
	                    i++;
	                }else{
	                    return false;
	                }
	            }
			},
			del(){
				this.no2=false
			},
			next(){
				
				if($('[name="company"]').val()==""){
		            this.$message({type: 'info',message: '申请单位不能为空'});
		        }else if($('[name="name"]').val()==""){
		        	this.$message({type: 'info',message: '申请人姓名不能为空'});
		        }else if($('[name="phone"]').val()==""){
		            this.$message({type: 'info',message: '申请人电话不能为空'});
		        }else if($('[name="project"]').val()==""){
		            this.$message({type: 'info',message: '实训项目不能为空'});
		        }else if($('[name="level"]').val()==0){
		            this.$message({type: 'info',message: '请选择实训等级'});
		        }else if($('[name="personnum"]').val()==""){
		            this.$message({type: 'info',message: '实训人数不能为空'});
		        }else if($('[name="room"]').val()==0){
		            this.$message({type: 'info',message: '请选择实训室'});
		        }else if($("#date1").val()=="" || !$('[type="radio"]').is(':checked')){
		            this.$message({type: 'info',message: '请选择时间段'});
		        }else{
		            if(typeof list == "string"){
		                list = JSON.parse(list);
		            }
		            //"[["2018\/05\/22","2018\/06\/23","3"],["2018\/05\/22","2018\/06\/23","1"],["2018\/05\/22","2018\/06\/23","2"]]"
	                //开始时间到结束时间
	                list[0].push(this.value1[0],this.value1[1])
	                var moment1 = $(".moment").eq(0).children().find($('[type="radio"]:checked')).val()
	                list[0].push(moment1);
	                if(this.p2==true){
	                	list.push([])
	                	list[1].push(this.value2[0],this.value2[1])
	                	var moment2 = $(".moment").eq(1).children().find($('[type="radio"]:checked')).val()
	                    list[1].push(moment2);
	                }
	                /*console.log(this.value1,this.value2)
	                $(".range").each(function(idx,val){
	                    var start = $(this).val().slice(0,10); //开始时间
	                    var end = $(this).val().slice(13); //结束时间
	                    list[idx].push(start);
	                    list[idx].push(end);
	                })
	                //上午.下午,晚上
	                $('.moment').each(function(idx,val){
	                    var moment = $(this).children().find($('[type="radio"]:checked')).val()
                        list[idx].push(moment);
	                })*/
	                //console.log(list);
		            this.p1=false;
		            this.p2=true;
		            $("html,body").animate({scrollTop:0}, 0);
		        }
			},
			last(){
				this.p1=true;
	            this.p2=false;
	            $("html,body").animate({scrollTop:0}, 0);
			},
			submit(){
				var _this=this
				if($('[name="materialtype"]').val()==0){
		            _this.$message({type: 'info',message: '请选择实训材料'});
		        }else{
		        	//{"json1":[["1","2","3"],["4","5","6"]],"json2":[["11","22","33"],["44","55","66"]]}
		        	var ipt1=$("tbody tr").eq(0).find('input')
		        	var ipt2=$("tbody tr").eq(1).find('input')
		        	var ipt3=$("tbody tr").eq(2).find('input')
		        	var ipt4=$("tbody tr").eq(3).find('input')
		        	var json1=[[],[]];
		        	var json2=[[],[]];
		        	for (var i=0;i<3;i++) {
		        		json1[0].push(ipt1.eq(i).val())
		        		json1[1].push(ipt2.eq(i).val())
		        		json2[0].push(ipt3.eq(i).val())
		        		json2[1].push(ipt4.eq(i).val())
		        	}
		        	var personinfo={json1:json1,json2:json2}
		            personinfo=JSON.stringify(personinfo);
//		            console.log(personinfo)
		            $('[name="personinfo"]').val(personinfo);
		            list=JSON.stringify(list);
		            $('[name="time"]').val(list)
		            var form = $("form").serialize();
//		            console.log(list,form)
		            $.ajax({
		                type:'post',
		                url:'http://base.api.vanber.cn/Appointment/add',
		                data:form,
		                success:function(data){
		                    var data = JSON.parse(data);
		                    if(data.status == 1){
		                        _this.$message({type: 'info',message: '恭喜您,提交成功!'});
		                    }
		                },
		                error:function(a){
		                    _this.$message({type: 'info',message: a});
		                },
		                complete:function(){  
					        list=[[]]  
					    }
		            })
		        }
			},
			addTeach(){
				$(".infor_5").append(" <table class='layui-table'>" +
	            "                            <thead>" +
	            "                                <tr>" +
	            "                                    <th></th>" +
	            "                                    <th>姓名</th>" +
	            "                                    <th>工作单位</th>" +
	            "                                    <th>联系电话</th>" +
	            "                                </tr>" +
	            "                            </thead>" +
	            "                            <tbody>" +
	            "                                <tr>" +
	            "                                    <td rowspan='2' style='padding: 15px;'>实训指导教师</td>" +
	            "                                    <td><input type='text' class='form-control name1'></td>" +
	            "                                    <td><input type='text' class='form-control company1'></td>" +
	            "                                    <td><input type='text' class='form-control phone1'></td>" +
	            "                                </tr>" +
	            "                                <tr>" +
	            "                                    <td><input type='text' class='form-control name1'></td>" +
	            "                                    <td><input type='text' class='form-control company1'></td>" +
	            "                                    <td><input type='text' class='form-control phone1'></td>" +
	            "                                </tr>" +
	            "                                <tr>" +
	            "                                    <td rowspan='2' style='padding: 15px;'>带队管理人员</td>" +
	            "                                    <td><input type='text' class='form-control name2'></td>" +
	            "                                    <td><input type='text' class='form-control company2'></td>" +
	            "                                    <td><input type='text' class='form-control phone2'></td>" +
	            "                                </tr>" +
	            "                                <tr>" +
	            "                                    <td><input type='text' class='form-control name2'></td>" +
	            "                                    <td><input type='text' class='form-control company2'></td>" +
	            "                                    <td><input type='text' class='form-control phone2'></td>" +
	            "                                </tr>" +
	            "                            </tbody>" +
	            "                        </table>")
			},
			remove(){
				
			}
		},
		mounted() {
			var _this = this;

		}

	}
</script>

<style scoped="">
	@import "../css/style.css"; /* @import "../css/global.css"; */
	/*@import "../css/layui.css"*/
	.logo img{
		width: 30px !important;
	}
	.header{
		width: 1000px;
		margin: 0 auto;
		padding: 20px 0;
		
	}
	.header:after{
		content: '';
		display: block;
		clear: both;
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.logo{
		font-size:30px;
		font-weight: 500;
	}
	label {
		font-weight:500;
	}
	a {
		font-size: 18px;
		color: black !important;
		text-decoration: none !important;
	}
	.get_validate {
		cursor: pointer;
	}
	.layui-table tbody td {
		padding: 0;
		height: 35px;
	}
	table .form-control {
		border: none;
		font-size: 12px;
		width: 100%;
		height: 100%;
	}
	.star {
		color: #FF5722;
	}
	.tab {
		color: #1E9FFF !important;
	}
	.tab:hover {
		text-decoration: underline !important;
	}
	.infor_3>h4:nth-of-type(1){
		margin: 30px 0 20px;
		font-size: 15px;
		text-align: left;
		font-weight: 600;
	}
	.footer{
		padding: 30px 0;
		margin: 0 auto;
		width: 1000px;
	}
	.float-box{
		float: right;
	}
	.float-box img{
		width: 80px;
	}
	dl dd{
		float: left;
	}
	.flbox{
		text-align: left;
		
	}
</style>