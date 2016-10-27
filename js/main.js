$(document).ready(function(){

	//click on items in the nav bar and be taken down the page.
	//as you scroll the nav bar comes with you.
	//photos will scroll up and shift with topics
	//hover over items and images will appear in the background

var  mn = $("#menu");
    mns = "#menu-scrolled";
    hdr = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }


}); 
