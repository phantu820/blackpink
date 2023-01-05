gsap.registerPlugin(DrawSVGPlugin);

jQuery(document).ready(function($) {

	//	Set initial transforms

	$('.svg-wrapper g, .svg-wrapper path, .svg-wrapper rect').each(function(index) {
		//	Do some error-checking, just in case I missed one
		
		var thisName = ($(this).is('[class]')) ? '.' + $(this).attr('class') : '#' + $(this).attr('id');
		thisName += ' ' + this.nodeName;

		if ($(this).is('[data-origin]')) {
			var tOrig = $(this).attr('data-origin');
			if (tOrig) {
				//console.log('Setting ' + thisName + ' to origin ' + tOrig);
				gsap.set($(this).get(0), { transformOrigin: tOrig });
			} else {
				//console.log(thisName + ' don`t got no data-origin value');
			}
		} else {
			//console.log(thisName + ' ain`t got no data-origin AT ALL');
		}
	});

	let opacityArray = [
		'#gifts .gift',
		'#gift-shadows rect',
		'#tree-1-shadow',
		'#tree-1-trunk-bg',
		'#tree-1-top',
		'#tree-2-shadow',
		'#tree-2-trunk-bg',
		'#tree-2-top',
		'#door g',
		'#door-window-mask',
		'#window',
		'#port-window',
		'#roof',
		'#house-box-bg',
		'#house-box-side-gradient',
		'#house-box-shadow'
	];

	gsap.set(opacityArray, { opacity: 0 });

	gsap.set('#house', { yPercent: 100, webkitFilter: 'brightness(0.5)', filter: 'brightness(0.5)' });
	gsap.set('#grass rect', { scaleY: 0 });
	gsap.set('#roof', { scale: 0.82, xPercent: 10, yPercent: 4 });

	//	Hole

	gsap.set('#hole-mask-path rect', { scaleX: 0, scaleY: 0 });
	gsap.set('#hole-edges', { yPercent: 80 });
	gsap.set('#hole-edges, #hole-wall-back, #hole-wall-side', { webkitFilter: 'brightness(0.5)', filter: 'brightness(0.5)' });

	//	Door

	gsap.set('#door-back', { opacity: 1 });
	gsap.set('#door-back rect', { scaleY: 0 });
	gsap.set('#door-front rect', { xPercent: -13, yPercent: -6 });
	gsap.set('#door-side rect, #door-top rect', { scaleX: 0 });

	gsap.set('#door-window-pane rect', { xPercent: 5, scaleY: 0 });
	gsap.set('#door-window-sill-bottom rect', { scaleY: 0 });
	gsap.set('#door-window-sill-right rect', { scaleX: 0 });
	
	//	Window

	gsap.set('#side-window-mask rect', { scaleX: 0 });
	gsap.set('#window, #window-glass', { webkitFilter: 'brightness(0.9)', filter: 'brightness(0.9)' });
	gsap.set('#window-back rect, #window-sill-right rect', { scaleX: 0 });
	gsap.set('#window-sill-top rect', { scaleX: 0 });
	gsap.set('#window-front rect', { opacity: 0, xPercent: 10, yPercent: -10 });

	//	Port Window
	
	gsap.set('#port-window', { yPercent: 100, scale: 0.5 });

	//	Trees

	gsap.set('#tree-1-top, #tree-2-top', { scale: 0.2, yPercent: 67 });
	gsap.set('#tree-1-trunk-front rect, #tree-1-trunk-side rect, #tree-2-trunk-front rect, #tree-2-trunk-side rect', { scaleY: 0 });
	gsap.set('#tree-1-shadow, #tree-2-shadow', { scale: 0.25 });

	//	Gifts

	gsap.set('#gifts .gift', { scale: 0.5 });

	//	Rainbow
	
	gsap.set('#rainbow-slot', { webkitFilter: 'brightness(0.5)', filter: 'brightness(0.5)' });
	gsap.set('#rainbow-slot-mask-path rect', { scaleX: 0 });
	gsap.set('.stub rect', { scaleY: 0 });
	gsap.set('#rainbow-mask path', { drawSVG: '0%' });

	//	Animation timeline

	let holeTL = gsap.timeline();
	holeTL.timeScale( 1.5 );
	//let holeTL = gsap.timeline().timeScale(0.1);
	holeTL.to('#hole-mask-path rect', { scaleX: 0, scaleY: 0, duration: 1, ease: 'expo.out' });
	holeTL.to('#hole-mask-path rect', { scaleX: 1, scaleY: 1, duration: 0.5, ease: 'expo.out' });
	holeTL.to('#hole-edges', { yPercent: 0, webkitFilter: 'brightness(1)', filter: 'brightness(1)', duration: 0.5, delay: -0.5, ease: 'expo.out' });
	holeTL.to('#hole-wall-back, #hole-wall-side', { webkitFilter: 'brightness(1)', filter: 'brightness(1)', duration: 0.5, delay: -0.5, ease: 'expo.out' });
	holeTL.to('#house', { yPercent: -28, webkitFilter: 'brightness(1)', filter: 'brightness(1)', duration: 0.5, ease: 'expo.out' });
	holeTL.to('#hole-mask-path rect', { scaleX: 0, scaleY: 0, duration: 0.5, delay: -0.4, ease: 'expo.in' });
	holeTL.to('#house-box-shadow', { opacity: 0.5, scale: 1.5, duration: 0.2, delay: -0.2 });
	holeTL.to('#hole-edges', { yPercent: 80, webkitFilter: 'brightness(0.5)', filter: 'brightness(0.5)', duration: 0.5, delay: -0.5, ease: 'expo.in' });
	holeTL.to('#hole-wall-back, #hole-wall-side', { webkitFilter: 'brightness(0.5)', filter: 'brightness(0.5)', duration: 0.5, delay: -0.5, ease: 'expo.in' });
	holeTL.to(['#grass rect'], { scaleY: 1, duration: 0.25, delay: -0.2, stagger: 0.15 });
	
	holeTL.to('#house', { yPercent: 0, duration: 0.3, delay: -1.4, ease: 'expo.in' });
	holeTL.to('#house-box-shadow', { opacity: 1, scale: 1.15, duration: 0.3, delay: -1.4, ease: 'expo.in' });
	holeTL.to('#house-box-side rect, #house-box-front rect', { scaleY: 0.8, duration: 0.3, delay: -1.1, ease: 'expo.out' });
	holeTL.to('#house-box-top rect', { xPercent: -20, yPercent: 20, duration: 0.3, delay: -1.1, ease: 'expo.out' });
	holeTL.to('#house-box-side rect, #house-box-front rect', { scaleY: 1, duration: 1, delay: -0.8, ease: 'elastic.out(1.75, 0.2)' });
	holeTL.to('#house-box-top rect', { xPercent: 0, yPercent: 0, duration: 1, delay: -1, ease: 'elastic.out(1.75, 0.2)' });
	
	holeTL.set('#roof, #house-box-bg', { opacity: 1, delay: -0.9 });
	holeTL.set('#house-box-front rect', { scaleY: 1.02 });
	holeTL.to('#roof', { scale: 1, xPercent: 0, yPercent: -20, duration: 0.2, delay: -0.9, ease: 'expo.out' });
	holeTL.to('#roof', { yPercent: 0, duration: 0.2, delay: -0.4, ease: 'bounce.out' });
	holeTL.to('#house-box-side-gradient', { opacity: 1, duration: 0.2, delay: -0.2 });
	
	holeTL.to('#door-back rect', { scaleY: 1, duration: 0.3, delay: -0.5, ease: 'circ.out' });
	holeTL.set('#door-front, #door-side, #door-top', { opacity: 1 });	
	holeTL.to('#door-front rect', { xPercent: 0, yPercent:0, duration: 0.2 });
	holeTL.to('#door-side rect, #door-top rect', { scaleX: 1, duration: 0.2, delay: -0.2 });
	
	holeTL.set('#door-window-mask', { opacity: 1 });
	holeTL.to('#door-side rect, #door-top rect', { scaleX: 1, duration: 0.2, delay: -0.2 });
	holeTL.to('#door-window-pane rect', { scaleY: 1, duration: 0.2 });
	holeTL.to('#door-window-pane rect', { xPercent: 0, duration: 0.2 });
	holeTL.to('#door-window-sill-bottom rect', { scaleY: 1, duration: 0.2, delay: -0.2 });
	holeTL.to('#door-window-sill-right rect', { scaleX: 1, duration: 0.2, delay: -0.2 });

	holeTL.set('#window', { opacity: 1, delay: -0.2 });
	holeTL.to('#window-back rect', { scaleX: 1, duration: 0.2, delay: -0.2 });
	holeTL.set('#window-front rect', { opacity: 1 });
	holeTL.to('#window-front rect', { xPercent: 0, yPercent:0, duration: 0.2 });
	holeTL.to('#window-sill-top rect, #window-sill-right rect', { scaleX: 1, duration: 0.2, delay: -0.2 });
	holeTL.to('#side-window-mask rect', { scaleX: 1, duration: 0.3 });

	holeTL.set('#tree-1-top', { opacity: 1, delay: -0.7 });
	holeTL.to('#tree-1-trunk-front rect, #tree-1-trunk-side rect', { scaleY: 1, duration: 0.2, delay: -0.5, ease: 'expo.in' });
	holeTL.to('#tree-1-top', { yPercent: 0, duration: 0.2, delay: -0.5, ease: 'expo.in' });
	holeTL.set('#tree-1-trunk-bg', { opacity: 1 });
	holeTL.to('#tree-1-top', { scale: 1, yPercent: -40, duration: 0.2, delay: -0.3, ease: 'expo.out' });
	holeTL.to('#tree-1-shadow', { opacity: 1, scale: 1, duration: 0.2, delay: -0.3, ease: 'expo.out' });
	holeTL.to('#tree-1-top', { yPercent: 0, duration: 0.5, ease: 'bounce.out', onComplete: showGift });
	holeTL.to('#tree-1-shadow', { scale: 0.5, duration: 0.5, delay: -0.5, ease: 'bounce.out' });

	holeTL.set('#port-window', { opacity: 1, delay: -0.4 });
	holeTL.to('#port-window', { scale: 1, yPercent: -40, duration: 0.2, delay: -0.4, ease: 'expo.out' });
	holeTL.to('#port-window', { yPercent: 0, duration: 0.5, ease: 'bounce.out' });

	holeTL.set('#tree-2-top', { opacity: 1, delay: -0.9 });
	holeTL.to('#tree-2-trunk-front rect, #tree-2-trunk-side rect', { scaleY: 1, duration: 0.2, delay: -0.7, ease: 'expo.in' });
	holeTL.to('#tree-2-top', { yPercent: 0, duration: 0.2, delay: -0.7, ease: 'expo.in' });
	holeTL.set('#tree-2-trunk-bg', { opacity: 1 });
	holeTL.to('#tree-2-top', { scale: 1, yPercent: -40, duration: 0.2, delay: -0.6, ease: 'expo.out' });
	holeTL.to('#tree-2-shadow', { opacity: 1, scale: 1, duration: 0.2, delay: -0.6, ease: 'expo.out' });
	holeTL.to('#tree-2-top', { yPercent: 0, duration: 0.5, delay: -0.5, ease: 'bounce.out' });
	holeTL.to('#tree-2-shadow', { scale: 0.5, duration: 0.5, delay: -0.5, ease: 'bounce.out' });

	var giftCount = 1;

	function showGift() {
		if (giftCount == 1) {
			showRainbow();
		}

		let tl = gsap.timeline();

		let gift = '#gift-' + giftCount;
		let giftShadow = gift + '-shadow';

		if (!$(gift).length) {
			return;
		}

		giftCount++;

		let xMultipler = 1;

		if ($(gift).is('[data-x-multiplier]')) {
			xMultipler = parseFloat($(gift).attr('data-x-multiplier'));
		}

		let sides = gift + ' > .front rect, ' + gift + ' > .side rect, ' + gift + ' > .ribbon-front rect, ' + gift + ' > .ribbon-side rect';

		tl.set(sides, { scaleY: 0.5 });
		tl.set(gift + ' > .lid', { yPercent: 30 });
		tl.set(gift + ' > .top rect', { xPercent: -43 * xMultipler, yPercent: 43 });	//	I have literally NO IDEA WHY, but the box tops aren't behaving in iso space. So, this.
		tl.set(gift, { opacity: 1 });
		tl.set(giftShadow, { opacity: 1 });

		tl.to(gift, { scale: 1, yPercent: -100, duration: 0.3, ease: 'expo.out' });
		tl.to(giftShadow, { scale: 1.5, duration: 0.3, delay: -0.3, ease: 'expo.out' });
		tl.to(sides, { scaleY: 1.4, duration: 0.3, delay: -0.3, ease: 'expo.out' });
		tl.to(gift + ' > .lid', { yPercent: -30, duration: 0.3, delay: -0.3, ease: 'expo.out' });
		tl.to(gift + ' > .top rect', { xPercent: 34 * xMultipler, yPercent: -34, duration: 0.3, delay: -0.3, ease: 'expo.out', onComplete: showGift });

		//tl.to(gift, { opacity: 1, duration: 0.1 });

		tl.to(gift, { scale: 1, yPercent: 0, duration: 0.5, ease: 'expo.in' });
		tl.to(giftShadow, { scale: 1, duration: 0.5, delay: -0.5, ease: 'expo.in' });
		tl.to(sides, { scaleY: 0.75, duration: 0.5, delay: -0.5, ease: 'expo.in' });
		tl.to(gift + ' > .lid', { yPercent: -50, duration: 0.5, delay: -0.5, ease: 'expo.in' });
		tl.to(gift + ' > .top rect', { xPercent: -22 * xMultipler, yPercent: 22, duration: 0.5, delay: -0.5, ease: 'expo.in' });

		tl.to(sides, { scaleY: 1, duration: 0.8, ease: 'elastic.out(1.2, 0.3)' });
		tl.to(gift + ' > .top rect', { xPercent: 0, yPercent: 0, duration: 0.8, delay: -0.8, ease: 'elastic.out(1.2, 0.3)' });
		tl.to(gift + ' > .lid', { yPercent: 0, duration: 0.4, delay: -0.5, ease: 'bounce.out' });
	}

	function showRainbow() {
		let tl = gsap.timeline();

		tl.set('#rainbow-slot-mask, #rainbow-stubs', { opacity: 1 });
		//tl.set('#rainbow-slot', { opacity: 1 });

		tl.to('#rainbow-slot-mask-path rect', { scaleX: 1, duration: 0.5, ease: 'expo.out' });
		tl.to('#rainbow-slot', { webkitFilter: 'brightness(1)', filter: 'brightness(1)', duration: 0.5, delay: -0.5, ease: 'expo.out', onComplete: rainbowArc });
	}

	let arcNum = 0;
	let arcArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

	function rainbowArc() {
		let tl = gsap.timeline();

		if(!arcArray[arcNum]) {
			return;
		}

		let arcColor = arcArray[arcNum];

		arcNum++;

		tl.to('#' + arcColor + '-stub rect', { scaleY: 1, duration: 0.1, delay: -0.4, ease: 'expo.in' });
		tl.to('#' + arcColor + '-mask path', { drawSVG: '100%', duration: 1, delay: -0.1, ease: 'power2.out' });

		//	Fake delay until the next arc
		
		tl.to('#' + arcColor + '-stub', { 'opacity': 1, duration: 0.1, delay: -0.5, onComplete: rainbowArc });
	}

	///
	//	SNOW!
	///

	var falling = true;

	//TweenLite.set("#container",{perspective:500})
	//TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

	var total = 150;
	var container = $('.snowbox');
	var w = window.innerWidth;
	var h = window.innerHeight;

	for (i = 0; i < total; i++) { 
		var snowflake = $('<div class="snow" />').appendTo(container);
		gsap.set(snowflake, { x: R(0, w), y: R(-200, -150), z: R(-200,200) } );
		//container.append(snowflake);
		animSnowflake(snowflake);
	}

	function animSnowflake(elm) {
		gsap.to(elm, R(6,15), { y: h + 100, ease:'linear', repeat: -1, delay: -15 });
		gsap.to(elm, R(4,8), { x:'+=100', rotationZ: R(0,180),repeat:-1,yoyo: true, ease: 'sine,inOut' });
		gsap.to(elm, R(2,8), { rotationX:R(0,360), rotationY: R(0,360), repeat: -1, yoyo: true, ease:'sine.inOut', delay: -5 });
	};

	function R(min,max) {
		return min+Math.random()*(max-min);
	}
});