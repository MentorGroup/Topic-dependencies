angular.module('TopicDependencies')
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'app/components/home/homeView.html',
      controller: 'homeCtrl'
    })
    .state('admin', {
      url: '/admin',
      templateUrl: 'app/components/admin/adminView.html',
      controller: 'adminCtrl'
    })
    .state('tree', {
      url: '/tree',
      templateUrl: 'app/components/tree/treeView.html',
      controller: 'treeCtrl'
    });
  });