# Code Challenge - Exploring jQuery Selectors

In this challenge you will work in groups to practice using jquery to select different elements in the page using all of the different jQuery selectors available. 

## Getting Started
In js/selectors.js write the code neccesary to select 5 different elements from the index.html page. Make use of the CSS selectors documented at the [link here](http://api.jquery.com/category/selectors/). As en example of some things you can do with these methods, you can use the addClass() method documented [here](http://api.jquery.com/addClass/), or the wrap() method documented [here](http://api.jquery.com/wrap/) to apply a css class to the selected elements or wrap the selected elements within another html element. Try experimenting with these - for example, see what adding the class 'pinky' will do. Don't forget to use the developer tools to explore elements relationships to each other and to find ways of selecting them.

## What You Need to Do

1. Write a function that selects all `<h1>` elements.
2. Write a function that selects all `<li>` inside of `<ol>`.
3. Write a function that selects the `<a>` that is inside of the element that has both an id of box4 and a class of box5.
4. Write a function that selects the image of the cat that has the alt text equal to "cat sleeping".
5. Write a function that selects all the checkbox inputs and wraps them with a span that has the class of pinky using the wrap method.

ex.
```javascript
  // Select the element with the class of special and apply the class of pinky using addClass method.

  // But wrap it in a function!!!!
  $('.special').addClass('pinky');
```

##Before You Start
```shell
# Install jasmine:
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install ironboard

# Run Jasmine test suite:
ironboard  # runs only in the terminal
ironboard -b # runs also in the browser
```

Bonus: Use jQuery traversal methods to select one element and then switch selection to another element based on their location to each other in the DOM, documented at the [link here](http://api.jquery.com/category/traversing/).

## Resources

 * [jQuery API](http://api.jquery.com)
 * [jQuery API - Selectors](http://api.jquery.com/category/selectors/)
 * [jQuery API - Traversing](http://api.jquery.com/category/traversing/)
 * [jQuery API - addClass](http://api.jquery.com/addClass/)
 * [jQuery API - wrap](http://api.jquery.com/wrap/)
