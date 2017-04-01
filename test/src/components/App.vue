<template>
	<div id="wrapper">
		<div class="asd"></div>
	</div>
</template>
<script type="text/javascript">
	import '../css/common.css'
	import '../js/util.js'
	import childSay from '../js/child.js'
	import 'jquery.mousewheel'//npm局部安装
	// import './jquery.mousewheel.js'//自个请求
	import Scroll from '../js/scroll.js'
	console.log(childSay)

	function say(str){
		console.log(str)
	}

	say('hello world!!!!!!')
	export default{
		data(){
			return {}
		},
		mounted:function(){
		  	// /*单屏滚动*/
			let scroll = new Scroll()
		}
	}
</script>
<style lang="sass">
.asd{
	width:50px;
	height:50px;
	background:red;
}
.part {
	width: 100%;
	height: 921px;
	overflow: hidden;
}

.part0 {
    background: #C99
}

.part1 {
    background: #846c68;
}

.part2 {
    background: #C9F
}

.part3 {
    background: #CF9
}

.part4 {
    background: #F99
}

.part5 {
    background: #CFF
}

.footer {
    width: 100%;
    height: 60px;
    background: #000
}

.right-nav {
    position: fixed;
    right: 0;
    top: 100px;
    width: 200px;
    li {
	    width: 100px;
	    padding: 20px 0;
	    border: 1px solid #F30;
	    margin: 4px auto;
	    text-align: center;
	    color: #000;
	    list-style: none;
	    cursor: pointer;
	    &.current{
	        background: #F30;
	        color: #FFF
	    }
	}
}

</style>