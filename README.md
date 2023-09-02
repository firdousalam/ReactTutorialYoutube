# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




# What is Reactjs?

A JavaScript library for building user interfaces

JavaScript ka library hai jiske madad se humlog Website ka fornted banate hai.

# who develop React

FaceBook

it is maintained by Facebook and open source Community

# Current Version of React

version 18

 # What is component in React?


React component is the primary building block of the React application. It uses React elements and JSX to design its user interface. 
React component is basically a JavaScript class or pure JavaScript function

# what is JSX

JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

JSX ek trika hai jo humlog jiske madad se JavaScript file me Drict Html likh sakte hai.
 JSX is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript
 jsk se application thoda speed ho jata hai



# How React Use Virtual DOM and gain high performence

Virtual DOM exists which is like a lightweight copy of the actual DOM. So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. 
It is exactly the same, but it does not have the power to directly change the layout of the document.
and when we do any changes react Virtual Dom Update That particular Area of Real Dom not Other Placs
Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen.
in this way react Increase Performence of the React Application



# One-way Data Binding:

 One-way data binding gives you better view over your application. In This way Data Flow from View to Controller(Js) or Controller to View

# what is single page application (spa)

A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.

singal page application wo hota hai jo ke jis part ko change karna chahe whi chenge hoga bs.

# Some Popular Application Build On React

Facebook, popular social media application
Instagram, popular photo sharing application
Netflix, popular media streaming application
Code Academy, popular online training application
Reddit, popular content sharing application

# what we need to Install React

Node js version 14+ should be installed in our machine

# command to create react Application

npx create-react-app <App Name>  // <App Name> us the Name of your Application

# What Knowledge we need to Learn React

1. HTML and CSS
2. Javascript
3. Ecma 6


 # Basic Concerpt of ECMA6 (ES6)

 added feature like let and Const for variable declaration

## Arrow Functions

Arrow functions allow us to write shorter function syntax:
Example
### Before:
const hello = function() {
  return "Hello World!";
}
### With Arrow Function:
const hello = () => {
  return "Hello World!";
}
### Arrow Functions Return Value by Default:

hello = () => "Hello World!";

### Arrow Function With Parameters:

const hello = function(val) {
  return "Hello " + val;
}

hello = (val) => "Hello " + val;
Example

### Arrow Function Without Parentheses:

hello = val => "Hello " + val;


## Array Methods

There are many JavaScript array methods.
One of the most useful in React is the .map() array method.
The .map() method allows you to run a function on each item in the array, returning a new array as the result.
 
### In React, map() can be used to generate lists.
Example
Generate a list of items from an array:
const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <p>{item}</p>)
React Example for Map
import React from 'react';
import ReactDOM from 'react-dom/client';

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

<p>apple</p>
<p>banana</p>
<p>orange</p>

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myList);


## Destructuring

To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

Destructuring makes it easy to extract only what is needed.
Destructuring Objects
Here is the old way of using an object inside a function:

Example
Before:

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

// old way
function myVehicle(vehicle) {
  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}
Here is the new way of using an object inside a function:

Example
With destructuring:

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}

Notice that the object properties do not have to be declared in a specific order.

We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:

Example
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}

## Spread Operator

The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

const numbersCombined = [...numbersOne, ...numbersTwo];

#### numbersCombined = [1,2,3,4,5,6];

Combine these two objects:

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

#### myUpdatedVehicle = {
     brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'yellow'
}



## Modules

JavaScript modules allow you to break up your code into separate files.
This makes it easier to maintain the code-base.
ES Modules rely on the import and export statements.

### Export
You can export a function or variable from any file.
Let us create a file named person.js, and fill it with the things we want to export.
There are two types of exports: Named and Default.
Named Exports
You can create named exports two ways. In-line individually, or all at once at the bottom.
Example
In-line individually:
person.js
export const name = "Jesse"
export const age = 40
All at once at the bottom:
person.js
const name = "Jesse"
const age = 40
export { name, age }

### Import

You can import modules into a file in two ways, based on if they are named exports or default exports.
Named exports must be destructured using curly braces. Default exports do not.
Example
Import named exports from the file person.js:
import { name, age } from "./person.js";
Example
Import a default export from the file message.js:
import message from "./message.js";

## Ternary Operator

The ternary operator is a simplified conditional operator like if / else.
Syntax: condition ? <expression if true> : <expression if false>
Here is an example using if / else:
Before:
if (authenticated) {
  renderApp();
} else {
  renderLogin();
}
With Ternary 
authenticated ? renderApp() : renderLogin();

# JSX

let x = "hello"
<>
       
       <HTML>
        <Body>{x} </Body>
        </HTML> 
</>
this will compile to

    <html>
        <body> hello</body>
    </html>
