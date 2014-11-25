angular.module(
    'de.cismet.angular.scopeDemos.directives'
).directive(
    'myCustomerPrimitiveBinding',
    [
        function(){
            'use strict';
            
            var ddo;
         
            ddo = {
                templateUrl: 'templates/myCustomerPrimitiveBindingTemplate.html',
                restrict: 'E',
                scope:{
                    customerName:'=',
                    customerAddress:'='
                }
            };
         
            return ddo;
        }
    ]
);