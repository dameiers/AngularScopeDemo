angular.module(
    'de.cismet.angular.scopeDemos.directives'
).directive(
    'myCustomerIsolatedScope',
    [
        function(){
            'use strict';
            
            var ddo;
         
            ddo = {
                templateUrl: 'templates/myCustomerIsolatedScopeTemplate.html',
                restrict: 'E',
                scope:{}
            };
         
            return ddo;
        }
    ]
);