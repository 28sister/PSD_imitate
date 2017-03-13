$(function(){
	//全局变量
	var $document = $(document);
	var $window = $(window);
	var _width = $window.width();//页面宽度
	var _height = $window.height();//页面高度
	var $closeBtn = $('#closeBtn');//公告关闭按钮
	var $main = $('#main');//页面主体
	var $mainPageDiv = $('.mainPageDiv');//滚动页面父级
	var $mainPage = $mainPageDiv.find('.mainPage');//滚动页面
	var $scollBtn = $('#scollBtn').find('a');//滚动按钮
	var current = 1;
	var $kstd = $('.kstd');//快速通道
	var $kstdItem = $kstd.find('ul').find('li');
	
	/*弹出框*/
	var typemark = $('#typemark').val();
	if (typemark !== undefined ) {
		var cookieValue = getCookie("firstLoad");
		if (cookieValue !== "firstLoad") {
			showDialog();
			setCookie("firstLoad", "firstLoad", 30);
		}else{
			triggerScroll();
		}
	}else{
		triggerScroll();
	}
	function getCookie(c_name) {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=")
				if (c_start != -1) {
					c_start = c_start + c_name.length + 1
						c_end = document.cookie.indexOf(";", c_start)
						if (c_end == -1)
							c_end = document.cookie.length
								return unescape(document.cookie.substring(c_start, c_end))
				}
		}
		return ""
	}

	function setCookie(c_name, value, expiredays) {
		var exdate = new Date()
			exdate.setDate(exdate.getDate() + expiredays)
			document.cookie = c_name + "=" + escape(value) +
			((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
	}
	function showDialog() {
		//生成html
/* 		var _html = "";
		_html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + title + '</span>';
		_html += '<a id="mb_ico">x</a><div id="mb_msg"><div id="mb_contit">' + mb_title + '</div>' + msg + '</div>';
		_html += '</div>';
		//必须先将_html添加到body，再设置Css样式
		$("body").append(_html); */
		//显示html
		$('#mb_box').css("display","block");
		$('#mb_con').css("display","block");
		//让提示框居中
		var _widht = document.documentElement.clientWidth; //屏幕宽
		var _height = document.documentElement.clientHeight; //屏幕高
		var boxWidth = $("#mb_con").width();
		var boxHeight = $("#mb_con").height();
		var titHeight = $("#mb_tit").height();
		$("#mb_con").css({
			top : (_height - boxHeight) / 2 + "px",
			left : (_widht - boxWidth) / 2 + "px"
		});
		$("#mb_msg").css("height", (boxHeight - titHeight-40) + "px");
	}

	//取消按钮事件
	$("#mb_ico").live("click", function () {
		$("#mb_box,#mb_con").remove();
		triggerScroll();
	});
	
	//快速通道图片hover事件
	$kstdItem.delegate('a','mouseover',function(){
		$this = $(this).find('img');
		$this.eq(0).hide();
		$this.eq(1).show();
	});
	$kstdItem.delegate('a','mouseout',function(){
		$this = $(this).find('img');
		$this.eq(1).hide();
		$this.eq(0).show();
	});	
	//响应式屏幕宽度切换Css表
	function changeCss(_width,_height){
		var $cssLink = $('#cssLink');
		 if(_width>=1900){
			$cssLink.attr("href","images/index_1900v1.0.0.css");
		}else if(_width>=1200){
			$cssLink.attr("href","images/index_1200v1.0.0.css");
		}else  if(_width<1200){
			$cssLink.attr("href","images/index_1000v1.0.0.css");
		}
	} 
	
	//初始化页面主体高度
	function initHeight (_height){
		$main.css('height',_height);
	}
	
	changeCss(_width,_height);
	initHeight (_height);
	
	//公告滚动方法
	TRS.newsScroll({
		param	:	$('#js_news_scroll'),
		top		:	34,				//滚动高度
		time	:	2000			//滚动时间
	});
	
	//关闭公告
	$closeBtn.on('click',function(){
		$(this).parent().parent().css('display','none');
	});
	
	//变换滚动参数方法
	function chageScrollVal(index){
		var $login = $main.find('.login');
		if(index==4){
			$login.hide();
		}else{
			$login.show();
		}
		var top = $window.height()*index;
		//背景变换
		$mainPage.removeAttr('style').removeClass('active').eq(index).css('margin-top','-'+top+'px').addClass('active');
		//按钮变换
		$scollBtn.removeClass('active').eq(index).addClass('active');
	}
	
	//触发等待事件
	function throttle (func, wait) {
		var context, args, result;
		var previous = 0;
		return function() {
			var now = new Date;
			var remaining = wait - (now - previous);
			context = this;
			args = arguments;
			if (remaining <= 0) {
				previous = now;
				result = func.apply(context, args);
			}
			return result;
		};
	}
	
	//判断滚动方向
	function wheelDirection(e) {
        return (e.originalEvent.detail<0) ? 1 : (e.originalEvent.wheelDelta>0) ? 1 : -1;
    }
	function scroll(e){
			var direction = wheelDirection(e);
		   if (direction > 0) {//倒序滚动
			   if (current == 1) {
				   return;
			   }
				chageScrollVal(current-2);
				current--;
		   } else {//顺序滚动
			   if (current == $mainPage.length ) {
				   return;
			   }
			   chageScrollVal(current);
			   current++;
		   }
	}
	
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	
	//鼠标滚动触发事件
	function triggerScroll(){
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		if (userAgent.indexOf("Firefox") > -1) {
			$document.on('DOMMouseScroll', throttle(function (e) {
					scroll(e);
				}, 500));
		} else {
			$document.on('mousewheel', throttle(function (e) {
					scroll(e);
				}, 500));

		}
	} 
		
	 
	 //点击滚动按钮触发事件
	$scollBtn.each(function(){
		$this = $(this);
		$this.on('click',function(){
			$cThis = $(this);
			var index = $cThis.attr('data-img');
			chageScrollVal(index-1);
			current = parseInt(index);
		}); 
	});
	
	//实时调整页面大小
	$window.resize(function(){
		$this = $(this);
		var curHeight =  $this.height();
		var curWidth =  $this.width();
		if (window.parent == window){
			changeCss(curWidth,curHeight);
		}
		$main.css('height',curHeight);
		var $active = $mainPageDiv.find('.active');
		var index = $active.attr('data-index');
		var top = curHeight*(index-1);
		$active.css('margin-top','-'+top+'px');
	});
});