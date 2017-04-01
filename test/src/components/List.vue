<template>
	<div id="wrapper">
		<div class="scroll-box">
	    	<div class="scroll">
	        	34<br />
	        	34243<br />
	        	34<br />
	        	34<br />
	        	423<br />
	        	432<br />
	        	43<br />
	        	44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	          34<br />
	          34243<br />
	          34<br />
	          34<br />
	          423<br />
	          432<br />
	          43<br />
	          44<br />
	        </div>
	    </div>

	    <div class='diy_select'>
			<input type='hidden' name='' class='diy_select_input'/>
			<div class='diy_select_txt'>--请选择--</div>
			<div class='diy_select_btn'></div>
			<ul class='diy_select_list'>
				<li data-id="1">Javascript</li>
				<li data-id="2">Html</li>
				<li data-id="3">Css</li>
				<li data-id="4">Php</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	import '../css/common.css'
	import '../js/jquery.niceScroll.min.js'
	import diy_select from '../js/select.js'
	export default{
		data(){
			return {}
		},
		mounted:function(){
			const theme = {
		      touchbehavior:true,
		      cursorcolor:"#0096ce",
		      cursorwidth:"8px",
		      // cursorborder:"0",
		      background:"#a0ffa0",
		      cursoropacitymin:1
		    }

		    let nice = $(".scroll-box .scroll").niceScroll(theme);

		    let TTDiy_select=new diy_select({  //参数可选
		    TTContainer:'diy_select',//控件的class
		    TTDiy_select_input:'diy_select_input',//用于提交表单的class
		    TTDiy_select_txt:'diy_select_txt',//diy_select用于显示当前选中内容的容器class
		    TTDiy_select_btn:'diy_select_btn',//diy_select的打开按钮
		    TTDiv_select_list:'diy_select_list',//要显示的下拉框内容列表class
		    TTFcous:'focus',//得到焦点时的class
		    TTActive:'active'//得到焦点时的class
		    });//如同时使用多个时请保持各class一致.
		    let theme2 = {
		      touchbehavior:false,
		      cursorcolor:"#666",
		      cursorwidth:"6px",
		      background:"#ccc",
		      cursoropacitymin:1
		    }

		    let nice2 = $(".diy_select_list").niceScroll(theme2);
		}
	}
</script>
<style lang="sass">
	html,body{
  height:1200px;
}
.scroll-box{width:300px;height:500px;overflow:hidden;position: relative;left:0;top:0;}
.scroll{width:100%;height:100%;background:#F30;position: absolute;left:0;top:0;}

/* diy_select */
.diy_select{height:28px;width:210px;position:relative;font-size:12px;margin:50px;background:#fff;color:#000;float:left;}
.diy_select_btn,.diy_select_txt{float:left;height:100%;line-height:28px}
.diy_select_btn{float:right;}
.diy_select,.diy_select_list{border:1px solid #73839F;}
.diy_select_txt{width:180px;}
.diy_select_txt,.diy_select_list li{/* text-indent:10px; */background:#FFF;overflow:hidden;text-align:center;}
.diy_select_list li.active{background:#000;color:#FFF;}
.diy_select_btn{width:28px;background:url(../images/select-tag.jpg) no-repeat center}
.diy_select_list{position:absolute;top:28px;left:-1px;z-index:88888;border-top:none;width:100%;max-height:300px;overflow:auto;display:none;_top:29px}
.diy_select_list li{list-style:none;padding:10px 0;cursor:default;_background:#fff}
.diy_select_list li.focus{background:#3399FF;color:#fff}
</style>