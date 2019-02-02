# _Pizza Builder_

#### _An exercise in object-oriented coding. Created on February 1st, 2019._

#### By _**Joe Pritchett**_

## Description

This project utilizes a constructor to allow the user to 'build' a pizza. The UI allows the user to select various toppings for their pizza, while seeing a visual representation of said pizza. When the user is satisfied with their pizza and presses "Done", an object is created via the "Pizza" constructor with the users specified ingredients. That object is then run through a custom prototype that calculates the total cost of the pizza, that cost is returned back to the UI and displayed on the page. The user can then make changes to the pizza and click "Done" again, to see an updated cost for the modified pizza.

All toppings are optional, and can be added or removed as the user sees fit, but you cannot remove the crust. There are two crusts to choose from, but the regular crust is selected by default, meaning that if the user makes no input before submitting, they are still charged for the regular crust ($10). This is also the least you can be charged.

The images used for the pizza builder UI are ripped directly from the Pizza Hut website.

### Specs

* _The program creates a Pizza object_
  * _Input: var myPizza = new Pizza(*inputs*)_
  * _Output: myPizza is returned as an object with the inputs as its properties_
* _The program uses a prototype on the newly created object to calculate its cost return a number_
  * _Input: myPizza.cost_
  * _Output: cost (the value for cost depends on what ingredients are selected. selecting nothing and submitting will return 10, which is the cost of the default crust)_

## Setup/Installation Requirements

The easy way
* _Click [Here](https://joepritch.github.io/pizzabuilder)_


The advanced way
* _Clone this Repo_
* _Open 'index.html' with your browser_

## Known Bugs

None

## Support and contact details

_If you would like to get in touch with me regarding this project, or any other projects from my repos, email me @ joempritchett@gmail.com_

## Technologies Used

_HTML, CSS, JavaScript, BootStrap, jQuery, and as always, Atom and GitBash_

### MIT License

Copyright (c) 2019 **_Joe Pritchett_**
