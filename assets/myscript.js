// ---------Responsive-navbar-active-animation-----------
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});

$(".theme-switch").on("click", () => {
	$("body").toggleClass("light-theme");
});
$(".theme-switches").on("click", () => {
	$("body").toggleClass("light-theme");
});

const toggleButton = document.querySelector('.toggle-menu');
const navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', () => {
  navBar.classList.toggle('toggle');
});

// -----------------------------------MEMBER PROFILE----------------------------------------
const buttons = document.querySelectorAll(".card-buttons button");

const sections = document.querySelectorAll(".card-section");

const card = document.querySelector(".card");

const handleButtonClick = e => {

  const targetSection = e.target.getAttribute("data-section");

  const section = document.querySelector(targetSection);

  targetSection !== "#about" ?

  card.classList.add("is-active") :

  card.classList.remove("is-active");

  card.setAttribute("data-state", targetSection);

  sections.forEach(s => s.classList.remove("is-active"));

  buttons.forEach(b => b.classList.remove("is-active"));

  e.target.classList.add("is-active");

  section.classList.add("is-active");

};

buttons.forEach(btn => {

  btn.addEventListener("click", handleButtonClick);

});
// -----------------------------------LOGIN----------------------------------------


