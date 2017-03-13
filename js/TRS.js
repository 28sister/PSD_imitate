(function (e) {
	var m = (window.XMLHttpRequest == undefined) && (ActiveXObject != undefined);
	var l = (typeof document.addEventListener != "function" && window.XMLHttpRequest && typeof document.querySelector == "undefined") ? true : false;
	var p = function (x) {
		x.event.each(function (C, A) {
			var D = jQuery(this);
			var E = D.find(".window .slide");
			var F = D.find(".indicator");
			var H = D.find(".js_scroll_next");
			var y = D.find(".js_scroll_prev");
			F.find("li").click(function () {
				var J = e(this);
				var I = J.index();
				E.eq(I).fadeIn(x.animate).siblings().fadeOut(x.animate);
				e(this).addClass("active").siblings().removeClass("active")
			});
			E.eq(0).show().siblings().hide();
			F.find("li").eq(0).addClass("active").siblings().removeClass("active");
			var B = function () {
				var I = F.find("li.active").next();
				if (I.length) {
					I.click()
				} else {
					if (x.autoLoop) {
						F.find("li").eq(0).click()
					}
				}
			};
			var z = function () {
				var I = F.find("li.active").prev();
				if (I.length) {
					I.click()
				} else {
					if (x.autoLoop) {
						F.find("li").eq(F.find("li").length - 1).click()
					}
				}
			};
			if (x.directionNav) {
				H.click(function () {
					B()
				});
				y.click(function () {
					z()
				})
			} else {
				H.hide();
				y.hide()
			}
			if (x.flag) {
				var G = false;
				D.hover(function () {
					G = true
				}, function () {
					G = false
				});
				window.setInterval(function () {
					if (!G) {
						B()
					}
				}, x.autoTime)
			}
		})
	};
	
		var p2 = function (x) {
		x.event.each(function (C, A) {
			var D = jQuery(this);
			var E = D.find(".window .slide");
			var F = D.find(".indicator");
			var H = D.find(".js_scroll_next");
			var y = D.find(".js_scroll_prev");
			F.find("li").click(function () {
				var J = e(this);
				var I = J.index();
				E.eq(I).fadeIn(x.animate).siblings().fadeOut(x.animate);
				e(this).addClass("active").siblings().removeClass("active")
			});
			E.eq(0).show().siblings().hide();
			F.find("li").eq(0).addClass("active").siblings().removeClass("active");
			var B = function () {
				var I = F.find("li.active").next();
				if (I.length) {
					I.click()
				} else {
					if (x.autoLoop) {
						F.find("li").eq(0).click()
					}
				}
			};
			var z = function () {
				var I = F.find("li.active").prev();
				if (I.length) {
					I.click()
				} else {
					if (x.autoLoop) {
						F.find("li").eq(F.find("li").length - 1).click()
					}
				}
			};
			if (x.directionNav) {
				H.click(function () {
					B()
				});
				y.click(function () {
					z()
				})
			} else {
				H.hide();
				y.hide()
			}
			if (x.flag) {
				var G = false;
				D.hover(function () {
					G = true
				}, function () {
					G = false
				});
				window.setInterval(function () {
					if (!G) {
						B()
					}
				}, x.autoTime)
			}
		})
	};
	var i = function (z) {
		var A = z.event;
		var y = A.find(".slide");
		var B = y.length;
		var x = y.find("span");
		x.each(function (D) {
			var H = e(this);
			var G = H.parent();
			var F = G.find("ul");
			if (e.trim(F.html()) != "") {
				var E = G.find(".slide_lv2");
				if (G.hasClass(z.cur)) {
					E.show()
				}
				H.click(function () {
					var J = e(this);
					var I = J.parent();
					$slide_lv2 = I.find(".slide_lv2");
					if (I.hasClass(z.cur)) {
						I.removeClass(z.cur);
					} else {
						I.addClass(z.cur).siblings().removeClass(z.cur);
						$slide_lv2.hide();
						$slide_lv2.show()
					}
				});
				var C = E.find("a");
				C.click(function () {
					var I = e(this);
					I.parent().parent().parent().siblings().find(".slide_lv2").find("a").removeClass(z.cur);
					I.addClass(z.cur).parent().siblings().find("a").removeClass(z.cur)
				})
			} else {
				G.addClass(z.active)
			}
		})
	};
	var b = function (B) {
		var A = B.param;
		var z = this;
		var y = A.find("li");
		this.initRoll = function () {
			A.find("ul:first").animate({
				marginTop : "-" + B.top + "px"
			}, 500, function () {
				e(this).css({
					marginTop : "0px"
				}).find("li:first").appendTo(this)
			})
		};
		var x = setInterval(function () {
				z.initRoll()
			}, B.time);
		y.hover(function () {
			clearInterval(x)
		}, function () {
			x = setInterval(function () {
					z.initRoll()
				}, B.time)
		})
	};
	var g = function (C) {
		var z = C.param;
		var y = z.find(".dataStr");
		var x = z.find(".str");
		var A = z.find(".star_num");
		var B = A.find("a");
		B.hover(function () {
			var D = e(this);
			var E = C.starHeight * parseInt(this.id);
			A.css("background-position", "0 -" + E + "px")
		}, function () {
			B.each(function () {
				var D = e(this);
				if (D.hasClass("cur")) {
					var E = C.starHeight * parseInt(this.id);
					A.css("background-position", "0 -" + E + "px");
					return false
				} else {
					A.css("background-position", "0 0")
				}
			})
		});
		B.click(function () {
			var D = e(this);
			D.addClass("cur").siblings().removeClass("cur");
			var E = y.attr("data-sr_t" + this.id);
			x.attr("star_id", this.id).html(E)
		})
	};
	var u = function (obj) {
		obj.zoomSelect.each(function (A, B) {
			var D = jQuery(this);
			var C = D.find(".js_pic_mid");
			var z = D.find(".js_pic_mid_img");
			var E = D.find(".js_show_gallery");
			var y = D.find(".js_scroll_products ul li a");
			var x = jQuery(".js_pd_gallery");
			if (m) {
				C.hover(function () {
					C.addClass("hover")
				}, function () {
					C.removeClass("hover")
				})
			}
			y.click(function () {
				var G = e(this);
				var F = G.attr("rel");
				z.attr("src", F)
			});
			E.on("click", function () {
				x.fadeIn();
				$(".mask").show();
				$(".header_wrap").css("z-index",1);
			})
		});
		v(obj.selected, 1, 3000, 0, "js_scroll_prev", "js_scroll_next", obj.dir, 0);
		jQuery(".js_pd_gallery").each(function (K, z) {
			var aa = jQuery(this);
			var O = aa.find(".js_stage");
			var I = O.find("img");
			var ad = aa.find(".js_thumbs");
			var F = ad.find("li");
			var ae = aa.find(".js_prev");
			var x = aa.find(".js_next");
			var C = aa.find(".js_plus");
			var N = aa.find(".js_minus");
			var Y = aa.find(".js_gallery_close");
			var A = aa.find(".js_bar");
			var G = aa.find(".js_track");
			var S = aa.find(".js_bar_dot");
			var U = O.width();
			var af = O.height();
			var R = jQuery(window);
			var Z = 2000;
			var X = 470;
			var L = 128;
			var H = 8;
			var T = F.length;
			var Q = T - H;
			if (T <= H) {
				ae.hide();
				x.hide()
			} else {
				var P = 0;
				ae.on("click", function () {
					var ag = P - 1;
					if (ag < 0) {
						return
					}
					offset_x = ag * L;
					ad.animate({
						left : -offset_x
					});
					P = ag
				});
				x.on("click", function () {
					var ag = P + 1;
					if (ag > Q) {
						return
					}
					offset_x = ag * L;
					ad.animate({
						left : -offset_x
					});
					P = ag
				})
			}
			var ac = G.height();
			var V = function (aj, ay, ax) {
				var at = ay || U / 2;
				var aq = ax || af / 2;
				var aA = parseInt((Z - X) * (aj / 100) + X);
				var av = I.width();
				var az = I.height();
				var ak = I.offset();
				var ao = O.offset();
				var ap = ao.left - ak.left;
				var an = ao.top - ak.top;
				var au = ap + at;
				var ar = an + aq;
				var aw = au / av;
				var ag = ar / az;
				var ai = aA * aw;
				var ah = aA * ag;
				var am = ai - at;
				var al = ah - aq;
				I.css({
					width : aA,
					height : aA,
					left : -am,
					top : -al
				})
			};
			var M = function (ah) {
				ah = parseInt(ah);
				ah = ah > 100 ? 100 : ah;
				ah = ah < 0 ? 0 : ah;
				var ag = (100 - ah) * ac / 100;
				S.css({
					top : ag + "px"
				});
				S.data("pct", ah)
			};
			var ab = function () {
				I.width(X).height(X);
				var ah = (U - X) / 2;
				var ag = (af - X) / 2;
				I.css({
					left : ah,
					top : ag
				});
				M(0)
			};
			var B = function (ah) {
				var ag = ah.data("image_l");
				I.attr("src", ag);
				ab()
			};
			var W;
			var J = false;
			S.on("mousedown", function (ah) {
				var ag = S.offset().top;
				var ai = ah.pageY;
				W = ai - ag;
				J = true;
				ah.preventDefault();
				return false
			});
			A.on("mouseup mouseenter", function (ag) {
				J = false
			});
			A.on("mousemove", function (al) {
				if (J) {
					var ag = G.offset().top;
					var ak = al.pageY;
					var am = ak + 0;
					var aj = parseInt(am) - parseInt(ag);
					if (aj >= 0 && aj <= ac) {
						var ai = parseInt(aj * 100 / ac) || 0;
						var ah = 100 - ai;
						M(ah);
						V(ah)
					}
					al.preventDefault()
				}
			});
			var y = false;
			var E,
			D;
			I.on("mousedown", function (ag) {
				var ah = I.offset();
				E = ah.left - ag.pageX;
				D = ah.top - ag.pageY;
				y = true;
				ag.preventDefault()
			});
			O.on("mouseup mouseenter", function () {
				y = false
			});
			O.on("mousemove", function (ai) {
				if (y) {
					var aj = O.offset();
					var ah = ai.pageX + E - aj.left;
					var ag = ai.pageY + D - aj.top;
					I.css({
						left : ah,
						top : ag
					});
					ai.preventDefault()
				}
			});
			C.on("click", function () {
				var ag = jQuery(this);
				var ai = S.data("pct");
				var ah = ai + 10;
				ah = ah > 100 ? 100 : ah;
				M(ah);
				V(ah)
			});
			N.on("click", function () {
				var ag = jQuery(this);
				var ai = S.data("pct");
				var ah = ai - 10;
				ah = ah < 0 ? 0 : ah;
				M(ah);
				V(ah)
			});
			Y.on("click", function () {
				aa.fadeOut();
				$(".mask").hide();
				$(".header_wrap").css("z-index",999);
			});
			F.click(function () {
				var ag = jQuery(this);
				B(ag);
				ag.addClass("active").siblings().removeClass("active");
				return false
			});
			O.on("mousewheel", function (ai, al) {
				var am = S.data("pct");
				var ag = am + al * 3;
				ag = ag > 100 ? 100 : ag;
				ag = ag < 0 ? 0 : ag;
				M(ag);
				var ak = O.offset();
				var aj = ai.pageX - ak.left;
				var ah = ai.pageY - ak.top;
				V(ag, aj, ah);
				return false
			});
			F.eq(0).click()
		})
	};
	var t = function (z) {
		var x = e("#js_focus_image");
		var A = x.find(".item");
		var B = x.find(".controler b");
		var C = z.autoPlay;
		var F = z.autoPlay;
		var E = 0;
		var D = z.autoTime;
		A.eq(0).addClass(z.currentClass);
		B.eq(0).addClass(z.currentClass);
		var y = function () {
			var G = x.find(".controler b." + z.currentClass).next();
			if (G.length) {
				G.click()
			} else {
				B.eq(0).click()
			}
		};
		B[z.trigger](function () {
			var J = e(this);
			var H = J.index();
			var I = A.eq(H);
			var G = I.find(".poster");
			G.attr("src", G.attr("data-src"));
			I.fadeIn().addClass(z.currentClass).siblings().fadeOut().removeClass(z.currentClass);
			J.addClass(z.currentClass).siblings().removeClass(z.currentClass)
		}).hover(function () {
			if (C) {
				F = false
			}
		}, function () {
			if (C) {
				F = true
			}
		});
		A.hover(function () {
			if (C) {
				F = false
			}
		}, function () {
			if (C) {
				F = true
			}
		});
		window.setInterval(function () {
			if (F) {
				y()
			}
		}, D)
	};
	
	
	
	
	
	
	
	
	var a = "floatingAd";
	var h = {
		step : 1,
		delay : 50,
		isLinkClosed : false,
		onClose : function (x) {}

	};
	var f = {
		linkUrl : "#",
		"z-index" : "100",
		"closed-icon" : "",
		imgHeight : "",
		imgWidth : "",
		title : "",
		img : "#",
		linkWindow : "_blank",
		headFilter : 0.2
	};
	function c(y, x) {
		this.element = y;
		this.options = e.extend({}, h, x, {
				width : e(window).width(),
				height : e(window).height(),
				xPos : this.getRandomNum(0, e(window).width() - e(y).innerWidth()),
				yPos : this.getRandomNum(0, 300),
				yOn : this.getRandomNum(0, 1),
				xOn : this.getRandomNum(0, 1),
				yPath : this.getRandomNum(0, 1),
				xPath : this.getRandomNum(0, 1),
				hOffset : e(y).innerHeight(),
				wOffset : e(y).innerWidth(),
				fn : function () {},
				interval : 0
			});
		this._defaults = h;
		this._name = a;
		this.init()
	}
	c.prototype = {
		init : function () {
			var y = e(this.element);
			var A = this.options;
			var z = this;
			var x = 0;
			var B = 0;
			y.css({
				left : A.xPos + z.scrollX(),
				top : A.yPos + z.scrollY()
			});
			A.fn = function () {
				A.width = e(window).width();
				A.height = e(window).height();
				if (x == z.scrollX() && B == z.scrollY()) {
					y.css({
						left : A.xPos + z.scrollX(),
						top : A.yPos + z.scrollY()
					});
					if (A.yOn) {
						A.yPos = A.yPos + A.step
					} else {
						A.yPos = A.yPos - A.step
					}
					if (A.yPos <= 0) {
						A.yOn = 1;
						A.yPos = 0
					}
					if (A.yPos >= (A.height - A.hOffset)) {
						A.yOn = 0;
						A.yPos = (A.height - A.hOffset)
					}
					if (A.xOn) {
						A.xPos = A.xPos + A.step
					} else {
						A.xPos = A.xPos - A.step
					}
					if (A.xPos <= 0) {
						A.xOn = 1;
						A.xPos = 0
					}
					if (A.xPos >= (A.width - A.wOffset)) {
						A.xOn = 0;
						A.xPos = (A.width - A.wOffset)
					}
				}
				B = e(window).scrollTop();
				x = e(window).scrollLeft()
			};
			this.run(y, A)
		},
		run : function (x, y) {
			this.start(x, y);
			this.adEvent(x, y)
		},
		start : function (x, y) {
			x.find("div.close").hide();
			y.interval = window.setInterval(y.fn, y.delay);
			window.setTimeout(function () {
				x.show()
			}, y.delay)
		},
		getRandomNum : function (x, z) {
			var A = z - x;
			var y = Math.random();
			return (x + Math.round(y * A))
		},
		getPath : function (x) {
			return x ? 0 : 1
		},
		clear : function (x, y) {
			x.find("div.close").show();
			window.clearInterval(y.interval)
		},
		close : function (y, z, x) {
			y.unbind("hover");
			y.hide();
			if (x) {
				z.onClose.call(y)
			}
		},
		adEvent : function (y, A) {
			var z = {
				elem : this,
				fn_close : function () {
					this.elem.close(y, A, true)
				},
				fn_clear : function () {
					if (this.elem.options.isLinkClosed) {
						this.elem.close(y, A, false)
					}
				}
			};
			y.find("div.button").bind("click", jQuery.proxy(z, "fn_close"));
			y.find("a").bind("click", jQuery.proxy(z, "fn_clear"));
			var x = {
				elem : this,
				over : function () {
					this.elem.clear(y, A)
				},
				out : function () {
					this.elem.start(y, A)
				}
			};
			y.hover(jQuery.proxy(x, "over"), jQuery.proxy(x, "out"))
		},
		scrollX : function () {
			var x = document.documentElement;
			return self.pageXOffset || (x && x.scrollLeft) || document.body.scrollLeft
		},
		scrollY : function () {
			var x = document.documentElement;
			return self.pageYOffset || (x && x.scrollTop) || document.body.scrollTop
		}
	};
	e.fn.floatingAd = function (x) {
		return this.children("div").each(function (y, z) {
			if (!e.data(this, "plugin_" + a)) {
				e.data(this, "plugin_" + a, new c(this, x))
			}
		})
	};
	e.floatingAd = function (L) {
		if (L) {
			if (L.ad) {
				var E = e("#" + a);
				if (E.length <= 0) {
					E = e("<div>", {
							id : a,
							"class" : a
						}).appendTo("body")
				}
				for (var B in L.ad) {
					var J = L.ad[B];
					J = e.extend({}, f, J);
					var y = e("<div>", {
							"class" : "ad"
						});
					y.css("z-index", J["z-index"]);
					var G = e("<div>", {
							"class" : "open"
						});
					e("<div>", {
						"class" : "opacity",
						style : "opacity: " + J.headFilter + ";filter: alpha(opacity = " + J.headFilter * 100 + ");"
					}).appendTo(G);
					e("<div>", {
						"class" : "text"
					}).append(e("<div>", {
							"class" : "title",
							text : J.title
						})).append(e("<div>", {
							"class" : "button",
							style : J["closed-icon"] ? 'background:url("' + J["closed-icon"] + '") no-repeat;' : ""
						})).appendTo(G);
					G.appendTo(y);
					var I = J.pic;
					for (var B = 0, z = I.length - 1; B < z; B++) {
						var D = "";
						if (B == 0) {
							D = e('<div class="itemList no" >')
						} else {
							D = e('<div class="itemList" style="display:none;" >')
						}
						e("<a>", {
							href : J.pic[B].linkUrl,
							target : J.pic[B].linkWindow,
							title : J.pic[B].title
						}).append(e("<img>", {
								src : J.pic[B].img,
								style : (J.pic[B].imgHeight ? "height:" + J.pic[0].imgHeight + "px;" : "") + (J.pic[B].imgWidth ? "width:" + J.pic[0].imgWidth + "px;" : "")
							})).appendTo(D);
						D.appendTo(y)
					}
					D.appendTo(y);
					y.appendTo(E)
				}
				var H = e(".itemList");
				var C = H.size();
				var x = 0;
				var A = e(".open");
				var K = true;
				var F = function () {
					var M = H.eq(x);
					if (M.hasClass("no")) {
						x = M.index() - 1;
						x = x + 1;
						M.hide().removeClass("no");
						H.eq(x).show().addClass("no");
						if (x == (C)) {
							x = 0;
							H.eq(0).show().addClass("no");
							H.eq(0).siblings().hide().removeClass("no");
							A.show()
						}
					}
				};
				setInterval(function () {
					if (K == true) {
						F()
					}
				}, 1000);
				H.hover(function () {
					K = false
				}, function () {
					K = true
				});
				delete L.ad;
				e("#" + a).floatingAd(L)
			}
		} else {
			e.error("\u6f02\u6d6e\u5e7f\u544a\u9519\u8bef!")
		}
	};
	var o = function (x) {
		e.floatingAd(x)
	};
	e.fn.productScroll = function (x) {
		var y = {
			scrollnum : 1,
			timer : 4000,
			hidebtn : 1,
			prevclassname : "js_scroll_prev",
			nextclassname : "js_scroll_next",
			scrolldirect : 0,
			istoscroll : 1
		};
		e.extend(y, x);
		return this.each(function () {
			var B = e(this);
			var G = B.find("ul");
			var D = B.parent().find("." + y.prevclassname);
			var H = B.parent().find("." + y.nextclassname);
			var C = B.width();
			if (y.scrolldirect) {
				C = B.height()
			}
			var z = B.offset().left;
			if (y.scrolldirect) {
				z = B.offset().top
			}
			var E = G.find("li").size();
			var A = G.find("li").eq(0).outerWidth();
			if (y.scrolldirect) {
				A = G.find("li").eq(0).outerHeight()
			}
			var L = A * y.scrollnum;
			var F = A * E - C;
			var J = 0;
			if (y.istoscroll) {
				B.on({
					mouseenter : function (M) {
						if (y.scrolldirect) {
							K(M.pageY - z < (C / 2) ? 0 : 1)
						} else {
							K(M.pageX - z < (C / 2) ? 0 : 1)
						}
						K(M.pageX - z < (C / 2) ? 0 : 1)
					},
					mousemove : function (M) {
						if (y.scrolldirect) {
							if (M.pageY - z < (C / 2) && J == 1) {
								K(0)
							}
							if (M.pageY - z > (C / 2) && J == 0) {
								K(1)
							}
						} else {
							if (M.pageX - z < (C / 2) && J == 1) {
								K(0)
							}
							if (M.pageX - z > (C / 2) && J == 0) {
								K(1)
							}
						}
					},
					mouseleave : function (O) {
						if (y.scrolldirect) {
							var M = parseFloat(G.css("top")),
							N = Math[J ? "floor" : "ceil"](M / A);
							G.stop(true, false).animate({
								top : A * N
							}, {
								duration : "fast",
								step : I,
								complete : I
							})
						} else {
							var M = parseFloat(G.css("left")),
							N = Math[J ? "floor" : "ceil"](M / A);
							G.stop(true, false).animate({
								left : A * N
							}, {
								duration : "fast",
								step : I,
								complete : I
							})
						}
					}
				})
			}
			D.click(function () {
				if (G.filter(":animated").length) {
					return
				}
				var N = e(this);
				var M = parseFloat(G.css("left"));
				if (y.scrolldirect) {
					M = parseFloat(G.css("top"))
				}
				var O = M + L;
				H.show();
				if (M <= "-" + L) {
					if (y.scrolldirect) {
						G.animate({
							top : O
						}, 300)
					} else {
						G.animate({
							left : O
						}, 300)
					}
				} else {
					if (y.hidebtn) {
						N.hide()
					}
					if (y.scrolldirect) {
						G.animate({
							top : 0
						}, 300)
					} else {
						G.animate({
							left : 0
						}, 300)
					}
				}
			});
			H.click(function () {
				if (G.filter(":animated").length) {
					return
				}
				var N = e(this);
				var M = parseFloat(G.css("left"));
				if (y.scrolldirect) {
					M = parseFloat(G.css("top"))
				}
				isNaN(M) && (M = 0);
				var O = M - L;
				D.show();
				if ((A * E + M) >= (C + 1 + L)) {
					if (y.scrolldirect) {
						G.animate({
							top : O
						}, 300)
					} else {
						G.animate({
							left : O
						}, 300)
					}
				} else {
					if (y.hidebtn) {
						N.hide()
					}
					if (y.scrolldirect) {
						G.animate({
							top : "-" + F
						}, 300)
					} else {
						G.animate({
							left : "-" + F
						}, 300)
					}
				}
			});
			function K(M) {
				if (F < 0) {
					return
				}
				J = M;
				if (y.scrolldirect) {
					G.stop(true, false).animate({
						top : M ? -F : 0
					}, {
						duration : y.timer,
						step : I,
						complete : I
					})
				} else {
					G.stop(true, false).animate({
						left : M ? -F : 0
					}, {
						duration : y.timer,
						step : I,
						complete : I
					})
				}
			}
			function I() {
				var M = G.css("left");
				if (y.scrolldirect) {
					M = G.css("top")
				}
				M == "auto" && (M = 0);
				M = parseFloat(M);
				D.show();
				H.show();
				if (M >= 0 && y.hidebtn) {
					D.hide()
				}
				if (M <= -F && y.hidebtn) {
					H.hide()
				}
			}
			I()
		})
	};
	var v = function (C, A, E, B, y, D, z, x) {
		if (!C) {
			alert("idobj is null");
			return false
		}
		C.productScroll({
			scrollnum : A,
			timer : E,
			hidebtn : B,
			prevclassname : y,
			nextclassname : D,
			scrolldirect : z,
			istoscroll : x
		})
	};
	var q = function (B) {
		var A = this;
		this._createPage = function (Q) {
			var F = parseInt(Q.pageCount);
			if (Q.isStatic) {
				if (Q.pageIndex == 0) {
					Q.pageIndex = 1
				} else {
					Q.pageIndex = parseInt(Q.pageIndex) + 1
				}
			}
			if (Q.ajaxDataType == "xml") {
				if (Q.pageIndex == 0) {
					Q.pageIndex = 1
				}
			}
			var J = parseInt(Q.pageIndex);
			var V = Q.pageLength;
			var P = new Array(V);
			var S = Q.headerKeep;
			var H = Q.footerKeep;
			var E = V - S - H;
			var N = Q.tagStr;
			var K = Q.classStr;
			var W = Q.idStr;
			var R = Q.nameStr;
			var G = Q.disable;
			var ac = Q.active;
			var ab;
			var D = "";
			var L = "";
			if (F < J) {
				
				return false
			}
			if (F <= V) {
				for (ab = 0; ab < F; ab++) {
					D += (ab + 1 != J) ? A.createTag({
						pageName : Q.pageName,
						pageExt : Q.pageExt,
						isStatic : Q.isStatic,
						tagStr : N,
						classStr : K,
						idStr : W,
						nameStr : R,
						a_html : ab + 1
					}) : A.createTag({
						pageName : Q.pageName,
						pageExt : Q.pageExt,
						isStatic : Q.isStatic,
						tagStr : N,
						classStr : ac,
						idStr : W,
						nameStr : R,
						a_html : ab + 1
					})
				}
			} else {
				var I = (V - 1) / 2;
				if (J <= I + 1) {
					var O = "";
					for (ab = 0; ab < S + E; ab++) {
						D += (ab + 1 != J) ? A.createTag({
							pageName : Q.pageName,
							pageExt : Q.pageExt,
							isStatic : Q.isStatic,
							tagStr : N,
							classStr : K,
							idStr : W,
							nameStr : R,
							a_html : ab + 1
						}) : A.createTag({
							pageName : Q.pageName,
							pageExt : Q.pageExt,
							isStatic : Q.isStatic,
							tagStr : N,
							classStr : ac,
							idStr : W,
							nameStr : R,
							a_html : ab + 1
						})
					}
					D += A.createTag({
						pageName : Q.pageName,
						pageExt : Q.pageExt,
						isStatic : Q.isStatic,
						tagStr : N,
						classStr : K,
						idStr : W,
						nameStr : R,
						a_html : "..."
					});
					for (ab = F; ab > F - H; ab--) {
						O = A.createTag({
								pageName : Q.pageName,
								pageExt : Q.pageExt,
								isStatic : Q.isStatic,
								tagStr : N,
								classStr : K,
								idStr : W,
								nameStr : R,
								a_html : ab
							}) + O
					}
					D += O
				} else {
					if (J >= F - I) {
						var aa = "";
						for (ab = F; ab >= F - E - 1; ab--) {
							D = ((J != ab) ? A.createTag({
									pageName : Q.pageName,
									pageExt : Q.pageExt,
									isStatic : Q.isStatic,
									tagStr : N,
									classStr : K,
									idStr : W,
									nameStr : R,
									a_html : ab
								}) : A.createTag({
									pageName : Q.pageName,
									pageExt : Q.pageExt,
									isStatic : Q.isStatic,
									tagStr : N,
									classStr : ac,
									idStr : W,
									nameStr : R,
									a_html : ab
								})) + D
						}
						if (F != (V + 1)) {
							D = A.createTag({
									pageName : Q.pageName,
									pageExt : Q.pageExt,
									isStatic : Q.isStatic,
									tagStr : N,
									classStr : K,
									idStr : W,
									nameStr : R,
									a_html : "..."
								}) + D
						}
						for (ab = 0; ab < S; ab++) {
							aa += A.createTag({
								pageName : Q.pageName,
								pageExt : Q.pageExt,
								isStatic : Q.isStatic,
								tagStr : N,
								classStr : K,
								idStr : W,
								nameStr : R,
								a_html : ab + 1
							})
						}
						D = aa + D
					} else {
						var aa = "";
						var O = "";
						for (ab = 0; ab < S; ab++) {
							aa += A.createTag({
								pageName : Q.pageName,
								pageExt : Q.pageExt,
								isStatic : Q.isStatic,
								tagStr : N,
								classStr : K,
								idStr : W,
								nameStr : R,
								a_html : ab + 1
							})
						}
						aa += A.createTag({
							pageName : Q.pageName,
							pageExt : Q.pageExt,
							isStatic : Q.isStatic,
							tagStr : N,
							classStr : K,
							idStr : W,
							nameStr : R,
							a_html : "..."
						});
						for (ab = F; ab > F - H; ab--) {
							O = A.createTag({
									pageName : Q.pageName,
									pageExt : Q.pageExt,
									isStatic : Q.isStatic,
									tagStr : N,
									classStr : K,
									idStr : W,
									nameStr : R,
									a_html : ab
								}) + O
						}
						O = A.createTag({
								pageName : Q.pageName,
								pageExt : Q.pageExt,
								isStatic : Q.isStatic,
								tagStr : N,
								classStr : K,
								idStr : W,
								nameStr : R,
								a_html : "..."
							}) + O;
						var C = (E - 1) / 2;
						var Y = "";
						var X = "";
						var Z;
						var M = (parseInt(J) + parseInt(C));
						for (ab = Z = J; ab <= M; ab++, Z--) {
							Y = ((ab == Z) ? "" : A.createTag({
									pageName : Q.pageName,
									pageExt : Q.pageExt,
									isStatic : Q.isStatic,
									tagStr : N,
									classStr : K,
									idStr : W,
									nameStr : R,
									a_html : Z
								})) + Y;
							X += (ab == Z) ? A.createTag({
								pageName : Q.pageName,
								pageExt : Q.pageExt,
								isStatic : Q.isStatic,
								tagStr : N,
								classStr : ac,
								idStr : W,
								nameStr : R,
								a_html : ab
							}) : A.createTag({
								pageName : Q.pageName,
								pageExt : Q.pageExt,
								isStatic : Q.isStatic,
								tagStr : N,
								classStr : K,
								idStr : W,
								nameStr : R,
								a_html : ab
							})
						}
						D = aa + Y + X + O
					}
				}
			}
			var T = (J == 1) ? A.createTag({
				pageName : Q.pageName,
				pageExt : Q.pageExt,
				isStatic : Q.isStatic,
				tagStr : N,
				classStr : G,
				idStr : W,
				nameStr : R,
				a_html : Q.prevName,
				classPage : Q.classPage
			}) : A.createTag({
				pageName : Q.pageName,
				pageExt : Q.pageExt,
				isStatic : Q.isStatic,
				tagStr : N,
				classStr : K,
				idStr : W,
				nameStr : R,
				a_html : Q.prevName,
				classPage : Q.classPage
			});
			if (1 != J) {
				T = (J == 1) ? A.createTag({
					pageName : Q.pageName,
					pageExt : Q.pageExt,
					isStatic : Q.isStatic,
					tagStr : N,
					classStr : G,
					idStr : W,
					nameStr : R,
					a_html : Q.prevName,
					pageIndex : J,
					classPage : Q.classPage
				}) : A.createTag({
					pageName : Q.pageName,
					pageExt : Q.pageExt,
					isStatic : Q.isStatic,
					tagStr : N,
					classStr : K,
					idStr : W,
					nameStr : R,
					a_html : Q.prevName,
					pageIndex : (J - 1),
					classPage : Q.classPage
				})
			}
			var U = (J == F) ? A.createTag({
				pageName : Q.pageName,
				pageExt : Q.pageExt,
				isStatic : Q.isStatic,
				tagStr : N,
				classStr : G,
				idStr : W,
				nameStr : R,
				a_html : Q.nextName,
				classPage : Q.classPage
			}) : A.createTag({
				pageName : Q.pageName,
				pageExt : Q.pageExt,
				isStatic : Q.isStatic,
				tagStr : N,
				classStr : K,
				idStr : W,
				nameStr : R,
				a_html : Q.nextName,
				classPage : Q.classPage
			});
			if (Q.pageCount != J) {
				U = (J == F) ? A.createTag({
					pageName : Q.pageName,
					pageExt : Q.pageExt,
					isStatic : Q.isStatic,
					tagStr : N,
					classStr : G,
					idStr : W,
					nameStr : R,
					a_html : Q.nextName,
					pageIndex : J,
					classPage : Q.classPage
				}) : A.createTag({
					pageName : Q.pageName,
					pageExt : Q.pageExt,
					isStatic : Q.isStatic,
					tagStr : N,
					classStr : K,
					idStr : W,
					nameStr : R,
					a_html : Q.nextName,
					pageIndex : (J + 1),
					classPage : Q.classPage
				})
			}
			D = T + D + U;
			return D
		};
		this._makeUrl = function (E) {
			var D = E.dataUrl;
			var C = E.pageIndex - 1;
			D = D.replace(".xml", "_" + C + ".xml");
			if (C > 0) {
				D = D.replace(D.substring(D.lastIndexOf("_")), "_" + C + ".xml")
			} else {
				D = D.replace(D.substring(D.lastIndexOf("_")), ".xml")
			}
			return D
		};
		this._showData = function (F) {
			var C = e(F.pageData);
			C.html("");
			for (var E = 0; E < xmlData.length; E++) {
				var D = F.ajaxData(xmlData[E]);
				C.append(D)
			}
		};
		this._getData = function (C) {
			e.ajax({
				type : C.ajaxType,
				dataType : C.ajaxDataType,
				url : A._makeUrl(C),
				cache : false,
				async : false,
				success : function (D) {
					xmlData = e(D).find("item");
					C.pageIndex = e(D).find("pageIndex").text();
					C.pageCount = e(D).find("pageCount").text();
					A._showData(C)
				},
				error : function (D) {
					xmlData = null
				}
			})
		};
		this.createTag = function (E) {
			classStr = (E.classStr == "") ? "" : ' class="' + E.classStr + '"';
			idStr = (E.idStr == "") ? "" : ' id="' + E.idStr + '"';
			nameStr = (E.nameStr == "") ? "" : ' name="' + E.nameStr + '"';
			var C = null;
			if (!isNaN(E.a_html)) {
				numRel = 'page="' + E.a_html + '"'
			} else {
				numRel = ""
			}
			var D = "";
			if (E.pageIndex != undefined) {
				numRel = 'page="' + E.pageIndex + '"';
				var F = ' class="' + E.classPage + '"';
				if (E.tagStr == "a") {
					if (E.isStatic) {
						if (E.pageIndex == 1) {
							C = E.pageName + "." + E.pageExt
						} else {
							C = E.pageName + "_" + (E.pageIndex - 1) + "." + E.pageExt
						}
						D = "<" + E.tagStr + F + idStr + numRel + nameStr + ' href="' + C + '">' + E.a_html + "</" + E.tagStr + ">"
					} else {
						D = "<" + E.tagStr + F + idStr + numRel + nameStr + ' href="javascript:;">' + E.a_html + "</" + E.tagStr + ">"
					}
				} else {
					D = "<" + E.tagStr + F + idStr + numRel + nameStr + " >" + E.a_html + "</" + E.tagStr + ">"
				}
			} else {
				if (E.tagStr == "a") {
					if (E.isStatic) {
						if (numRel) {
							if (E.a_html == 1) {
								C = E.pageName + "." + E.pageExt
							} else {
								C = E.pageName + "_" + (E.a_html - 1) + "." + E.pageExt
							}
						} else {
							C = "javascript:;"
						}
						D = "<" + E.tagStr + classStr + idStr + numRel + nameStr + ' href="' + C + '">' + E.a_html + "</" + E.tagStr + ">"
					} else {
						D = "<" + E.tagStr + classStr + idStr + numRel + nameStr + ' href="javascript:;">' + E.a_html + "</" + E.tagStr + ">"
					}
				} else {
					D = "<" + E.tagStr + classStr + idStr + numRel + nameStr + " >" + E.a_html + "</" + E.tagStr + ">"
				}
			}
			return D
		};
		if (B.pageType == "WCM") {
			if (!B.isStatic) {
				A._getData(B)
			}
		} else {
			var z = B.ajaxData();
			if (z != null) {
				B.pageIndex = z.pageIndex;
				B.pageCount = z.pageCount
			}
		}
		var x = A._createPage(B);
		if (x) {
			var y = e(B.pageId);
			y.html(x);
			if (!B.isStatic) {
				y.unbind().delegate(B.tagStr, "click", function () {
					var D = e(this);
					var E = D.attr("page");
					if (E != undefined && !D.hasClass(B.active)) {
						B.pageIndex = E;
						x = A._createPage(B);
						if (x) {
							y.html(x)
						}
						if (B.pageType == "WCM") {
							A._getData(B)
						} else {
							var C = {
								pageIndex : B.pageIndex,
								pageCount : B.pageCount
							};
							B.ajaxData(C)
						}
					}
				})
			}
		}
	};
	var d = function (x) {
		var A = window.location.search;
		if (A.indexOf(x) != -1) {
			var y = A.indexOf(x) + x.length + 1;
			var z = A.indexOf("&", y);
			if (z == -1) {
				return A.substring(y)
			} else {
				return A.substring(y, z)
			}
		} else {
			return ""
		}
	};
	var w = function (y) {
		var x;
		var x = y.str.replace(/(^\s+)|(\s+$)/g, "");
		if (y.is_global.toLowerCase() == "g") {
			x = x.replace(/\s/g, "")
		}
		return x
	};
	function r(y) {
		var x = "";
		x = y.replace(/<[^>]+>/g, "");
		return x
	}
	var s = function (x) {
		x.pram1.each(function (y) {
			var z = e(this);
			if (y == 0) {
				z.addClass(x.tabCurrentClass);
				x.pram2.eq(y).show()
			}
			z[x.trigger](function () {
				if (x.async) {
					var C = z.parent();
					var B = C.index();
					var A = z.attr("rel");
					e.ajax({
						type : "get",
						dataType : "html",
						url : A,
						cache : false,
						async : false,
						success : function (D) {
							z.addClass(x.tabCurrentClass);
							C.siblings().find("a").removeClass(x.tabCurrentClass);
							x.pram2.html(D)
						},
						error : function (D) {}

					})
				} else {
					var C = z.parent();
					var B = C.index();
					z.addClass(x.tabCurrentClass);
					C.siblings().find("a").removeClass(x.tabCurrentClass);
					if (x.accessibility) {
						B = z.attr("rel");
						B = B - 1;
						x.pram2.hide();
						x.pram2.eq(B).show()
					} else {
						x.pram2.eq(B).show().siblings().hide()
					}
				}
			})
		})
	};
	var j = function (y) {
		var x = y.param;
		x.hide().each(function () {
			var F = e(this);
			y.onComplete = y.onComplete || false;
			var A = e("<div></div>").insertAfter(F).addClass(y.classSelect);
			var z = e("<ul></ul>").insertAfter(A).addClass(y.classOption).hide();
			var G = [];
			var C = F.find("option");
			for (var D = 0, B = C.length; D < B; D++) {
				var E = e(C[D]);
				if (E.attr("selected")) {
					A.html(E.text())
				}
				G.push("<li>" + E.text() + "</li>")
			}
			A.on("click", function () {
				var H = e(this);
				if (H.hasClass(y.classOpen)) {
					H.removeClass(y.classOpen);
					z.hide()
				} else {
					H.addClass(y.classOpen);
					z.show()
				}
			}).hover(function () {
				e(this).addClass("tag_select_hover")
			}, function () {
				e(this).removeClass("tag_select_hover")
			});
			z.html(G.join("")).hover(function () {
				e(this).addClass("item_hover")
			}, function () {
				e(this).removeClass("item_hover")
			}).find("li").hover(function () {
				e(this).addClass(y.classHover)
			}, function () {
				e(this).removeClass(y.classHover)
			}).on("click", function () {
				var H = e(this);
				F.find("option").eq(H.index()).attr("selected", "selected").siblings().attr("selected", false);
				A.removeClass(y.classOpen);
				A.html(H.text());
				z.hide();
				if (y.onComplete) {
					y.onComplete(H)
				}
			});
			if (y.isEsc) {
				e(document).on("keyup", function (J) {
					var H = J || window.event;
					var I = H.keyCode;
					if (I == 27) {
						z.hide();
						A.removeClass(y.classOpen)
					}
				})
			}
			e(document).on("click", function () {
				if (!z.hasClass("item_hover") && !A.hasClass("tag_select_hover")) {
					A.removeClass(y.classOpen);
					z.hide()
				}
			})
		})
	};
	var n = function (y) {
		var x = y.param;
		x.each(function () {
			var A = e(this);
			var G = A.find("input:radio");
			y.onComplete = y.onComplete || false;
			for (var D = 0, z = G.length; D < z; D++) {
				var B = e(G[D]);
				var F = B.attr("checked");
				var C = e("<span></span>");
				var E = e('<a href="javascript:;"></a>');
				if (F) {
					E.addClass(y.classChecked)
				}
				E.addClass(y.classRadio).insertAfter(B.wrap(C.addClass(y.classWrap))).on("click", function () {
					var H = e(this);
					A.find("." + y.classChecked).removeClass(y.classChecked).siblings().attr("checked", false);
					H.addClass(y.classChecked).siblings().attr("checked", "checked");
					if (y.onComplete) {
						y.onComplete(H)
					}
				})
			}
		})
	};
	var k = function (y) {
		var x = y.param;
		x.each(function () {
			var F = e(this);
			var z = F.find("input:checkbox");
			var D = F.find("input:checkbox[class!=" + y.classCheckboxAll + "][class!=" + y.classCheckboxNay + "]");
			var K = F.find("." + y.classCheckboxAll);
			var E = F.find("." + y.classCheckboxNay);
			y.onComplete = y.onComplete || false;
			for (var C = 0, A = z.length; C < A; C++) {
				var I = e(z[C]);
				var J = I.attr("checked");
				var H = e("<span></span>");
				var B = e('<a href="javascript:;"></a>');
				if (J) {
					B.addClass(y.classChecked)
				}
				B.addClass(y.classCheckbox).insertAfter(I.wrap(H.addClass(y.classWrap))).on("click", function () {
					var P = e(this);
					var M = F.find("." + y.classCheckbox);
					var O = P.siblings();
					var R = F.find("." + y.classCheckboxAll);
					var Q = R.siblings();
					var N = F.find("." + y.classCheckboxNay);
					var L = N.siblings();
					if (P.hasClass(y.classChecked)) {
						P.removeClass(y.classChecked);
						O.attr("checked", false)
					} else {
						P.addClass(y.classChecked);
						O.attr("checked", "checked")
					}
					if (!O.hasClass(y.classCheckboxNay) && !O.hasClass(y.classCheckboxAll)) {
						L.removeClass(y.classChecked);
						N.removeClass(y.classChecked).attr("checked", false);
						Q.removeClass(y.classChecked);
						R.removeClass(y.classChecked).attr("checked", false);
						if (F.find("." + y.classChecked).size() == D.size()) {
							Q.addClass(y.classChecked);
							R.addClass(y.classChecked).attr("checked", true)
						}
					}
					if (O.hasClass(y.classCheckboxAll)) {
						if (P.hasClass(y.classChecked)) {
							M.addClass(y.classChecked);
							z.attr("checked", "checked")
						} else {
							M.removeClass(y.classChecked);
							z.attr("checked", false)
						}
						L.removeClass(y.classChecked);
						N.attr("checked", false)
					}
					if (O.hasClass(y.classCheckboxNay)) {
						M.each(function () {
							var T = e(this);
							var S = T.siblings();
							if (T.hasClass(y.classChecked) && !S.hasClass(y.classCheckboxNay)) {
								T.removeClass(y.classChecked);
								S.attr("checked", false)
							} else {
								if (!S.hasClass(y.classCheckboxNay)) {
									T.addClass(y.classChecked);
									S.attr("checked", true)
								}
							}
							if (S.hasClass(y.classCheckboxAll)) {
								T.removeClass(y.classChecked);
								S.attr("checked", false)
							}
						})
					}
					if (y.onComplete) {
						y.onComplete(P)
					}
				})
			}
			if (K.attr("type") != "checkbox") {
				var G = z.siblings();
				K.on("click", function () {
					var L = e(this);
					E.removeClass(y.classChecked);
					if (L.hasClass(y.classChecked)) {
						L.removeClass(y.classChecked);
						z.attr("checked", false);
						G.removeClass(y.classChecked)
					} else {
						L.addClass(y.classChecked);
						z.attr("checked", "checked");
						G.addClass(y.classChecked)
					}
					if (y.onComplete) {
						y.onComplete($this)
					}
				})
			}
			if (E.attr("type") != "checkbox") {
				E.on("click", function () {
					var L = e(this);
					L.addClass(y.classChecked);
					K.removeClass(y.classChecked);
					G.each(function () {
						var N = e(this);
						var M = N.siblings();
						if (N.hasClass(y.classChecked) && !M.hasClass(y.classCheckboxNay)) {
							N.removeClass(y.classChecked);
							M.attr("checked", false)
						} else {
							if (!M.hasClass(y.classCheckboxNay)) {
								N.addClass(y.classChecked);
								M.attr("checked", true)
							}
						}
					});
					if (y.onComplete) {
						y.onComplete($this)
					}
				})
			}
		})
	};
	window.TRS = {
		Page : q,
		Select : j,
		Radio : n,
		Checkbox : k,
		delHTML : r,
		Trim : w,
		getValue : d,
		ChangeTab : s,
		Carousel : p,
		Carousel2 : p2,
		floatingAd : o,
		Scroll : v,
		imgZoom : u,
		starLevel : g,
		newsScroll : b,
		sidebar : i,
		focusMap : t
		
	}
})(jQuery);
