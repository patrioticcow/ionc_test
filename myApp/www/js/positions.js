'use strict';

angular.module('starter.services')

    .factory('Positions', function ($q, $firebase, FBURL) {
        var ref = new Firebase(FBURL + 'positions');
        var positions = $firebase(ref);

        var fetchAll = function () {
            var def = $q.defer();
            ref.on('value', function (snapshot) {
                def.resolve(snapshot.val());
            }, function (errorObject) {
                console.log('The read failed: ' + errorObject.code);
            });

            return def.promise;
        };

        var Positions = {
            fetchAll: function () {
                return fetchAll();
            }
        };

        return Positions;
    });
