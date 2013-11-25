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
        var scopeItem = $scope[type + 'Item'];
        var item = _(scopeItem).clone();
        
        if($event.keyCode == 13 && item.description != '' && item.amount != ''){
            scopeItem.description = '';
            scopeItem.amount = '';

            var amount = parseInt(item.amount);
            item.amount = amount;
            
            $scope[type].push(item);
        }
    }



    $scope.delete = function(item){
        $scope.income = _($scope.income).without(item);
    }





  });
