'use strict';

window.stickyBlocks = (function	() {
	var header = document.querySelector('.header');
	var asideSticker = document.querySelector('.aside-sticky');
	var asideBottomBlock = document.querySelector('.aside-bottom');
	var asideBottomBlockTop = asideBottomBlock.getBoundingClientRect().top;
	var asideStickerOffsetTop = asideSticker.getBoundingClientRect().top;
	var asideBottomBlockTopMargin = 20;
	var headerOffsetTop = header.offsetTop;

	function hasClass(ele,cls) {
		return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
	}

	function addClass(ele,cls) {
		if (!hasClass(ele,cls)) ele.className += " "+cls;
	}

	function removeClass(ele,cls) {
		if (hasClass(ele,cls)) {
			var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
			ele.className=ele.className.replace(reg,' ');
		}
	}

	function fixHeader() {
		if (window.pageYOffset >= headerOffsetTop) {
			document.body.style.paddingTop = header.offsetHeight + headerOffsetTop + 'px';
			addClass(document.body, 'fixed-header');
		} else {
			document.body.style.paddingTop = 0;
			removeClass(document.body, 'fixed-header');
		}
	}

	function fixAsideSticker() {
		if (window.pageYOffset + header.offsetHeight >= asideStickerOffsetTop && window.innerWidth >= 520) {
			addClass(asideSticker, 'fixed-aside');
			asideSticker.style.top = header.offsetHeight + 10 + 'px';
		} else {
			removeClass(asideSticker, 'fixed-aside');
		}
	}

	function stopAsideSticker() {
		if (asideSticker.getBoundingClientRect().bottom >= stopBorder) {
			console.log(true);
		}
	}


	window.addEventListener('scroll', fixHeader);
	window.addEventListener('scroll', fixAsideSticker);
})();
