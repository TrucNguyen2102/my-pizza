// JavaScript Document
function openMenu(evt, menuName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.className += " active";
}

$("#Chef").owlCarousel({
   	 	loop:true,	// cho lap lại
		smartSpeed:1000,   	// tốc độ thay đổi ảnh
		autoplay:true,		// cho phép tự động chạy
    	autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
		nav:true,	// cho xuất hiện bộ nút tới lui 
		margin: 30,
		dots: true,
	
		responsive: {
		0:{
			items: 1, 
			
		},
		600:{
			items: 2
		},
		1000:{
			items: 4
		}
	}

	  })

				  
