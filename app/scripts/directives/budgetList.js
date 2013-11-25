'use strict';

angular.module('angBudgetApp')
  .directive('budgetList', function () {
    return {
      scope: {},
      templateUrl: 'views/budgetList.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.listType = attrs.type;

        scope.items = [
            {description: "House", amount: 1500},
            {description: "Car", amount: 300}
        ];

        scope.newItem = {
            description: '',
            amount: ''
        };

        scope.add = function($event, type){
            var item = _(scope.newItem).clone();
            
            if($event.keyCode == 13 && item.description != '' && item.amount != ''){
                scope.newItem.description = '';
                scope.newItem.amount = '';

                var amount = parseInt(item.amount);
                item.amount = amount;
                
                scope.items.push(item);
            }
        }



        scope.delete = function(item, type){
            scope.items = _(scope.items).without(item);
        }
      }
    };
  });






