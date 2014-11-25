angular.module(
    'de.cismet.angular.scopeDemos.controllers'
    ).controller(
    'Example6Ctrl',
    [
        '$scope',
        function ($scope) {
            'use strict';

            $scope.customer = {
                prename: 'Daniel',
                name:'Meiers',
                age: 27,
                address: {
                    street: 'Dorfstr',
                    hnr: '140'
                }
            };

            $scope.getFullName = function () {
                return {
                    prename: 'Daniel',
                    lastname: 'Meiers'
                }
            }
        }
    ]
    );

