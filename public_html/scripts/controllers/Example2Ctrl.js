angular.module(
    'de.cismet.angular.scopeDemos.controllers'
    ).controller(
    'Example2Ctrl',
    [
        '$scope',
        function ($scope) {
            'use strict';

            $scope.customer = {
                name: 'Daniel',
                address: 'Dorfstrasse 140'
            };
        }
    ]
    );

