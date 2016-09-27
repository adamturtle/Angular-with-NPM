import angular from 'angular'

let app = angular.module('app', [])

app.controller('ExampleController', function ($scope) {
    $scope.greeting = 'Hello World'
})
