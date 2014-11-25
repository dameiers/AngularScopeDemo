angular.module(
    'de.cismet.angular.scopeDemos.directives'
    ).directive(
    'myCustomerBindingOptions',
    [
        function () {
            'use strict';

            var ddo;

            ddo = {
                templateUrl: 'templates/myCustomerBindingOptions.html',
                restrict: 'E',
                scope: {
                    address: '=',
                    age: '@',
                    name: '&',
                },
                link: function(scope,elem,attrs){
                    console.log(scope.name());
                    console.log(scope.age);
                    console.log(scope.address);
                }
            };

            return ddo;
        }
    ]
    );