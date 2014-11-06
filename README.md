---
languages: javascript, html, css
tags: jQuery, selectors, beginner
type: lab, challenege
resources: 5
---

# Code Challenge - Exploring jQuery Selectors

In this challenge you will work in groups to practice using jquery to select different elements in the page using all of the different jQuery selectors available. 

## Getting Started
In js/selectors.js and write the code neccesary to select 5 different elements from the index.html page and apply the class of `pinky` to them. Make use of the CSS selectors documented at the [link here](http://api.jquery.com/category/selectors/). You can use the addClass() method documented [here](http://api.jquery.com/addClass/), or wrap() method documented [here](http://api.jquery.com/wrap/) to apply the css class of `pinky` to selected elements. Don't forget to use the developer tools to explore elements relationships to each other and to find ways of selecting them.

## What You Need to Do
1.) Write a function that selects all `<h1>` and apply the class of pinky using addClass method.
2.) Write a function that selects all `<li>` inside of `<ol>` only and apply the class of pinky using addClass method.
3.) Write a function that selects the `<a>` that is inside of the element that has both an id of box4 and a class of box5
4.) Write a function that selects the image of the cat that has the alt text equal to "cat sleeping"
5.) Write a function that selects only checked checkbox inputs and wrap them with a span that has the class of pinky using the wrap method.

ex.
```javascript
  // Select the element with the class of special and apply the class of pinky using addClass method.

  // But wrap it in a function!!!!
  $('.special').addClass('pinky');
```

Bonus: Use jQuery traversal methods to select one element and then switch selection to another element based on their location to each other in the DOM, documented at the [link here](http://api.jquery.com/category/traversing/).

## Resources

 * [jQuery API](http://api.jquery.com)
 * [jQuery API - Selectors](http://api.jquery.com/category/selectors/)
 * [jQuery API - Traversing](http://api.jquery.com/category/traversing/)
 * [jQuery API - addClass](http://api.jquery.com/addClass/)
 * [jQuery API - wrap](http://api.jquery.com/wrap/)