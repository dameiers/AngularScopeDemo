angular.module(
    'de.cismet.angular.scopeDemos.directives'
).directive(
    'myCustomerIsolatedScope',
    [
        function(){
            'use strict';
            
            var ddo;
         
            ddo = {
                templateUrl: 'templates/myCustomerScopeTrueTemplate.html',
                restrict: 'E',
                scope:{}
            };
         
            return ddo;
        }
    ]
);