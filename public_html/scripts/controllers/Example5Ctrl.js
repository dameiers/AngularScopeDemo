angular.module(
    'de.cismet.angular.scopeDemos.controllers'
    ).controller(
    'Example5Ctrl',
    [
        '$scope',
        function ($scope) {
            'use strict';

            $scope.customerName = 'Daniel';
            $scope.customerAddress = 'Dorfstrasse 140';
        }
    ]
    );

