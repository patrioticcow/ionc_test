'use strict';

angular.module('starter.controllers')

    .controller('BrowseCtrl', function (FBURL, $scope, $log, $firebase, $ionicLoading, Positions) {

        $ionicLoading.show({template: 'Loading...'});

        Positions.fetchAll().then(function (positions) {
            $scope.cards = positions;
            $ionicLoading.hide();
        });

    });