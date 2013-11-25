'use strict';

angular.module('angBudgetApp')
  .directive('budgetList', function () {
    return {
      scope: {},
      templateUrl: 'views/budgetList.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.listType = attrs.type;

        scope.expense = [
            {description: "House", amount: 1500},
            {description: "Car", amount: 300}
        ];

        scope.expenseItem = {
            description: '',
            amount: ''
        };
      }
    };
  });
