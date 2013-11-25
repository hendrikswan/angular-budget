'use strict';

angular.module('angBudgetApp')
    .controller('MainCtrl', function ($scope) {
    $scope.income = [
        {description: "Salary", amount: 4000},
        {description: "Tax rebate", amount: 1500}
    ];

    $scope.incomeItem = {
        description: '',
        amount: ''
    }

    $scope.add = function($event){
        var item = _($scope.incomeItem).clone();
           
    }

  });
