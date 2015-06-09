$(function(){
	//给所有Input标签都加上form-control类
	$("input").addClass("form-control");
	$("textarea").addClass("form-control");
	$("button").addClass("form-control btn-primary");

	$("[for='id_user-username']").html("用户名称（必填项）");
	$("[for='id_user-email']").html("用户邮箱");
	$(".helptext").hide();
	//给表单添加验证功能
	$("#activityEditForm").validate({
		rules:{
			'user-username':{
				required:true
			},
			"user-email":{
				email:true
			},
			"userprofile-phone":{
				required:true,
				number:true
			},
			"userprofile-schoolID":{
				required:true,
				number:true
			},
			doingstart:{
				required:true
			},
			doingstart:{
				required:true
			},
			feedback:{
				required:true
			}
		},
		messages:{
			"user-username":{
				required:"请填写你的个人名称"
			},
			"user-email":{
				email:"请填写正确的邮箱格式"
			},
			"userprofile-phone":{
				number:"请输入数字"
			},
			"userprofile-schoolID":{
				number:"请输入数字"
			},
			doingstart:{
				required:"请选择活动开始日期"
			},
			doingend:{
				required:"请选择活动结束日期"
			},
			feedback:{
				required:"请添加反馈"
			}

		}
	});
});
