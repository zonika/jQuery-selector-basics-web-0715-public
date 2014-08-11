$(document).ready(function(){

	// Write your solutions below for each selector challenge:

  // EXAMPLE.) Select the element with the class of special and apply the class of pinky using addClass method.
  $('.special').addClass('pinky');

  // 1.) Select all <h1> and apply the class of pinky using addClass method.
  $('h1').addClass('pinky');

  // 2.) Select all <li> inside of <ol> only and apply the class of pinky using addClass method.
  $('ol li').addClass('pinky');

  // 3.) Select the <a> that is inside of the element that has both an id of box4 and a class of box5
  $('#box4.box5 a').addClass('pinky');

  // 4.) Select the image of the cat that has the alt text equal to "cat sleeping"
  $('img[alt="cat sleeping"]').addClass('pinky');

  // 5.) selects only checked checkbox inuts and wraps them with a span that has the class of pinky using the wrap method.
  $(":checked").wrap('<span class="pinky">');


  // HINT: look at the documentation for:
    // http://api.jquery.com/category/selectors/
    // http://api.jquery.com/addClass/
    // http://api.jquery.com/wrap/
});