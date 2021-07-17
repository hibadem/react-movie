// var header = document.getElementById("navbarid");

// var items = header.getElementsByClassName("menu-item");
// for (var i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("current-menu-item");
//   if (current.length > 0) { 
//     current[0].className = current[0].className.replace(" current-menu-item", "");
//   }
//   this.className += " current-menu-item";
//   });
// }
import $ from 'jquery/dist/jquery';
$(document).ready(function() {
  $('li').click(function() {
      $('li.menu-item.current-menu-item').removeClass("current-menu-item");
      $(this).addClass("current-menu-item");
  });
});