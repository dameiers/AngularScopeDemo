angular.module(
    'de.cismet.angular.scopeDemos.directives'
).directive(
    'myCustomerIsolatedScopeBinding',
    [
        function(){
            'use strict';
            
            var ddo;
         
            ddo = {
                templateUrl: 'templates/myCustomerScopeTrueTemplate.html',
                restrict: 'E',
                scope:{
                    customer:'=customerInfo'
                }
            };
         
            return ddo;
        }
    ]
);