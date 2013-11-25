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


    $scope.expense = [
        {description: "House", amount: 1500},
        {description: "Car", amount: 300}
    ];

    $scope.expenseItem = {
        description: '',
        amount: ''
    }

    $scope.add = function($event, type){
        var item = _($scope.incomeItem).clone();
        
        if($event.keyCode == 13 && item.description != '' && item.amount != ''){
            $scope.incomeItem.description = '';
            $scope.incomeItem.amount = '';

            var amount = parseInt(item.amount);
            item.amount = amount;
            
            $scope.income.push(item);
        }
    }



    $scope.delete = function(item){
        $scope.income = _($scope.income).without(item);
    }





  });
