$(function(){
	$('.navlink li').hover(function(){
		$(this).children('#navdownlist').show();
	},function(){
		$(this).children('#navdownlist').hide();
	});
	
	$('.navlink dd#more').hover(function(){
		$(this).hide();
		$(this).parent('dd.dropdown').show();
	},function(){
		$(this).show();
		$(this).parent('dd.dropdown').hide();
	});

	

});

function AutoScroll(obj){
	$(obj).find("ul:first").animate({
		marginTop:"-30px"
		},500,function(){
		$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
		});
	}
	$(document).ready(function(){
	setInterval('AutoScroll("#scrolllist")',2400);
});