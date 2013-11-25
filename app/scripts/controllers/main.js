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
        
        if($event.keyCode == 13 && 
            item.description != '' &&
            item.amount != ''){
            
            $scope.incomeItem.description = '';
            $scope.incomeItem.amount = '';
            
            item.amount = parseInt(item.amount);
            $scope.income.push(item);
        }
        
    }

    $scope.delete = function($event, item) {
        $scope.income = _($scope.income).without(item);
    }
  });
