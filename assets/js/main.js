$(document).ready(function(){
  // Don't display the toggle-bars in the navbar if there are no navbar entries.
  if($('div.navbar-collapse').find('a').length < 1){
    $('button.navbar-toggle').addClass('navbar-toggle-hide');
  }

  // Functionality for the toggling of the navbar items on small screens
  $('.navbar-toggle').click(function(){
    $('.navbar-collapse').toggleClass('navbar-uncollapse')
    $('.navbar-hide').toggleClass('navbar-unhide')
  });

});