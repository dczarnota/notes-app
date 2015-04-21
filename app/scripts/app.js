angular.module('notesApp', ['ngAnimate', 'ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/scripts/main/main.html',
        conroller: 'MainController'
      });

      //Routes to homepage on default
      $urlRouterProvider.otherwise('/');

  });
