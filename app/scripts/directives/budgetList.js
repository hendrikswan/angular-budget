'use strict';

angular.module('angBudgetApp')
  .directive('budgetList', function () {
    return {
      templateUrl: 'views/budgetList.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.listType = attrs.type;
      }
    };
  });
