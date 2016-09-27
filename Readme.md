# Angular with NPM

The most basic setup to install Angular through NPM. Uses `gulp`, `gulp-browserify` and `babelify` for module bundling.

Let's you use ES6 module syntax so you can write clean code:

````
import angular from 'angular'

let app = angular.module('app', [])

app.controller('ExampleController', function ($scope) {
    $scope.greeting = 'Hello World'
})
````

## How to Use

 1. Clone the repo
 2. Run `npm install` to install the dependencies
 3. Run `gulp` to compile (`npm install -g gulp` if you haven't already)
 4. Done!

Easy!
