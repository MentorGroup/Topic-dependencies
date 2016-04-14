angular.module('TopicDependencies')
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'app/components/home/homeView.html',
      controller: 'homeCtrl'
    });
  });