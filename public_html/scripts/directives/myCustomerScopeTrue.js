angular.module(
    'de.cismet.angular.scopeDemos.directives'
).directive(
    'myCustomerScopeTrue',
    [
        function(){
            'use strict';
            
            var ddo;
         
            ddo = {
                templateUrl: 'templates/myCustomerScopeTrueTemplate.html',
                restrict: 'E',
                scope:true
            }
         
            return ddo;
        }
    ]
)