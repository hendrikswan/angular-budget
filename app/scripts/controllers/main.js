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
        
        if($event.keyCode == 13 && item.description != '' && item.amount != ''){
            $scope.incomeItem.description = '';
            $scope.incomeItem.amount = '';

            var amount = parseInt(item.amount);
            item.amount = amount;
            
            $scope.income.push(item);
        }
    }



    $scope.delete = function(item){
        console.log("delete item was clicked");
    }





  });
