angular.module(
    'de.cismet.angular.scopeDemos.directives'
).directive(
    'myCustomer',
    [
        function(){
            'use strict';
            
            var ddo;
         
            ddo = {
                templateUrl: 'templates/myCustomerTemplate.html',
                restrict: 'E'
            }
         
            return ddo;
        }
    ]
)