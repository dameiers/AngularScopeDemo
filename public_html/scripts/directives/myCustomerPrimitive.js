angular.module(
    'de.cismet.angular.scopeDemos.directives'
).directive(
    'myCustomerPrimitive',
    [
        function(){
            'use strict';
            
            var ddo;
         
            ddo = {
                templateUrl: 'templates/myCustomerPrimitiveTemplate.html',
                restrict: 'E',
                scope:true
            }
         
            return ddo;
        }
    ]
)