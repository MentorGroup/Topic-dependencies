angular.module('TopicDependencies')
  .directive('navbar', function(){
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'app/shared/navbar/navTemplate.html'
    };
  });